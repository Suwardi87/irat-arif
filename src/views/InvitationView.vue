<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import BaseLoader from '@/components/base/BaseLoader.vue'
import BaseSection from '@/components/base/BaseSection.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseCard from '@/components/base/BaseCard.vue'
import MusicButton from '@/components/ui/MusicButton.vue'
import ScrollIndicator from '@/components/ui/ScrollIndicator.vue'
import SaveCalendarButton from '@/components/ui/SaveCalendarButton.vue'
import LeafletMap from '@/components/ui/LeafletMap.vue'
import WaRsvpModal from '@/components/ui/WaRsvpModal.vue'
import ThreeCanvas from '@/components/3d/ThreeCanvas.vue'
import ParticleField from '@/components/3d/ParticleField.vue'
import Wedding3DScene from '@/components/3d/Wedding3DScene.vue'
import { useCountdown } from '@/composables/useCountdown'
import { useAnimation } from '@/composables/useAnimation'
import { useGuestName } from '@/composables/useGuestName'
import { useInvitationData } from '@/composables/useInvitationData'

// Disable automatic attrs inheritance since we have multiple root elements
defineOptions({
  inheritAttrs: false
})

/**
 * InvitationView - Main invitation page with 3D effects
 *
 * Features:
 * - Personalized guest name from URL (?to=GuestName)
 * - Cinematic 3D hero section
 * - Gold particle effects
 * - Countdown timer
 * - Save to Calendar button
 * - Google Maps embed
 * - Smooth scroll animations
 * - Music player
 * - RSVP form
 * - Gallery section
 */

const route = useRoute()
const slug = route.params.slug as string

// State
const isLoading = ref(true)
const particleFieldRef = ref<InstanceType<typeof ParticleField> | null>(null)
const showWaRsvpModal = ref(false)

// Composables
const { days, hours, minutes, seconds, start } = useCountdown()
const { fadeIn } = useAnimation()
const { isPersonalized, greeting, openingText } = useGuestName()
const {
  data: invitationData,
  loadData,
  coupleNames,
  eventDates,
  formatDateString,
  formatTimeString,
  whatsappRsvpLink
} = useInvitationData(route)

// Initialize
onMounted(async () => {
  // Load invitation data from JSON
  await loadData(slug)

  // Start countdown if data loaded
  if (eventDates.value?.main) {
    start(eventDates.value.main.start)
  }

  // Wait for loader
  setTimeout(() => {
    isLoading.value = false

    // Start entrance animations after loader
    setTimeout(() => {
      entranceAnimation()
    }, 500)
  }, 3000)
})

// Watch for slug changes
watch(
  () => route.params.slug,
  async (newSlug) => {
    if (newSlug) {
      await loadData(newSlug as string)
    }
  }
)

// Entrance animation
function entranceAnimation() {
  // Use gsap.defaults to suppress warnings for missing elements
  const originalWarn = gsap.defaults
  gsap.defaults({})

  // Only animate elements that exist
  const greeting = document.querySelector('.hero-greeting')
  const title = document.querySelector('.hero-title')
  const names = document.querySelector('.hero-names')
  const date = document.querySelector('.hero-date')
  const cta = document.querySelector('.hero-cta')

  if (greeting) fadeIn('.hero-greeting', 1, 0.1)
  if (title) fadeIn('.hero-title', 1, 0.3)
  if (names) fadeIn('.hero-names', 1, 0.5)
  if (date) fadeIn('.hero-date', 1, 0.7)
  if (cta) fadeIn('.hero-cta', 1, 0.9)

  gsap.defaults(originalWarn)
}

// Scroll to details
function scrollToDetails() {
  const section = document.querySelector('#details-section')
  section?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

// Handle 3D scene ready
function handleSceneReady(_scene: THREE.Scene, _camera: THREE.Camera) {
  console.log('[InvitationView] 3D Scene ready')
}

// Handle loader complete
function handleLoaderComplete() {
  // Loader completion is handled in onMounted
}

// Get calendar event details
const calendarEvent = computed(() => {
  if (!eventDates.value?.main || !invitationData.value) return null

  return {
    title: `The Wedding of ${coupleNames.value.full}`,
    description: invitationData.value.event.name,
    location: invitationData.value.event.location.googleMapsUrl,
    startDate: eventDates.value.main.start,
    endDate: eventDates.value.main.end
  }
})
</script>

<template>
  <div
    v-if="invitationData"
    class="min-h-screen bg-dark-950 text-white"
    :style="{
      '--color-primary': invitationData.theme.primaryColor,
      '--color-secondary': invitationData.theme.secondaryColor,
      '--color-bg': invitationData.theme.backgroundColor
    }"
  >
    <!-- Layered 3D Background -->
    <Wedding3DScene theme="gold" :intensity="0.7" :enable-zoom="true" :auto-rotate="true" :auto-rotate-speed="0.3" />
    <!-- Loading Screen -->
    <BaseLoader
      v-if="isLoading"
      :title="`The Wedding of ${coupleNames.short}`"
      :duration="3000"
      @loaded="handleLoaderComplete"
    />

    <!-- Music Button -->
    <MusicButton
      v-if="!isLoading && invitationData.music.enabled"
      :src="invitationData.music.src"
      :volume="invitationData.music.volume"
      :auto-play="invitationData.music.autoPlay"
      position="bottom-right"
    />

    <!-- Scroll Indicator -->
    <ScrollIndicator v-if="!isLoading" />

    <!-- Hero Section with 3D -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- 3D Canvas Background -->
      <ThreeCanvas
        :scene="{
          backgroundColor: parseInt(invitationData.theme.backgroundColor.replace('#', '0x')),
          fog: true,
          fogColor: parseInt(invitationData.theme.backgroundColor.replace('#', '0x')),
          fogNear: 1,
          fogFar: 100
        }"
        :camera="{ position: { x: 0, y: 0, z: 5 }, lookAt: { x: 0, y: 0, z: 0 } }"
        class="absolute inset-0"
        @ready="handleSceneReady"
      >
        <template #default>
          <ParticleField
            ref="particleFieldRef"
            :count="300"
            :size="0.05"
            color="#D4AF37"
            :interactive="true"
          />
        </template>
      </ThreeCanvas>

      <!-- Hero Content -->
      <div class="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <!-- Personalized Greeting -->
        <p
          v-if="isPersonalized"
          class="hero-greeting font-sans text-lg md:text-xl text-white/70 mb-6 opacity-0"
        >
          {{ greeting }}
        </p>

        <!-- Wedding Date -->
        <p
          v-if="eventDates?.main"
          class="hero-date font-script text-xl sm:text-2xl md:text-3xl text-gold-500 mb-4 px-4 opacity-0"
        >
          {{ formatDateString(eventDates.main.start) }}
        </p>

        <!-- Title -->
        <h1 class="hero-title font-serif text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-6 sm:mb-8 px-4 text-gradient-gold opacity-0">
          {{ invitationData.event.name }}
        </h1>

        <!-- Names -->
        <div class="hero-names mb-8 sm:mb-12 px-4 opacity-0">
          <p class="font-serif text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white mb-3 sm:mb-4">
            {{ coupleNames.bride }}
          </p>
          <p class="font-script text-3xl sm:text-4xl md:text-5xl text-gold-500 my-3 sm:my-4">&</p>
          <p class="font-serif text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white">
            {{ coupleNames.groom }}
          </p>
        </div>

        <!-- CTA -->
        <div class="hero-cta opacity-0">
          <BaseButton
            variant="primary"
            size="lg"
            @click="scrollToDetails"
          >
            Buka Undangan
          </BaseButton>
        </div>
      </div>

      <!-- Bottom gradient fade -->
      <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark-950 to-transparent pointer-events-none" />
    </section>

    <!-- Opening Section -->
    <BaseSection bg-dark>
      <div class="max-w-3xl mx-auto text-center">
        <svg class="w-12 h-12 text-gold-500/30 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>

        <!-- Bismillah -->
        <p class="font-arabic text-2xl sm:text-3xl text-gold-500 mb-6 sm:mb-8">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</p>

        <!-- Opening Text -->
        <p class="font-serif text-base sm:text-lg md:text-xl text-white/80 leading-relaxed mb-4 sm:mb-6 px-4">
          Assalamu'alaikum Warahmatullahi Wabarakatuh
        </p>

        <p class="text-sm sm:text-base text-white/70 leading-relaxed mb-6 sm:mb-8 px-4">
          {{ openingText }}
        </p>

        <p class="text-sm sm:text-base text-white/70 leading-relaxed px-4">
          Dalam rangka merayakan pernikahan kami, kami bermaksud mengundang Bapak/Ibu/Saudara/i
          untuk hadir di acara pernikahan putra-putri kami.
        </p>
      </div>
    </BaseSection>

    <!-- Couple Section -->
    <BaseSection>
      <div class="max-w-5xl mx-auto">
        <h2 class="font-serif text-2xl sm:text-3xl md:text-4xl text-gold-500 text-center mb-8 sm:mb-12 md:mb-16">
          Mempelai
        </h2>

        <div class="grid sm:grid-cols-2 gap-8 sm:gap-12">
          <!-- Bride -->
          <div class="text-center">
            <div class="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-br from-gold-500/20 to-gold-500/5 border-2 border-gold-500/30 flex items-center justify-center">
              <svg class="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 text-gold-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9H15V22H13V16H11V22H9V9H3V7H21V9Z" />
              </svg>
            </div>
            <h3 class="font-serif text-xl sm:text-2xl md:text-3xl text-white mb-2">
              {{ invitationData.couple.bride.fullName }}
            </h3>
            <p class="font-script text-lg sm:text-xl text-gold-500 mb-3 sm:mb-4">
              {{ invitationData.couple.bride.nickname }}
            </p>
            <p class="text-white/60 text-xs sm:text-sm px-4">
              Putri dari {{ invitationData.couple.bride.fatherName }} &
              {{ invitationData.couple.bride.motherName }}
            </p>
          </div>

          <!-- Groom -->
          <div class="text-center">
            <div class="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-br from-gold-500/20 to-gold-500/5 border-2 border-gold-500/30 flex items-center justify-center">
              <svg class="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 text-gold-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9H15V22H13V16H11V22H9V9H3V7H21V9Z" />
              </svg>
            </div>
            <h3 class="font-serif text-xl sm:text-2xl md:text-3xl text-white mb-2">
              {{ invitationData.couple.groom.fullName }}
            </h3>
            <p class="font-script text-lg sm:text-xl text-gold-500 mb-3 sm:mb-4">
              {{ invitationData.couple.groom.nickname }}
            </p>
            <p class="text-white/60 text-xs sm:text-sm px-4">
              Putra dari {{ invitationData.couple.groom.fatherName }} &
              {{ invitationData.couple.groom.motherName }}
            </p>
          </div>
        </div>
      </div>
    </BaseSection>

    <!-- Event Details Section -->
    <BaseSection id="details-section" bg-dark>
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="font-serif text-3xl md:text-4xl text-gold-500 mb-12">
          Save The Date
        </h2>

        <!-- Main Event Card -->
        <BaseCard class="mb-8">
          <p class="font-script text-2xl text-gold-500 mb-4">{{ invitationData.event.name }}</p>

          <p v-if="eventDates?.main" class="font-serif text-5xl md:text-6xl text-white mb-2">
            {{ eventDates.main.start.getDate() }}
          </p>
          <p v-if="eventDates?.main" class="font-sans text-xl text-gold-500 mb-8">
            {{ eventDates.main.start.toLocaleDateString('id-ID', { month: 'long', year: 'numeric' }) }}
          </p>

          <div class="border-t border-white/10 pt-8 space-y-2">
            <p v-if="eventDates?.main" class="text-white/80">
              Pukul {{ formatTimeString(eventDates.main.start) }} -
              {{ formatTimeString(eventDates.main.end) }} WIB
            </p>
            <p class="text-white/80">{{ invitationData.event.venue }}</p>
            <p class="text-white/60 text-sm">{{ invitationData.event.address }}</p>
          </div>

          <!-- Save Calendar Button -->
          <div v-if="calendarEvent" class="mt-6">
            <SaveCalendarButton
              :event="calendarEvent"
              variant="outline"
              size="md"
            />
          </div>
        </BaseCard>

        <!-- Groom Detail -->
        <BaseCard v-if="invitationData.groomDetail" class="mb-8">
          <p class="font-script text-2xl text-gold-500 mb-4">Akad Nikah</p>
          <div class="border-t border-white/10 pt-8 space-y-2">
            <p class="text-white/80">{{ formatDateString(new Date(invitationData.groomDetail.date)) }}</p>
            <p class="text-white/80">
              Pukul {{ formatTimeString(new Date(invitationData.groomDetail.date)) }} WIB
            </p>
            <p class="text-white/60 text-sm">{{ invitationData.groomDetail.address }}</p>
          </div>
        </BaseCard>

        <!-- Reception -->
        <BaseCard v-if="invitationData.reception" class="mb-8">
          <p class="font-script text-2xl text-gold-500 mb-4">Resepsi</p>
          <div class="border-t border-white/10 pt-8 space-y-2">
            <p class="text-white/80">{{ formatDateString(new Date(invitationData.reception.date)) }}</p>
            <p class="text-white/80">
              Pukul {{ formatTimeString(new Date(invitationData.reception.date)) }} WIB
            </p>
            <p class="text-white/60 text-sm">{{ invitationData.reception.address }}</p>
          </div>
        </BaseCard>

        <!-- Countdown -->
        <div class="grid grid-cols-4 gap-2 sm:gap-3 md:gap-4 max-w-lg mx-auto px-4">
          <div class="glass-dark p-2 sm:p-3 md:p-4 rounded-lg text-center">
            <p class="font-serif text-2xl sm:text-3xl md:text-4xl text-gold-500">{{ days }}</p>
            <p class="text-[10px] sm:text-xs text-white/60 uppercase tracking-wider">Hari</p>
          </div>
          <div class="glass-dark p-2 sm:p-3 md:p-4 rounded-lg text-center">
            <p class="font-serif text-2xl sm:text-3xl md:text-4xl text-gold-500">{{ hours }}</p>
            <p class="text-[10px] sm:text-xs text-white/60 uppercase tracking-wider">Jam</p>
          </div>
          <div class="glass-dark p-2 sm:p-3 md:p-4 rounded-lg text-center">
            <p class="font-serif text-2xl sm:text-3xl md:text-4xl text-gold-500">{{ minutes }}</p>
            <p class="text-[10px] sm:text-xs text-white/60 uppercase tracking-wider">Menit</p>
          </div>
          <div class="glass-dark p-2 sm:p-3 md:p-4 rounded-lg text-center">
            <p class="font-serif text-2xl sm:text-3xl md:text-4xl text-gold-500">{{ seconds }}</p>
            <p class="text-[10px] sm:text-xs text-white/60 uppercase tracking-wider">Detik</p>
          </div>
        </div>
      </div>
    </BaseSection>

    <!-- Location Section with Google Maps -->
    <BaseSection>
      <div class="max-w-4xl mx-auto">
        <h2 class="font-serif text-3xl md:text-4xl text-gold-500 text-center mb-12">
          Lokasi Acara
        </h2>

        <LeafletMap
          :location="invitationData.event.location"
          height="350px"
          :show-directions="true"
        />
      </div>
    </BaseSection>

    <!-- Quote Section -->
    <BaseSection bg-dark>
      <div class="max-w-2xl mx-auto text-center">
        <svg class="w-12 h-12 text-gold-500/30 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>

        <p
          v-for="(quote, index) in invitationData.quotes"
          :key="index"
          class="font-serif text-xl md:text-2xl text-white/90 leading-relaxed mb-6"
        >
          "{{ quote.text }}"
        </p>
        <p class="font-sans text-gold-500 luxury-letter-spacing">
          {{ invitationData.quotes[0]?.source }}
        </p>
      </div>
    </BaseSection>

    <!-- RSVP Section -->
    <BaseSection v-if="invitationData.rsvp.enabled" bg-dark>
      <div class="max-w-xl mx-auto text-center">
        <h2 class="font-serif text-3xl md:text-4xl text-gold-500 mb-4">RSVP</h2>
        <p class="text-white/70 mb-8">Mohon konfirmasi kehadiran Anda</p>

        <!-- WhatsApp Style RSVP Button -->
        <button
          type="button"
          class="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors mb-4 relative overflow-hidden group"
          @click="showWaRsvpModal = true"
        >
          <!-- Animated background -->
          <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          <span>Konfirmasi via WhatsApp</span>
        </button>

        <!-- Or divider -->
        <div class="flex items-center gap-4 my-6">
          <div class="flex-1 h-px bg-white/10"></div>
          <span class="text-white/40 text-sm">atau</span>
          <div class="flex-1 h-px bg-white/10"></div>
        </div>

        <!-- Direct WhatsApp Link -->
        <a
          v-if="whatsappRsvpLink"
          :href="whatsappRsvpLink"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 text-sm transition-colors"
        >
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"/>
          </svg>
          <span>Chat langsung tanpa form</span>
        </a>
      </div>
    </BaseSection>

    <!-- Gift Section -->
    <BaseSection v-if="invitationData.gift?.enabled">
      <div class="max-w-2xl mx-auto text-center">
        <h2 class="font-serif text-3xl md:text-4xl text-gold-500 mb-4">Wedding Gift</h2>
        <p class="text-white/70 mb-8">
          Doa restu Anda merupakan karunia yang sangat berarti bagi kami. Namun jika memberi adalah ungkapan tanda kasih Anda, kami menerima kado secara cashless.
        </p>

        <div class="grid md:grid-cols-2 gap-6">
          <BaseCard
            v-for="bank in invitationData.gift.banks"
            :key="bank.bankName"
            class="text-center"
          >
            <p class="font-sans text-lg text-gold-500 mb-4">{{ bank.bankName }}</p>
            <p class="font-serif text-2xl text-white mb-2">{{ bank.accountNumber }}</p>
            <p class="text-white/60 text-sm">{{ bank.accountName }}</p>

            <button
              class="mt-4 px-4 py-2 text-sm bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors"
              @click="navigator.clipboard.writeText(bank.accountNumber)"
            >
              Salin Nomor Rekening
            </button>
          </BaseCard>
        </div>
      </div>
    </BaseSection>

    <!-- Footer -->
    <footer class="py-12 border-t border-white/5">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <p class="font-script text-3xl text-gold-500 mb-4">
          {{ coupleNames.short }}
        </p>
        <p class="text-white/40 text-sm mb-6">Terima kasih atas doa dan restu Anda</p>
        <p class="text-white/30 text-xs">
          Dibuat dengan ❤️ | Undangan Digital Premium
        </p>
      </div>
    </footer>
  </div>

  <!-- Loading state -->
  <div v-else class="min-h-screen flex items-center justify-center bg-dark-950">
    <div class="text-center">
      <div class="w-16 h-16 border-4 border-gold-500/30 border-t-gold-500 rounded-full animate-spin mx-auto mb-4" />
      <p class="text-white/60">Memuat undangan...</p>
    </div>
  </div>

  <!-- WhatsApp Style RSVP Modal -->
  <WaRsvpModal
    v-if="invitationData"
    v-model="showWaRsvpModal"
    :couple-name="coupleNames.short"
    :whatsapp-number="invitationData.rsvp?.whatsapp?.phoneNumber || ''"
    :wedding-date="eventDates?.main?.start || new Date()"
  />
</template>
