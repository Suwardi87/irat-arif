<script setup lang="ts">
import { computed } from 'vue'
import type { BaseCardProps } from '@/types'

/**
 * BaseCard - Glassmorphism card component
 *
 * Features:
 * - Glass effect (backdrop blur)
 * - Hover animations
 * - Multiple padding options
 * - Border option
 * - Luxury dark theme styling
 */

interface Props extends BaseCardProps {
  tag?: 'div' | 'section' | 'article'
}

const props = withDefaults(defineProps<Props>(), {
  glass: true,
  hover: false,
  padding: 'md',
  border: true,
  tag: 'div'
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

// Compute card classes
const cardClasses = computed(() => {
  const classes = ['rounded-lg', 'transition-all', 'duration-300']

  // Glass effect
  if (props.glass) {
    classes.push('backdrop-blur-md', 'bg-white/5', 'border', 'border-white/10')
  }

  // Hover effect
  if (props.hover) {
    classes.push(
      'hover:bg-white/10',
      'hover:border-gold-500/30',
      'hover:shadow-xl',
      'hover:shadow-gold-500/10',
      'hover:-translate-y-1'
    )
  } else {
    classes.push('shadow-xl', 'shadow-black/50')
  }

  // Border
  if (props.border) {
    classes.push('border')
  }

  // Padding - responsive
  switch (props.padding) {
    case 'none':
      break
    case 'sm':
      classes.push('p-3 sm:p-4 md:p-5')
      break
    case 'md':
      classes.push('p-4 sm:p-6 md:p-8')
      break
    case 'lg':
      classes.push('p-6 sm:p-8 md:p-10')
      break
  }

  return classes
})

// Handle click
const handleClick = (event: MouseEvent) => {
  emit('click', event)
}
</script>

<template>
  <component
    :is="tag"
    :class="cardClasses"
    @click="handleClick"
  >
    <!-- Optional gold shimmer effect -->
    <div v-if="hover" class="absolute inset-0 gold-shimmer -z-10 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-500" />

    <!-- Card content -->
    <slot />
  </component>
</template>

<style scoped>
/* Additional shine effect on hover */
@keyframes shine {
  0% {
    transform: translateX(-100%) rotate(45deg);
  }
  100% {
    transform: translateX(100%) rotate(45deg);
  }
}

.gold-shimmer::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(249, 179, 26, 0.1),
    transparent
  );
  transform: translateX(-100%) rotate(45deg);
  transition: transform 0.6s;
}

.gold-shimmer:hover::after {
  animation: shine 1.5s ease-in-out;
}
</style>
