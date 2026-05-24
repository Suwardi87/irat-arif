<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface EventItem {
  type: string
  title: string
  day: string
  date: string
  endDate: string
  displayDate: string
  displayMonth: string
  time: string
  venue: string
  address: string
  mapsUrl: string
}

defineProps<{
  events: EventItem[]
  days: number
  hours: number
  minutes: number
  seconds: number
}>()

const isVisible = ref(false)
let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) isVisible.value = true
      })
    },
    { threshold: 0.15 }
  )
  const el = document.getElementById('section-acara')
  if (el) observer!.observe(el)
})

onUnmounted(() => observer?.disconnect())
</script>

<template>
  <section id="section-acara" data-section class="section-acara scroll-reveal" :class="{ visible: isVisible }" aria-label="Rangkaian Acara">
    <div class="section-content">
      <div class="rumah-gadang-hero">
        <img src="/images/couples/cropped_assets/asset_6.png" alt="Rumah Gadang" class="rumah-gadang-img" loading="lazy" />
      </div>

      <div class="section-title">
        <!-- <img src="/images/couples/cropped_assets/asset_5.png" alt="" class="title-floral" loading="lazy" /> -->
        <h2>Rangkaian Acara</h2>
        <div class="title-underline"></div>
      </div>

      <div class="events-grid">
        <div v-for="event in events" :key="event.type" class="event-card">
          <div class="event-glow"></div>
          <div class="event-date">
            <span class="event-day">{{ event.day }}</span>
            <span class="event-num">{{ event.displayDate }}</span>
            <span class="event-month">{{ event.displayMonth }}</span>
          </div>
          <div class="event-info">
            <h3 class="event-title">{{ event.title }}</h3>
            <p class="event-time">🕐 {{ event.time }}</p>
            <p class="event-venue">📍 {{ event.venue }}</p>
          </div>
          <div class="event-icon">
            <span v-if="event.type === 'akad'">🕌</span>
            <span v-else>🎉</span>
          </div>
        </div>
      </div>

      <img src="/images/couples/cropped_assets/asset_19.png" alt="" class="section-divider" loading="lazy" />

      <div class="countdown-section">
        <h3 class="countdown-title">Menuju Hari Bahagia</h3>
        <div class="countdown-grid">
          <div class="countdown-box">
            <span class="countdown-num">{{ days }}</span>
            <span class="countdown-label">Hari</span>
          </div>
          <div class="countdown-sep">:</div>
          <div class="countdown-box">
            <span class="countdown-num">{{ hours }}</span>
            <span class="countdown-label">Jam</span>
          </div>
          <div class="countdown-sep">:</div>
          <div class="countdown-box">
            <span class="countdown-num">{{ minutes }}</span>
            <span class="countdown-label">Menit</span>
          </div>
          <div class="countdown-sep">:</div>
          <div class="countdown-box">
            <span class="countdown-num">{{ seconds }}</span>
            <span class="countdown-label">Detik</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-acara {
  background: linear-gradient(180deg, rgba(var(--merah-rgb), 0.08) 0%, transparent 100%);
}

.section-content {
  max-width: 900px;
  margin: 0 auto;
  padding: 80px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.rumah-gadang-hero {
  width: 140px;
  margin-bottom: 24px;
}

.rumah-gadang-img {
  width: 100%;
  filter: drop-shadow(0 4px 20px rgba(var(--emas-rgb), 0.2));
  opacity: 0.85;
}

.section-title {
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title-floral {
  width: 40px;
  margin-bottom: 12px;
  opacity: 0.7;
}

.section-title h2 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(32px, 6vw, 48px);
  color: var(--emas);
  margin-bottom: 15px;
  font-weight: 700;
}

.title-underline {
  width: 80px;
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--merah-minang), var(--emas), transparent);
}

.section-divider {
  width: 60px;
  margin: 40px 0;
  opacity: 0.5;
}

.events-grid {
  display: grid;
  gap: 20px;
  width: 100%;
}

.event-card {
  display: flex;
  background: linear-gradient(135deg, rgba(var(--emas-rgb), 0.1), rgba(var(--emas-rgb), 0.04));
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 24px;
  border: 1px solid rgba(var(--emas-rgb), 0.2);
  align-items: center;
  gap: 20px;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  overflow: hidden;
  flex-wrap: wrap;
}

.event-glow {
  position: absolute;
  width: 120px;
  height: 120px;
  background: radial-gradient(circle, var(--merah-minang) 0%, transparent 70%);
  opacity: 0.1;
  border-radius: 50%;
  filter: blur(40px);
  right: -30px;
  top: -30px;
}

.event-card:hover {
  background: linear-gradient(135deg, rgba(var(--emas-rgb), 0.12), rgba(var(--emas-rgb), 0.06));
  transform: translateY(-4px);
  border-color: var(--emas);
  box-shadow: 0 10px 40px rgba(var(--merah-rgb), 0.15);
}

.event-date {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(135deg, var(--merah-minang), var(--merah-dark));
  color: var(--cream);
  padding: 16px 20px;
  border-radius: 12px;
  min-width: 85px;
  box-shadow: 0 5px 20px rgba(var(--merah-rgb), 0.3);
}

.event-day {
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.event-num {
  font-size: 32px;
  font-weight: 700;
  line-height: 1;
  margin: 6px 0;
}

.event-month {
  font-size: 10px;
}

.event-info {
  text-align: center;
  flex: 1;
}

.event-title {
  font-family: 'Playfair Display', serif;
  font-size: 20px;
  color: var(--emas);
  margin-bottom: 6px;
  font-weight: 700;
}

.event-time,
.event-venue {
  color: var(--cream);
  font-size: 14px;
  opacity: 0.8;
  margin-bottom: 3px;
  font-family: 'Cormorant Garamond', serif;
}

.event-icon {
  font-size: 28px;
  opacity: 0.5;
}

.countdown-section {
  text-align: center;
  width: 100%;
}

.countdown-title {
  font-family: 'Playfair Display', serif;
  font-size: 20px;
  color: var(--emas);
  margin-bottom: 24px;
}

.countdown-grid {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.countdown-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(var(--emas-rgb), 0.08);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(var(--emas-rgb), 0.2);
  border-radius: 12px;
  padding: 16px 20px;
  min-width: 70px;
}

.countdown-num {
  font-family: 'Playfair Display', serif;
  font-size: clamp(24px, 5vw, 36px);
  color: var(--emas);
  font-weight: 700;
  line-height: 1;
}

.countdown-label {
  font-size: 11px;
  color: var(--cream);
  opacity: 0.6;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 6px;
}

.countdown-sep {
  color: var(--emas);
  font-size: 24px;
  font-weight: 700;
  opacity: 0.5;
}

.scroll-reveal {
  opacity: 0;
  transform: translateY(60px);
  transition: all 1s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.scroll-reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 640px) {
  .event-card {
    justify-content: center;
    text-align: center;
  }
  .rumah-gadang-hero {
    width: 100px;
  }
  .countdown-box {
    padding: 12px 14px;
    min-width: 60px;
  }
}
</style>
