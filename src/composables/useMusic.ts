import { ref, watch, onUnmounted, type Ref } from 'vue'
import type { UseMusicReturn } from '@/types'

/**
 * useMusic - Background Music Control Composable
 *
 * Purpose: Manage audio playback for background music:
 * - Play/pause toggle with browser autoplay policy compliance
 * - Volume control with fade in/out
 * - Mute functionality
 * - Audio loading state management
 * - Auto-loop configuration
 *
 * Browser Autoplay Policy:
 * Most browsers block autoplay until user interacts with the page.
 * This composable handles that by waiting for user gesture.
 *
 * @example
 * ```ts
 * const { isPlaying, volume, load, play, pause, toggle, fadeIn, fadeOut } = useMusic()
 *
 * // Load and play music
 * await load('/music/wedding-song.mp3')
 * await play()
 *
 * // Or use toggle on button click
 * <button @click="toggle">Music</button>
 * ```
 */

export function useMusic(autoLoop: boolean = true): UseMusicReturn {
  // Reactive state
  const isPlaying = ref(false)
  const volume = ref(0.5) // Default 50% volume
  const isMuted = ref(false)
  const audio = ref<HTMLAudioElement | null>(null)
  const isLoading = ref(false)
  const loadError = ref<string | null>(null)

  // Previous volume (for mute toggle)
  let previousVolume = 0.5

  // Fade animation ID
  let fadeInterval: ReturnType<typeof setInterval> | null = null

  /**
   * Load audio file
   *
   * @param src - URL to audio file
   * @returns Promise that resolves when audio is loaded
   */
  async function load(src: string): Promise<void> {
    isLoading.value = true
    loadError.value = null

    try {
      // Create new audio element
      const audioEl = new Audio()

      // Set up event listeners
      audioEl.addEventListener('canplaythrough', handleCanPlay, { once: true })
      audioEl.addEventListener('error', handleError, { once: true })
      audioEl.addEventListener('ended', handleEnded)

      // Auto-loop configuration
      audioEl.loop = autoLoop

      // Load the audio
      audioEl.src = src
      audioEl.load()

      audio.value = audioEl

      return new Promise((resolve, reject) => {
        audioEl.addEventListener('canplaythrough', () => resolve(), { once: true })
        audioEl.addEventListener('error', () => reject(new Error('Failed to load audio')), { once: true })
      })
    } catch (error) {
      loadError.value = error instanceof Error ? error.message : 'Failed to load music'
      isLoading.value = false
      throw error
    }
  }

  /**
   * Handle audio loaded event
   */
  function handleCanPlay() {
    isLoading.value = false
    console.log('[useMusic] Audio loaded successfully')
  }

  /**
   * Handle audio error
   */
  function handleError(event: Event) {
    isLoading.value = false
    loadError.value = 'Failed to load audio file'
    console.error('[useMusic] Audio error:', event)
  }

  /**
   * Handle audio ended (for non-looping mode)
   */
  function handleEnded() {
    if (!audio.value?.loop) {
      isPlaying.value = false
      console.log('[useMusic] Audio ended')
    }
  }

  /**
   * Play audio
   * Note: May fail if called without user gesture (browser autoplay policy)
   *
   * @returns Promise that resolves when playback starts
   */
  async function play(): Promise<void> {
    if (!audio.value) {
      console.warn('[useMusic] No audio loaded')
      return
    }

    try {
      await audio.value.play()
      isPlaying.value = true
      console.log('[useMusic] Playing')
    } catch (error) {
      console.error('[useMusic] Play failed:', error)
      throw error
    }
  }

  /**
   * Pause audio
   */
  function pause(): void {
    if (!audio.value) return

    audio.value.pause()
    isPlaying.value = false
    console.log('[useMusic] Paused')
  }

  /**
   * Toggle play/pause
   * Safe to call from user interaction handlers
   *
   * @returns Promise that resolves when action completes
   */
  async function toggle(): Promise<void> {
    if (isPlaying.value) {
      pause()
    } else {
      await play()
    }
  }

  /**
   * Stop audio (resets to beginning)
   */
  function stop(): void {
    if (!audio.value) return

    audio.value.pause()
    audio.value.currentTime = 0
    isPlaying.value = false
    console.log('[useMusic] Stopped')
  }

  /**
   * Set volume level
   *
   * @param vol - Volume level (0-1)
   */
  function setVolume(vol: number): void {
    const clampedVol = Math.max(0, Math.min(1, vol))
    volume.value = clampedVol

    if (audio.value) {
      audio.value.volume = clampedVol
    }

    // Update muted state
    isMuted.value = clampedVol === 0

    // Store previous volume for unmute
    if (clampedVol > 0) {
      previousVolume = clampedVol
    }
  }

  /**
   * Toggle mute state
   */
  function toggleMute(): void {
    if (isMuted.value) {
      // Unmute - restore previous volume
      setVolume(previousVolume || 0.5)
    } else {
      // Mute - store current and set to 0
      previousVolume = volume.value
      setVolume(0)
    }
  }

  /**
   * Fade in audio
   * Gradually increases volume from 0 to target
   *
   * @param duration - Fade duration in seconds (default: 2)
   * @param targetVolume - Target volume (default: current volume)
   */
  function fadeIn(duration: number = 2, targetVolume?: number): void {
    if (!audio.value) return

    // Clear any existing fade
    if (fadeInterval) {
      clearInterval(fadeInterval)
    }

    const target = targetVolume ?? volume.value
    const startVolume = audio.value.volume
    const steps = 60 * duration // 60fps
    const increment = (target - startVolume) / steps
    let currentStep = 0

    fadeInterval = setInterval(() => {
      currentStep++

      if (currentStep >= steps) {
        audio.value!.volume = target
        volume.value = target
        clearInterval(fadeInterval!)
        fadeInterval = null
        return
      }

      audio.value!.volume = startVolume + (increment * currentStep)
      volume.value = audio.value!.volume
    }, 1000 / 60)

    // Also start playing if not already
    if (!isPlaying.value) {
      play().catch(console.error)
    }

    console.log('[useMusic] Fading in', duration, 'seconds')
  }

  /**
   * Fade out audio
   * Gradually decreases volume to 0
   *
   * @param duration - Fade duration in seconds (default: 2)
   * @param pauseAfter - Whether to pause after fade (default: true)
   */
  function fadeOut(duration: number = 2, pauseAfter: boolean = true): void {
    if (!audio.value) return

    // Clear any existing fade
    if (fadeInterval) {
      clearInterval(fadeInterval)
    }

    const startVolume = audio.value.volume
    const steps = 60 * duration // 60fps
    const decrement = startVolume / steps
    let currentStep = 0

    fadeInterval = setInterval(() => {
      currentStep++

      if (currentStep >= steps) {
        audio.value!.volume = 0
        volume.value = 0

        if (pauseAfter) {
          pause()
        }

        clearInterval(fadeInterval!)
        fadeInterval = null
        return
      }

      audio.value!.volume = startVolume - (decrement * currentStep)
      volume.value = audio.value!.volume
    }, 1000 / 60)

    console.log('[useMusic] Fading out', duration, 'seconds')
  }

  /**
   * Get audio duration in seconds
   */
  function getDuration(): number {
    return audio.value?.duration || 0
  }

  /**
   * Get current playback position in seconds
   */
  function getCurrentTime(): number {
    return audio.value?.currentTime || 0
  }

  /**
   * Seek to specific position
   *
   * @param time - Position in seconds
   */
  function seek(time: number): void {
    if (audio.value) {
      audio.value.currentTime = Math.max(0, Math.min(time, audio.value.duration))
    }
  }

  // Watch volume changes
  watch(volume, (newVolume) => {
    if (audio.value) {
      audio.value.volume = newVolume
    }
  })

  // Cleanup on unmount
  onUnmounted(() => {
    if (fadeInterval) {
      clearInterval(fadeInterval)
    }

    if (audio.value) {
      audio.value.pause()
      audio.value.removeEventListener('canplaythrough', handleCanPlay)
      audio.value.removeEventListener('error', handleError)
      audio.value.removeEventListener('ended', handleEnded)
      audio.value = null
    }
  })

  return {
    isPlaying,
    volume,
    isMuted,
    audio,
    isLoading,
    loadError,
    load,
    play,
    pause,
    toggle,
    stop,
    setVolume,
    toggleMute,
    fadeIn,
    fadeOut,
    getDuration,
    getCurrentTime,
    seek
  }
}
