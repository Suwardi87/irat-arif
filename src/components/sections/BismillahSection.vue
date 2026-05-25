<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

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
  const el = document.getElementById('section-bismillah')
  if (el) observer!.observe(el)
})

onUnmounted(() => observer?.disconnect())
</script>

<template>
  <section id="section-bismillah" data-section class="section-bismillah scroll-reveal" :class="{ visible: isVisible }">
    <div class="section-content">
      <div class="bismillah-layout">
        <div class="flower-wrapper anim anim-scale" style="--d: 0s">
          <img src="/images/couples/cropped_assets/asset_30.png" alt="" class="flower-ring" loading="lazy" />
        </div>
        <div class="bismillah-text anim anim-up" style="--d: 0.2s">
          <p class="bismillah">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</p>
          <p class="bismillah-translate">Dengan Nama Allah Yang Maha Pengasih Lagi Maha Penyayang</p>
        </div>
      </div>
      <!-- <img src="/images/couples/cropped_assets/asset_19.png" alt="" class="section-divider" loading="lazy" /> -->
    </div>
  </section>
</template>

<style scoped>
.section-bismillah {
  background: linear-gradient(180deg, transparent 0%, rgba(var(--emas-rgb), 0.05) 50%, transparent 100%);
}

.section-content {
  max-width: 900px;
  margin: 0 auto;
  padding: 80px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.bismillah-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
}

.flower-wrapper {
  width: 200px;
  height: 200px;
}

.flower-ring {
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 4px 25px rgba(var(--emas-rgb), 0.25));
}

.bismillah-text {
  text-align: center;
  max-width: 500px;
}

.bismillah {
  font-family: 'Amiri', serif;
  font-size: clamp(22px, 4.5vw, 32px);
  color: var(--emas);
  text-shadow: 0 2px 20px rgba(var(--emas-rgb), 0.3);
  line-height: 1.8;
}

.bismillah-translate {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(14px, 2.5vw, 16px);
  color: var(--cream);
  opacity: 0.8;
  margin-top: 14px;
  line-height: 1.7;
}

.section-divider {
  width: 60px;
  margin-top: 40px;
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

@media (max-width: 480px) {
  .flower-wrapper {
    width: 160px;
    height: 160px;
  }
}
</style>
