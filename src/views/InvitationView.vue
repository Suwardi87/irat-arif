<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import Wedding3DScene from '@/components/3d/Wedding3DScene.vue'
import CoverSection from '@/components/sections/CoverSection.vue'
import BismillahSection from '@/components/sections/BismillahSection.vue'
import MempelaiSection from '@/components/sections/MempelaiSection.vue'
import AcaraSection from '@/components/sections/AcaraSection.vue'
import LokasiSection from '@/components/sections/LokasiSection.vue'
import RsvpSection from '@/components/sections/RsvpSection.vue'
import ClosingSection from '@/components/sections/ClosingSection.vue'
import GuestBookSection from '@/components/sections/GuestBookSection.vue'
import GiftSection from '@/components/sections/GiftSection.vue'
import SettingsPanel from '@/components/ui/SettingsPanel.vue'
import MusicButton from '@/components/ui/MusicButton.vue'
import { useCountdown } from '@/composables/useCountdown'
import { useGuestName } from '@/composables/useGuestName'
import { useTheme } from '@/composables/useTheme'

const route = useRoute()

const isLoading = ref(true)
const isOpened = ref(false)
const scrollProgress = ref(0)
const invitationData = ref<any>(null)

const { days, hours, minutes, seconds, start } = useCountdown()
const { isPersonalized, greeting, openingText, guestData } = useGuestName()
useTheme()

async function loadInvitation(slug: string) {
  try {
    const response = await fetch('/data/invitations.json')
    const json = await response.json()
    const found = json.invitations.find((inv: any) => inv.slug === slug && inv.isActive)
    if (found) {
      invitationData.value = found
      const eventDate = new Date(found.events[0].date)
      start(eventDate)
    }
  } catch (e) {
    console.error('Failed to load invitation:', e)
  }
}

onMounted(async () => {
  const slug = route.params.slug as string
  await loadInvitation(slug)
  setTimeout(() => {
    isLoading.value = false
  }, 2000)

  const handleScroll = () => {
    scrollProgress.value = window.scrollY / (document.body.scrollHeight - window.innerHeight)

    const backToTop = document.querySelector('.back-to-top') as HTMLElement
    if (backToTop) {
      backToTop.style.opacity = window.scrollY > 500 ? '1' : '0'
      backToTop.style.visibility = window.scrollY > 500 ? 'visible' : 'hidden'
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))
})

const musicBtn = ref<any>(null)

function openInvitation() {
  isOpened.value = true
  musicBtn.value?.handleToggle()
  setTimeout(() => {
    document.getElementById('main-content')?.scrollIntoView({ behavior: 'smooth' })
  }, 800)
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const coupleShortName = computed(() => {
  if (!invitationData.value) return ''
  return `${invitationData.value.couple.bride.nickname} & ${invitationData.value.couple.groom.nickname}`
})
</script>

<template>
  <Wedding3DScene />

  <div v-if="invitationData" class="scroll-progress" role="progressbar" aria-label="Scroll progress" :style="{ width: `${scrollProgress * 100}%` }"></div>

  <Transition name="fade">
    <div v-if="isLoading" class="loading-screen" role="alert" aria-live="polite">
      <div class="loading-content">
        <div class="bismillah-loading">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</div>
        <div class="loading-spinner">
          <div class="spinner-ring"></div>
          <div class="spinner-ring"></div>
          <div class="spinner-ring"></div>
        </div>
        <p class="loading-text">Memuat Undangan...</p>
      </div>
    </div>
  </Transition>

  <CoverSection
    v-if="!isOpened && !isLoading && invitationData"
    :greeting="greeting"
    :opening-text="openingText"
    :is-personalized="isPersonalized"
    :bride-nickname="invitationData.couple.bride.nickname"
    :groom-nickname="invitationData.couple.groom.nickname"
    :guest-data="guestData"
    @open="openInvitation"
  />

  <div id="main-content" class="main-content" :class="{ opened: isOpened }">
    <button @click="scrollToTop" class="back-to-top" aria-label="Kembali ke atas">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 19V5M5 12l7-7 7 7"/>
      </svg>
    </button>

    <SettingsPanel />

    <MusicButton
      v-if="invitationData?.music?.enabled"
      ref="musicBtn"
      :src="invitationData.music.src"
      :autoplay="false"
      :volume="invitationData.music.volume ?? 0.3"
      :visible="isOpened"
      position="bottom-left"
      size="sm"
    />

    <template v-if="invitationData">
      <BismillahSection />
      <MempelaiSection :bride="invitationData.couple.bride" :groom="invitationData.couple.groom" :couple-photo="invitationData.couple.couplePhoto" />
      <AcaraSection :events="invitationData.events" :days="days" :hours="hours" :minutes="minutes" :seconds="seconds" />
      <LokasiSection :events="invitationData.events" />
      <GuestBookSection :invitation-slug="invitationData.slug" />
      <GiftSection
        v-if="invitationData.gift?.enabled"
        :banks="invitationData.gift.banks"
      />
      <RsvpSection
        v-if="invitationData.rsvp?.enabled"
        :whatsapp-number="invitationData.rsvp.whatsapp.phoneNumber"
        :whatsapp-message="invitationData.rsvp.whatsapp.message"
        :couple-short-name="coupleShortName"
      />
      <ClosingSection
        :bride-nickname="invitationData.couple.bride.nickname"
        :groom-nickname="invitationData.couple.groom.nickname"
        :quotes="invitationData.quotes"
      />
    </template>
  </div>

  <div v-if="!invitationData && !isLoading" class="loading-screen">
    <div class="loading-content">
      <p class="loading-text">Undangan tidak ditemukan</p>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Great+Vibes&family=Playfair+Display:wght@400;700&family=Cormorant+Garamond:wght@400;600&display=swap');

:root {
  --merah-minang: #B07060;
  --merah-dark: #8A5248;
  --emas: #C9A86A;
  --emas-light: #D8C8B0;
  --emas-dark: #8A6B4F;
  --emas-rgb: 201, 168, 106;
  --merah-rgb: 176, 112, 96;
  --cream-rgb: 232, 224, 209;
  --orange-bride: #8A6B4F;
  --charcoal: #12100E;
  --cream: #E8E0D1;
  --cream-light: #F2EDE5;
  --bg-gradient: linear-gradient(180deg, #1A1610 0%, #0C0B08 100%);
  --card-bg: rgba(201,168,106,0.08);
  --card-border: rgba(201,168,106,0.25);
  --text-muted: rgba(232,224,209,0.6);
  --surface: #221E18;
  --surface-dark: #181410;
  --success: #8E9B84;
  --success-light: #B4C0AA;
  --error: #B07060;
  --error-light: #C89080;
  --warning: #C9A86A;
  --warning-light: #D8C8B0;
}

body {
  font-family: 'Cormorant Garamond', serif;
  background: var(--charcoal);
  color: var(--cream);
  overflow-x: hidden;
}

.scroll-progress {
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--merah-minang), var(--emas));
  z-index: 10001;
  transition: width 0.1s ease-out;
}

.loading-screen {
  position: fixed;
  inset: 0;
  background: var(--bg-gradient);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
}

.loading-content {
  text-align: center;
}

.bismillah-loading {
  font-family: 'Amiri', serif;
  font-size: clamp(24px, 5vw, 36px);
  color: var(--emas);
  margin-bottom: 40px;
  text-shadow: 0 2px 20px rgba(var(--emas-rgb), 0.3);
  animation: textGlow 2s ease-in-out infinite;
}

.loading-spinner {
  position: relative;
  width: 80px;
  height: 80px;
  margin: 0 auto 30px;
}

.spinner-ring {
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 3px solid transparent;
  animation: spin 1.5s linear infinite;
}

.spinner-ring:nth-child(1) {
  border-top-color: var(--merah-minang);
  animation-duration: 1.5s;
}

.spinner-ring:nth-child(2) {
  inset: 8px;
  border-right-color: var(--emas);
  animation-duration: 2s;
  animation-direction: reverse;
}

.spinner-ring:nth-child(3) {
  inset: 16px;
  border-bottom-color: var(--orange-bride);
  animation-duration: 2.5s;
}

.loading-text {
  color: var(--cream);
  letter-spacing: 4px;
  text-transform: uppercase;
  font-size: 13px;
  animation: fadeInOut 2s ease-in-out infinite;
}

.main-content {
  position: relative;
  z-index: 100;
  opacity: 0;
  transform: translateY(30px);
  transition: all 1s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.main-content.opened {
  opacity: 1;
  transform: translateY(0);
}

.back-to-top {
  position: fixed;
  bottom: 30px;
  right: 20px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--emas), var(--emas-dark));
  border: none;
  color: var(--charcoal);
  cursor: pointer;
  z-index: 999;
  box-shadow: 0 4px 15px rgba(var(--emas-rgb), 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  visibility: hidden;
  transform: translateY(20px) scale(0.8);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.back-to-top:hover {
  transform: translateY(-5px) scale(1.1);
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

@keyframes fadeInOut {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}

@keyframes textGlow {
  0%, 100% { text-shadow: 0 2px 20px rgba(var(--emas-rgb), 0.3); }
  50% { text-shadow: 0 2px 40px rgba(var(--emas-rgb), 0.6); }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.scroll-reveal .anim {
  opacity: 0;
  transition: opacity 0.7s cubic-bezier(0.34, 1.56, 0.64, 1),
              transform 0.7s cubic-bezier(0.34, 1.56, 0.64, 1);
  transition-delay: var(--d, 0s);
}

.scroll-reveal .anim-up {
  transform: translateY(40px);
}

.scroll-reveal .anim-left {
  transform: translateX(-40px);
}

.scroll-reveal .anim-right {
  transform: translateX(40px);
}

.scroll-reveal .anim-scale {
  transform: scale(0.85);
}

.scroll-reveal.visible .anim,
.scroll-reveal.visible .anim-up,
.scroll-reveal.visible .anim-left,
.scroll-reveal.visible .anim-right,
.scroll-reveal.visible .anim-scale {
  opacity: 1;
  transform: translateY(0) translateX(0) scale(1);
}

@media (prefers-reduced-motion: reduce) {
  .scroll-reveal .anim,
  .scroll-reveal .anim-up,
  .scroll-reveal .anim-left,
  .scroll-reveal .anim-right,
  .scroll-reveal .anim-scale {
    opacity: 1;
    transform: none;
    transition: none;
  }
}

@media (prefers-reduced-motion: reduce) {
  .main-content {
    opacity: 1;
    transform: none;
    transition: none;
  }

  .main-content.opened {
    transform: none;
  }

  .loading-spinner {
    animation: none;
  }

  .bismillah-loading {
    animation: none;
  }

  .loading-text {
    animation: none;
    opacity: 1;
  }

  .back-to-top {
    transition: opacity 0.2s ease;
  }
}
</style>
