<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import BaseLoader from '@/components/base/BaseLoader.vue'
import BaseSection from '@/components/base/BaseSection.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import BaseCard from '@/components/base/BaseCard.vue'
import MusicButton from '@/components/ui/MusicButton.vue'
import ScrollIndicator from '@/components/ui/ScrollIndicator.vue'
import ThreeCanvas from '@/components/3d/ThreeCanvas.vue'
import ParticleField from '@/components/3d/ParticleField.vue'
import { useCountdown } from '@/composables/useCountdown'
import { useAnimation } from '@/composables/useAnimation'

/**
 * InvitationView - Main invitation page with 3D effects
 *
 * Features:
 * - Cinematic 3D hero section
 * - Gold particle effects
 * - Countdown timer
 * - Smooth scroll animations
 * - Music player
 * - RSVP form
 * - Gallery section
 */

const route = useRoute()
// const slug = route.params.slug as string // Available for future API use

// State
const isLoading = ref(true)
const particleFieldRef = ref<InstanceType<typeof ParticleField> | null>(null)
const detailsSectionRef = ref<HTMLElement | null>(null)

// Countdown
const { days, hours, minutes, seconds, start } = useCountdown()

// Animation timeline
const { fadeIn } = useAnimation()

// Sample invitation data
const invitationData = ref({
  couple: {
    bride: { name: 'Putri Ayu', nickname: 'Ayu' },
    groom: { name: 'Rama Pratama', nickname: 'Rama' }
  },
  event: {
    name: 'The Wedding',
    date: new Date('2025-12-25T09:00:00'),
    venue: 'Grand Ballroom',
    location: 'Jakarta, Indonesia'
  }
})

// Initialize
onMounted(async () => {
  // Start countdown
  start(invitationData.value.event.date)

  // Wait for loader
  setTimeout(() => {
    isLoading.value = false

    // Start entrance animations after loader
    setTimeout(() => {
      entranceAnimation()
    }, 500)
  }, 3000)
})

// Entrance animation
function entranceAnimation() {
  // Animate hero elements
  fadeIn('.hero-title', 1, 0.2)
  fadeIn('.hero-names', 1, 0.4)
  fadeIn('.hero-date', 1, 0.6)
  fadeIn('.hero-cta', 1, 0.8)
}

// Scroll to details
function scrollToDetails() {
  detailsSectionRef.value?.scrollIntoView({ behavior: 'smooth' })
}

// Handle 3D scene ready
function handleSceneReady(_scene: THREE.Scene, _camera: THREE.Camera) {
  console.log('[InvitationView] 3D Scene ready')
  // Particles are initialized automatically via slot
}

// Handle loader complete
function handleLoaderComplete() {
  // Loader completion is handled in onMounted
}
</script>

<template>
  <div class="min-h-screen bg-dark-950 text-white">
    <!-- Loading Screen -->
    <BaseLoader
      v-if="isLoading"
      :title="`The Wedding of ${invitationData.couple.bride.nickname} & ${invitationData.couple.groom.nickname}`"
      :duration="3000"
      @loaded="handleLoaderComplete"
    />

    <!-- Music Button -->
    <MusicButton
      v-if="!isLoading"
      src="/music/wedding-piano.mp3"
      position="bottom-right"
    />

    <!-- Scroll Indicator -->
    <ScrollIndicator v-if="!isLoading" />

    <!-- Hero Section with 3D -->
    <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- 3D Canvas Background -->
      <ThreeCanvas
        :scene="{ backgroundColor: 0x0a0a0a, fog: true, fogColor: 0x0a0a0a, fogNear: 1, fogFar: 100 }"
        :camera="{ position: { x: 0, y: 0, z: 5 }, lookAt: { x: 0, y: 0, z: 0 } }"
        class="absolute inset-0"
        @ready="handleSceneReady"
      >
        <template #default>
          <ParticleField
            ref="particleFieldRef"
            :count="300"
            :size="0.05"
            :interactive="true"
          />
        </template>
      </ThreeCanvas>

      <!-- Hero Content -->
      <div class="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <!-- Wedding Date -->
        <p class="hero-date font-script text-2xl md:text-3xl text-gold-500 mb-4 opacity-0">
          Sabtu, 25 Desember 2025
        </p>

        <!-- Title -->
        <h1 class="hero-title font-serif text-4xl md:text-6xl lg:text-7xl mb-8 text-gradient-gold opacity-0">
          The Wedding of
        </h1>

        <!-- Names -->
        <div class="hero-names mb-12 opacity-0">
          <p class="font-serif text-3xl md:text-5xl lg:text-6xl text-white mb-4">
            {{ invitationData.couple.bride.name }}
          </p>
          <p class="font-script text-4xl md:text-5xl text-gold-500 my-4">&</p>
          <p class="font-serif text-3xl md:text-5xl lg:text-6xl text-white">
            {{ invitationData.couple.groom.name }}
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

    <!-- Details Section -->
    <BaseSection ref="detailsSectionRef" bg-dark>
      <div class="max-w-3xl mx-auto text-center">
        <h2 class="font-serif text-3xl md:text-4xl text-gold-500 mb-12">
          Save The Date
        </h2>

        <BaseCard class="mb-12">
          <p class="font-script text-2xl text-gold-500 mb-4">Sabtu</p>
          <p class="font-serif text-5xl md:text-6xl text-white mb-2">25</p>
          <p class="font-sans text-xl text-gold-500 mb-8">Desember 2025</p>

          <div class="border-t border-white/10 pt-8">
            <p class="text-white/80 mb-2">Pukul 09:00 WIB</p>
            <p class="text-white/80">{{ invitationData.event.venue }}</p>
            <p class="text-white/60 text-sm mt-1">{{ invitationData.event.location }}</p>
          </div>
        </BaseCard>

        <!-- Countdown -->
        <div class="grid grid-cols-4 gap-4 max-w-lg mx-auto">
          <div class="glass-dark p-4 rounded-lg text-center">
            <p class="font-serif text-3xl md:text-4xl text-gold-500">{{ days }}</p>
            <p class="text-xs text-white/60 uppercase tracking-wider">Hari</p>
          </div>
          <div class="glass-dark p-4 rounded-lg text-center">
            <p class="font-serif text-3xl md:text-4xl text-gold-500">{{ hours }}</p>
            <p class="text-xs text-white/60 uppercase tracking-wider">Jam</p>
          </div>
          <div class="glass-dark p-4 rounded-lg text-center">
            <p class="font-serif text-3xl md:text-4xl text-gold-500">{{ minutes }}</p>
            <p class="text-xs text-white/60 uppercase tracking-wider">Menit</p>
          </div>
          <div class="glass-dark p-4 rounded-lg text-center">
            <p class="font-serif text-3xl md:text-4xl text-gold-500">{{ seconds }}</p>
            <p class="text-xs text-white/60 uppercase tracking-wider">Detik</p>
          </div>
        </div>
      </div>
    </BaseSection>

    <!-- Quote Section -->
    <BaseSection>
      <div class="max-w-2xl mx-auto text-center">
        <svg class="w-12 h-12 text-gold-500/30 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p class="font-serif text-xl md:text-2xl text-white/90 leading-relaxed mb-6">
          "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya."
        </p>
        <p class="font-sans text-gold-500 luxury-letter-spacing">QS. Ar-Rum: 21</p>
      </div>
    </BaseSection>

    <!-- RSVP Section -->
    <BaseSection bg-dark>
      <div class="max-w-xl mx-auto text-center">
        <h2 class="font-serif text-3xl md:text-4xl text-gold-500 mb-4">RSVP</h2>
        <p class="text-white/70 mb-8">Mohon konfirmasi kehadiran Anda</p>

        <form class="text-left space-y-4" @submit.prevent>
          <div>
            <label class="block text-sm text-white/70 mb-2">Nama Lengkap</label>
            <input
              type="text"
              placeholder="Masukkan nama Anda"
              class="w-full px-4 py-3 bg-dark-800 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-gold-500/50 transition-colors"
            />
          </div>

          <div>
            <label class="block text-sm text-white/70 mb-2">Jumlah Tamu</label>
            <select class="w-full px-4 py-3 bg-dark-800 border border-white/10 rounded-lg text-white focus:outline-none focus:border-gold-500/50 transition-colors">
              <option value="1">1 Orang</option>
              <option value="2">2 Orang</option>
            </select>
          </div>

          <div>
            <label class="block text-sm text-white/70 mb-2">Konfirmasi</label>
            <div class="flex gap-4">
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="attendance" value="yes" class="accent-gold-500" />
                <span>Hadir</span>
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="attendance" value="no" class="accent-gold-500" />
                <span>Tidak Hadir</span>
              </label>
            </div>
          </div>

          <div>
            <label class="block text-sm text-white/70 mb-2">Pesan untuk Mempelai</label>
            <textarea
              rows="3"
              placeholder="Tulis pesan Anda..."
              class="w-full px-4 py-3 bg-dark-800 border border-white/10 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-gold-500/50 transition-colors resize-none"
            />
          </div>

          <BaseButton
            variant="primary"
            size="lg"
            class="w-full"
            type="submit"
          >
            Kirim Konfirmasi
          </BaseButton>
        </form>
      </div>
    </BaseSection>

    <!-- Footer -->
    <footer class="py-12 border-t border-white/5">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <p class="font-script text-3xl text-gold-500 mb-4">
          {{ invitationData.couple.bride.nickname }} & {{ invitationData.couple.groom.nickname }}
        </p>
        <p class="text-white/40 text-sm mb-6">Terima kasih atas doa dan restu Anda</p>
        <p class="text-white/30 text-xs">
          Dibuat dengan ❤️ | Undangan Digital Premium
        </p>
      </div>
    </footer>
  </div>
</template>

<!-- claude --resume 35670661-84df-4c56-9c03-8cf1f5811a43
⏎              -->
