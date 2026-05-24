<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

defineProps<{
  brideNickname: string
  groomNickname: string
  quotes: { text: string; source: string }[]
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
  const el = document.getElementById('section-closing')
  if (el) observer!.observe(el)
})

onUnmounted(() => observer?.disconnect())
</script>

<template>
  <section id="section-closing" data-section class="section-closing scroll-reveal" :class="{ visible: isVisible }">
    <div class="section-content">
      <div class="closing-frame">
        <img src="/images/couples/cropped_assets/asset_3.png" alt="" class="corner tl" loading="lazy" />
        <img src="/images/couples/cropped_assets/asset_4.png" alt="" class="corner tr" loading="lazy" />

        <div class="closing-inner">
          <p v-for="quote in quotes" :key="quote.source" class="closing-quote">
            "{{ quote.text }}"
          </p>
          <p class="closing-source">({{ quotes[0]?.source }})</p>

          <img src="/images/couples/cropped_assets/asset_15.png" alt="" class="closing-monogram" loading="lazy" />

          <div class="closing-couple">
            <h3>{{ brideNickname }} & {{ groomNickname }}</h3>
          </div>

          <p class="closing-thank">Wa Assalamu'alaikum Warahmatullahi Wabarakatuh</p>

          <div class="closing-floral-row">
            <div class="floral-line"></div>
            <img src="/images/couples/cropped_assets/asset_29.png" alt="" class="closing-floral" loading="lazy" />
            <div class="floral-line"></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="footer-pattern"></div>
    <img src="/images/couples/cropped_assets/asset_28.png" alt="" class="footer-ornament" loading="lazy" />
    <p>Dibuat dengan ❤️ untuk {{ brideNickname }} & {{ groomNickname }}</p>
    <p class="footer-traditional">Maranak Minang</p>
  </footer>
</template>

<style scoped>
.section-closing {
  background: linear-gradient(180deg, rgba(var(--emas-rgb), 0.05) 0%, transparent 100%);
}

.section-content {
  max-width: 900px;
  margin: 0 auto;
  padding: 80px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.closing-frame {
  position: relative;
  max-width: 700px;
  width: 100%;
  padding: 50px 40px;
  border: 1px solid rgba(var(--emas-rgb), 0.15);
  border-radius: 20px;
  background: linear-gradient(135deg, rgba(var(--emas-rgb), 0.06), rgba(var(--emas-rgb), 0.02));
}

.corner {
  position: absolute;
  width: 70px;
  opacity: 0.5;
  pointer-events: none;
  z-index: 2;
}
.tl { top: -16px; left: -16px; }
.tr { top: -16px; right: -16px; }

.closing-inner {
  text-align: center;
}

.closing-quote {
  font-family: 'Cormorant Garamond', serif;
  font-size: 18px;
  color: var(--cream);
  font-style: italic;
  line-height: 1.8;
  margin-bottom: 12px;
}

.closing-source {
  color: var(--emas);
  font-size: 14px;
  margin-bottom: 32px;
}

.closing-monogram {
  width: 35px;
  margin-bottom: 16px;
  opacity: 0.6;
}

.closing-couple h3 {
  font-family: 'Great Vibes', cursive;
  font-size: 38px;
  color: var(--emas);
  margin-bottom: 24px;
}

.closing-thank {
  font-family: 'Cormorant Garamond', serif;
  font-size: 16px;
  color: var(--cream);
  margin-bottom: 28px;
}

.closing-floral-row {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.floral-line {
  width: 60px;
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--emas));
}

.closing-floral-row .floral-line:last-child {
  background: linear-gradient(90deg, var(--emas), transparent);
}

.closing-floral {
  width: 80px;
  opacity: 0.6;
}

.footer {
  background: linear-gradient(180deg, transparent, rgba(0, 0, 0, 0.3));
  padding: 40px 20px;
  text-align: center;
}

.footer-pattern {
  height: 3px;
  background: linear-gradient(90deg, var(--merah-minang), var(--emas), var(--orange-bride), var(--emas), var(--merah-minang));
  margin-bottom: 20px;
}

.footer-ornament {
  width: 60px;
  margin: 0 auto 16px;
  opacity: 0.4;
}

.footer p {
  color: var(--cream);
  font-size: 14px;
  opacity: 0.7;
  font-family: 'Cormorant Garamond', serif;
}

.footer-traditional {
  font-family: 'Amiri', serif;
  color: var(--emas) !important;
  margin-top: 10px;
  font-size: 16px;
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
  .closing-frame {
    padding: 40px 24px;
  }
  .corner {
    width: 50px;
  }
  .closing-couple h3 {
    font-size: 30px;
  }
}
</style>
