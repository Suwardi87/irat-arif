import { ref, onMounted, onUnmounted } from 'vue'
import gsap from 'gsap'

/**
 * useWaAnimations - WhatsApp-style animations with GSAP
 *
 * Features:
 * - Message bubble animations
 * - Typing indicator
 * - Checkmark animations
 * - Stagger effects
 * - Sound effects (optional)
 */

export interface WaMessage {
  id: string
  text: string
  sender: 'me' | 'them'
  status?: 'sent' | 'delivered' | 'read'
}

export function useWaAnimations() {
  const isAnimating = ref(false)
  let currentTimeline: gsap.core.Timeline | null = null

  /**
   * Animate message bubbles appearing
   * Messages slide in from their respective sides
   */
  function animateMessageBubbles(
    container: HTMLElement,
    messages: WaMessage[],
    options: {
      stagger?: number
      duration?: number
      onComplete?: () => void
    } = {}
  ) {
    if (isAnimating.value) return
    isAnimating.value = true

    const { stagger = 400, duration = 0.4, onComplete } = options

    // Kill any existing timeline
    if (currentTimeline) {
      currentTimeline.kill()
    }

    currentTimeline = gsap.timeline({
      onComplete: () => {
        isAnimating.value = false
        onComplete?.()
      }
    })

    // Find all message bubbles
    const bubbles = container.querySelectorAll('.wa-message-bubble')

    // Set initial states
    bubbles.forEach((bubble, index) => {
      const msg = messages[index]
      const isMe = msg?.sender === 'me'

      gsap.set(bubble, {
        opacity: 0,
        x: isMe ? 50 : -50,
        scale: 0.9,
        rotation: isMe ? 5 : -5
      })
    })

    // Animate in with stagger
    currentTimeline.to(bubbles, {
      opacity: 1,
      x: 0,
      scale: 1,
      rotation: 0,
      duration,
      ease: 'back.out(1.2)',
      stagger: {
        each: stagger / 1000,
        from: 'start'
      }
    })

    return currentTimeline
  }

  /**
   * Animate typing indicator
   * Three dots bouncing animation
   */
  function animateTypingIndicator(
    element: HTMLElement,
    show: boolean,
    duration: number = 0.3
  ) {
    const dots = element.querySelectorAll('.wa-typing-dot')

    if (show) {
      gsap.to(element, {
        opacity: 1,
        y: 0,
        duration,
        ease: 'power2.out'
      })

      // Bounce animation for dots
      gsap.to(dots, {
        y: -8,
        duration: 0.6,
        ease: 'power1.inOut',
        stagger: 0.15,
        repeat: -1,
        yoyo: true
      })
    } else {
      gsap.to(element, {
        opacity: 0,
        y: 10,
        duration,
        ease: 'power2.in'
      })

      gsap.killTweensOf(dots)
      gsap.set(dots, { y: 0 })
    }
  }

  /**
   * Animate checkmarks (sent -> delivered -> read)
   */
  function animateCheckmark(
    element: HTMLElement,
    status: 'sent' | 'delivered' | 'read',
    delay: number = 0
  ) {
    const tl = gsap.timeline({ delay })

    // Fade in
    tl.to(element, {
      opacity: 1,
      scale: 1,
      duration: 0.2,
      ease: 'back.out(1.7)'
    })

    // If read status, turn blue
    if (status === 'read') {
      tl.to(element, {
        color: '#53bdeb',
        filter: 'drop-shadow(0 0 2px #53bdeb)',
        duration: 0.3,
        ease: 'power2.out'
      })
    }

    return tl
  }

  /**
   * Animate double checkmark (one check, then two)
   */
  function animateDoubleCheckmark(
    element: HTMLElement,
    delay: number = 0
  ) {
    const checks = element.querySelectorAll('.wa-check')

    const tl = gsap.timeline({ delay })

    checks.forEach((check, index) => {
      tl.to(check, {
        opacity: 1,
        scale: 1,
        duration: 0.15,
        ease: 'back.out(2)',
        delay: index * 0.1
      }, index * 0.1)
    })

    return tl
  }

  /**
   * Animate timestamp fade in
   */
  function animateTimestamp(element: HTMLElement, delay: number = 0) {
    return gsap.to(element, {
      opacity: 1,
      duration: 0.2,
      delay,
      ease: 'power1.out'
    })
  }

  /**
   * WhatsApp-style slide up modal animation
   */
  function animateModalIn(
    backdrop: HTMLElement,
    content: HTMLElement,
    onComplete?: () => void
  ) {
    const tl = gsap.timeline({ onComplete })

    // Set initial states
    gsap.set(backdrop, { opacity: 0 })
    gsap.set(content, { y: '100%' })

    // Animate in
    tl.to(backdrop, {
      opacity: 1,
      duration: 0.3,
      ease: 'power2.out'
    }).to(content, {
      y: 0,
      duration: 0.4,
      ease: 'power3.out'
    }, '-=0.15')

    return tl
  }

  /**
   * WhatsApp-style slide down modal animation
   */
  function animateModalOut(
    backdrop: HTMLElement,
    content: HTMLElement,
    onComplete?: () => void
  ) {
    const tl = gsap.timeline({ onComplete })

    // Animate out
    tl.to(content, {
      y: '100%',
      duration: 0.3,
      ease: 'power2.in'
    }).to(backdrop, {
      opacity: 0,
      duration: 0.3,
      ease: 'power2.in'
    }, '-=0.2')

    return tl
  }

  /**
   * Animate notification badge pop in
   */
  function animateNotificationBadge(
    element: HTMLElement,
    count: number,
    delay: number = 0
  ) {
    const tl = gsap.timeline({ delay })

    // Update count
    const textEl = element.querySelector('.wa-badge-count')
    if (textEl) {
      textEl.textContent = count.toString()
    }

    tl.fromTo(element,
      { scale: 0, rotation: -180 },
      {
        scale: 1,
        rotation: 0,
        duration: 0.4,
        ease: 'back.out(1.7)'
      }
    )

    // Pulse animation
    tl.to(element, {
      scale: 1.1,
      duration: 0.1,
      ease: 'power1.out'
    }).to(element, {
      scale: 1,
      duration: 0.1,
      ease: 'power1.in'
    })

    return tl
  }

  /**
   * Animate incoming message (with sound effect option)
   */
  function animateIncomingMessage(
    element: HTMLElement,
    playSound?: boolean
  ) {
    const tl = gsap.timeline()

    // Initial state
    gsap.set(element, {
      opacity: 0,
      x: -30,
      scale: 0.95
    })

    // Animate in
    tl.to(element, {
      opacity: 1,
      x: 0,
      scale: 1,
      duration: 0.3,
      ease: 'back.out(1.5)'
    })

    // Play notification sound
    if (playSound) {
      playWaNotificationSound()
    }

    return tl
  }

  /**
   * Play WhatsApp notification sound
   */
  function playWaNotificationSound() {
    // Create audio context for notification sound
    const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)()

    // Create oscillator for notification tone
    const oscillator = audioCtx.createOscillator()
    const gainNode = audioCtx.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(audioCtx.destination)

    // WhatsApp notification tone pattern
    oscillator.frequency.setValueAtTime(880, audioCtx.currentTime) // A5
    oscillator.frequency.setValueAtTime(1108, audioCtx.currentTime + 0.1) // C#6

    gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.2)

    oscillator.start(audioCtx.currentTime)
    oscillator.stop(audioCtx.currentTime + 0.2)
  }

  /**
   * Cleanup function
   */
  function cleanup() {
    if (currentTimeline) {
      currentTimeline.kill()
      currentTimeline = null
    }
    isAnimating.value = false
  }

  onUnmounted(() => {
    cleanup()
  })

  return {
    isAnimating,
    animateMessageBubbles,
    animateTypingIndicator,
    animateCheckmark,
    animateDoubleCheckmark,
    animateTimestamp,
    animateModalIn,
    animateModalOut,
    animateNotificationBadge,
    animateIncomingMessage,
    playWaNotificationSound,
    cleanup
  }
}
