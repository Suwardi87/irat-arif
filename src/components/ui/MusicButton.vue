<script setup lang="ts">
import { watch } from 'vue'
import { useMusic } from '@/composables/useMusic'

interface Props {
  src?: string
  autoplay?: boolean
  volume?: number
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'
  size?: 'sm' | 'md' | 'lg'
  visible?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  autoplay: false,
  volume: 0.5,
  position: 'bottom-right',
  size: 'md',
  visible: true
})

const emit = defineEmits<{
  play: []
  pause: []
  loaded: []
}>()

const { isPlaying, volume: musicVolume, load, toggle } = useMusic(true)

watch(() => props.src, async (newSrc) => {
  if (newSrc) {
    try {
      await load(newSrc)
      emit('loaded')
      if (props.autoplay) {
        toggle().catch(() => {
          console.log('[MusicButton] Autoplay blocked by browser')
        })
      }
    } catch (error) {
      console.error('[MusicButton] Failed to load music:', error)
    }
  }
}, { immediate: true })

watch(() => props.volume, (newVolume) => {
  musicVolume.value = newVolume
}, { immediate: true })

const handleToggle = async () => {
  await toggle()
  emit(isPlaying.value ? 'play' : 'pause')
}

defineExpose({ handleToggle })

const positionClasses = {
  'bottom-right': 'bottom-6 right-6',
  'bottom-left': 'bottom-6 left-6',
  'top-right': 'top-6 right-6',
  'top-left': 'top-6 left-6'
}

const sizeClasses = {
  sm: 'w-12 h-12',
  md: 'w-14 h-14',
  lg: 'w-16 h-16'
}
</script>

<template>
  <button
    v-show="props.visible"
    :class="[
      'music-btn fixed z-40 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group',
      positionClasses[position],
      sizeClasses[size]
    ]"
    :aria-label="isPlaying ? 'Pause music' : 'Play music'"
    @click="handleToggle"
  >
    <Transition
      mode="out-in"
      enter-active-class="transition-all duration-300"
      enter-from-class="opacity-0 scale-50"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition-all duration-300"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-50"
    >
      <svg
        v-if="isPlaying"
        key="pause"
        class="music-icon"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
      </svg>

      <svg
        v-else
        key="play"
        class="music-icon play-icon"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M8 5v14l11-7z" />
      </svg>
    </Transition>

    <Transition
      enter-active-class="transition-all duration-300"
      enter-from-class="opacity-0 scale-75"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition-all duration-300"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-75"
    >
      <div
        v-if="isPlaying"
        class="equalizer"
      >
        <span v-for="i in 3" :key="i" class="eq-bar" :style="{ animationDelay: `${i * 0.1}s` }" />
      </div>
    </Transition>

    <div
      v-if="isPlaying"
      class="spin-ring"
    />
  </button>
</template>

<style scoped>
.music-btn {
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(var(--emas-rgb), 0.3);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.music-btn:hover {
  border-color: var(--emas);
  box-shadow: 0 4px 20px rgba(var(--emas-rgb), 0.2);
}

.music-icon {
  width: 20px;
  height: 20px;
  color: var(--emas);
}

.play-icon {
  margin-left: 2px;
}

.equalizer {
  position: absolute;
  right: -4px;
  top: -4px;
  display: flex;
  gap: 2px;
}

.eq-bar {
  width: 3px;
  border-radius: 4px;
  background: var(--emas);
  animation: pulse 1s ease-in-out infinite;
}

.eq-bar:nth-child(1) { height: 10px; }
.eq-bar:nth-child(2) { height: 14px; }
.eq-bar:nth-child(3) { height: 8px; }

.spin-ring {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 2px solid transparent;
  border-top-color: rgba(var(--emas-rgb), 0.3);
  animation: spin 3s linear infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 0.6; transform: scaleY(0.6); }
  50% { opacity: 1; transform: scaleY(1); }
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
