<script setup lang="ts">
import { watch } from 'vue'
import { useMusic } from '@/composables/useMusic'

/**
 * MusicButton - Floating music control button
 *
 * Features:
 * - Play/pause toggle
 * - Animated equalizer bars when playing
 * - Smooth animations
 * - Fixed positioning
 * - Gold accent styling
 */

interface Props {
  src?: string
  autoplay?: boolean
  volume?: number
  position?: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'
  size?: 'sm' | 'md' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  autoplay: false,
  volume: 0.5,
  position: 'bottom-right',
  size: 'md'
})

const emit = defineEmits<{
  play: []
  pause: []
  loaded: []
}>()

const { isPlaying, volume: musicVolume, load, toggle } = useMusic(true)

// Load music if src provided
watch(() => props.src, async (newSrc) => {
  if (newSrc) {
    try {
      await load(newSrc)
      emit('loaded')
      if (props.autoplay) {
        // Attempt autoplay (may be blocked by browser)
        toggle().catch(() => {
          console.log('[MusicButton] Autoplay blocked by browser')
        })
      }
    } catch (error) {
      console.error('[MusicButton] Failed to load music:', error)
    }
  }
}, { immediate: true })

// Set volume
watch(() => props.volume, (newVolume) => {
  musicVolume.value = newVolume
}, { immediate: true })

// Handle toggle
const handleToggle = async () => {
  await toggle()
  emit(isPlaying.value ? 'play' : 'pause')
}

// Position classes
const positionClasses = {
  'bottom-right': 'bottom-6 right-6',
  'bottom-left': 'bottom-6 left-6',
  'top-right': 'top-6 right-6',
  'top-left': 'top-6 left-6'
}

// Size classes
const sizeClasses = {
  sm: 'w-12 h-12',
  md: 'w-14 h-14',
  lg: 'w-16 h-16'
}
</script>

<template>
  <button
    :class="[
      'fixed z-40 rounded-full glass-dark border border-gold-500/30 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-gold-500/20 group',
      positionClasses[position],
      sizeClasses[size]
    ]"
    :aria-label="isPlaying ? 'Pause music' : 'Play music'"
    @click="handleToggle"
  >
    <!-- Music icon (pause when playing, play when paused) -->
    <Transition
      mode="out-in"
      enter-active-class="transition-all duration-300"
      enter-from-class="opacity-0 scale-50"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition-all duration-300"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-50"
    >
      <!-- Pause icon -->
      <svg
        v-if="isPlaying"
        key="pause"
        class="w-5 h-5 text-gold-500"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
      </svg>

      <!-- Play icon -->
      <svg
        v-else
        key="play"
        class="w-5 h-5 text-gold-500 ml-0.5"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M8 5v14l11-7z" />
      </svg>
    </Transition>

    <!-- Animated equalizer bars (visible when playing) -->
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
        class="absolute -right-1 -top-1 flex gap-0.5"
      >
        <span
          v-for="i in 3"
          :key="i"
          class="w-1 bg-gold-500 rounded-full animate-pulse"
          :class="{
            'h-3': i === 1,
            'h-4': i === 2,
            'h-2': i === 3
          }"
          :style="{ animationDelay: `${i * 0.1}s` }"
        />
      </div>
    </Transition>

    <!-- Rotating ring when playing -->
    <div
      v-if="isPlaying"
      class="absolute inset-0 rounded-full border-2 border-transparent border-t-gold-500/30 animate-spin"
      style="animation-duration: 3s;"
    />
  </button>
</template>
