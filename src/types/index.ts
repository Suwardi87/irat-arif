/**
 * Core types for the 3D Digital Invitation system
 * This file defines all TypeScript interfaces used throughout the application
 */

// ============================================================
// INVITATION DATA TYPES
// ============================================================

export interface InvitationData {
  slug: string
  couple: Couple
  event: EventInfo
  gallery: GalleryImage[]
  theme: Theme
  rsvp?: RSVPConfig
}

export interface Couple {
  bride: Person
  groom: Person
  story: string
  meetDate?: Date
  proposalDate?: Date
}

export interface Person {
  name: string
  nickname: string
  title?: string
  photo?: string
  socialMedia?: {
    instagram?: string
    twitter?: string
  }
}

export interface EventInfo {
  name: string
  date: Date
  time: TimeConfig
  location: Location
  dressCode?: string
  message?: string
}

export interface TimeConfig {
  start: string
  end?: string
  timezone?: string
}

export interface Location {
  name: string
  address: string
  city: string
  coordinates: {
    lat: number
    lng: number
  }
  googleMapsUrl?: string
  wazeUrl?: string
}

export interface GalleryImage {
  id: string
  url: string
  thumbnail?: string
  caption?: string
  order: number
  orientation?: 'portrait' | 'landscape' | 'square'
}

export interface Theme {
  name: string
  colors: ThemeColors
  fonts: ThemeFonts
  music?: string
  customizations?: Record<string, unknown>
}

export interface ThemeColors {
  primary: string
  secondary: string
  accent: string
  background: string
  text: string
  textMuted?: string
}

export interface ThemeFonts {
  heading: string
  body: string
  accent?: string
}

export interface RSVPConfig {
  enabled: boolean
  deadline?: Date
  maxGuests?: number
  formFields: FormField[]
}

export interface FormField {
  name: string
  type: 'text' | 'number' | 'select' | 'radio' | 'checkbox' | 'textarea'
  label: string
  required: boolean
  options?: string[]
  placeholder?: string
  validation?: ValidationRule[]
}

export interface ValidationRule {
  type: 'minLength' | 'maxLength' | 'pattern' | 'email'
  value?: string | number
  message: string
}

export interface RSVPSubmission {
  invitationSlug: string
  guestName: string
  guestCount: number
  attendance: 'yes' | 'no' | 'maybe'
  message?: string
  submittedAt: Date
}

// ============================================================
// ANIMATION TYPES
// ============================================================

export interface AnimationConfig {
  duration: number
  easing: string
  delay?: number
}

export interface GSAPTimelineConfig {
  duration?: number
  delay?: number
  ease?: string
  paused?: boolean
  repeat?: number
  yoyo?: boolean
}

// ScrollTrigger config - kept for future use if needed
// export interface ScrollTriggerConfig {
//   trigger?: string | HTMLElement
//   start?: string | number
//   end?: string | number
//   scrub?: boolean | number
//   pin?: boolean
//   markers?: boolean
//   toggleActions?: string
//   onEnter?: () => void
//   onLeave?: () => void
//   onEnterBack?: () => void
//   onLeaveBack?: () => void
// }

// ============================================================
// THREE.JS TYPES
// ============================================================

export type * from 'three'

export interface SceneConfig {
  backgroundColor?: number | string
  fog?: boolean
  fogColor?: number
  fogNear?: number
  fogFar?: number
}

export interface CameraConfig {
  position: Vector3Like
  lookAt: Vector3Like
  fov?: number
  near?: number
  far?: number
}

export interface Vector3Like {
  x: number
  y: number
  z: number
}

export interface ParticleConfig {
  count: number
  size: number
  color: number | string
  speed: number
  opacity?: number
  spread?: Vector3Like
  direction?: Vector3Like
}

export interface LightingConfig {
  ambient?: {
    color?: number | string
    intensity?: number
  }
  directional?: {
    color?: number | string
    intensity?: number
    position?: Vector3Like
  }
  point?: {
    color?: number | string
    intensity?: number
    position?: Vector3Like
    distance?: number
    decay?: number
  }
  hemisphere?: {
    skyColor?: number | string
    groundColor?: number | string
    intensity?: number
  }
}

// ============================================================
// COMPONENT PROP TYPES
// ============================================================

export interface BaseButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  icon?: string
  iconPosition?: 'left' | 'right'
}

export interface BaseCardProps {
  glass?: boolean
  hover?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg'
  border?: boolean
}

export interface LoadingScreenProps {
  logo?: string
  message?: string
  duration?: number
}

// ============================================================
// COMPOSABLE RETURN TYPES
// ============================================================

export interface UseThreeSceneReturn {
  scene: Ref<THREE.Scene | null>
  camera: Ref<THREE.PerspectiveCamera | null>
  renderer: Ref<THREE.WebGLRenderer | null>
  container: Ref<HTMLElement | null>
  isInitialized: Ref<boolean>
  init: () => void
  cleanup: () => void
  resize: () => void
}

export interface UseAnimationReturn {
  timeline: gsap.core.Timeline
  isPlaying: Ref<boolean>
  play: () => void
  pause: () => void
  reverse: () => void
  restart: () => void
  fadeIn: (targets: gsap.TweenTarget, duration?: number, delay?: number) => gsap.core.Tween
  fadeOut: (targets: gsap.TweenTarget, duration?: number) => gsap.core.Tween
  scale: (targets: gsap.TweenTarget, scale: number, duration?: number) => gsap.core.Tween
  cleanup: () => void
}

export interface UseCountdownReturn {
  days: Ref<number>
  hours: Ref<number>
  minutes: Ref<number>
  seconds: Ref<number>
  isExpired: Ref<boolean>
  formatted: Ref<string>
  start: (targetDate: Date) => void
  stop: () => void
  pause: () => void
  resume: () => void
}

export interface UseMusicReturn {
  isPlaying: Ref<boolean>
  volume: Ref<number>
  isMuted: Ref<boolean>
  audio: Ref<HTMLAudioElement | null>
  load: (src: string) => Promise<void>
  play: () => Promise<void>
  pause: () => void
  toggle: () => Promise<void>
  setVolume: (vol: number) => void
  fadeIn: (duration?: number) => void
  fadeOut: (duration?: number) => void
  stop: () => void
}

export interface UseResponsiveReturn {
  width: Ref<number>
  height: Ref<number>
  pixelRatio: Ref<number>
  isMobile: Ref<boolean>
  isTablet: Ref<boolean>
  isDesktop: Ref<boolean>
  isTouch: Ref<boolean>
  orientation: Ref<'portrait' | 'landscape'>
  breakpoint: Ref<'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'>
}

// ============================================================
// STORE TYPES
// ============================================================

export interface InvitationStore {
  data: InvitationData | null
  isLoading: Ref<boolean>
  error: Ref<string | null>
  loadInvitation: (slug: string) => Promise<void>
  updateInvitation: (data: Partial<InvitationData>) => void
}

export interface MusicStore {
  isPlaying: boolean
  volume: number
  isMuted: boolean
  currentTrack: string | null
  play: () => void
  pause: () => void
  toggle: () => void
  setVolume: (volume: number) => void
  setTrack: (track: string) => void
}

// ============================================================
// UTILITY TYPES
// ============================================================

export type Nullable<T> = T | null
export type Optional<T> = T | undefined
export type Dict<T = unknown> = Record<string, T>

export type WithSlug<T> = T & { slug: string }

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}
