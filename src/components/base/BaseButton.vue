<script setup lang="ts">
import { computed } from 'vue'
import type { BaseButtonProps } from '@/types'

/**
 * BaseButton - Reusable button component
 *
 * Features:
 * - Multiple variants (primary, secondary, outline, ghost)
 * - Multiple sizes (sm, md, lg)
 * - Loading state
 * - Icon support
 * - Disabled state
 * - Full luxury styling with gold accents
 */

interface Props extends BaseButtonProps {
  type?: 'button' | 'submit' | 'reset'
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'primary',
  size: 'md',
  disabled: false,
  loading: false,
  iconPosition: 'left'
})

const emit = defineEmits<{
  click: [event: MouseEvent]
}>()

// Compute button classes
const buttonClasses = computed(() => {
  const classes = ['btn-luxury', 'inline-flex', 'items-center', 'justify-center', 'font-medium', 'rounded-lg', 'transition-all', 'duration-300', 'focus:outline-none', 'focus:ring-2', 'focus:ring-gold-500', 'focus:ring-offset-2', 'focus:ring-offset-dark-950']

  // Variant classes
  switch (props.variant) {
    case 'primary':
      classes.push('bg-gradient-to-r', 'from-gold-500', 'to-gold-700', 'text-dark-950', 'border-transparent', 'hover:from-gold-400', 'hover:to-gold-600', 'hover:shadow-xl', 'hover:shadow-gold-500/30')
      break
    case 'secondary':
      classes.push('bg-dark-800', 'text-gold-500', 'border-gold-500/30', 'hover:bg-dark-700', 'hover:border-gold-500/50')
      break
    case 'outline':
      classes.push('bg-transparent', 'text-gold-500', 'border-gold-500', 'hover:bg-gold-500', 'hover:text-dark-950')
      break
    case 'ghost':
      classes.push('bg-transparent', 'text-gold-500', 'border-transparent', 'hover:bg-gold-500/10')
      break
  }

  // Size classes - responsive
  switch (props.size) {
    case 'sm':
      classes.push('px-3 sm:px-4 py-1.5 sm:py-2', 'text-sm')
      break
    case 'md':
      classes.push('px-5 sm:px-6 py-2.5 sm:py-3', 'text-sm sm:text-base')
      break
    case 'lg':
      classes.push('px-6 sm:px-8 py-3 sm:py-4', 'text-base sm:text-lg')
      break
  }

  // State classes
  if (props.disabled || props.loading) {
    classes.push('opacity-50', 'cursor-not-allowed', 'pointer-events-none')
  }

  return classes
})

// Handle click
const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}
</script>

<template>
  <button
    :type="type"
    :class="buttonClasses"
    :disabled="disabled || loading"
    @click="handleClick"
  >
    <!-- Loading spinner -->
    <span
      v-if="loading"
      class="animate-spin mr-2"
      :class="[
        size === 'sm' ? 'h-4 w-4' : size === 'lg' ? 'h-6 w-6' : 'h-5 w-5'
      ]"
    >
      <svg class="animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    </span>

    <!-- Left icon -->
    <span
      v-if="icon && iconPosition === 'left' && !loading"
      class="mr-2"
      :class="[
        size === 'sm' ? 'h-4 w-4' : size === 'lg' ? 'h-6 w-6' : 'h-5 w-5'
      ]"
      v-html="icon"
    />

    <!-- Slot content -->
    <slot />

    <!-- Right icon -->
    <span
      v-if="icon && iconPosition === 'right' && !loading"
      class="ml-2"
      :class="[
        size === 'sm' ? 'h-4 w-4' : size === 'lg' ? 'h-6 w-6' : 'h-5 w-5'
      ]"
      v-html="icon"
    />
  </button>
</template>
