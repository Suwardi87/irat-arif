<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import BaseButton from './BaseButton.vue'

/**
 * BaseLoader - Premium loading screen
 *
 * Features:
 * - Cinematic entrance animation
 * - Gold accent styling
 * - Progress indicator
 * - Optional skip button
 * - Auto-dismiss after duration
 */

interface Props {
  logo?: string
  title?: string
  subtitle?: string
  duration?: number // Auto-dismiss duration (ms), 0 = manual
  showSkip?: boolean
  skipLabel?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: 'The Wedding Of',
  subtitle: 'Loading...',
  duration: 3000,
  showSkip: false,
  skipLabel: 'Skip'
})

const emit = defineEmits<{
  loaded: []
  skip: []
}>()

// State
const progress = ref(0)
const isLoaded = ref(false)
const showContent = ref(false)

// Animate progress
onMounted(() => {
  // Trigger entrance animation
  setTimeout(() => {
    showContent.value = true
  }, 100)

  // Animate progress bar
  const interval = 50 // Update every 50ms
  const steps = props.duration / interval
  const increment = 100 / steps

  const progressInterval = setInterval(() => {
    if (progress.value >= 100) {
      clearInterval(progressInterval)
      completeLoading()
    } else {
      progress.value += increment
    }
  }, interval)
})

// Complete loading
function completeLoading() {
  isLoaded.value = true
  setTimeout(() => {
    emit('loaded')
  }, 500) // Small delay for exit animation
}

// Skip loading
function skip() {
  progress.value = 100
  emit('skip')
  completeLoading()
}

// Compute ring size based on viewport
const ringSize = computed(() => {
  if (typeof window !== 'undefined') {
    return Math.min(window.innerWidth, window.innerHeight) * 0.3
  }
  return 150
})
</script>

<template>
  <Transition
    enter-active-class="transition-all duration-1000"
    enter-from-class="opacity-100"
    enter-to-class="opacity-100"
    leave-active-class="transition-all duration-700"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="!isLoaded"
      class="fixed inset-0 z-50 flex items-center justify-center bg-dark-950"
    >
      <!-- Background particles (optional) -->
      <div class="absolute inset-0 overflow-hidden">
        <div
          v-for="i in 20"
          :key="i"
          class="absolute w-1 h-1 bg-gold-500 rounded-full animate-float"
          :style="{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 2}s`,
            opacity: Math.random() * 0.5 + 0.2
          }"
        />
      </div>

      <!-- Main content -->
      <div
        class="relative z-10 text-center"
        :class="{
          'opacity-0 translate-y-4': !showContent,
          'opacity-100 translate-y-0': showContent
        }"
        style="transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);"
      >
        <!-- Logo -->
        <div v-if="logo" class="mb-6">
          <img :src="logo" alt="Logo" class="w-20 h-20 mx-auto rounded-full" />
        </div>

        <!-- Title -->
        <h1
          class="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 luxury-letter-spacing text-gradient-gold px-4"
          :class="{
            'opacity-0': !showContent,
            'opacity-100': showContent
          }"
          style="transition: opacity 0.8s 0.2s;"
        >
          {{ title }}
        </h1>

        <!-- Animated Ring -->
        <div class="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-6">
          <!-- Outer ring -->
          <div
            class="absolute inset-0 rounded-full border-2 border-gold-500/20 loading-ring"
          />

          <!-- Progress ring -->
          <svg class="absolute inset-0 w-full h-full -rotate-90">
            <circle
              cx="80"
              cy="80"
              r="76"
              fill="none"
              stroke="url(#goldGradient)"
              stroke-width="2"
              stroke-linecap="round"
              :stroke-dasharray="2 * Math.PI * 76"
              :stroke-dashoffset="2 * Math.PI * 76 * (1 - progress / 100)"
              class="transition-all duration-100"
            />
            <defs>
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#f9b31a" />
                <stop offset="50%" stop-color="#db9010" />
                <stop offset="100%" stop-color="#b6700e" />
              </linearGradient>
            </defs>
          </svg>

          <!-- Inner content -->
          <div class="absolute inset-0 flex items-center justify-center">
            <span class="font-serif text-2xl text-gold-500">{{ Math.round(progress) }}%</span>
          </div>
        </div>

        <!-- Subtitle -->
        <p
          class="font-sans text-sm md:text-base text-gold-500/80 mb-8"
          :class="{
            'opacity-0': !showContent,
            'opacity-100': showContent
          }"
          style="transition: opacity 0.8s 0.4s;"
        >
          {{ subtitle }}
        </p>

        <!-- Skip button -->
        <BaseButton
          v-if="showSkip"
          variant="ghost"
          size="sm"
          @click="skip"
        >
          {{ skipLabel }}
        </BaseButton>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.loading-ring {
  animation: pulse-ring 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse-ring {
  0% {
    transform: scale(0.95);
    opacity: 0.5;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.8;
  }
  100% {
    transform: scale(0.95);
    opacity: 0.5;
  }
}

/* Float animation for background particles */
@keyframes float {
  0%,
  100% {
    transform: translateY(0px) translateX(0px);
  }
  25% {
    transform: translateY(-10px) translateX(5px);
  }
  50% {
    transform: translateY(-20px) translateX(0px);
  }
  75% {
    transform: translateY(-10px) translateX(-5px);
  }
}
</style>
