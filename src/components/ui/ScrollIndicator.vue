<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

/**
 * ScrollIndicator - Animated scroll prompt
 *
 * Features:
 * - Bouncing animation
 * - Auto-hide after scrolling
 * - Gold accent styling
 * - Click to scroll down
 */

interface Props {
  target?: string
  text?: string
  showText?: boolean
  hideAfter?: number // Distance to scroll before hiding (px)
}

const props = withDefaults(defineProps<Props>(), {
  text: 'Scroll Down',
  showText: true,
  hideAfter: 200
})

const emit = defineEmits<{
  click: []
}>()

// State
const isVisible = ref(true)
const hasScrolled = ref(false)

// Handle scroll to hide indicator
function handleScroll() {
  const scrollY = window.scrollY

  if (scrollY > props.hideAfter && !hasScrolled.value) {
    hasScrolled.value = true
    setTimeout(() => {
      isVisible.value = false
    }, 300)
  } else if (scrollY <= props.hideAfter && hasScrolled.value) {
    hasScrolled.value = false
    isVisible.value = true
  }
}

// Handle click to scroll
function handleClick() {
  emit('click')

  if (props.target) {
    const element = document.querySelector(props.target)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  } else {
    // Scroll down by one viewport height
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    })
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <Transition
    enter-active-class="transition-all duration-500"
    enter-from-class="opacity-0 translate-y-4"
    enter-to-class="opacity-100 translate-y-0"
    leave-active-class="transition-all duration-300"
    leave-from-class="opacity-100 translate-y-0"
    leave-to-class="opacity-0 translate-y-4"
  >
    <div
      v-if="isVisible"
      class="fixed bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 cursor-pointer group"
      @click="handleClick"
    >
      <!-- Text -->
      <Transition
        enter-active-class="transition-all duration-500"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-all duration-300"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <span
          v-if="showText"
          class="text-xs text-gold-500/80 uppercase tracking-widest luxury-letter-spacing group-hover:text-gold-500 transition-colors"
        >
          {{ text }}
        </span>
      </Transition>

      <!-- Chevron/Arrow -->
      <div class="relative w-6 h-10 rounded-full border-2 border-gold-500/30 flex items-start justify-center p-2 group-hover:border-gold-500/50 group-hover:bg-gold-500/5 transition-all">
        <div
          class="w-1.5 h-1.5 bg-gold-500 rounded-full animate-bounce"
          style="animation-duration: 1.5s;"
        />
      </div>
    </div>
  </Transition>
</template>
