<script setup lang="ts">
import { ref } from 'vue'
import BaseLoader from '@/components/base/BaseLoader.vue'
import MusicButton from '@/components/ui/MusicButton.vue'

/**
 * HomeView - Landing page for the invitation platform
 *
 * Shows a preview of what the platform offers and
 * directs users to their invitation via slug.
 */

// State
const isLoading = ref(true)

// Handle loader complete
const handleLoaderComplete = () => {
  isLoading.value = false
}

// Demo music URL
const demoMusic = new URL('@/assets/sounds/wedding-piano.mp3', import.meta.url).href
</script>

<template>
  <div class="min-h-screen bg-dark-950 text-white">
    <!-- Loading Screen -->
    <BaseLoader
      v-if="isLoading"
      title="Undangan Digital"
      subtitle="Memuat pengalaman cinematic..."
      :duration="2000"
      @loaded="handleLoaderComplete"
    />

    <!-- Music Button -->
    <MusicButton
      v-if="!isLoading"
      :src="demoMusic"
      :volume="0.3"
      position="bottom-right"
    />

    <!-- Hero Section -->
    <section class="min-h-screen flex items-center justify-center relative overflow-hidden">
      <!-- Background gradient -->
      <div class="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-950 to-dark-950" />

      <!-- Decorative particles -->
      <div class="absolute inset-0 overflow-hidden">
        <div
          v-for="i in 30"
          :key="i"
          class="absolute w-1 h-1 bg-gold-500 rounded-full animate-float opacity-30"
          :style="{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${4 + Math.random() * 4}s`
          }"
        />
      </div>

      <!-- Content -->
      <div class="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <!-- Logo/Brand -->
        <div class="mb-8 animate-float">
          <div class="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center shadow-lg shadow-gold-500/20">
            <svg class="w-10 h-10 text-dark-950" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>

        <!-- Title -->
        <h1 class="font-serif text-5xl md:text-7xl lg:text-8xl mb-6 text-gradient-gold">
          Undangan Digital
        </h1>

        <!-- Subtitle -->
        <p class="font-sans text-lg md:text-xl text-gold-500/80 mb-8 luxury-letter-spacing max-w-2xl mx-auto">
          Premium 3D Wedding Invitation
        </p>

        <!-- Description -->
        <p class="text-white/70 mb-12 max-w-xl mx-auto leading-relaxed">
          Bagikan momen bahagia Anda dengan undangan digital yang elegan, cinematic, dan interaktif.
          Dibuat dengan teknologi modern untuk pengalaman tak terlupakan.
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <BaseButton
            variant="primary"
            size="lg"
            icon-position="right"
            icon='<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>'
          >
            Lihat Demo
          </BaseButton>

          <BaseButton
            variant="outline"
            size="lg"
          >
            Buat Undangan
          </BaseButton>
        </div>

        <!-- Features -->
        <div class="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div class="glass-dark p-6 rounded-lg border border-white/5 hover:border-gold-500/20 transition-all">
            <div class="w-12 h-12 rounded-lg bg-gold-500/10 flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
              </svg>
            </div>
            <h3 class="font-serif text-xl text-gold-500 mb-2">3D Cinematic</h3>
            <p class="text-white/60 text-sm">Animasi 3D yang halus dengan efek cinematic seperti film.</p>
          </div>

          <div class="glass-dark p-6 rounded-lg border border-white/5 hover:border-gold-500/20 transition-all">
            <div class="w-12 h-12 rounded-lg bg-gold-500/10 flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="font-serif text-xl text-gold-500 mb-2">Responsive</h3>
            <p class="text-white/60 text-sm">Tampil sempurna di semua perangkat, mobile hingga desktop.</p>
          </div>

          <div class="glass-dark p-6 rounded-lg border border-white/5 hover:border-gold-500/20 transition-all">
            <div class="w-12 h-12 rounded-lg bg-gold-500/10 flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 class="font-serif text-xl text-gold-500 mb-2">Kustomisasi</h3>
            <p class="text-white/60 text-sm">Tema, warna, dan konten sesuai dengan style pernikahan Anda.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-8 border-t border-white/5">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <p class="text-white/40 text-sm">
          Dibuat dengan ❤️ menggunakan Vue 3, Three.js, dan GSAP
        </p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* Custom animations */
@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}
</style>
