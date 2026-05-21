<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
// @ts-ignore - leaflet-routing-machine types may not be available
import 'leaflet-routing-machine'
// @ts-ignore
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'

/**
 * LeafletMap with Routing - OpenStreetMap with driving directions
 *
 * Features:
 * - Custom marker with wedding theme
 * - Dark mode tile layer
 * - Routing from user location or selectable points
 * - Turn-by-turn directions panel
 * - Responsive sizing
 */

interface Location {
  name: string
  address: string
  lat: number
  lng: number
  googleMapsUrl?: string
}

interface Props {
  location: Location
  height?: string
  zoom?: number
  showDirections?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  height: '350px',
  zoom: 13,
  showDirections: true
})

const mapContainer = ref<HTMLElement | null>(null)
const showRoute = ref(false)
const isLocating = ref(false)
const isCalculatingRoute = ref(false)
const routeInfo = ref<{ distance: string; time: string } | null>(null)

let map: L.Map | null = null
let marker: L.Marker | null = null
let routingControl: any = null
let userLocationMarker: L.Marker | null = null

// Custom gold marker icon
const createGoldMarker = () => {
  const goldMarkerHtml = `
    <div style="
      background: linear-gradient(135deg, #f9b31a 0%, #db9010 100%);
      width: 36px;
      height: 36px;
      border-radius: 50% 50% 50% 0;
      transform: rotate(-45deg);
      border: 3px solid #fff;
      box-shadow: 0 2px 10px rgba(249, 179, 26, 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
    ">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="white" style="transform: rotate(45deg);">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </svg>
    </div>
  `

  return L.divIcon({
    html: goldMarkerHtml,
    className: 'gold-marker',
    iconSize: [36, 48],
    iconAnchor: [18, 48],
    popupAnchor: [0, -48]
  })
}

// User location marker
const createUserMarker = () => {
  const userMarkerHtml = `
    <div style="
      background: #3b82f6;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 3px solid #fff;
      box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.3);
      animation: pulse 2s infinite;
    "></div>
  `

  return L.divIcon({
    html: userMarkerHtml,
    className: 'user-marker',
    iconSize: [20, 20],
    iconAnchor: [10, 10]
  })
}

function initMap() {
  if (!mapContainer.value) return

  // Initialize map
  map = L.map(mapContainer.value, {
    center: [props.location.lat, props.location.lng],
    zoom: props.zoom,
    zoomControl: true,
    scrollWheelZoom: false,
    dragging: true,
    tap: true
  })

  // Add dark mode tile layer (CartoDB Dark Matter)
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20
  }).addTo(map)

  // Add destination marker
  marker = L.marker([props.location.lat, props.location.lng], {
    icon: createGoldMarker()
  }).addTo(map)

  // Add popup
  if (props.location.name) {
    marker.bindPopup(`
      <div style="text-align: center; font-family: 'Cormorant Garamond', serif;">
        <strong style="font-size: 14px; color: #f9b31a;">${props.location.name}</strong><br>
        <span style="font-size: 12px; color: #888;">${props.location.address}</span>
      </div>
    `, { maxWidth: 200 })
  }
}

// Show route from user's current location
async function showRouteFromHere() {
  isLocating.value = true

  let userLat = 0
  let userLng = 0

  try {
    // Get user's location
    const position = await getCurrentPosition()
    userLat = position.coords.latitude
    userLng = position.coords.longitude

    // Add user marker
    if (userLocationMarker) {
      userLocationMarker.remove()
    }

    userLocationMarker = L.marker([userLat, userLng], {
      icon: createUserMarker()
    }).addTo(map)

    userLocationMarker.bindPopup('Lokasi Anda').openPopup()

    // Set calculating state
    isCalculatingRoute.value = true

    // Timeout fallback if OSRM takes too long (5 seconds)
    const timeoutId = setTimeout(() => {
      if (isCalculatingRoute.value) {
        console.warn('[LeafletMap] Route calculation timeout, using fallback')

        // Calculate fallback distance using Haversine formula
        const R = 6371 // Earth's radius in km
        const dLat = (props.location.lat - userLat) * Math.PI / 180
        const dLon = (props.location.lng - userLng) * Math.PI / 180
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                  Math.cos(userLat * Math.PI / 180) * Math.cos(props.location.lat * Math.PI / 180) *
                  Math.sin(dLon / 2) * Math.sin(dLon / 2)
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
        const distance = (R * c).toFixed(1)
        const time = Math.round((parseFloat(distance) / 30) * 60)

        routeInfo.value = { distance, time }
        isCalculatingRoute.value = false
      }
    }, 5000)

    // Remove existing route
    if (routingControl) {
      map!.removeControl(routingControl)
    }

    // Create route using OSRM
    routingControl = L.Routing.control({
      waypoints: [
        L.latLng(userLat, userLng),
        L.latLng(props.location.lat, props.location.lng)
      ],
      routeWhileDragging: false,
      showAlternatives: false,
      lineOptions: {
        styles: [
          {
            color: '#f9b31a',
            opacity: 0.8,
            weight: 6
          },
          {
            color: '#db9010',
            opacity: 0.5,
            weight: 4
          }
        ]
      },
      createMarker: function() { return null }, // Don't create additional markers
      router: L.Routing.osrmv1({
        serviceUrl: 'https://router.project-osrm.org/route/v1'
      }),
      // Customize the instructions container
      containerClassName: 'leaflet-routing-container-hide',
      addWaypoints: false,
      draggableWaypoints: false,
      fitSelectedRoutes: true,
      show: false
    }).addTo(map)

    // Fit map to show the entire route
    setTimeout(() => {
      map?.fitBounds([
        [userLat, userLng],
        [props.location.lat, props.location.lng]
      ], { padding: [50, 50] })
    }, 500)

    showRoute.value = true

    // Get route info and display
    routingControl.on('routesfound', (e: any) => {
      clearTimeout(timeoutId)
      isCalculatingRoute.value = false

      console.log('[LeafletMap] Routes found:', e)
      const route = e.routes?.[0]

      if (!route) {
        console.warn('[LeafletMap] No route data available')
        // Use fallback calculation
        const R = 6371
        const dLat = (props.location.lat - userLat) * Math.PI / 180
        const dLon = (props.location.lng - userLng) * Math.PI / 180
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                  Math.cos(userLat * Math.PI / 180) * Math.cos(props.location.lat * Math.PI / 180) *
                  Math.sin(dLon / 2) * Math.sin(dLon / 2)
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
        const distance = (R * c).toFixed(1)
        const time = Math.round((parseFloat(distance) / 30) * 60)
        routeInfo.value = { distance, time }
        return
      }

      const distance = (route.summary?.totalDistance / 1000 || route.totalDistance / 1000).toFixed(1)
      const time = Math.round((route.summary?.totalTime || route.totalTime) / 60)

      // Store route info for warning display
      routeInfo.value = { distance, time }

      // Show route info in popup
      if (marker) {
        marker.bindPopup(`
          <div style="text-align: center; font-family: 'Cormorant Garamond', serif;">
            <strong style="font-size: 14px; color: #f9b31a;">${props.location.name}</strong><br>
            <span style="font-size: 12px; color: #888;">${props.location.address}</span><br>
            <hr style="margin: 8px 0; border-color: #333;">
            <span style="font-size: 13px; color: #fff;">📍 ${distance} km | ⏱️ ${time} menit</span>
          </div>
        `).openPopup()
      }
    })

    // Handle routing errors
    routingControl.on('routingerror', (e: any) => {
      clearTimeout(timeoutId)
      isCalculatingRoute.value = false

      console.error('[LeafletMap] Routing error:', e)

      // Calculate fallback distance using Haversine formula
      const R = 6371 // Earth's radius in km
      const dLat = (props.location.lat - userLat) * Math.PI / 180
      const dLon = (props.location.lng - userLng) * Math.PI / 180
      const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                Math.cos(userLat * Math.PI / 180) * Math.cos(props.location.lat * Math.PI / 180) *
                Math.sin(dLon / 2) * Math.sin(dLon / 2)
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
      const distance = (R * c).toFixed(1)

      // Estimate time (assuming 30 km/h average in traffic)
      const time = Math.round((parseFloat(distance) / 30) * 60)

      routeInfo.value = { distance, time }

      if (marker) {
        marker.bindPopup(`
          <div style="text-align: center; font-family: 'Cormorant Garamond', serif;">
            <strong style="font-size: 14px; color: #f9b31a;">${props.location.name}</strong><br>
            <span style="font-size: 12px; color: #888;">${props.location.address}</span><br>
            <hr style="margin: 8px 0; border-color: #333;">
            <span style="font-size: 11px; color: #ffa500;">⚠️ Rute tidak tersedia. Estimasi:</span><br>
            <span style="font-size: 13px; color: #fff;">📍 ${distance} km | ⏱️ ~${time} menit</span>
          </div>
        `).openPopup()
      }
    })

  } catch (error) {
    console.error('Error getting location:', error)
    alert('Tidak dapat mengambil lokasi Anda. Pastikan GPS aktif.')
  } finally {
    isLocating.value = false
  }
}

// Get current position as Promise
function getCurrentPosition(): Promise<GeolocationPosition> {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error('Geolocation not supported'))
      return
    }

    navigator.geolocation.getCurrentPosition(
      resolve,
      reject,
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      }
    )
  })
}

// Clear route
function clearRoute() {
  if (routingControl) {
    map!.removeControl(routingControl)
    routingControl = null
  }
  if (userLocationMarker) {
    userLocationMarker.remove()
    userLocationMarker = null
  }

  // Reset view
  map?.setView([props.location.lat, props.location.lng], props.zoom)
  showRoute.value = false
  routeInfo.value = null

  // Reset popup
  if (marker) {
    marker.bindPopup(`
      <div style="text-align: center; font-family: 'Cormorant Garamond', serif;">
        <strong style="font-size: 14px; color: #f9b31a;">${props.location.name}</strong><br>
        <span style="font-size: 12px; color: #888;">${props.location.address}</span>
      </div>
    `)
  }
}

// Open in external maps
function openInMaps() {
  const { lat, lng, googleMapsUrl } = props.location

  if (showRoute.value && userLocationMarker) {
    // Open with directions from current location
    const userLatLng = userLocationMarker.getLatLng()
    window.open(`https://www.google.com/maps/dir/?api=1&origin=${userLatLng.lat},${userLatLng.lng}&destination=${lat},${lng}`, '_blank')
  } else if (googleMapsUrl) {
    window.open(googleMapsUrl, '_blank')
  } else {
    window.open(`https://www.google.com/maps?q=${lat},${lng}`, '_blank')
  }
}

// Watch for location changes
watch(
  () => props.location,
  (newLocation) => {
    if (map && marker) {
      marker.setLatLng([newLocation.lat, newLocation.lng])
      clearRoute()
    }
  },
  { deep: true }
)

onMounted(() => {
  setTimeout(() => {
    initMap()
  }, 100)
})

onUnmounted(() => {
  if (map) {
    map.remove()
    map = null
    marker = null
    routingControl = null
    userLocationMarker = null
  }
})
</script>

<template>
  <div class="leaflet-map-embed">
    <!-- Location Info -->
    <div v-if="location.name || location.address" class="mb-4 text-center">
      <h3 v-if="location.name" class="font-serif text-xl md:text-2xl text-gold-500 mb-2">
        {{ location.name }}
      </h3>
      <p v-if="location.address" class="text-white/70 text-sm px-4">
        {{ location.address }}
      </p>
    </div>

    <!-- Map Container -->
    <div class="relative rounded-xl overflow-hidden border border-white/10 shadow-lg">
      <div
        ref="mapContainer"
        class="w-full"
        :style="{ height }"
      />

      <!-- Route Button (Top Left) -->
      <div v-if="showDirections" class="absolute top-4 left-4 z-[1000]">
        <button
          v-if="!showRoute"
          type="button"
          :disabled="isLocating"
          class="flex items-center gap-2 bg-dark-900/90 backdrop-blur text-gold-500 px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg font-medium hover:bg-dark-800 transition-colors shadow-lg border border-gold-500/30 text-sm"
          @click="showRouteFromHere"
        >
          <svg v-if="!isLocating" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          </svg>
          <svg v-else class="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
          </svg>
          <span>{{ isLocating ? 'Mencari...' : 'Rute dari Saya' }}</span>
        </button>

        <button
          v-else
          type="button"
          class="flex items-center gap-2 bg-red-500/90 backdrop-blur text-white px-3 py-2 sm:px-4 sm:py-2.5 rounded-lg font-medium hover:bg-red-600 transition-colors shadow-lg text-sm"
          @click="clearRoute"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
          <span>Tutup Rute</span>
        </button>
      </div>

      <!-- Directions Button Overlay (Bottom) -->
      <div class="absolute bottom-4 left-4 right-4 z-[1000]">
        <button
          type="button"
          class="flex items-center justify-center gap-2 w-full bg-gold-500 text-dark-950 px-4 py-3 rounded-lg font-medium hover:bg-gold-600 transition-colors shadow-lg text-sm sm:text-base"
          @click="openInMaps"
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
          <span>{{ showRoute ? 'Navigasi ke Lokasi' : 'Buka Google Maps' }}</span>
        </button>
      </div>
    </div>

    <!-- Route Warning/Alert Banner -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="showRoute && routeInfo" class="mt-4">
        <!-- Alert Banner -->
        <div class="relative overflow-hidden rounded-lg border border-gold-500/30 bg-gradient-to-r from-gold-500/10 via-gold-500/5 to-transparent">
          <!-- Animated warning icon -->
          <div class="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-gold-500 to-gold-700"></div>

          <div class="flex items-start gap-4 p-4">
            <!-- Icon -->
            <div class="flex-shrink-0">
              <div class="w-10 h-10 rounded-full bg-gold-500/20 flex items-center justify-center animate-pulse">
                <svg class="w-5 h-5 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>

            <!-- Content -->
            <div class="flex-1 min-w-0">
              <h4 class="font-serif text-lg text-gold-500 mb-1">Rute Menuju Lokasi</h4>
              <p class="text-white/70 text-sm mb-3">
                Rute ditampilkan dari lokasi Anda ke {{ location.name }}
              </p>

              <!-- Route Stats -->
              <div class="flex flex-wrap gap-4 mb-3">
                <div class="flex items-center gap-2 bg-dark-900/50 px-3 py-1.5 rounded-lg">
                  <svg class="w-4 h-4 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  <span class="text-white font-medium">{{ routeInfo.distance }} km</span>
                </div>
                <div class="flex items-center gap-2 bg-dark-900/50 px-3 py-1.5 rounded-lg">
                  <svg class="w-4 h-4 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span class="text-white font-medium">{{ routeInfo.time }} menit</span>
                </div>
              </div>

              <!-- Helper Text -->
              <p class="text-white/50 text-xs">
                <span class="text-gold-500">💡</span> Klik "Navigasi ke Lokasi" untuk turn-by-turn directions di Google Maps
              </p>
            </div>

            <!-- Close Button -->
            <button
              type="button"
              class="flex-shrink-0 text-white/50 hover:text-white transition-colors"
              @click="clearRoute"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <!-- Shimmer effect -->
          <div class="absolute inset-0 pointer-events-none overflow-hidden rounded-lg">
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-gold-500/5 to-transparent animate-shimmer" />
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style>
/* Leaflet dark mode overrides */
:deep(.leaflet-container) {
  background: #141414;
  font-family: 'Montserrat', sans-serif;
}

:deep(.leaflet-popup-content-wrapper) {
  background: rgba(20, 20, 20, 0.95) !important;
  border: 1px solid rgba(249, 179, 26, 0.3);
  border-radius: 8px;
  backdrop-filter: blur(10px);
  color: #fff;
}

:deep(.leaflet-popup-tip) {
  background: rgba(20, 20, 20, 0.95) !important;
}

:deep(.leaflet-control-zoom) {
  border: none !important;
}

:deep(.leaflet-control-zoom a) {
  background: rgba(249, 179, 26, 0.9) !important;
  color: #0a0a0a !important;
  border: none !important;
}

:deep(.leaflet-control-zoom a:hover) {
  background: rgba(219, 144, 16, 1) !important;
}

:deep(.leaflet-routing-container) {
  background: rgba(20, 20, 20, 0.95) !important;
  color: #fff;
  border: 1px solid rgba(249, 179, 26, 0.3);
}

:deep(.leaflet-routing-container-hide) {
  display: none !important;
}

:deep(.leaflet-routing-error) {
  background: rgba(220, 38, 38, 0.9) !important;
  color: #fff;
}

/* Route line */
:deep(.leaflet-routing-line) {
  filter: drop-shadow(0 0 4px rgba(249, 179, 26, 0.5));
}

/* Custom marker animation */
.gold-marker {
  filter: drop-shadow(0 2px 8px rgba(249, 179, 26, 0.4));
  animation: marker-bounce 0.6s ease-out;
}

@keyframes marker-bounce {
  0% {
    transform: translateY(-20px) scale(0);
    opacity: 0;
  }
  50% {
    transform: translateY(0) scale(1.1);
  }
  100% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
}

/* User marker pulse */
@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.5);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

/* Shimmer effect for alert banner */
@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.animate-shimmer {
  animation: shimmer 3s ease-in-out infinite;
}
</style>
