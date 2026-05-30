import { computed } from 'vue'
import { useMediaQuery, useWindowSize, useDevicePixelRatio } from '@vueuse/core'
import type { UseResponsiveReturn } from '@/types'

/**
 * useResponsive - Responsive Utilities Composable
 *
 * Purpose: Handle responsive breakpoints and device detection:
 * - Breakpoint detection (xs, sm, md, lg, xl, 2xl)
 * - Device type detection (mobile, tablet, desktop)
 * - Touch detection
 * - Orientation change handling
 * - High DPI/Retina display detection
 *
 * @example
 * ```ts
 * const { width, height, isMobile, isTablet, isDesktop, isTouch, orientation } = useResponsive()
 *
 * // Use in template
 * <div :class="{ 'mobile-layout': isMobile }">
 * ```
 */

// Tailwind CSS breakpoints
const BREAKPOINTS = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536
}

export function useResponsive(): UseResponsiveReturn {
  // Window size using VueUse
  const { width: windowWidth, height: windowHeight } = useWindowSize()
  const pixelRatio = useDevicePixelRatio()

  // Reactive width and height
  const width = computed(() => windowWidth.value)
  const height = computed(() => windowHeight.value)

  // Media queries for each breakpoint
  const _isXs = useMediaQuery(`(min-width: ${BREAKPOINTS.xs}px)`)
  const isSm = useMediaQuery(`(min-width: ${BREAKPOINTS.sm}px)`)
  const isMd = useMediaQuery(`(min-width: ${BREAKPOINTS.md}px)`)
  const isLg = useMediaQuery(`(min-width: ${BREAKPOINTS.lg}px)`)
  const isXl = useMediaQuery(`(min-width: ${BREAKPOINTS.xl}px)`)
  const is2xl = useMediaQuery(`(min-width: ${BREAKPOINTS['2xl']}px)`)

  // Current breakpoint
  const breakpoint = computed<'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'>(() => {
    if (is2xl.value) return '2xl'
    if (isXl.value) return 'xl'
    if (isLg.value) return 'lg'
    if (isMd.value) return 'md'
    if (isSm.value) return 'sm'
    return 'xs'
  })

  // Device type detection
  const isMobile = computed(() => breakpoint.value === 'xs' || breakpoint.value === 'sm')
  const isTablet = computed(() => breakpoint.value === 'md')
  const isDesktop = computed(() => ['lg', 'xl', '2xl'].includes(breakpoint.value))

  // Touch detection
  const isTouch = computed(() => {
    if (typeof window === 'undefined') return false
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0
  })

  // Orientation detection
  const orientation = computed<'portrait' | 'landscape'>(() => {
    return width.value > height.value ? 'landscape' : 'portrait'
  })

  // High DPI detection
  const isHighDPI = computed(() => pixelRatio.value > 1)
  const isRetina = computed(() => pixelRatio.value >= 2)

  // Safe area insets (for notched devices)
  const safeAreaInsets = computed(() => {
    if (typeof window === 'undefined') {
      return { top: 0, right: 0, bottom: 0, left: 0 }
    }

    const style = getComputedStyle(document.documentElement)
    return {
      top: parseInt(style.getPropertyValue('--safe-area-inset-top') || '0'),
      right: parseInt(style.getPropertyValue('--safe-area-inset-right') || '0'),
      bottom: parseInt(style.getPropertyValue('--safe-area-inset-bottom') || '0'),
      left: parseInt(style.getPropertyValue('--safe-area-inset-left') || '0')
    }
  })

  return {
    width,
    height,
    pixelRatio: computed(() => pixelRatio.value),
    breakpoint,
    isMobile,
    isTablet,
    isDesktop,
    isTouch,
    orientation,
    isHighDPI,
    isRetina,
    safeAreaInsets
  }
}

/**
 * Helper to get optimal pixel ratio for performance
 * Limits pixel ratio on high-DPI devices for better performance
 *
 * @param maxLimit - Maximum pixel ratio to return (default: 2)
 */
export function getOptimalPixelRatio(maxLimit: number = 2): number {
  const devicePixelRatio = typeof window !== 'undefined' ? window.devicePixelRatio : 1
  return Math.min(devicePixelRatio, maxLimit)
}

/**
 * Helper to check if device supports hover
 * Useful for conditional UI elements
 */
export function supportsHover(): boolean {
  if (typeof window === 'undefined') return true
  return window.matchMedia('(hover: hover)').matches
}

/**
 * Helper to check if device prefers reduced motion
 * Respect user's motion preferences
 */
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Helper to check if device is in dark mode
 */
export function prefersDarkMode(): boolean {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-color-scheme: dark)').matches
}

/**
 * Viewport helper for conditional rendering based on breakpoint
 *
 * @example
 * ```vue
 * <Viewport at="md">
 *   <div>Only shows on md and up</div>
 * </Viewport>
 * ```
 */
export interface ViewportProps {
  at?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  below?: 'sm' | 'md' | 'lg' | 'xl' | '2xl'
  above?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

export function useViewport(props: ViewportProps) {
  const { breakpoint } = useResponsive()

  const isVisible = computed(() => {
    if (props.at) {
      const breakpointOrder = ['xs', 'sm', 'md', 'lg', 'xl', '2xl']
      const currentIdx = breakpointOrder.indexOf(breakpoint.value)
      const targetIdx = breakpointOrder.indexOf(props.at)
      return currentIdx >= targetIdx
    }

    if (props.below) {
      const breakpointOrder = ['xs', 'sm', 'md', 'lg', 'xl', '2xl']
      const currentIdx = breakpointOrder.indexOf(breakpoint.value)
      const targetIdx = breakpointOrder.indexOf(props.below)
      return currentIdx < targetIdx
    }

    if (props.above) {
      const breakpointOrder = ['xs', 'sm', 'md', 'lg', 'xl', '2xl']
      const currentIdx = breakpointOrder.indexOf(breakpoint.value)
      const targetIdx = breakpointOrder.indexOf(props.above)
      return currentIdx > targetIdx
    }

    return true
  })

  return { isVisible }
}

/**
 * Helper to debounce resize handlers
 * Prevents excessive function calls during window resize
 *
 * @param fn - Function to debounce
 * @param delay - Delay in milliseconds (default: 150)
 */
export function useDebouncedResize<T extends (...args: unknown[]) => void>(
  fn: T,
  delay: number = 150
): T {
  let timeout: ReturnType<typeof setTimeout> | null = null

  return ((...args: Parameters<T>) => {
    if (timeout) {
      clearTimeout(timeout)
    }

    timeout = setTimeout(() => {
      fn(...args)
    }, delay)
  }) as T
}
