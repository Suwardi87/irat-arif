<script setup lang="ts">
/**
 * GoogleMapEmbed - Component for displaying Google Maps embed
 *
 * Shows venue location with optional directions button
 */

interface Location {
  name: string
  address: string
  lat?: number
  lng?: number
  googleMapsUrl?: string
  embedUrl: string
}

interface Props {
  location: Location
  height?: string
  showDirections?: boolean
}

withDefaults(defineProps<Props>(), {
  height: '300px',
  showDirections: true
})
</script>

<template>
  <div class="google-map-embed">
    <!-- Location Info -->
    <div v-if="location.name || location.address" class="mb-4 text-center">
      <h3 v-if="location.name" class="font-serif text-xl md:text-2xl text-gold-500 mb-2">
        {{ location.name }}
      </h3>
      <p v-if="location.address" class="text-white/70">
        {{ location.address }}
      </p>
    </div>

    <!-- Map Embed -->
    <div class="relative rounded-xl overflow-hidden border border-white/10 shadow-lg">
      <iframe
        :src="location.embedUrl"
        :style="{ height }"
        width="100%"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        class="w-full"
        title="Venue Location Map"
      />

      <!-- Directions Button Overlay -->
      <div
        v-if="showDirections && location.googleMapsUrl"
        class="absolute bottom-4 left-4 right-4"
      >
        <a
          :href="location.googleMapsUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="flex items-center justify-center gap-2 w-full bg-gold-500 text-dark-950 px-4 py-3 rounded-lg font-medium hover:bg-gold-600 transition-colors shadow-lg"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span>Buka Google Maps</span>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.google-map-embed :deep(iframe) {
  filter: grayscale(20%) contrast(1.1);
}

.google-map-embed :deep(iframe:hover) {
  filter: grayscale(0%);
  transition: filter 0.3s ease;
}
</style>
