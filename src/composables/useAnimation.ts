import { ref, onUnmounted, type Ref } from 'vue'
import gsap from 'gsap'

/**
 * useAnimation - GSAP Animation Manager Composable
 *
 * Purpose: Centralized control for GSAP animations
 * - Timeline management and sequencing
 * - Proper cleanup to prevent memory leaks
 * - Playback control (play, pause, reverse, restart)
 */

export function useAnimation(config: any = {}) {
  // Create timeline with configuration
  const timeline = gsap.timeline({
    paused: config.paused ?? false,
    delay: config.delay ?? 0,
    repeat: config.repeat ?? 0,
    yoyo: config.yoyo ?? false,
    defaults: {
      duration: config.duration ?? 1,
      ease: config.ease ?? 'power3.out'
    }
  })

  const isPlaying = ref(!timeline.paused())

  /**
   * Play the timeline
   */
  const play = () => {
    timeline.play()
    isPlaying.value = true
  }

  /**
   * Pause the timeline
   */
  const pause = () => {
    timeline.pause()
    isPlaying.value = false
  }

  /**
   * Reverse the timeline
   */
  const reverse = () => {
    timeline.reverse()
    isPlaying.value = true
  }

  /**
   * Restart the timeline from beginning
   */
  const restart = () => {
    timeline.restart()
    isPlaying.value = true
  }

  /**
   * Create a fade-in animation
   */
  const fadeIn = (
    targets: gsap.TweenTarget,
    duration: number = 1,
    delay: number = 0
  ) => {
    return gsap.to(targets, {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease: 'power3.out'
    })
  }

  /**
   * Create a fade-out animation
   */
  const fadeOut = (targets: gsap.TweenTarget, duration: number = 1) => {
    return gsap.to(targets, {
      opacity: 0,
      duration,
      ease: 'power3.in'
    })
  }

  /**
   * Create a scale animation
   */
  const scale = (
    targets: gsap.TweenTarget,
    scale: number,
    duration: number = 0.5
  ) => {
    return gsap.to(targets, {
      scale,
      duration,
      ease: 'back.out(1.7)'
    })
  }

  /**
   * Cleanup function
   */
  const cleanup = () => {
    timeline.kill()
    console.log('[useAnimation] Cleanup completed')
  }

  // Auto-cleanup on unmount
  onUnmounted(() => {
    cleanup()
  })

  return {
    timeline,
    isPlaying,
    play,
    pause,
    reverse,
    restart,
    fadeIn,
    fadeOut,
    scale,
    cleanup
  }
}

/**
 * Refresh all animations after layout changes
 */
export function refreshAnimations(): void {
  gsap.refresh()
}
