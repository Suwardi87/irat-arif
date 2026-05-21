<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Wedding3DScene from './components/3d/Wedding3DScene.vue'
import DigitalCard from './components/ui/DigitalCard.vue'
import GalleryModal from './components/ui/GalleryModal.vue'

// Data mempelai sesuai gambar (Irat & Arif)
const coupleData = {
  bride: {
    fullName: 'Asratul Fitri, A.Md',
    nickname: 'Irat',
    title: 'Putri Muslim',
    father: 'Suhaimi',
    mother: 'Asmi'
  },
  groom: {
    fullName: 'Arif Hidayatulah',
    nickname: 'Arif',
    title: 'Putra Muslim',
    father: 'Amrizal',
    mother: 'Ratna Juita'
  },
  events: [
    {
      type: 'akad',
      title: 'Akad Nikah',
      day: 'JUM\'AT',
      date: '05',
      month: 'JUNI 2026',
      time: '14.00 WIB s/d Selesai',
      venue: 'Masjid Al-Wustha Hilir Balai',
      address: 'Nagari Paninjauan, Kec. X Koto, Tanah Datar'
    },
    {
      type: 'resepsi',
      title: 'RESEPSI',
      day: 'MINGGU',
      date: '07',
      month: 'JUNI 2026',
      time: '10.00 WIB s/d Selesai',
      venue: 'Anak Kayu, Jorong Tabu Baraie',
      address: 'Nagari Paninjauan, Kec. X Koto, Tanah Datar'
    }
  ]
}

const isLoading = ref(true)
const showDigitalCard = ref(false)
const showGallery = ref(false)
const isPlaying = ref(false)
const audio = ref<HTMLAudioElement | null>(null)
const showBackToTop = ref(false)

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 2000)

  // Show/hide back to top button - more reliable
  const handleScroll = () => {
    showBackToTop.value = window.scrollY > 300
  }

  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll() // Initial check
})

function toggleMusic() {
  if (!audio.value) {
    audio.value = new Audio('/music/wedding.mp3')
    audio.value.loop = true
  }
  if (isPlaying.value) {
    audio.value.pause()
  } else {
    audio.value.play()
  }
  isPlaying.value = !isPlaying.value
}

function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

function scrollToTop() {
  // Try multiple methods for better compatibility
  window.scrollTo({ top: 0, behavior: 'smooth' })
  // Fallback
  document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <!-- 3D Background - Fixed behind everything -->
  <Wedding3DScene />

  <!-- Loader -->
  <Transition name="fade">
    <div v-if="isLoading" class="loader">
      <div class="loader-content">
        <div class="loader-bismillah">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</div>
        <div class="loader-ring"></div>
        <p class="loader-text">MEMUAT UNDANGAN...</p>
      </div>
    </div>
  </Transition>

  <!-- Overlays -->
  <DigitalCard :show="showDigitalCard" :couple-data="coupleData" @close="showDigitalCard = false" />
  <GalleryModal :show="showGallery" @close="showGallery = false" />

  <!-- Music Button -->
  <button v-if="!isLoading" @click="toggleMusic" class="music-btn" :class="{ playing: isPlaying }">
    <span class="music-icon">{{ isPlaying ? '♪' : '♫' }}</span>
  </button>

  <!-- Floating Open Button (always visible) -->
  <Transition name="bounce-up">
    <button v-if="!isLoading" @click="showDigitalCard = true" class="fab-open">
      <span class="fab-icon">💌</span>
      <span class="fab-text">Buka Undangan</span>
    </button>
  </Transition>

  <!-- Back to Top Button -->
  <Transition name="fade">
    <button v-if="showBackToTop" @click="scrollToTop" class="back-to-top">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M12 19V5M5 12l7-7 7 7"/>
      </svg>
    </button>
  </Transition>

  <!-- Main Scrollable UI -->
  <div class="invitation-wrapper" :class="{ 'blur-bg': showDigitalCard || showGallery }">
    <!-- Hero Section: Front Cover Style (contoh-1) -->
    <section id="hero" class="hero-paper">
      <div class="paper-surface">
        <div class="floral-top-left"></div>
        <div class="floral-top-right"></div>
        
        <div class="hero-main-content">
          <div class="bismillah-gold">Assalamu'alaikum Warahmatullahi Wabarakatuh</div>

          <!-- Anime Couple Illustration -->
          <div class="anime-couple">
            <div class="anime-character bride-anime">
              <div class="anime-head">
                <div class="anime-hair-long"></div>
                <div class="anime-face">
                  <div class="anime-eyes">
                    <div class="eye left"></div>
                    <div class="eye right"></div>
                  </div>
                  <div class="anime-blush"></div>
                  <div class="anime-mouth smile"></div>
                </div>
                <div class="anime-hijab">
                  <div class="hijab-main"></div>
                  <div class="hijab-fringe"></div>
                </div>
              </div>
              <div class="anime-body">
                <div class="anime-dress"></div>
              </div>
              <div class="name-tag bride-tag">Irat</div>
            </div>

            <div class="anime-heart">
              <span class="heart-main">💕</span>
              <div class="heart-small h1">💗</div>
              <div class="heart-small h2">💖</div>
            </div>

            <div class="anime-character groom-anime">
              <div class="anime-head">
                <div class="anime-hair-short"></div>
                <div class="anime-face">
                  <div class="anime-eyes">
                    <div class="eye left"></div>
                    <div class="eye right"></div>
                  </div>
                  <div class="anime-blush"></div>
                  <div class="anime-mouth smile"></div>
                </div>
                <div class="anime-peci">
                  <div class="peci-main"></div>
                </div>
              </div>
              <div class="anime-body">
                <div class="anime-shirt"></div>
                <div class="anime-tie"></div>
              </div>
              <div class="name-tag groom-tag">Arif</div>
            </div>
          </div>

          <div class="couple-names-large">
            <h1 class="irat-arif">Irat <span class="ampersand">&</span> Arif</h1>
          </div>

          <div class="hero-actions">
            <button @click="showDigitalCard = true" class="btn-card">
              <span>BUKA UNDANGAN</span>
            </button>
            <button @click="showGallery = true" class="btn-gallery">
              <span>GALLERY FOTO</span>
            </button>
          </div>

          <button @click="scrollToSection('details')" class="scroll-down">
            <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
            </svg>
          </button>
        </div>

        <div class="floral-bottom-right"></div>
      </div>
    </section>

    <!-- Details Section (contoh-1 & contoh-2 elements) -->
    <section id="details" class="details-section">
      <div class="paper-surface container">
        <div class="paper-inner">
          <p class="opening-text">
            Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan.
            Ya Allah, perkenankanlah kami merangkaikan kasih sayang yang Kau ciptakan diantara putra-putri kami:
          </p>

          <div class="names-details">
            <h2 class="name">{{ coupleData.bride.nickname }}</h2>
            <p class="name-full">{{ coupleData.bride.fullName }}</p>
            <p class="parents">Dari Bapak {{ coupleData.bride.father }} & Ibu {{ coupleData.bride.mother }}</p>

            <div class="rings-gold">💍</div>

            <h2 class="name">{{ coupleData.groom.nickname }}</h2>
            <p class="name-full">{{ coupleData.groom.fullName }}</p>
            <p class="parents">Dari Bapak {{ coupleData.groom.father }} & Ibu {{ coupleData.groom.mother }}</p>
          </div>

          <div class="event-grid-paper">
            <div class="event-card">
              <div class="date-badge-paper">
                <span class="day">{{ coupleData.events[0].day }}</span>
                <span class="num">{{ coupleData.events[0].date }}</span>
                <span class="month">{{ coupleData.events[0].month }}</span>
              </div>
              <div class="event-info-paper">
                <h3>AKAD NIKAH</h3>
                <p>{{ coupleData.events[0].time }}</p>
                <p>{{ coupleData.events[0].venue }}</p>
              </div>
            </div>

            <div class="event-card">
              <div class="date-badge-paper">
                <span class="day">{{ coupleData.events[1].day }}</span>
                <span class="num">{{ coupleData.events[1].date }}</span>
                <span class="month">{{ coupleData.events[1].month }}</span>
              </div>
              <div class="event-info-paper">
                <h3>RESEPSI</h3>
                <p>{{ coupleData.events[1].time }}</p>
                <p>{{ coupleData.events[1].venue }}</p>
              </div>
            </div>
          </div>

          <!-- Back to Top in Section -->
          <button @click="scrollToTop" class="back-to-top-section">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M12 19V5M5 12l7-7 7 7"/>
            </svg>
            Kembali ke Atas
          </button>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Great+Vibes&family=Playfair+Display:wght@400;700&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Amiri', serif;
  background: #0a1a0f;
  overflow-x: hidden;
  color: #333;
}

/* Fix Interaction Issues */
.invitation-wrapper {
  position: relative;
  z-index: 10; /* Above 3D scene */
  width: 100%;
  transition: filter 0.5s ease, transform 0.5s ease;
}

.invitation-wrapper.blur-bg {
  filter: blur(10px);
  pointer-events: none;
}

/* Paper Aesthetic */
.paper-surface {
  background: #fdfaf3;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise' x='0' y='0'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E");
  box-shadow: 0 10px 40px rgba(0,0,0,0.3);
  position: relative;
  overflow: hidden;
}

/* Hero Section Style */
.hero-paper {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.hero-paper .paper-surface {
  width: 100%;
  max-width: 500px;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px;
  border-radius: 4px;
  position: relative;
  z-index: 15;
}

.hero-main-content {
  position: relative;
  z-index: 15;
  width: 100%;
}

/* Anime Couple Illustration */
.anime-couple {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 20px;
  margin: 20px 0;
  position: relative;
}

.anime-character {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.anime-head {
  position: relative;
  width: 80px;
  height: 90px;
}

.anime-face {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 65px;
  background: #ffe4c4;
  border-radius: 50% 50% 45% 45%;
}

.anime-eyes {
  position: absolute;
  top: 25px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 15px;
}

.eye {
  width: 12px;
  height: 16px;
  background: #2c1810;
  border-radius: 50%;
  position: relative;
}

.eye::after {
  content: '';
  position: absolute;
  top: 3px;
  left: 3px;
  width: 5px;
  height: 5px;
  background: white;
  border-radius: 50%;
}

.anime-blush {
  position: absolute;
  top: 38px;
  left: 50%;
  transform: translateX(-50%);
  width: 45px;
  height: 12px;
  background: radial-gradient(ellipse, rgba(255, 150, 150, 0.5) 0%, transparent 70%);
}

.anime-mouth {
  position: absolute;
  bottom: 12px;
  left: 50%;
  transform: translateX(-50%);
}

.anime-mouth.smile {
  width: 15px;
  height: 8px;
  border: none;
  border-bottom: 3px solid #d4a5a5;
  border-radius: 0 0 50% 50%;
}

/* Hijab for bride */
.anime-hijab {
  position: absolute;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
  width: 70px;
  height: 75px;
}

.hijab-main {
  position: absolute;
  bottom: 0;
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #4a9c6d 0%, #2d6a4a 100%);
  border-radius: 50% 50% 30% 30%;
}

.hijab-fringe {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 55px;
  height: 30px;
  background: linear-gradient(135deg, #4a9c6d 0%, #2d6a4a 100%);
  border-radius: 50% 50% 20% 20%;
}

.anime-hair-long {
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: 65px;
  height: 50px;
  background: #1a1a1a;
  border-radius: 30% 30% 50% 50%;
  z-index: -1;
}

/* Peci for groom */
.anime-peci {
  position: absolute;
  top: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 55px;
  height: 25px;
}

.peci-main {
  width: 55px;
  height: 25px;
  background: linear-gradient(135deg, #1a4d2e 0%, #0c2616 100%);
  border-radius: 50% 50% 10% 10%;
  border: 2px solid #d4af37;
}

.anime-hair-short {
  position: absolute;
  top: -2px;
  left: 50%;
  transform: translateX(-50%);
  width: 55px;
  height: 20px;
  background: #1a1a1a;
  border-radius: 50% 50% 20% 20%;
}

.anime-body {
  position: relative;
  margin-top: -5px;
}

.bride-anime .anime-dress {
  width: 70px;
  height: 80px;
  background: linear-gradient(135deg, #d4af37 0%, #b8952d 100%);
  border-radius: 20% 20% 50% 50%;
  position: relative;
}

.bride-anime .anime-dress::after {
  content: '🌸';
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 16px;
}

.groom-anime .anime-shirt {
  width: 65px;
  height: 70px;
  background: linear-gradient(135deg, #fff 0%, #f0f0f0 100%);
  border-radius: 15% 15% 30% 30%;
  position: relative;
}

.groom-anime .anime-tie {
  position: absolute;
  top: 5px;
  left: 50%;
  transform: translateX(-50%);
  width: 12px;
  height: 35px;
  background: #d4af37;
  border-radius: 3px;
}

.groom-anime .anime-tie::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 8px solid #d4af37;
}

.name-tag {
  margin-top: 10px;
  padding: 4px 15px;
  background: #d4af37;
  color: white;
  font-size: 12px;
  font-weight: bold;
  border-radius: 15px;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.groom-tag {
  background: #1a4d2e;
}

/* Hearts */
.anime-heart {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.heart-main {
  font-size: 32px;
  animation: heartbeat 1.5s ease-in-out infinite;
}

.heart-small {
  position: absolute;
  font-size: 12px;
  animation: floatHeart 2s ease-in-out infinite;
}

.h1 { top: -15px; left: -10px; animation-delay: 0s; }
.h2 { top: -10px; right: -10px; animation-delay: 0.5s; }

@keyframes heartbeat {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.15); }
}

@keyframes floatHeart {
  0%, 100% { transform: translateY(0); opacity: 0.7; }
  50% { transform: translateY(-10px); opacity: 1; }
}

.irat-arif {
  font-family: 'Great Vibes', cursive;
  font-size: clamp(50px, 10vw, 80px);
  color: #1a4d2e;
  margin: 20px 0;
}

.irat-arif .ampersand {
  font-size: 0.6em;
  display: block;
  margin: -10px 0;
}

.bismillah-gold {
  color: #d4af37;
  font-weight: bold;
  font-size: 14px;
  letter-spacing: 1px;
}

/* Buttons */
.hero-actions {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 40px;
  width: 100%;
  max-width: 250px;
  position: relative;
  z-index: 20;
}

.btn-card, .btn-gallery {
  background: #d4af37;
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 4px;
  font-weight: bold;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  text-transform: uppercase;
  font-size: 13px;
  letter-spacing: 1px;
  position: relative;
  z-index: 20;
}

.btn-gallery {
  background: transparent;
  border: 1px solid #d4af37;
  color: #d4af37;
  box-shadow: none;
}

.btn-card:hover { background: #b8952d; transform: translateY(-2px); }
.btn-gallery:hover { background: rgba(212, 175, 55, 0.1); }

/* Floral Ornaments (mimicking images) */
.floral-top-left, .floral-top-right, .floral-bottom-right {
  position: absolute;
  width: 120px;
  height: 120px;
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.7;
}

.floral-top-left { top: 0; left: 0; background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 Q50 0 50 50 Q0 50 0 0' fill='%236d8c5f' opacity='0.4'/%3E%3C/svg%3E"); }
.floral-top-right { top: 0; right: 0; transform: scaleX(-1); background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 Q50 0 50 50 Q0 50 0 0' fill='%236d8c5f' opacity='0.4'/%3E%3C/svg%3E"); }
.floral-bottom-right { bottom: 0; right: 0; background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M100 100 Q50 100 50 50 Q100 50 100 100' fill='%236d8c5f' opacity='0.4'/%3E%3C/svg%3E"); }

/* Details Section */
.details-section {
  padding: 80px 20px;
  display: flex;
  justify-content: center;
}

.details-section .paper-surface {
  width: 100%;
  max-width: 600px;
  padding: 60px 40px;
  text-align: center;
}

.opening-text { font-size: 13px; line-height: 1.8; color: #555; margin-bottom: 40px; }
.names-details .name { font-size: 32px; color: #1a4d2e; margin-bottom: 2px; font-weight: bold; }
.names-details .name-full { font-size: 16px; color: #d4af37; margin-bottom: 8px; font-weight: normal; }
.names-details .parents { font-size: 13px; color: #888; }
.rings-gold { font-size: 32px; margin: 20px 0; }

.event-grid-paper {
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.event-card {
  display: flex;
  gap: 20px;
  text-align: left;
  align-items: center;
  padding: 15px;
  border: 1px solid #eee;
  border-radius: 4px;
}

.date-badge-paper {
  background: #d4af37;
  color: white;
  padding: 10px;
  min-width: 80px;
  text-align: center;
  border-radius: 2px;
}

.date-badge-paper .day { font-size: 10px; font-weight: bold; display: block; }
.date-badge-paper .num { font-size: 24px; font-weight: bold; display: block; line-height: 1; }
.date-badge-paper .month { font-size: 10px; display: block; }

.event-info-paper h3 { font-size: 15px; color: #1a4d2e; margin-bottom: 4px; }
.event-info-paper p { font-size: 12px; color: #666; }

/* Scroll Fix */
.scroll-down {
  position: absolute;
  bottom: 20px;
  background: none;
  border: none;
  color: #d4af37;
  cursor: pointer;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
}

/* Loader */
.loader {
  position: fixed;
  inset: 0;
  background: linear-gradient(135deg, #1a4d2e 0%, #0c2616 100%);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
}

.loader-content {
  text-align: center;
}

.loader-bismillah {
  font-family: 'Amiri', serif;
  font-size: clamp(24px, 5vw, 36px);
  color: #d4af37;
  margin-bottom: 30px;
  text-shadow: 0 2px 10px rgba(201, 169, 98, 0.3);
  animation: fadeInUp 1s ease-out;
}

.loader-text {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  letter-spacing: 3px;
  text-transform: uppercase;
  animation: fadeInUp 1s ease-out 0.3s backwards;
}

.loader-ring {
  width: 60px;
  height: 60px;
  border: 3px solid rgba(212, 175, 55, 0.2);
  border-top-color: #d4af37;
  border-radius: 50%;
  animation: spin 1s linear infinite, fadeInUp 0.8s ease-out 0.2s backwards;
  margin: 0 auto 20px;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Music Btn */
.music-btn { position: fixed; bottom: 20px; right: 20px; width: 44px; height: 44px; border-radius: 50%; background: #d4af37; border: none; color: white; cursor: pointer; z-index: 100; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
.music-btn.playing { animation: pulse-ring 2s infinite; }
@keyframes pulse-ring { 0% { box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.4); } 70% { box-shadow: 0 0 0 10px rgba(212, 175, 55, 0); } }

/* Floating Open Button */
.fab-open {
  position: fixed;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(135deg, #d4af37 0%, #b8952d 100%);
  color: white;
  border: none;
  padding: 14px 24px;
  border-radius: 50px;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  z-index: 99;
  box-shadow: 0 6px 20px rgba(212, 175, 55, 0.4);
  animation: float-pulse 2s ease-in-out infinite;
}

.fab-icon { font-size: 20px; }
.fab-text { letter-spacing: 1px; }

@keyframes float-pulse {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50% { transform: translateX(-50%) translateY(-5px); }
}

.bounce-up-enter-active { animation: bounceIn 0.6s ease-out; }

@keyframes bounceIn {
  0% { transform: translateX(-50%) scale(0) translateY(100px); opacity: 0; }
  50% { transform: translateX(-50%) scale(1.1) translateY(0); }
  100% { transform: translateX(-50%) scale(1) translateY(0); opacity: 1; }
}

/* Back to Top Button */
.back-to-top {
  position: fixed;
  bottom: 140px;
  right: 20px;
  width: 44px;
  height: 44px;
  background: #d4af37;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 98;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  color: white;
  transition: all 0.3s;
}

.back-to-top:hover {
  background: #b8952d;
  transform: translateY(-2px);
}

/* Back to Top Section Button */
.back-to-top-section {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  max-width: 250px;
  margin: 30px auto 0;
  padding: 12px 20px;
  background: #1a4d2e;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

.back-to-top-section:hover {
  background: #133a22;
  transform: translateY(-2px);
  box-shadow: 0 6px 15px rgba(0,0,0,0.15);
}

@media (max-width: 640px) {
  .hero-paper .paper-surface { height: 90vh; }
  .details-section .paper-surface { padding: 40px 20px; }
}
</style>
