import { ref, computed } from 'vue'
import type { Router } from 'vue-router'

/**
 * Invitation data types matching the JSON structure
 */
export interface InvitationData {
  id: string
  slug: string
  isActive: boolean
  couple: {
    bride: Person
    groom: Person
  }
  event: Event
  groomDetail?: Event
  reception?: Event
  theme: Theme
  music: MusicConfig
  gallery: GalleryConfig
  rsvp: RsvpConfig
  gift?: GiftConfig
  quotes: Quote[]
  seo: SeoConfig
  createdAt: string
  updatedAt: string
}

export interface Person {
  fullName: string
  nickname: string
  fatherName?: string
  motherName?: string
}

export interface Event {
  name: string
  date: string
  endDate: string
  venue: string
  address: string
  location: Location
}

export interface Location {
  name: string
  address: string
  lat: number
  lng: number
  googleMapsUrl?: string
}

export interface Theme {
  id: string
  name: string
  primaryColor: string
  secondaryColor: string
  backgroundColor: string
  font: {
    heading: string
    body: string
    script: string
  }
}

export interface MusicConfig {
  enabled: boolean
  src: string
  volume: number
  autoPlay: boolean
}

export interface GalleryConfig {
  enabled: boolean
  images: string[]
}

export interface RsvpConfig {
  enabled: boolean
  whatsapp?: {
    enabled: boolean
    phoneNumber: string
    message: string
  }
  form: {
    enabled: boolean
    fields: FormField[]
  }
}

export interface FormField {
  name: string
  label: string
  type: 'text' | 'select' | 'radio' | 'textarea'
  required: boolean
  placeholder?: string
  options?: { value: string; label: string }[]
}

export interface GiftConfig {
  enabled: boolean
  banks: Bank[]
}

export interface Bank {
  bankName: string
  accountNumber: string
  accountName: string
  icon: string
}

export interface Quote {
  text: string
  source: string
}

export interface SeoConfig {
  title: string
  description: string
  image: string
}

/**
 * Composable for loading and managing invitation data
 */
export function useInvitationData(router: Router) {
  const data = ref<InvitationData | null>(null)
  const isLoading = ref(false)
  const error = ref<string | null>(null)

  /**
   * Load invitation data from JSON file by slug
   */
  async function loadData(slug: string): Promise<InvitationData | null> {
    isLoading.value = true
    error.value = null

    try {
      // Fetch from public data folder
      const baseUrl = import.meta.env.BASE_URL || '/'
      const response = await fetch(`${baseUrl}data/invitations.json`)

      if (!response.ok) {
        throw new Error('Failed to load invitation data')
      }

      const json = await response.json()

      // Find invitation by slug
      const invitation = json.invitations.find(
        (inv: InvitationData) => inv.slug === slug && inv.isActive
      )

      if (!invitation) {
        throw new Error(`Invitation with slug "${slug}" not found`)
      }

      data.value = invitation
      return invitation
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Unknown error'
      console.error('[useInvitationData] Error:', e)

      // Redirect to 404 if not found
      if (error.value.includes('not found')) {
        router.push({ name: 'not-found' })
      }

      return null
    } finally {
      isLoading.value = false
    }
  }

  /**
   * Get couple names formatted
   */
  const coupleNames = computed(() => {
    if (!data.value) return { bride: '', groom: '', full: '' }

    const bride = data.value.couple.bride.fullName
    const groom = data.value.couple.groom.fullName

    return {
      bride,
      groom,
      full: `${bride} & ${groom}`,
      short: `${data.value.couple.bride.nickname} & ${data.value.couple.groom.nickname}`
    }
  })

  /**
   * Get event dates as Date objects
   */
  const eventDates = computed(() => {
    if (!data.value) return null

    return {
      main: {
        start: new Date(data.value.event.date),
        end: new Date(data.value.event.endDate)
      },
      groomDetail: data.value.groomDetail
        ? {
            start: new Date(data.value.groomDetail.date),
            end: data.value.groomDetail.endDate
              ? new Date(data.value.groomDetail.endDate)
              : undefined
          }
        : null,
      reception: data.value.reception
        ? {
            start: new Date(data.value.reception.date),
            end: data.value.reception.endDate
              ? new Date(data.value.reception.endDate)
              : undefined
          }
        : null
    }
  })

  /**
   * Get formatted date string
   */
  function formatDateString(date: Date, format: 'long' | 'short' = 'long'): string {
    const options: Intl.DateTimeFormatOptions =
      format === 'long'
        ? {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }
        : {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          }

    return date.toLocaleDateString('id-ID', options)
  }

  /**
   * Get formatted time string
   */
  function formatTimeString(date: Date): string {
    return date.toLocaleTimeString('id-ID', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    })
  }

  /**
   * Generate WhatsApp link for RSVP
   */
  const whatsappRsvpLink = computed(() => {
    if (!data.value?.rsvp.whatsapp?.enabled) return null

    const { phoneNumber, message } = data.value.rsvp.whatsapp
    const encodedMessage = encodeURIComponent(message)

    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`
  })

  return {
    data,
    isLoading,
    error,
    loadData,
    coupleNames,
    eventDates,
    formatDateString,
    formatTimeString,
    whatsappRsvpLink
  }
}
