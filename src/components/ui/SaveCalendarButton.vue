<script setup lang="ts">
import { computed } from 'vue'

/**
 * SaveCalendarButton - Component for adding wedding event to Google Calendar
 *
 * Generates a Google Calendar link with event details
 */

interface EventDetails {
  title: string
  description: string
  location: string
  startDate: Date
  endDate: Date
}

interface Props {
  event: EventDetails
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  icon?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'outline',
  size: 'md',
  icon: true
})

/**
 * Format date for Google Calendar (YYYYMMDDTHHmmSSZ)
 */
function formatGoogleCalendarDate(date: Date): string {
  const d = new Date(date)
  const year = d.getFullYear()
  const month = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  const hours = String(d.getHours()).padStart(2, '0')
  const minutes = String(d.getMinutes()).padStart(2, '0')
  const seconds = String(d.getSeconds()).padStart(2, '0')

  return `${year}${month}${day}T${hours}${minutes}${seconds}Z`
}

/**
 * Generate Google Calendar URL
 */
const googleCalendarUrl = computed(() => {
  const { title, description, location, startDate, endDate } = props.event

  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: title,
    dates: `${formatGoogleCalendarDate(startDate)}/${formatGoogleCalendarDate(endDate)}`,
    details: description,
    location: location
  })

  return `https://calendar.google.com/calendar/render?${params.toString()}`
})

/**
 * Handle calendar button click
 */
function handleSaveToCalendar() {
  window.open(googleCalendarUrl.value, '_blank')
}

/**
 * Size classes
 */
const sizeClasses = computed(() => {
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  }
  return sizes[props.size]
})

/**
 * Variant classes
 */
const variantClasses = computed(() => {
  const variants = {
    primary: 'bg-gold-500 text-dark-950 hover:bg-gold-600 border-gold-500',
    outline: 'bg-transparent text-gold-500 hover:bg-gold-500/10 border-gold-500',
    ghost: 'bg-transparent text-white/80 hover:text-white hover:bg-white/5 border-transparent'
  }
  return variants[props.variant]
})
</script>

<template>
  <button
    type="button"
    :class="[
      'inline-flex items-center justify-center gap-2 rounded-lg border font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gold-500/50',
      sizeClasses,
      variantClasses
    ]"
    @click="handleSaveToCalendar"
  >
    <!-- Calendar Icon -->
    <svg
      v-if="icon"
      class="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>

    <!-- Label -->
    <span>Save to Calendar</span>
  </button>
</template>
