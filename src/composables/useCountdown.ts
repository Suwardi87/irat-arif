import { ref, computed, onUnmounted } from 'vue'
import { differenceInSeconds, differenceInDays, differenceInHours, differenceInMinutes } from 'date-fns'
import type { UseCountdownReturn } from '@/types'

/**
 * useCountdown - Event Countdown Composable
 *
 * Purpose: Calculate and display countdown to event date:
 * - Real-time countdown updates
 * - Formatted display (days, hours, minutes, seconds)
 * - Event passed state detection
 * - Pause/resume functionality
 * - Auto-update every second
 *
 * @example
 * ```ts
 * const { days, hours, minutes, seconds, isExpired, start, stop } = useCountdown()
 *
 * // Start countdown to wedding date
 * const weddingDate = new Date('2025-12-25T09:00:00')
 * start(weddingDate)
 * ```
 */

export function useCountdown(): UseCountdownReturn {
  // Reactive countdown values
  const days = ref(0)
  const hours = ref(0)
  const minutes = ref(0)
  const seconds = ref(0)
  const isExpired = ref(false)
  const isRunning = ref(false)

  // Internal state
  let targetDate: Date | null = null
  let intervalId: ReturnType<typeof setInterval> | null = null
  let pausedRemaining = 0 // Seconds remaining when paused

  /**
   * Formatted countdown string
   * Returns format: "DD:HH:MM:SS"
   */
  const formatted = computed(() => {
    if (isExpired.value) {
      return 'The Big Day Has Arrived!'
    }

    const d = String(days.value).padStart(2, '0')
    const h = String(hours.value).padStart(2, '0')
    const m = String(minutes.value).padStart(2, '0')
    const s = String(seconds.value).padStart(2, '0')

    return `${d}:${h}:${m}:${s}`
  })

  /**
   * Total seconds remaining
   */
  const totalSeconds = computed(() => {
    return (
      days.value * 86400 +
      hours.value * 3600 +
      minutes.value * 60 +
      seconds.value
    )
  })

  /**
   * Update countdown values
   */
  function updateCountdown() {
    if (!targetDate) return

    const now = new Date()

    // Check if event has passed
    if (targetDate <= now) {
      days.value = 0
      hours.value = 0
      minutes.value = 0
      seconds.value = 0
      isExpired.value = true
      stop()
      return
    }

    // Calculate differences
    const totalSecs = differenceInSeconds(targetDate, now)
    const d = differenceInDays(targetDate, now)
    const h = differenceInHours(targetDate, now) % 24
    const m = differenceInMinutes(targetDate, now) % 60
    const s = totalSecs % 60

    days.value = d
    hours.value = h
    minutes.value = m
    seconds.value = s
  }

  /**
   * Start the countdown
   *
   * @param date - Target date to count down to
   * @param immediate - Whether to update immediately (default: true)
   */
  function start(date: Date, immediate: boolean = true) {
    // Stop any existing countdown
    stop()

    targetDate = date
    isExpired.value = false
    isRunning.value = true

    // Update immediately if requested
    if (immediate) {
      updateCountdown()
    }

    // Start interval (updates every second)
    intervalId = setInterval(() => {
      updateCountdown()
    }, 1000)

    console.log('[useCountdown] Started countdown to', date)
  }

  /**
   * Stop the countdown
   */
  function stop() {
    if (intervalId) {
      clearInterval(intervalId)
      intervalId = null
    }
    isRunning.value = false
  }

  /**
   * Pause the countdown (keeps remaining time)
   */
  function pause() {
    if (intervalId && isRunning.value) {
      clearInterval(intervalId)
      intervalId = null
      pausedRemaining = totalSeconds.value
      isRunning.value = false
      console.log('[useCountdown] Paused at', pausedRemaining, 'seconds')
    }
  }

  /**
   * Resume from paused state
   */
  function resume() {
    if (pausedRemaining > 0 && targetDate && !isRunning.value) {
      isRunning.value = true
      intervalId = setInterval(() => {
        updateCountdown()
      }, 1000)
      console.log('[useCountdown] Resumed countdown')
    }
  }

  /**
   * Add time to target (useful for extending countdown)
   *
   * @param milliseconds - Time to add in milliseconds
   */
  function addTime(milliseconds: number) {
    if (targetDate) {
      const newDate = new Date(targetDate.getTime() + milliseconds)
      start(newDate)
    }
  }

  /**
   * Get progress percentage (0-100)
   * Useful for progress bars
   */
  function getProgress(startDate: Date): number {
    if (!targetDate) return 0
    if (isExpired.value) return 100

    const totalDuration = differenceInSeconds(targetDate, startDate)
    const elapsed = totalDuration - totalSeconds.value

    return Math.min(100, Math.max(0, (elapsed / totalDuration) * 100))
  }

  // Cleanup on unmount
  onUnmounted(() => {
    stop()
  })

  return {
    days,
    hours,
    minutes,
    seconds,
    isExpired,
    isRunning,
    formatted,
    totalSeconds,
    start,
    stop,
    pause,
    resume,
    addTime,
    getProgress
  }
}

/**
 * Helper to format duration in human-readable format
 * e.g., "2 days, 3 hours, 15 minutes"
 */
export function formatDuration(seconds: number): string {
  const d = Math.floor(seconds / 86400)
  const h = Math.floor((seconds % 86400) / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const s = seconds % 60

  const parts: string[] = []

  if (d > 0) parts.push(`${d} day${d !== 1 ? 's' : ''}`)
  if (h > 0) parts.push(`${h} hour${h !== 1 ? 's' : ''}`)
  if (m > 0) parts.push(`${m} minute${m !== 1 ? 's' : ''}`)
  if (s > 0 || parts.length === 0) parts.push(`${s} second${s !== 1 ? 's' : ''}`)

  return parts.join(', ')
}
