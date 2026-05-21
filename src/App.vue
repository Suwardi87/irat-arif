<script setup lang="ts">
import { ref, onMounted } from 'vue'

// Data mempelai
const coupleData = {
  bride: {
    fullName: 'Asratul Fitri A.Md',
    nickname: 'Putri',
    title: 'Putri Muslim',
    father: 'Suhaimi',
    mother: 'Asmi'
  },
  groom: {
    fullName: 'Arif Hidayatulah',
    nickname: 'Putra',
    title: 'Putra Muslim',
    father: 'Amrizal',
    mother: 'Ratna Juita'
  },
  events: [
    {
      type: 'akad',
      title: 'Akad Nikah',
      day: 'Jumat',
      date: '05 Juni 2026',
      dateNum: 5,
      month: 'Juni',
      year: 2026,
      time: '14.00 WIB s/d selesai',
      venue: 'Masjid Al-Wustha Hilir Balai',
      address: 'Nagari Paninjauan, Kec. X Koto, Tanah Datar'
    },
    {
      type: 'resepsi',
      title: 'Resepsi',
      day: 'Minggu',
      date: '07 Juni 2026',
      dateNum: 7,
      month: 'Juni',
      year: 2026,
      time: '10.00 WIB s/d selesai',
      venue: 'Anak Kayu Jorong Tabubaraie',
      address: 'Nagari Paninjauan, Kec. X Koto, Tanah Datar'
    }
  ]
}

// Countdown
const countdown = ref({ days: 0, hours: 0, minutes: 0, seconds: 0 })
const isLoading = ref(true)
const showMusicBtn = ref(false)
const isPlaying = ref(false)
const audio = ref<HTMLAudioElement | null>(null)
const showRsvp = ref(false)
const rsvpData = ref({
  name: '',
  attendance: 'hadir',
  guests: '1',
  message: ''
})

onMounted(() => {
  updateCountdown()
  setInterval(updateCountdown, 1000)
  setTimeout(() => {
    isLoading.value = false
    showMusicBtn.value = true
  }, 2000)
})

function updateCountdown() {
  const target = new Date('2026-06-05T14:00:00').getTime()
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
  const text = `Halo, saya ${rsvpData.value.name}. Konfirmasi kehadiran untuk pernikahan ${coupleData.bride.fullName} & ${coupleData.groom.fullName}:

Status: ${rsvpData.value.attendance === 'hadir' ? '✅ Hadir' : '❌ Tidak Hadir'}
Jumlah: ${rsvpData.value.guests} orang
Pesan: ${rsvpData.value.message || 'Terima kasih!'}`

  window.open(`https://wa.me/6281234567890?text=${encodeURIComponent(text)}`, '_blank')
  showRsvp.value = false
}
</script>

<template>
  <!-- Loader -->
  <Transition name="fade">
    <div v-if="isLoading" class="loader">
      <div class="loader-content">
        <div class="loader-bismillah">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</div>
        <div class="loader-ring"></div>
        <p class="loader-text">Undangan Pernikahan</p>
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
      <div class="hero-bg"></div>
      <div class="hero-pattern"></div>
      <div class="hero-content">
        <div class="bismillah">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</div>
        <p class="hero-title">Undangan Pernikahan</p>

        <div class="couple-names">
          <div class="couple-name-bride">
            <p class="couple-title">{{ coupleData.bride.title }}</p>
            <h1>{{ coupleData.bride.nickname }}</h1>
            <p class="couple-small">{{ coupleData.bride.fullName }}</p>
          </div>
          <div class="ampersand">&</div>
          <div class="couple-name-groom">
            <p class="couple-title">{{ coupleData.groom.title }}</p>
            <h1>{{ coupleData.groom.nickname }}</h1>
            <p class="couple-small">{{ coupleData.groom.fullName }}</p>
          </div>
        </div>

        <div class="event-info">
          <p class="event-date">{{ coupleData.events[0].day }}, {{ coupleData.events[0].date }}</p>
          <p class="event-time">{{ coupleData.events[0].time }}</p>
        </div>

        <button @click="scrollToSection('details')" class="open-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
          </svg>
        </button>
      </div>
    </section>

    <!-- Details Section -->
    <section id="details" class="details">
      <div class="details-card">
        <div class="details-header">
          <div class="islamic-pattern"></div>
          <p class="details-subtitle">Dengan memohon rahmat dan ridho Allah SWT</p>
          <p class="details-text">Kami bermaksud mengundang Bapak/Ibu/Saudara/i untuk menghadiri acara pernikahan kami:</p>
        </div>

        <div class="couple-section">
          <div class="couple-item">
            <div class="couple-circle">
              <span class="couple-letter">{{ coupleData.bride.nickname[0] }}</span>
            </div>
            <p class="couple-fullname">{{ coupleData.bride.fullName }}</p>
            <p class="couple-label">{{ coupleData.bride.title }}</p>
            <p class="couple-parents">Putri dari {{ coupleData.bride.father }} & {{ coupleData.bride.mother }}</p>
          </div>

          <div class="couple-divider-large">
            <span>&</span>
            <div class="divider-line"></div>
          </div>

          <div class="couple-item">
            <div class="couple-circle">
              <span class="couple-letter">{{ coupleData.groom.nickname[0] }}</span>
            </div>
            <p class="couple-fullname">{{ coupleData.groom.fullName }}</p>
            <p class="couple-label">{{ coupleData.groom.title }}</p>
            <p class="couple-parents">Putra dari {{ coupleData.groom.father }} & {{ coupleData.groom.mother }}</p>
          </div>
        </div>

        <div class="event-section">
          <!-- Akad Nikah -->
          <div class="event-group">
            <p class="event-group-title">💒 Akad Nikah</p>
            <div class="event-row">
              <div class="event-icon">📅</div>
              <div class="event-details">
                <p class="event-label">Hari & Tanggal</p>
                <p class="event-value">{{ coupleData.events[0].day }}, {{ coupleData.events[0].date }}</p>
              </div>
            </div>
            <div class="event-row">
              <div class="event-icon">⏰</div>
              <div class="event-details">
                <p class="event-label">Waktu</p>
                <p class="event-value">{{ coupleData.events[0].time }}</p>
              </div>
            </div>
            <div class="event-row">
              <div class="event-icon">🕌</div>
              <div class="event-details">
                <p class="event-label">Tempat</p>
                <p class="event-value">{{ coupleData.events[0].venue }}</p>
                <p class="event-address">{{ coupleData.events[0].address }}</p>
              </div>
            </div>
          </div>

          <!-- Resepsi -->
          <div class="event-group">
            <p class="event-group-title">🎊 Resepsi</p>
            <div class="event-row">
              <div class="event-icon">📅</div>
              <div class="event-details">
                <p class="event-label">Hari & Tanggal</p>
                <p class="event-value">{{ coupleData.events[1].day }}, {{ coupleData.events[1].date }}</p>
              </div>
            </div>
            <div class="event-row">
              <div class="event-icon">⏰</div>
              <div class="event-details">
                <p class="event-label">Waktu</p>
                <p class="event-value">{{ coupleData.events[1].time }}</p>
              </div>
            </div>
            <div class="event-row">
              <div class="event-icon">🏠</div>
              <div class="event-details">
                <p class="event-label">Tempat</p>
                <p class="event-value">{{ coupleData.events[1].venue }}</p>
                <p class="event-address">{{ coupleData.events[1].address }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Countdown Section -->
    <section class="countdown-section">
      <div class="countdown-card">
        <p class="countdown-title">Menuju Bahagia</p>
        <div class="countdown-grid">
          <div class="countdown-box">
            <span class="countdown-number">{{ countdown.days }}</span>
            <span class="countdown-label">Hari</span>
          </div>
          <div class="countdown-box">
            <span class="countdown-number">{{ countdown.hours }}</span>
            <span class="countdown-label">Jam</span>
          </div>
          <div class="countdown-box">
            <span class="countdown-number">{{ countdown.minutes }}</span>
            <span class="countdown-label">Menit</span>
          </div>
          <div class="countdown-box">
            <span class="countdown-number">{{ countdown.seconds }}</span>
            <span class="countdown-label">Detik</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="map-section">
      <div class="map-card">
        <p class="map-title">Lokasi Acara</p>
        <div class="map-container">
          <iframe
            src="https://www.google.com/maps/dir/-0.4394357,100.4229851/-0.439439,100.4229851/@-0.4390884,100.4227336,233m/data=!3m1!1e3!4m4!4m3!1m0!1m1!4e1?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D"
            class="map-frame"
            allowfullscreen
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <a
          href="https://www.google.com/maps/dir/-0.4394357,100.4229851/-0.439439,100.4229851/@-0.4390884,100.4227336,233m/data=!3m1!1e3!4m4!4m3!1m0!1m1!4e1?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          class="map-btn"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          Buka Google Maps
        </a>
      </div>
    </section>

    <!-- RSVP Section -->
    <section class="rsvp-section">
      <div class="rsvp-card">
        <p class="rsvp-title">Konfirmasi Kehadiran</p>
        <p class="rsvp-subtitle">Mohon konfirmasi kehadiran Anda</p>
        <button @click="showRsvp = true" class="rsvp-btn">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.713.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          Konfirmasi via WhatsApp
        </button>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-pattern"></div>
      <p class="footer-couple">{{ coupleData.bride.fullName }} & {{ coupleData.groom.fullName }}</p>
      <p class="footer-thanks">Terima kasih atas doa dan restu Anda</p>
    </footer>
  </div>

  <!-- RSVP Modal -->
  <Transition name="modal">
    <div v-if="showRsvp" class="modal-overlay" @click.self="showRsvp = false">
      <div class="modal">
        <button @click="showRsvp = false" class="modal-close">×</button>
        <p class="modal-title">Konfirmasi Kehadiran</p>
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
          <button type="submit" class="submit-btn">Kirim ke WhatsApp</button>
        </form>
      </div>
    </div>
  </Transition>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&family=Great+Vibes&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --gold: #c9a962;
  --gold-light: #e0c078;
  --gold-dark: #a88a4d;
  --green: #1a4d2e;
  --green-light: #2d6a4a;
  --bg-cream: #faf8f5;
  --bg-white: #ffffff;
  --text-dark: #2d2d2d;
  --text-muted: #666666;
}

body {
  font-family: 'Amiri', serif;
  background: var(--bg-cream);
  color: var(--text-dark);
  line-height: 1.6;
}

/* Loader */
.loader {
  position: fixed;
  inset: 0;
  background: var(--bg-cream);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.loader-content {
  text-align: center;
}

.loader-bismillah {
  font-family: 'Amiri', serif;
  font-size: 24px;
  color: var(--gold);
  margin-bottom: 30px;
}

.loader-ring {
  width: 80px;
  height: 80px;
  border: 3px solid rgba(201, 169, 98, 0.2);
  border-top-color: var(--gold);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto 20px;
}

.loader-text {
  color: var(--text-muted);
  font-size: 16px;
  letter-spacing: 2px;
  text-transform: uppercase;
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
  color: white;
}

@keyframes pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(201, 169, 98, 0.7); }
  50% { box-shadow: 0 0 0 15px rgba(201, 169, 98, 0); }
}

/* Hero Section */
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 20px;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--green) 0%, var(--green-light) 100%);
}

.hero-pattern {
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30z' fill='rgba(255,255,255,0.05)'/%3E%3C/svg%3E");
  opacity: 0.3;
}

.hero-content {
  text-align: center;
  z-index: 1;
  animation: fadeUp 1s ease-out;
}

.bismillah {
  font-family: 'Amiri', serif;
  font-size: clamp(20px, 4vw, 28px);
  color: var(--gold);
  margin-bottom: 20px;
}

.hero-title {
  font-size: clamp(16px, 3vw, 20px);
  color: rgba(255, 255, 255, 0.9);
  letter-spacing: 3px;
  text-transform: uppercase;
  margin-bottom: 30px;
}

.couple-names {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
  flex-wrap: wrap;
}

.couple-name-bride,
.couple-name-groom {
  flex: 1;
  min-width: 200px;
}

.couple-title {
  font-size: 14px;
  color: var(--gold);
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 10px;
}

.couple-names h1 {
  font-family: 'Great Vibes', cursive;
  font-size: clamp(32px, 6vw, 56px);
  color: white;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  margin-bottom: 5px;
}

.couple-small {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
  font-family: 'Amiri', serif;
}

.ampersand {
  font-family: 'Great Vibes', cursive;
  font-size: 48px;
  color: var(--gold);
}

.event-info {
  margin-bottom: 40px;
}

.event-date {
  font-size: 18px;
  color: white;
  margin-bottom: 5px;
}

.event-time {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.8);
}

.open-btn {
  width: 50px;
  height: 50px;
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  color: white;
  cursor: pointer;
  animation: bounce 2s infinite;
}

.open-btn:hover {
  background: rgba(255, 255, 255, 0.3);
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
}

/* Details Section */
.details {
  padding: 60px 20px;
}

.details-card {
  max-width: 600px;
  margin: 0 auto;
  background: white;
  border-radius: 20px;
  padding: 40px 30px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}

.details-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 5px;
  background: linear-gradient(90deg, var(--gold), var(--green-light), var(--gold));
}

.islamic-pattern {
  width: 100%;
  height: 60px;
  margin-bottom: 20px;
  background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 0L40 20L20 40L0 20z' fill='none' stroke='%23c9a962' stroke-width='0.5'/%3E%3C/svg%3E");
  opacity: 0.3;
}

.details-header {
  text-align: center;
  margin-bottom: 40px;
}

.details-subtitle {
  color: var(--gold);
  font-size: 14px;
  margin-bottom: 10px;
}

.details-text {
  color: var(--text-muted);
  font-size: 14px;
}

.couple-section {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.couple-item {
  text-align: center;
  flex: 1;
  min-width: 150px;
}

.couple-circle {
  width: 100px;
  height: 100px;
  margin: 0 auto 15px;
  background: linear-gradient(135deg, var(--gold), var(--gold-dark));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 4px solid rgba(201, 169, 98, 0.2);
}

.couple-letter {
  font-size: 36px;
  color: white;
  font-family: 'Great Vibes', cursive;
}

.couple-fullname {
  font-size: 16px;
  color: var(--text-dark);
  margin-bottom: 5px;
}

.couple-label {
  font-size: 14px;
  color: var(--gold);
}

.couple-parents {
  font-size: 13px;
  color: var(--text-muted);
  margin-top: 5px;
}

.couple-divider-large {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 48px;
  color: var(--gold);
}

.divider-line {
  width: 80px;
  height: 1px;
  background: var(--gold);
  margin-top: 10px;
}

.event-section {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.event-group {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.event-group-title {
  font-size: 16px;
  color: var(--gold);
  font-weight: bold;
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 1px dashed rgba(201, 169, 98, 0.3);
}

.event-row {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 15px;
  background: var(--bg-cream);
  border-radius: 10px;
  border: 1px solid rgba(201, 169, 98, 0.2);
}

.event-icon {
  font-size: 24px;
}

.event-label {
  font-size: 12px;
  color: var(--text-muted);
  margin-bottom: 2px;
}

.event-value {
  font-size: 16px;
  color: var(--text-dark);
}

.event-address {
  font-size: 14px;
  color: var(--text-muted);
}

/* Countdown Section */
.countdown-section {
  padding: 40px 20px;
}

.countdown-card {
  max-width: 500px;
  margin: 0 auto;
  background: var(--green);
  border-radius: 15px;
  padding: 30px;
  text-align: center;
}

.countdown-title {
  color: white;
  font-size: 18px;
  margin-bottom: 20px;
}

.countdown-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
}

.countdown-box {
  background: rgba(255, 255, 255, 0.15);
  border-radius: 10px;
  padding: 15px;
}

.countdown-number {
  display: block;
  font-size: 32px;
  font-weight: bold;
  color: white;
  margin-bottom: 5px;
}

.countdown-label {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
  text-transform: uppercase;
}

/* Map Section */
.map-section {
  padding: 40px 20px;
}

.map-card {
  max-width: 600px;
  margin: 0 auto;
  background: white;
  border-radius: 15px;
  padding: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

.map-title {
  text-align: center;
  font-size: 18px;
  color: var(--gold);
  margin-bottom: 20px;
}

.map-container {
  margin-bottom: 15px;
  border-radius: 10px;
  overflow: hidden;
}

.map-frame {
  width: 100%;
  height: 250px;
  border: none;
}

.map-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
  padding: 15px;
  background: var(--gold);
  color: white;
  text-decoration: none;
  border-radius: 10px;
  font-weight: bold;
}

/* RSVP Section */
.rsvp-section {
  padding: 40px 20px;
}

.rsvp-card {
  max-width: 400px;
  margin: 0 auto;
  background: white;
  border-radius: 15px;
  padding: 30px;
  text-align: center;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
}

.rsvp-title {
  font-size: 20px;
  color: var(--gold);
  margin-bottom: 5px;
}

.rsvp-subtitle {
  font-size: 14px;
  color: var(--text-muted);
  margin-bottom: 20px;
}

.rsvp-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 15px;
  background: #25d366;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s;
}

.rsvp-btn:hover {
  background: #20bd5a;
}

/* Footer */
.footer {
  padding: 40px 20px;
  text-align: center;
  background: var(--green);
  position: relative;
}

.footer-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 30px;
  background-image: url("data:image/svg+xml,%3Csvg width='30' height='15' viewBox='0 0 30 15' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15 0L30 15L15 15L0 15z' fill='rgba(255,255,255,0.1)'/%3E%3C/svg%3E");
}

.footer-couple {
  font-family: 'Great Vibes', cursive;
  font-size: 28px;
  color: white;
  margin-bottom: 10px;
}

.footer-thanks {
  color: rgba(255, 255, 255, 0.8);
  font-size: 14px;
}

/* Modal */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 200;
  padding: 20px;
}

.modal {
  background: white;
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
  text-align: center;
  font-size: 18px;
  color: var(--gold);
  margin-bottom: 20px;
}

.rsvp-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-group label {
  display: block;
  font-size: 14px;
  color: var(--text-muted);
  margin-bottom: 5px;
}

.form-group input,
.form-group select,
.form-group textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
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
  .couple-names {
    flex-direction: column;
    gap: 10px;
  }

  .couple-section {
    flex-direction: column;
  }

  .couple-divider-large {
    transform: rotate(90deg);
    margin: 10px 0;
  }

  .countdown-grid {
    gap: 10px;
  }

  .countdown-number {
    font-size: 24px;
  }
}
</style>
