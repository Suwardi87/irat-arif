import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'

/**
 * Composable for handling personalized guest names from URL parameters
 *
 * Usage: Add ?to=GuestName to the invitation URL
 * Example: https://example.com/invitation-slug?to=Budi+Santoso
 *
 * The guest name will be decoded and displayed with proper capitalization
 */
export function useGuestName() {
  const route = useRoute()
  const guestName = ref<string>('')
  const isPersonalized = computed(() => guestName.value.length > 0)

  /**
   * Decode URL parameter and format name with proper capitalization
   * Handles: URL encoding, multiple spaces, and capitalization
   */
  function formatGuestName(rawName: string): string {
    if (!rawName) return ''

    // Decode URL encoding
    const decoded = decodeURIComponent(rawName)

    // Replace multiple spaces with single space and trim
    const cleaned = decoded.replace(/\s+/g, ' ').trim()

    // Capitalize each word
    return cleaned
      .split(' ')
      .map(word => {
        // Handle common Indonesian name prefixes
        const lowerPrefixes = ['van', 'von', 'bin', 'binte']
        if (lowerPrefixes.includes(word.toLowerCase())) {
          return word.toLowerCase()
        }
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      })
      .join(' ')
  }

  /**
   * Get guest name from URL query parameter
   * Priority: ?to > ?u > ?guest > ?name
   */
  function getGuestNameFromQuery(): string {
    const query = route.query

    // Check for common query parameter names
    const nameParam = query.to || query.u || query.guest || query.name

    if (typeof nameParam === 'string') {
      return formatGuestName(nameParam)
    }

    return ''
  }

  // Initialize on mount
  onMounted(() => {
    guestName.value = getGuestNameFromQuery()
  })

  /**
   * Get greeting text based on guest name
   */
  const greeting = computed(() => {
    if (!isPersonalized.value) return ''

    const greetings = [
      `Kepada Yth. ${guestName.value}`,
      `Untuk ${guestName.value}`,
      `Halo, ${guestName.value}`
    ]

    // Random greeting for variety
    return greetings[Math.floor(Math.random() * greetings.length)]
  })

  /**
   * Get invitation opening text
   */
  const openingText = computed(() => {
    if (!isPersonalized.value) {
      return 'Tanpa mengurangi rasa hormat, kami mengundang Anda'
    }

    return `Tanpa mengurangi rasa hormat, kami mengundang ${guestName.value}`
  })

  return {
    guestName,
    isPersonalized,
    greeting,
    openingText,
    formatGuestName
  }
}
