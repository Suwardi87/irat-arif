<script setup lang="ts">
import { ref, onMounted } from 'vue'

// Data mempelai
const coupleData = {
  bride: {
    fullName: 'Asratul Fitri, S.Pd',
    nickname: 'Fitri',
    father: 'H. Ahmad',
    mother: 'Hj. Maryam'
  },
  groom: {
    fullName: 'Suwardi, S.Kom',
    nickname: 'Suwardi',
    father: 'H. Hasan',
    mother: 'Hj. Aisyah'
  },
  event: {
    name: 'Pernikahan',
    date: 'Minggu, 14 Desember 2025',
    time: '09:00 - Selesai',
    venue: 'Masjid Agung Al-Azhar',
    address: 'Jl. Sisingamangaraja, Kebayoran Baru, Jakarta Selatan'
  },
  reception: {
    date: 'Minggu, 14 Desember 2025',
    time: '11:00 - Selesai',
    venue: 'Gedung Serbaguna Al-Azhar',
    address: 'Jl. Sisingamangaraja, Kebayoran Baru, Jakarta Selatan'
  }
}

// Countdown
const countdown = ref({ days: 0, hours: 0, minutes: 0, seconds: 0 })
const isLoading = ref(true)
const showMusicBtn = ref(false)

// Music state
const isPlaying = ref(false)
const audio = ref<HTMLAudioElement | null>(null)

// RSVP state
const showRsvp = ref(false)
const rsvpData = ref({
  name: '',
  attendance: 'hadir',
  guests: '1',
  message: ''
})

onMounted(() => {
  // Start countdown
  updateCountdown()
  setInterval(updateCountdown, 1000)

  // Hide loader
  setTimeout(() => {
    isLoading.value = false
    showMusicBtn.value = true
  }, 2000)
})

function updateCountdown() {
  const target = new Date('2025-12-14T09:00:00').getTime()
  const now = new Date().getTime()
  const diff = target - now

  if (diff > 0) {
    countdown.value.days = Math.floor(diff / (1000 * 60 * 60 * 24))
    countdown.value.hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    countdown.value.minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
    countdown.value.seconds = Math.floor((diff % (1000 * 60)) / 1000)
  }
}

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

function submitRsvp() {
  const text = `Halo, saya ${rsvpData.value.name}. Konfirmasi kehadiran untuk pernikahan ${coupleData.bride.nickname} & ${coupleData.groom.nickname}:

Status: ${rsvpData.value.attendance === 'hadir' ? '✅ Hadir' : '❌ Tidak Hadir'}
Jumlah: ${rsvpData.value.guests} orang
Pesan: ${rsvpData.value.message || 'Terima kasih!'}`

  window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(text)}`, '_blank')
  showRsvp.value = false
}
</script>

<template>
  <!-- Loading Screen -->
  <Transition name="fade">
    <div v-if="isLoading" class="loader">
      <div class="loader-content">
        <div class="loader-ring"></div>
        <p class="loader-text">The Wedding of</p>
        <h1 class="loader-names">{{ coupleData.bride.nickname }} & {{ coupleData.groom.nickname }}</h1>
      </div>
    </div>
  </Transition>

  <!-- Music Button -->
  <Transition name="bounce">
    <button v-if="showMusicBtn" @click="toggleMusic" class="music-btn" :class="{ playing: isPlaying }">
      <span class="music-icon">{{ isPlaying ? '♪' : '♫' }}</span>
    </button>
  </Transition>

  <!-- Main Content -->
  <div class="invitation" :class="{ 'blur-bg': isLoading }">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <p class="hero-subtitle">The Wedding of</p>
        <h1 class="hero-names">{{ coupleData.bride.nickname }} & {{ coupleData.groom.nickname }}</h1>
        <p class="hero-date">{{ coupleData.event.date }}</p>
        <button @click="scrollToSection('mempelai')" class="hero-btn">
          Buka Undangan
        </button>
      </div>
      <div class="hero-bg"></div>
    </section>

    <!-- Mempelai Section -->
    <section id="mempelai" class="section">
      <div class="container">
        <div class="section-header">
          <span class="section-icon">💍</span>
          <h2 class="section-title">Mempelai</h2>
          <p class="section-subtitle">Assalamu'alaikum Warahmatullahi Wabarakatuh</p>
        </div>

        <div class="couple-grid">
          <div class="couple-card">
            <div class="couple-photo">
              <span class="couple-initial">{{ coupleData.bride.nickname[0] }}</span>
            </div>
            <h3 class="couple-name">{{ coupleData.bride.fullName }}</h3>
            <p class="couple-nickname">{{ coupleData.bride.nickname }}</p>
            <p class="couple-parents">
              Putri dari {{ coupleData.bride.father }} & {{ coupleData.bride.mother }}
            </p>
          </div>

          <div class="couple-divider">&</div>

          <div class="couple-card">
            <div class="couple-photo">
              <span class="couple-initial">{{ coupleData.groom.nickname[0] }}</span>
            </div>
            <h3 class="couple-name">{{ coupleData.groom.fullName }}</h3>
            <p class="couple-nickname">{{ coupleData.groom.nickname }}</p>
            <p class="couple-parents">
              Putra dari {{ coupleData.groom.father }} & {{ coupleData.groom.mother }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Acara Section -->
    <section id="acara" class="section section-gold">
      <div class="container">
        <div class="section-header">
          <span class="section-icon">📅</span>
          <h2 class="section-title">Save The Date</h2>
        </div>

        <div class="event-cards">
          <div class="event-card">
            <h3 class="event-title">Akad Nikah</h3>
            <p class="event-date">{{ coupleData.event.date }}</p>
            <p class="event-time">{{ coupleData.event.time }}</p>
            <div class="event-location">
              <p class="event-venue">{{ coupleData.event.venue }}</p>
              <p class="event-address">{{ coupleData.event.address }}</p>
            </div>
          </div>

          <div class="event-card">
            <h3 class="event-title">Resepsi</h3>
            <p class="event-date">{{ coupleData.reception.date }}</p>
            <p class="event-time">{{ coupleData.reception.time }}</p>
            <div class="event-location">
              <p class="event-venue">{{ coupleData.reception.venue }}</p>
              <p class="event-address">{{ coupleData.reception.address }}</p>
            </div>
          </div>
        </div>

        <!-- Countdown -->
        <div class="countdown">
          <div class="countdown-item">
            <span class="countdown-number">{{ countdown.days }}</span>
            <span class="countdown-label">Hari</span>
          </div>
          <div class="countdown-item">
            <span class="countdown-number">{{ countdown.hours }}</span>
            <span class="countdown-label">Jam</span>
          </div>
          <div class="countdown-item">
            <span class="countdown-number">{{ countdown.minutes }}</span>
            <span class="countdown-label">Menit</span>
          </div>
          <div class="countdown-item">
            <span class="countdown-number">{{ countdown.seconds }}</span>
            <span class="countdown-label">Detik</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Lokasi Section -->
    <section id="lokasi" class="section">
      <div class="container">
        <div class="section-header">
          <span class="section-icon">📍</span>
          <h2 class="section-title">Lokasi</h2>
        </div>

        <div class="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126907.08669786445!2d106.789156!3d-6.2293867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sMasjid%20Agung%20Al-Azhar!5e0!3m2!1sid!2sid!4v1732567478234!5m2!1sid!2sid"
            class="map-frame"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <a
          href="https://www.google.com/maps?q=Masjid+Agung+Al-Azhar"
          target="_blank"
          class="map-btn"
        >
          Buka Google Maps
        </a>
      </div>
    </section>

    <!-- RSVP Section -->
    <section id="rsvp" class="section section-gold">
      <div class="container">
        <div class="section-header">
          <span class="section-icon">💒</span>
          <h2 class="section-title">RSVP</h2>
          <p class="section-subtitle">Mohon konfirmasi kehadiran Anda</p>
        </div>

        <button @click="showRsvp = true" class="rsvp-btn">
          <span class="rsvp-icon">💬</span>
          Konfirmasi via WhatsApp
        </button>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <p class="footer-names">{{ coupleData.bride.nickname }} & {{ coupleData.groom.nickname }}</p>
      <p class="footer-thanks">Terima kasih atas doa dan restu Anda</p>
    </footer>
  </div>

  <!-- RSVP Modal -->
  <Transition name="modal">
    <div v-if="showRsvp" class="modal-overlay" @click.self="showRsvp = false">
      <div class="modal">
        <button @click="showRsvp = false" class="modal-close">×</button>
        <h3 class="modal-title">Konfirmasi Kehadiran</h3>

        <form @submit.prevent="submitRsvp" class="rsvp-form">
          <div class="form-group">
            <label>Nama Lengkap</label>
            <input v-model="rsvpData.name" type="text" required placeholder="Nama Anda">
          </div>

          <div class="form-group">
            <label>Konfirmasi</label>
            <select v-model="rsvpData.attendance">
              <option value="hadir">✅ Hadir</option>
              <option value="tidak">❌ Tidak Hadir</option>
              <option value="ragu">❓ Masih Ragu</option>
            </select>
          </div>

          <div class="form-group">
            <label>Jumlah Tamu</label>
            <select v-model="rsvpData.guests">
              <option value="1">1 Orang</option>
              <option value="2">2 Orang</option>
            </select>
          </div>

          <div class="form-group">
            <label>Pesan (Opsional)</label>
            <textarea v-model="rsvpData.message" rows="3" placeholder="Ucapan selamat..."></textarea>
          </div>

          <button type="submit" class="submit-btn">
            Kirim ke WhatsApp
          </button>
        </form>
      </div>
    </div>
  </Transition>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --gold: #d4af37;
  --gold-light: #f4d03f;
  --gold-dark: #b8972e;
  --bg-dark: #1a1a1a;
  --bg-darker: #0d0d0d;
  --text-light: #f5f5f5;
  --text-muted: #a0a0a0;
}

body {
  font-family: 'Georgia', serif;
  background: var(--bg-darker);
  color: var(--text-light);
  line-height: 1.6;
}

/* Loader */
.loader {
  position: fixed;
  inset: 0;
  background: var(--bg-darker);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.loader-content {
  text-align: center;
}

.loader-ring {
  width: 80px;
  height: 80px;
  border: 3px solid rgba(212, 175, 55, 0.2);
  border-top-color: var(--gold);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 20px;
}

.loader-text {
  color: var(--text-muted);
  font-size: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
}

.loader-names {
  color: var(--gold);
  font-size: 24px;
  margin-top: 10px;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* Music Button */
.music-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  background: var(--gold);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  z-index: 100;
  transition: all 0.3s;
}

.music-btn:hover {
  transform: scale(1.1);
}

.music-btn.playing {
  animation: pulse 1s ease-in-out infinite;
}

.music-icon {
  font-size: 20px;
}

@keyframes pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.7); }
  50% { box-shadow: 0 0 0 15px rgba(212, 175, 55, 0); }
}

/* Hero Section */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 20% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 50%),
    radial-gradient(circle at 80% 50%, rgba(212, 175, 55, 0.1) 0%, transparent 50%);
  animation: heroFloat 10s ease-in-out infinite;
}

@keyframes heroFloat {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.hero-content {
  text-align: center;
  z-index: 1;
  padding: 20px;
  animation: fadeUp 1s ease-out;
}

.hero-subtitle {
  color: var(--gold);
  font-size: 14px;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-bottom: 20px;
}

.hero-names {
  font-size: clamp(28px, 8vw, 64px);
  margin-bottom: 20px;
  background: linear-gradient(135deg, var(--gold-light), var(--gold), var(--gold-dark));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-date {
  color: var(--text-muted);
  font-size: 18px;
  margin-bottom: 40px;
}

.hero-btn {
  padding: 15px 40px;
  background: transparent;
  border: 2px solid var(--gold);
  color: var(--gold);
  font-size: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s;
}

.hero-btn:hover {
  background: var(--gold);
  color: var(--bg-darker);
}

/* Sections */
.section {
  padding: 80px 20px;
}

.section-gold {
  background: linear-gradient(180deg, var(--bg-dark), var(--bg-darker));
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 50px;
}

.section-icon {
  font-size: 40px;
  margin-bottom: 10px;
}

.section-title {
  color: var(--gold);
  font-size: clamp(24px, 5vw, 36px);
  margin-bottom: 10px;
}

.section-subtitle {
  color: var(--text-muted);
  font-size: 16px;
}

/* Couple Section */
.couple-grid {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 30px;
  align-items: center;
}

.couple-card {
  text-align: center;
}

.couple-photo {
  width: 120px;
  height: 120px;
  margin: 0 auto 20px;
  background: linear-gradient(135deg, var(--gold-light), var(--gold-dark));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.couple-initial {
  font-size: 48px;
  color: var(--bg-darker);
}

.couple-name {
  color: var(--text-light);
  font-size: 18px;
  margin-bottom: 5px;
}

.couple-nickname {
  color: var(--gold);
  font-size: 20px;
  margin-bottom: 10px;
}

.couple-parents {
  color: var(--text-muted);
  font-size: 14px;
}

.couple-divider {
  font-size: 48px;
  color: var(--gold);
}

/* Event Cards */
.event-cards {
  display: grid;
  gap: 30px;
  margin-bottom: 50px;
}

.event-card {
  background: var(--bg-dark);
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: 10px;
  padding: 30px;
  text-align: center;
}

.event-title {
  color: var(--gold);
  font-size: 20px;
  margin-bottom: 15px;
}

.event-date {
  color: var(--text-light);
  font-size: 18px;
  margin-bottom: 5px;
}

.event-time {
  color: var(--text-muted);
  margin-bottom: 15px;
}

.event-venue {
  color: var(--text-light);
  margin-bottom: 5px;
}

.event-address {
  color: var(--text-muted);
  font-size: 14px;
}

/* Countdown */
.countdown {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.countdown-item {
  text-align: center;
}

.countdown-number {
  display: block;
  width: 60px;
  height: 60px;
  line-height: 60px;
  background: var(--gold);
  color: var(--bg-darker);
  font-size: 24px;
  font-weight: bold;
  border-radius: 10px;
  margin-bottom: 5px;
}

.countdown-label {
  color: var(--text-muted);
  font-size: 12px;
  text-transform: uppercase;
}

/* Map */
.map-container {
  margin-bottom: 20px;
}

.map-frame {
  width: 100%;
  height: 300px;
  border: none;
  border-radius: 10px;
}

.map-btn {
  display: block;
  width: 100%;
  padding: 15px;
  background: var(--gold);
  color: var(--bg-darker);
  text-align: center;
  text-decoration: none;
  border-radius: 10px;
  font-weight: bold;
}

/* RSVP Button */
.rsvp-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 15px 30px;
  background: #25d366;
  color: white;
  border: none;
  border-radius: 30px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s;
}

.rsvp-btn:hover {
  background: #20bd5a;
  transform: translateY(-2px);
}

.rsvp-icon {
  font-size: 20px;
}

/* Footer */
.footer {
  padding: 40px 20px;
  text-align: center;
  border-top: 1px solid rgba(212, 175, 55, 0.2);
}

.footer-names {
  color: var(--gold);
  font-size: 24px;
  margin-bottom: 10px;
}

.footer-thanks {
  color: var(--text-muted);
  font-size: 14px;
}

/* Modal */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
  padding: 20px;
}

.modal {
  background: var(--bg-dark);
  border-radius: 15px;
  padding: 30px;
  max-width: 400px;
  width: 100%;
  position: relative;
}

.modal-close {
  position: absolute;
  top: 15px;
  right: 15px;
  width: 30px;
  height: 30px;
  background: none;
  border: none;
  color: var(--text-muted);
  font-size: 24px;
  cursor: pointer;
}

.modal-title {
  color: var(--gold);
  text-align: center;
  margin-bottom: 20px;
}

.rsvp-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-group label {
  display: block;
  color: var(--text-muted);
  font-size: 14px;
  margin-bottom: 5px;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 12px;
  background: var(--bg-darker);
  border: 1px solid rgba(212, 175, 55, 0.3);
  border-radius: 8px;
  color: var(--text-light);
  font-family: inherit;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: var(--gold);
}

.submit-btn {
  padding: 15px;
  background: #25d366;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.bounce-enter-active {
  animation: bounceIn 0.5s;
}

@keyframes bounceIn {
  0% { transform: scale(0); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal,
.modal-leave-to .modal {
  transform: scale(0.9);
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive */
@media (max-width: 640px) {
  .couple-grid {
    grid-template-columns: 1fr;
  }

  .couple-divider {
    transform: rotate(90deg);
  }

  .countdown {
    gap: 10px;
  }

  .countdown-number {
    width: 50px;
    height: 50px;
    line-height: 50px;
    font-size: 20px;
  }
}
</style>
