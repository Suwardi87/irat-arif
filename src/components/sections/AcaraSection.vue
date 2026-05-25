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
      <div class="section-title anim anim-up" style="--d: 0s">
        <h2>Rangkaian Acara</h2>
        <div class="title-underline"></div>
      </div>

      <div class="events-grid">
        <div v-for="(event, idx) in events" :key="event.type" class="event-card anim anim-up" :style="{ '--d': `${0.15 + idx * 0.12}s` }">
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

      <img src="/images/couples/cropped_assets/asset_19.png" alt="" class="section-divider anim anim-scale" style="--d: 0.4s" loading="lazy" />

      <div class="countdown-section">
        <img src="/images/couples/cropped_assets/asset_13.png" alt="Save The Date" class="countdown-frame anim anim-scale" style="--d: 0.5s" loading="lazy" />
        <h3 class="countdown-title anim anim-up" style="--d: 0.6s">Menuju Hari Bahagia</h3>

        <div class="countdown-wrapper anim anim-up" style="--d: 0.7s">
          <img src="/images/couples/cropped_assets/asset_12.png" alt="" class="countdown-flower countdown-flower-left" loading="lazy" />
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
          <img src="/images/couples/cropped_assets/asset_18.png" alt="" class="countdown-flower countdown-flower-right" loading="lazy" />
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

.section-title {
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  display: flex;
  flex-direction: column;
  align-items: center;
}

.countdown-frame {
  width: 90px;
  margin-bottom: 12px;
  opacity: 0.85;
  filter: drop-shadow(0 2px 12px rgba(var(--emas-rgb), 0.2));
}

.countdown-title {
  font-family: 'Playfair Display', serif;
  font-size: clamp(22px, 4vw, 28px);
  color: var(--emas);
  margin-bottom: 28px;
}

.countdown-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 600px;
}

.countdown-flower {
  position: absolute;
  opacity: 0.35;
  pointer-events: none;
  filter: drop-shadow(0 2px 8px rgba(var(--emas-rgb), 0.15));
}

.countdown-flower-left {
  width: 120px;
  left: -20px;
  top: 50%;
  transform: translateY(-50%) scaleX(-1);
}

.countdown-flower-right {
  width: 140px;
  right: -30px;
  top: 50%;
  transform: translateY(-50%);
}

.countdown-grid {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  position: relative;
  z-index: 1;
}

.countdown-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(135deg, rgba(var(--emas-rgb), 0.12), rgba(var(--emas-rgb), 0.04));
  backdrop-filter: blur(10px);
  border: 1px solid rgba(var(--emas-rgb), 0.25);
  border-radius: 14px;
  padding: 20px 24px;
  min-width: 80px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
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
  .countdown-frame {
    width: 70px;
  }
  .countdown-box {
    padding: 14px 16px;
    min-width: 62px;
  }
  .countdown-flower-left {
    width: 70px;
    left: -10px;
    opacity: 0.2;
  }
  .countdown-flower-right {
    width: 80px;
    right: -15px;
    opacity: 0.2;
  }
}
</style>
