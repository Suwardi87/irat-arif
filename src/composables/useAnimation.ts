import { ref, onUnmounted, type Ref } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import type { ScrollTriggerConfig, UseAnimationReturn, GSAPTimelineConfig } from '@/types'

/**
 * useAnimation - GSAP Animation Manager Composable
 *
 * Purpose: Centralized control for all GSAP animations including:
 * - Timeline management and sequencing
 * - ScrollTrigger setup for scroll-based animations
 * - Proper cleanup to prevent memory leaks
 * - Responsive animation adjustments
 * - Playback control (play, pause, reverse, restart)
 *
 * @example
 * ```ts
 * const { timeline, addScrollTrigger, play, pause, cleanup } = useAnimation({
 *   duration: 1,
 *   ease: 'power3.out'
 * })
 *
 * // Add animation to timeline
 * timeline.to('.element', { opacity: 1, y: 0 })
 *
 * // Add scroll trigger
 * addScrollTrigger({
 *   trigger: '.section',
 *   start: 'top 80%',
 *   onEnter: () => console.log('Section entered')
 * })
 * ```
 */

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export function useAnimation(config: GSAPTimelineConfig = {}): UseAnimationReturn {
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

  // Store ScrollTrigger instances for cleanup
  const scrollTriggers: ScrollTrigger[] = []

  /**
   * Add a ScrollTrigger to the timeline or an element
   *
   * @param config - ScrollTrigger configuration
   * @returns ScrollTrigger instance
   */
  const addScrollTrigger = (config: ScrollTriggerConfig): ScrollTrigger => {
    const trigger = ScrollTrigger.create({
      trigger: config.trigger,
      start: config.start ?? 'top 80%',
      end: config.end ?? 'bottom 20%',
      scrub: config.scrub ?? false,
      pin: config.pin ?? false,
      markers: config.markers ?? false, // Set to true for debugging
      toggleActions: config.toggleActions ?? 'play none none reverse',
      onEnter: config.onEnter,
      onLeave: config.onLeave,
      onEnterBack: config.onEnterBack,
      onLeaveBack: config.onLeaveBack
    })

    scrollTriggers.push(trigger)
    return trigger
  }

  /**
   * Link animation to scroll position
   * The animation progresses as user scrolls
   *
   * @param targets - GSAP targets (elements or selector)
   * @param vars - Animation properties
   * @param scrollConfig - ScrollTrigger configuration
   */
  const linkToScroll = (
    targets: gsap.TweenTarget,
    vars: gsap.TweenVars,
    scrollConfig: Omit<ScrollTriggerConfig, 'trigger'>
  ) => {
    const trigger = ScrollTrigger.create({
      ...scrollConfig,
      animation: gsap.to(targets, {
        ...vars,
        scrollTrigger: {
          trigger: scrollConfig.trigger,
          start: scrollConfig.start,
          end: scrollConfig.end,
          scrub: scrollConfig.scrub ?? true,
          pin: scrollConfig.pin,
          markers: scrollConfig.markers ?? false
        }
      }) as any
    })

    scrollTriggers.push(trigger)
    return trigger
  }

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
   * Create a staggered animation for multiple elements
   * Elements animate one after another with a delay between each
   *
   * @param selector - CSS selector for elements
   * @param vars - Animation properties
   * @param staggerDelay - Delay between each element (seconds)
   */
  const stagger = (
    selector: string,
    vars: gsap.TweenVars,
    staggerDelay: number = 0.1
  ) => {
    return gsap.to(selector, {
      ...vars,
      stagger: staggerDelay
    })
  }

  /**
   * Create a fade-in animation
   * Common animation pattern used throughout the app
   *
   * @param targets - Elements to animate
   * @param duration - Animation duration in seconds
   * @param delay - Delay before animation starts
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
   *
   * @param targets - Elements to animate
   * @param duration - Animation duration in seconds
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
   *
   * @param targets - Elements to animate
   * @param scale - Target scale value
   * @param duration - Animation duration
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
   * Animate camera in Three.js scene
   * Creates smooth camera movements using GSAP
   *
   * @param camera - Three.js camera
   * @param position - Target position
   * @param lookAt - Target to look at (optional)
   * @param duration - Animation duration
   */
  const animateCamera = (
    camera: any,
    position: { x: number; y: number; z: number },
    lookAt?: { x: number; y: number; z: number },
    duration: number = 2
  ) => {
    const tl = gsap.timeline()

    // Animate position
    tl.to(camera.position, {
      x: position.x,
      y: position.y,
      z: position.z,
      duration,
      ease: 'power3.inOut'
    })

    // Animate lookAt if provided
    if (lookAt) {
      // We need to animate a dummy object and update camera's lookAt
      const currentLookAt = { x: 0, y: 0, z: 0 }
      tl.to(currentLookAt, {
        x: lookAt.x,
        y: lookAt.y,
        z: lookAt.z,
        duration,
        ease: 'power3.inOut',
        onUpdate: () => {
          camera.lookAt(currentLookAt.x, currentLookAt.y, currentLookAt.z)
        }
      }, '<') // Run simultaneously with position animation
    }

    return tl
  }

  /**
   * Cleanup function
   * CRITICAL: Call this when component unmounts to prevent memory leaks
   */
  const cleanup = () => {
    // Kill timeline
    timeline.kill()

    // Kill all ScrollTriggers
    scrollTriggers.forEach(trigger => trigger.kill())
    scrollTriggers.length = 0

    // Clear all ScrollTriggers globally (optional, only if you want to reset everything)
    // ScrollTrigger.getAll().forEach(trigger => trigger.kill())

    console.log('[useAnimation] Cleanup completed')
  }

  // Auto-cleanup on unmount
  onUnmounted(() => {
    cleanup()
  })

  return {
    timeline,
    isPlaying,
    addScrollTrigger,
    linkToScroll,
    play,
    pause,
    reverse,
    restart,
    stagger,
    fadeIn,
    fadeOut,
    scale,
    animateCamera,
    cleanup
  }
}

/**
 * Helper function to create a parallax effect
 * Elements move at different speeds as user scrolls
 *
 * @param selector - Element selector
 * @param speed - Parallax speed (negative = slower, positive = faster)
 * @returns ScrollTrigger instance
 */
export function createParallax(selector: string, speed: number = 0.5): ScrollTrigger {
  return ScrollTrigger.create({
    trigger: selector,
    start: 'top bottom',
    end: 'bottom top',
    onUpdate: (self) => {
      gsap.to(selector, {
        y: self.progress * speed * 100,
        duration: 0.5,
        ease: 'power1.out'
      })
    }
  })
}

/**
 * Helper to create a text reveal animation
 * Text splits into characters/words and animates in
 *
 * @param element - Element to animate
 * @param type - 'chars' | 'words' | 'lines'
 * @param staggerDelay - Delay between each unit
 */
export function revealText(
  element: HTMLElement,
  type: 'chars' | 'words' | 'lines' = 'words',
  staggerDelay: number = 0.05
): gsap.core.Timeline {
  // Simple text reveal (for advanced splitting, use SplitText plugin)
  return gsap.from(element, {
    opacity: 0,
    y: 20,
    duration: 0.8,
    ease: 'power3.out'
  })
}

/**
 * Refresh all ScrollTriggers
 * Call this after layout changes
 */
export function refreshScrollTriggers(): void {
  ScrollTrigger.refresh()
}

/**
 * Disable ScrollTrigger temporarily
 * Useful during transitions or modal overlays
 */
export function disableScrollTriggers(): void {
  ScrollTrigger.disable()
}

/**
 * Enable ScrollTrigger after being disabled
 */
export function enableScrollTriggers(): void {
  ScrollTrigger.enable()
}
