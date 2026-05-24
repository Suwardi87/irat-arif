<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import ConfettiCanvas from '@/components/ui/ConfettiCanvas.vue'

defineProps<{
  whatsappNumber: string
  whatsappMessage: string
  coupleShortName: string
}>()

const isVisible = ref(false)
const showConfetti = ref(false)
const showThankYou = ref(false)
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
  const el = document.getElementById('section-rsvp')
  if (el) observer!.observe(el)
})

onUnmounted(() => observer?.disconnect())

function confirmRsvp(phoneNumber: string, message: string) {
  showConfetti.value = true
  showThankYou.value = true

  setTimeout(() => {
    showConfetti.value = false
  }, 5000)

  setTimeout(() => {
    showThankYou.value = false
  }, 4000)

  setTimeout(() => {
    const waUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
    window.open(waUrl, '_blank')
  }, 1500)
}
</script>

<template>
  <section id="section-rsvp" data-section class="section-rsvp scroll-reveal" :class="{ visible: isVisible }" aria-label="Konfirmasi Kehadiran">
    <div class="section-content">
      <div class="section-title">
        <img src="/images/couples/cropped_assets/asset_23.png" alt="" class="title-floral" loading="lazy" />
        <h2>Konfirmasi Kehadiran</h2>
        <div class="title-underline"></div>
      </div>

      <div class="rsvp-body">
        <img src="/images/couples/cropped_assets/asset_18.png" alt="" class="floral-accent left" loading="lazy" />
        <img src="/images/couples/cropped_assets/asset_18.png" alt="" class="floral-accent right" loading="lazy" />

        <div class="rsvp-inner">
          <p class="rsvp-text">
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir
            untuk memberikan doa restu kepada kami.
          </p>
          <p class="rsvp-question">Kehadiran Anda sangat kami nantikan</p>

          <div class="rsvp-actions">
            <button @click="confirmRsvp(whatsappNumber, whatsappMessage)" class="btn-rsvp">
              <span class="rsvp-icon">💬</span>
              <span>Konfirmasi via WhatsApp</span>
              <div class="btn-shine"></div>
            </button>
            <p class="rsvp-hint">Klik tombol di atas untuk mengirim konfirmasi</p>
          </div>
        </div>
      </div>

      <Transition name="thankyou">
        <div v-if="showThankYou" class="thankyou-overlay">
          <div class="thankyou-card">
            <div class="thankyou-emoji">🎉</div>
            <h3 class="thankyou-title">Terima Kasih!</h3>
            <p class="thankyou-text">Mohon konfirmasi kehadiran Anda via WhatsApp</p>
            <div class="thankyou-hearts">
              <span>💕</span>
              <span>✨</span>
              <span>💕</span>
            </div>
          </div>
        </div>
      </Transition>
    </div>

    <ConfettiCanvas :active="showConfetti" :duration="4000" />
  </section>
</template>

<style scoped>
.section-rsvp {
  background: linear-gradient(180deg, transparent 0%, rgba(var(--merah-rgb), 0.08) 50%, transparent 100%);
  position: relative;
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

.rsvp-body {
  position: relative;
  width: 100%;
  max-width: 650px;
}

.floral-accent {
  position: absolute;
  width: 100px;
  opacity: 0.2;
  pointer-events: none;
  z-index: 0;
}

.floral-accent.left {
  top: -20px;
  left: -40px;
}

.floral-accent.right {
  bottom: -20px;
  right: -40px;
  transform: scaleX(-1);
}

.rsvp-inner {
  position: relative;
  z-index: 1;
  text-align: center;
}

.rsvp-text {
  font-family: 'Cormorant Garamond', serif;
  font-size: 18px;
  color: var(--cream);
  opacity: 0.9;
  max-width: 550px;
  margin: 0 auto 30px;
  line-height: 1.8;
}

.rsvp-question {
  font-family: 'Playfair Display', serif;
  font-size: 18px;
  color: var(--emas);
  margin-bottom: 35px;
  font-weight: 600;
}

.rsvp-actions {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}

.btn-rsvp {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: linear-gradient(135deg, var(--merah-minang), var(--merah-dark));
  color: var(--cream);
  border: 2px solid var(--emas);
  padding: 16px 40px;
  border-radius: 50px;
  font-size: 18px;
  font-weight: 600;
  font-family: 'Cormorant Garamond', serif;
  cursor: pointer;
  box-shadow: 0 8px 30px rgba(var(--merah-rgb), 0.4);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  overflow: hidden;
}

.btn-rsvp:hover {
  transform: translateY(-4px);
  box-shadow: 0 15px 40px rgba(var(--merah-rgb), 0.5), 0 0 30px rgba(var(--emas-rgb), 0.3);
}

.btn-rsvp:active {
  transform: translateY(-2px) scale(0.98);
}

.rsvp-icon {
  font-size: 22px;
}

.btn-shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  animation: shine 3s infinite;
}

.rsvp-hint {
  font-family: 'Cormorant Garamond', serif;
  font-size: 13px;
  color: var(--cream);
  opacity: 0.35;
}

.thankyou-overlay {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9998;
  pointer-events: none;
}

.thankyou-card {
  background: linear-gradient(180deg, var(--surface), var(--surface-dark));
  border: 2px solid var(--emas);
  border-radius: 20px;
  padding: 40px 48px;
  text-align: center;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.6), 0 0 60px rgba(var(--emas-rgb), 0.15);
  backdrop-filter: blur(20px);
}

.thankyou-emoji {
  font-size: 48px;
  margin-bottom: 16px;
  animation: celebrateBounce 0.6s ease-out;
}

.thankyou-title {
  font-family: 'Playfair Display', serif;
  font-size: 32px;
  color: var(--emas);
  margin-bottom: 10px;
  font-weight: 700;
}

.thankyou-text {
  font-family: 'Cormorant Garamond', serif;
  font-size: 16px;
  color: var(--cream);
  opacity: 0.7;
  margin-bottom: 20px;
}

.thankyou-hearts {
  display: flex;
  justify-content: center;
  gap: 16px;
  font-size: 20px;
}

.thankyou-hearts span:nth-child(2) {
  animation: sparkle 1.5s ease-in-out infinite;
}

@keyframes celebrateBounce {
  0% { transform: scale(0) rotate(-15deg); }
  50% { transform: scale(1.3) rotate(5deg); }
  70% { transform: scale(0.9) rotate(-2deg); }
  100% { transform: scale(1) rotate(0deg); }
}

@keyframes sparkle {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.3); }
}

.thankyou-enter-active {
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.thankyou-leave-active {
  transition: all 0.4s ease-in;
}

.thankyou-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.thankyou-enter-from .thankyou-card {
  transform: scale(0.5) translateY(30px);
}

.thankyou-leave-to {
  opacity: 0;
  transform: scale(0.9) translateY(-20px);
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

@keyframes shine {
  0% { left: -100%; }
  50%, 100% { left: 100%; }
}

@media (max-width: 640px) {
  .floral-accent {
    width: 70px;
  }
  .floral-accent.left {
    left: -20px;
  }
  .floral-accent.right {
    right: -20px;
  }
  .thankyou-card {
    padding: 32px 28px;
    margin: 0 20px;
  }
  .thankyou-title {
    font-size: 26px;
  }
}
</style>
