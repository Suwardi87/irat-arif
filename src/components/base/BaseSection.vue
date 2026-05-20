<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

/**
 * BaseSection - Section wrapper with animations
 *
 * Features:
 * - Scroll-triggered animations
 * - Customizable padding
 * - Container width control
 * - Background options
 * - Full bleed option
 */

interface Props {
  id?: string
  fullBleed?: boolean
  container?: boolean
  paddingY?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  bgDark?: boolean
  bgGradient?: boolean
  animate?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  fullBleed: false,
  container: true,
  paddingY: 'xl',
  bgDark: false,
  bgGradient: false,
  animate: true
})

const sectionRef = ref<HTMLElement | null>(null)
const isVisible = ref(false)

// Intersection observer for scroll animations
let observer: IntersectionObserver | null = null

onMounted(() => {
  if (props.animate && sectionRef.value) {
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            isVisible.value = true
            // Stop observing once visible (optional)
            // observer?.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1, // Trigger when 10% visible
        rootMargin: '0px 0px -50px 0px' // Trigger slightly before fully in view
      }
    )

    observer.observe(sectionRef.value!)
  }
})

onUnmounted(() => {
  if (observer && sectionRef.value) {
    observer.unobserve(sectionRef.value)
  }
})
</script>

<template>
  <section
    :id="id"
    ref="sectionRef"
    :class="[
      'relative',
      'transition-all',
      'duration-700',
      'ease-out',
      // Padding Y
      {
        'py-0': paddingY === 'none',
        'py-8': paddingY === 'sm',
        'py-12': paddingY === 'md',
        'py-20': paddingY === 'lg',
        'py-32': paddingY === 'xl'
      },
      // Background
      {
        'bg-dark-950': !bgDark && !bgGradient,
        'bg-dark-900': bgDark,
        'bg-gradient-to-b from-dark-950 via-dark-900 to-dark-950': bgGradient
      },
      // Animation
      {
        'opacity-0 translate-y-8': !isVisible && animate,
        'opacity-100 translate-y-0': isVisible || !animate
      },
      // Full bleed
      {
        '-mx-4 sm:-mx-6 lg:-mx-8': fullBleed
      }
    ]"
  >
    <!-- Optional background elements -->
    <div v-if="$slots.bg" class="absolute inset-0 -z-10">
      <slot name="bg" />
    </div>

    <!-- Container -->
    <div
      :class="[
        'relative',
        'z-10',
        // Container width
        container ? ['max-w-7xl', 'mx-auto', 'px-4', 'sm:px-6', 'lg:px-8'] : []
      ]"
    >
      <!-- Section content -->
      <slot />
    </div>
  </section>
</template>
