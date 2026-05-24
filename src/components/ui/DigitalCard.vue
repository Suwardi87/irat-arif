<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  show: boolean
  coupleData: any
}>()

const emit = defineEmits(['close'])

const activePage = ref(1)
const isAnimating = ref(false)

function close() {
  emit('close')
}

function goToPage(page: number) {
  if (page !== activePage.value && !isAnimating.value) {
    isAnimating.value = true
    setTimeout(() => {
      activePage.value = page
      setTimeout(() => {
        isAnimating.value = false
      }, 600)
    }, 300)
  }
}
</script>

<template>
  <Transition name="book-open">
    <div v-if="show" class="digital-card-overlay">
      <div class="digital-card-container">
        <!-- Close Button -->
        <button @click="close" class="close-card-btn">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M18 6L6 18M6 6l12 12"/>
          </svg>
        </button>

        <!-- Multiple Pages Stack -->
        <div class="book-container">
          <!-- Back Pages (decorative layers) -->
          <div class="page-sheet page-back-3"></div>
          <div class="page-sheet page-back-2"></div>
          <div class="page-sheet page-back-1"></div>

          <!-- Main Content Card -->
          <div class="paper-card">
            <!-- Navigation -->
            <div class="card-nav">
              <button @click="goToPage(1)" :class="{ active: activePage === 1 }">Halaman 1</button>
              <button @click="goToPage(2)" :class="{ active: activePage === 2 }">Denah Lokasi</button>
            </div>

            <!-- Page Content with Turn Animation -->
            <Transition name="page-turn" mode="out-in">
              <!-- Page 1: Invitation Content -->
              <div v-if="activePage === 1" key="page1" class="page-content">
                <div class="floral-top-left"></div>
                <div class="floral-top-right"></div>

                <div class="card-content">
                  <div class="names-header">
                    <h1 class="script-font">Irat & Arif</h1>
                  </div>

                  <div class="greeting-section">
                    <p class="bismillah-text">Assalamu'alaikum Warahmatullahi Wabarakatuh</p>
                    <p class="opening-text">
                      Maha Suci Allah yang telah menciptakan makhluk-Nya berpasang-pasangan.
                      Ya Allah, perkenankanlah kami merangkaikan kasih sayang yang Kau ciptakan diantara putra-putri kami:
                    </p>
                  </div>

                  <div class="couple-details">
                    <div class="person">
                      <h2 class="nick-name">{{ coupleData.bride.nickname }}</h2>
                      <p class="full-name-small">{{ coupleData.bride.fullName }}</p>
                      <p class="parents">Putri dari Bapak {{ coupleData.bride.father }} dan Ibu {{ coupleData.bride.mother }}</p>
                    </div>

                    <div class="rings-icon">
                      <span class="emoji-rings">💍</span>
                    </div>

                    <div class="person">
                      <h2 class="nick-name">{{ coupleData.groom.nickname }}</h2>
                      <p class="full-name-small">{{ coupleData.groom.fullName }}</p>
                      <p class="parents">Putra dari Bapak {{ coupleData.groom.father }} dan Ibu {{ coupleData.groom.mother }}</p>
                    </div>
                  </div>

                  <div class="event-details-paper">
                    <div class="event-card akad">
                      <div class="date-badge">
                        <span class="day">JUM'AT</span>
                        <span class="date">05</span>
                        <span class="month">JUNI 2026</span>
                      </div>
                      <div class="info">
                        <h3>Akad Nikah</h3>
                        <p>Pukul: 14.00 WIB s/d Selesai</p>
                        <p>Tempat: Masjid Al-Wustha Hilir Balai</p>
                      </div>
                    </div>

                    <div class="event-card resepsi">
                      <div class="date-badge">
                        <span class="day">MINGGU</span>
                        <span class="date">07</span>
                        <span class="month">JUNI 2026</span>
                      </div>
                      <div class="info">
                        <h3>RESEPSI</h3>
                        <p>Pukul: 10.00 WIB s/d Selesai</p>
                        <p>Tempat: Anak Kayu, Jorong Tabu Baraie</p>
                      </div>
                    </div>
                  </div>

                  <p class="closing-greeting">Wassalamu'alaikum Warahmatullahi Wabarakatuh</p>
                </div>
                <div class="floral-bottom-right"></div>
              </div>

              <!-- Page 2: Denah Lokasi -->
              <div v-else key="page2" class="page-content denah-page">
                <div class="floral-top-left"></div>

                <div class="card-content">
                  <div class="denah-header">
                    <div class="denah-icon">📍</div>
                    <h2>Denah Lokasi</h2>
                  </div>

                  <div class="map-illustration">
                    <div class="map-box">
                      <div class="road-main"></div>
                      <div class="road-branch"></div>
                      <div class="marker-location pulse">
                        <div class="label-pesta">LOKASI PESTA</div>
                      </div>
                      <div class="road-label bukittinggi">DARI BUKITTINGGI</div>
                      <div class="road-label padangpanjang">SIMP. 8 PADANG PANJANG</div>
                    </div>
                  </div>

                  <div class="qr-section">
                    <div class="qr-box-container">
                      <div class="qr-box">
                        <div class="qr-pixel" v-for="i in 16" :key="i"></div>
                      </div>
                    </div>
                    <p>SCAN LOCATION</p>
                  </div>

                  <div class="recipient-box">
                    <p>Kepada Yth. Bapak/Ibu/Saudara/i:</p>
                    <div class="recipient-line">
                      <span>Nama Tamu Undangan</span>
                    </div>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.digital-card-overlay {
  position: fixed;
  inset: 0;
  z-index: 500;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  padding: 20px;
  backdrop-filter: blur(10px);
  perspective: 2500px;
}

.digital-card-container {
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: auto;
  transform-style: preserve-3d;
}

.book-container {
  position: relative;
  transform-style: preserve-3d;
}

/* Decorative Page Sheets Behind */
.page-sheet {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #f5f0e6 0%, #e8e0d0 100%);
  border-radius: 2px;
  transform-origin: left center;
  pointer-events: none;
}

.page-back-1 {
  transform: rotateY(8deg) translateZ(-10px) translateX(8px);
  box-shadow: -5px 5px 20px rgba(0,0,0,0.15);
}

.page-back-2 {
  transform: rotateY(12deg) translateZ(-20px) translateX(14px);
  box-shadow: -8px 8px 25px rgba(0,0,0,0.2);
  background: linear-gradient(135deg, #f0ebe0 0%, #e0d8c8 100%);
}

.page-back-3 {
  transform: rotateY(16deg) translateZ(-30px) translateX(20px);
  box-shadow: -10px 10px 30px rgba(0,0,0,0.25);
  background: linear-gradient(135deg, #ebe6dc 0%, #d8d0c0 100%);
}

.paper-card {
  background: #fdfaf3;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise' x='0' y='0'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E");
  border-radius: 2px;
  box-shadow:
    -2px 0 5px rgba(0,0,0,0.1),
    0 20px 60px rgba(0,0,0,0.4),
    0 0 0 1px rgba(var(--emas-rgb), 0.1);
  position: relative;
  color: #5C4A3A;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  transform-style: preserve-3d;
  transform-origin: left center;
  z-index: 10;
}

/* Page spine effect */
.paper-card::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 40px;
  background: linear-gradient(to right,
    rgba(0,0,0,0.2) 0%,
    rgba(0,0,0,0.08) 30%,
    rgba(0,0,0,0.02) 60%,
    transparent 100%
  );
  z-index: 10;
  pointer-events: none;
}

/* Page edge shadow */
.paper-card::after {
  content: '';
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 30px;
  background: linear-gradient(to left,
    rgba(0,0,0,0.03) 0%,
    transparent 100%
  );
  pointer-events: none;
}

.card-nav {
  display: flex;
  justify-content: center;
  gap: 10px;
  padding: 15px;
  background: rgba(0,0,0,0.03);
  border-bottom: 1px solid rgba(0,0,0,0.05);
  position: relative;
  z-index: 20;
}

.card-nav button {
  background: none;
  border: 1px solid var(--emas);
  padding: 5px 15px;
  border-radius: 20px;
  font-size: 11px;
  color: var(--emas);
  cursor: pointer;
  transition: all 0.3s;
  text-transform: uppercase;
  font-weight: bold;
}

.card-nav button.active {
  background: var(--emas);
  color: white;
}

.page-content {
  flex: 1;
  padding: 40px 30px;
  position: relative;
}

.floral-top-left, .floral-top-right, .floral-bottom-right {
  position: absolute;
  width: 150px;
  height: 150px;
  background-size: contain;
  background-repeat: no-repeat;
  opacity: 0.6;
  pointer-events: none;
}

.floral-top-left { top: 0; left: 0; background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 Q50 0 50 50 Q0 50 0 0' fill='%236d8c5f' opacity='0.3'/%3E%3C/svg%3E"); }
.floral-top-right { top: 0; right: 0; transform: scaleX(-1); background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0 Q50 0 50 50 Q0 50 0 0' fill='%236d8c5f' opacity='0.3'/%3E%3C/svg%3E"); }
.floral-bottom-right { bottom: 0; right: 0; background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M100 100 Q50 100 50 50 Q100 50 100 100' fill='%236d8c5f' opacity='0.3'/%3E%3C/svg%3E"); }

.card-content {
  position: relative;
  z-index: 1;
  text-align: center;
}

.script-font {
  font-family: 'Great Vibes', cursive;
  font-size: 56px;
  color: #8A6B4F;
  margin-bottom: 20px;
}

.bismillah-text { font-weight: bold; font-size: 16px; margin-bottom: 10px; color: #8A6B4F; }
.opening-text { font-size: 11px; line-height: 1.8; color: #7A6B5C; margin-bottom: 30px; }

.full-name { font-family: 'Amiri', serif; font-size: 24px; color: #8A6B4F; margin-bottom: 5px; }
.nick-name { font-size: 32px; color: #8A6B4F; margin-bottom: 2px; font-weight: bold; }
.full-name-small { font-size: 14px; color: var(--emas); margin-bottom: 8px; }
.parents { font-size: 11px; color: #9A8B7A; }

.event-details-paper { display: flex; flex-direction: column; gap: 15px; margin: 30px 0; }
.event-card { display: flex; align-items: center; gap: 15px; text-align: left; background: rgba(138, 107, 79, 0.06); padding: 12px; border-radius: 4px; border: 1px solid rgba(var(--emas-rgb), 0.1); }

.date-badge { background: var(--emas); color: white; padding: 8px; min-width: 70px; text-align: center; border-radius: 2px; }
.date-badge .day { font-size: 9px; font-weight: bold; }
.date-badge .date { font-size: 20px; font-weight: bold; }
.date-badge .month { font-size: 9px; }

.info h3 { font-size: 13px; color: #8A6B4F; margin-bottom: 2px; text-transform: uppercase; font-weight: bold; }
.info p { font-size: 11px; color: #8A7B6A; }

.closing-greeting { font-weight: bold; font-size: 13px; margin-top: 30px; color: #8A6B4F; }

/* Denah Page */
.denah-header h2 { font-size: 24px; color: #8A6B4F; margin-bottom: 20px; text-transform: uppercase; }
.denah-icon { font-size: 32px; margin-bottom: 10px; }

.map-illustration {
  background: #f0ede4;
  height: 250px;
  border-radius: 4px;
  margin: 20px 0;
  position: relative;
  overflow: hidden;
  border: 1px solid #D8C8B0;
}

.map-box { position: relative; width: 100%; height: 100%; padding: 20px; }
.road-main { position: absolute; width: 6px; height: 100%; background: #fff; left: 40%; transform: rotate(15deg); box-shadow: 0 0 5px rgba(0,0,0,0.1); }
.road-branch { position: absolute; width: 100%; height: 6px; background: #fff; top: 50%; box-shadow: 0 0 5px rgba(0,0,0,0.1); }

.marker-location {
  position: absolute;
  top: 35%;
  right: 25%;
  width: 12px;
  height: 12px;
  background: #e74c3c;
  border-radius: 50%;
  border: 2px solid #fff;
}

.label-pesta {
  position: absolute;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
  background: #e74c3c;
  color: white;
  font-size: 9px;
  padding: 2px 6px;
  border-radius: 2px;
  white-space: nowrap;
  font-weight: bold;
}

.road-label { font-size: 8px; font-weight: bold; color: #999; position: absolute; }
.bukittinggi { top: 20px; left: 30%; }
.padangpanjang { bottom: 20px; left: 10%; }

.qr-section { margin-top: 20px; }
.qr-box-container {
  width: 80px;
  height: 80px;
  margin: 0 auto 10px;
  background: white;
  border: 4px solid #5C4A3A;
  padding: 5px;
}
.qr-box {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2px;
  height: 100%;
}
.qr-pixel { background: #5C4A3A; opacity: 0.8; }
.qr-section p { font-size: 10px; font-weight: bold; letter-spacing: 2px; color: #5C4A3A; }

.recipient-box {
  margin-top: 30px;
  background: white;
  padding: 15px;
  border: 1px dashed var(--emas);
  border-radius: 4px;
}
.recipient-box p { font-size: 10px; color: #9A8B7A; margin-bottom: 8px; }
.recipient-line { border-bottom: 1px solid #D8C8B0; padding-bottom: 5px; font-size: 15px; font-style: italic; color: #8A6B4F; font-family: 'Amiri', serif; }

.close-card-btn {
  position: absolute;
  top: -45px;
  right: 0;
  background: #fff;
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 5px 15px rgba(0,0,0,0.5);
  color: #5C4A3A;
  z-index: 100;
}

.pulse { animation: pulse 2s infinite; }
@keyframes pulse {
  0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(231, 76, 60, 0.7); }
  70% { transform: scale(1.1); box-shadow: 0 0 0 10px rgba(231, 76, 60, 0); }
  100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(231, 76, 60, 0); }
}

/* Book Opening Animation */
.book-open-enter-active {
  animation: bookOpen 1.5s cubic-bezier(0.23, 1, 0.32, 1) forwards;
}

.book-open-leave-active {
  animation: bookClose 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
}

@keyframes bookOpen {
  0% {
    opacity: 0;
    transform: rotateY(-90deg) scaleX(0.3) translateX(-100px);
    filter: blur(8px);
  }
  15% {
    opacity: 0.2;
    transform: rotateY(-70deg) scaleX(0.5) translateX(-70px);
    filter: blur(5px);
  }
  30% {
    opacity: 0.5;
    transform: rotateY(-40deg) scaleX(0.7) translateX(-40px);
    filter: blur(2px);
  }
  50% {
    opacity: 0.8;
    transform: rotateY(-10deg) scaleX(0.95) translateX(-10px);
    filter: blur(0);
  }
  65% {
    transform: rotateY(8deg) scaleX(1.05) translateX(5px);
  }
  80% {
    transform: rotateY(-4deg) scaleX(1.02) translateX(2px);
  }
  100% {
    opacity: 1;
    transform: rotateY(0deg) scaleX(1) translateX(0);
  }
}

@keyframes bookClose {
  0% {
    opacity: 1;
    transform: rotateY(0deg) scaleX(1);
  }
  30% {
    transform: rotateY(15deg) scaleX(0.95);
  }
  100% {
    opacity: 0;
    transform: rotateY(-90deg) scaleX(0.3) translateX(-100px);
    filter: blur(8px);
  }
}

/* Page Turn Animation */
.page-turn-enter-active {
  animation: pageTurnIn 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards;
}

.page-turn-leave-active {
  animation: pageTurnOut 0.5s cubic-bezier(0.23, 1, 0.32, 1) forwards;
}

@keyframes pageTurnIn {
  0% {
    opacity: 0;
    transform: rotateY(-30deg) translateX(-30px);
  }
  60% {
    transform: rotateY(5deg) translateX(5px);
  }
  100% {
    opacity: 1;
    transform: rotateY(0deg) translateX(0);
  }
}

@keyframes pageTurnOut {
  0% {
    opacity: 1;
    transform: rotateY(0deg) translateX(0);
  }
  100% {
    opacity: 0;
    transform: rotateY(30deg) translateX(30px);
  }
}

@media (max-width: 640px) {
  .page-content { padding: 30px 20px; }
  .script-font { font-size: 38px; }
  .nick-name { font-size: 24px; }
  .full-name-small { font-size: 12px; }
}
</style>
