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
      <div class="bismillah-frame">
        <img src="/images/couples/cropped_assets/asset_2.png" alt="" class="flower-ring" loading="lazy" />
        <div class="bismillah-text">
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

.bismillah-frame {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
}

.flower-ring {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: drop-shadow(0 4px 25px rgba(var(--emas-rgb), 0.25));
}

.bismillah-text {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 40px;
}

.bismillah {
  font-family: 'Amiri', serif;
  font-size: clamp(22px, 4.5vw, 32px);
  color: var(--emas);
  text-shadow: 0 2px 20px rgba(var(--emas-rgb), 0.3);
  line-height: 1.6;
}

.bismillah-translate {
  font-family: 'Cormorant Garamond', serif;
  font-size: 14px;
  color: var(--cream);
  opacity: 0.75;
  margin-top: 12px;
  line-height: 1.6;
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
  .bismillah-frame {
    width: 240px;
    height: 240px;
  }
  .bismillah-text {
    padding: 30px;
  }
}
</style>
