import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

export interface GuestData {
  slug: string
  name: string
  group?: string
  maxGuests?: number
}

export function useGuestName() {
  const route = useRoute()
  const guestName = ref<string>('')
  const guestData = ref<GuestData | null>(null)
  const isPersonalized = computed(() => guestName.value.length > 0)

  function formatGuestName(rawName: string): string {
    if (!rawName) return ''

    const decoded = decodeURIComponent(rawName)
    const cleaned = decoded.replace(/\s+/g, ' ').trim()

    return cleaned
      .split(' ')
      .map(word => {
        const lowerPrefixes = ['van', 'von', 'bin', 'binte']
        if (lowerPrefixes.includes(word.toLowerCase())) {
          return word.toLowerCase()
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      })
      .join(' ')
  }

  function slugify(name: string): string {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim()
  }

  async function loadGuestFromSlug(slug: string): Promise<GuestData | null> {
    try {
      const currentSlug = route.params.slug as string
      const response = await fetch('/data/invitations.json')
      const json = await response.json()
      const invitation = json.invitations.find((inv: any) => inv.slug === currentSlug && inv.isActive)
      if (invitation?.guests) {
        const found = invitation.guests.find((g: GuestData) => g.slug === slug)
        return found || null
      }
    } catch {
      // silently fail
    }
    return null
  }

  function trackGuestOpen(guestSlug: string) {
    try {
      const key = `wedding_guest_opens_${route.params.slug}`
      const data = JSON.parse(localStorage.getItem(key) || '{}')
      if (!data[guestSlug]) {
        data[guestSlug] = {
          firstOpenedAt: new Date().toISOString(),
          openCount: 1
        }
      } else {
        data[guestSlug].openCount = (data[guestSlug].openCount || 0) + 1
        data[guestSlug].lastOpenedAt = new Date().toISOString()
      }
      localStorage.setItem(key, JSON.stringify(data))
    } catch {
      // silently fail
    }
  }

  onMounted(async () => {
    const query = route.query
    const guestSlug = query.guest as string

    if (guestSlug) {
      const data = await loadGuestFromSlug(guestSlug)
      if (data) {
        guestData.value = data
        guestName.value = data.name
        trackGuestOpen(guestSlug)
        return
      }
    }

    const nameParam = query.to || query.u || query.name
    if (typeof nameParam === 'string') {
      guestName.value = formatGuestName(nameParam)
    }
  })

  const greeting = computed(() => {
    if (!isPersonalized.value) return ''

    const greetings = [
      `Kepada Yth. ${guestName.value}`,
      `Untuk ${guestName.value}`,
      `Halo, ${guestName.value}`
    ]

    return greetings[Math.floor(Math.random() * greetings.length)]
  })

  const openingText = computed(() => {
    if (!isPersonalized.value) {
      return 'Tanpa mengurangi rasa hormat, kami mengundang Anda'
    }

    return `Tanpa mengurangi rasa hormat, kami mengundang ${guestName.value}`
  })

  return {
    guestName,
    guestData,
    isPersonalized,
    greeting,
    openingText,
    formatGuestName,
    slugify
  }
}
