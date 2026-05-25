<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface EventLocation {
  type: string
  title: string
  venue: string
  address: string
  mapsUrl: string
}

defineProps<{
  events: EventLocation[]
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
  const el = document.getElementById('section-lokasi')
  if (el) observer!.observe(el)
})

onUnmounted(() => observer?.disconnect())

function openMaps(url: string) {
  window.open(url, '_blank')
}
</script>

<template>
  <section id="section-lokasi" data-section class="section-lokasi scroll-reveal" :class="{ visible: isVisible }" aria-label="Lokasi Acara">
    <div class="section-content">
      <div class="section-title anim anim-up" style="--d: 0s">
        <h2>Lokasi Acara</h2>
        <div class="title-underline"></div>
      </div>

      <div class="locations-grid">
        <div v-for="(event, index) in events" :key="event.type" class="location-card anim anim-up" :style="{ '--d': `${0.15 + index * 0.15}s` }">
          <div class="card-ornament-area">
            <img src="/images/couples/cropped_assets/asset_10.png" alt="" class="card-culture-icon" loading="lazy" />
          </div>
          <div class="location-info">
            <h3 class="location-title">{{ event.venue }}</h3>
            <p class="location-event">{{ event.title }}</p>
            <p class="location-address">{{ event.address }}</p>
            <button @click="openMaps(event.mapsUrl)" class="btn-maps">
              <span>🗺️</span>
              <span>Buka Google Maps</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
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

.locations-grid {
  display: grid;
  gap: 20px;
  width: 100%;
}

.location-card {
  display: flex;
  background: linear-gradient(135deg, rgba(var(--emas-rgb), 0.08), rgba(var(--emas-rgb), 0.03));
  border-radius: 16px;
  padding: 24px;
  border: 1px solid rgba(var(--emas-rgb), 0.15);
  align-items: center;
  gap: 20px;
  transition: all 0.4s ease;
  opacity: 0;
  animation: fadeInUp 0.8s ease-out forwards;
  flex-wrap: wrap;
  justify-content: center;
}

.location-card:hover {
  background: linear-gradient(135deg, rgba(var(--emas-rgb), 0.12), rgba(var(--emas-rgb), 0.05));
  transform: translateY(-4px);
  border-color: var(--emas);
  box-shadow: 0 10px 40px rgba(var(--emas-rgb), 0.15);
}

.card-ornament-area {
  flex-shrink: 0;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-culture-icon {
  width: 100%;
  opacity: 0.7;
  filter: drop-shadow(0 2px 8px rgba(var(--emas-rgb), 0.15));
}

.location-info {
  text-align: center;
  flex: 1;
}

.location-title {
  font-family: 'Playfair Display', serif;
  font-size: 18px;
  color: var(--emas);
  margin-bottom: 4px;
  font-weight: 700;
}

.location-event {
  font-size: 12px;
  color: var(--merah-minang);
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 6px;
}

.location-address {
  color: var(--cream);
  font-size: 14px;
  opacity: 0.8;
  margin-bottom: 12px;
  font-family: 'Cormorant Garamond', serif;
}

.btn-maps {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, var(--emas), var(--emas-dark));
  color: var(--charcoal);
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-maps:hover {
  transform: scale(1.05);
  box-shadow: 0 5px 20px rgba(var(--emas-rgb), 0.3);
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

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 640px) {
  .card-ornament-area {
    width: 45px;
  }
}
</style>
