<script setup lang="ts">
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const props = defineProps<{
  greeting?: string
  openingText?: string
  isPersonalized: boolean
  brideNickname: string
  groomNickname: string
}>()

const emit = defineEmits<{
  open: []
}>()

const envelopeState = ref<'closed' | 'opening' | 'card-out' | 'done'>('closed')
const showEnvelope = ref(true)
const showContent = ref(false)
const isHovering = ref(false)

function openEnvelope() {
  if (envelopeState.value !== 'closed') return
  envelopeState.value = 'opening'

  const tl = gsap.timeline()

  tl.to('.envelope-flap', {
    rotateX: 180,
    duration: 0.8,
    ease: 'power2.inOut',
    transformOrigin: 'top center'
  })

  tl.to('.envelope-card', {
    y: -320,
    duration: 1.4,
    ease: 'power2.out',
    onStart: () => {
      envelopeState.value = 'card-out'
      showContent.value = true
    }
  }, '-=0.3')

  tl.to('.envelope-wrapper', {
    opacity: 0,
    y: 60,
    scale: 0.9,
    duration: 0.8,
    ease: 'power2.in'
  }, '-=0.2')

  tl.to('.envelope-card', {
    opacity: 0,
    scale: 0.95,
    filter: 'blur(8px)',
    duration: 0.6,
    ease: 'power3.in',
    onComplete: () => {
      envelopeState.value = 'done'
      showEnvelope.value = false
      emit('open')
    }
  }, '+=1.5')
}

onMounted(() => {
  gsap.fromTo('.envelope-wrapper', 
    { opacity: 0, y: 60, scale: 0.9 },
    { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: 'back.out(1.7)', delay: 0.3 }
  )

  gsap.fromTo('.envelope-guest-label',
    { opacity: 0, y: 10 },
    { opacity: 1, y: 0, duration: 0.8, delay: 1.2 }
  )

  gsap.fromTo('.envelope-guest-name',
    { opacity: 0, y: 10 },
    { opacity: 1, y: 0, duration: 0.8, delay: 1.5 }
  )

  gsap.fromTo('.envelope-btn',
    { opacity: 0, y: 15, scale: 0.9 },
    { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'back.out(1.7)', delay: 1.8 }
  )
})
</script>

<template>
  <section v-if="showEnvelope" class="envelope-section">
    <div class="envelope-particles">
      <div
        v-for="i in 20" :key="i" class="particle" :style="{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 4}s`,
          animationDuration: `${3 + Math.random() * 4}s`
        }"
      ></div>
    </div>

    <div class="envelope-wrapper">
      <div class="envelope-container">
        <div class="envelope-back">
          <div class="envelope-inner-bg"></div>
        </div>

        <div class="envelope-card">
          <div v-if="showContent" class="card-content">
            <div class="card-ornament top">
              <svg viewBox="0 0 200 40" class="ornament-top-svg">
                <path d="M0 20 Q50 0 100 20 Q150 40 200 20" fill="none" stroke="var(--emas)" stroke-width="1"/>
                <circle cx="100" cy="20" r="4" fill="var(--emas)"/>
                <circle cx="50" cy="10" r="2" fill="var(--emas-light)"/>
                <circle cx="150" cy="30" r="2" fill="var(--emas-light)"/>
              </svg>
            </div>

            <p class="card-bismillah">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</p>

            <p class="card-label">Undangan Pernikahan</p>

            <div class="card-names">
              <span class="card-name bride">{{ brideNickname }}</span>
              <span class="card-amp">&</span>
              <span class="card-name groom">{{ groomNickname }}</span>
            </div>

            <div class="card-date-badge">
              <span class="date-text">05 - 07</span>
              <span class="date-month">JUNI 2026</span>
            </div>

            <div class="card-ornament bottom">
              <svg viewBox="0 0 200 40" class="ornament-bottom-svg">
                <path d="M0 20 Q50 40 100 20 Q150 0 200 20" fill="none" stroke="var(--emas)" stroke-width="1"/>
                <circle cx="100" cy="20" r="4" fill="var(--emas)"/>
                <circle cx="50" cy="30" r="2" fill="var(--emas-light)"/>
                <circle cx="150" cy="10" r="2" fill="var(--emas-light)"/>
              </svg>
            </div>
          </div>
        </div>

        <div class="envelope-body">
          <div class="envelope-front">
            <div class="wax-seal">
              <div class="seal-outer">
                <div class="seal-inner">
                  <span class="seal-icon">✦</span>
                </div>
              </div>
            </div>

            <div class="envelope-text-area">
              <p class="envelope-label">UNDANGAN PERNIKAHAN</p>
              <div class="envelope-divider">
                <span class="env-line"></span>
                <span class="env-dot">◆</span>
                <span class="env-line"></span>
              </div>
              <p class="envelope-couple">{{ brideNickname }} & {{ groomNickname }}</p>
            </div>

            <div class="envelope-guest-area">
              <p class="envelope-guest-label">Kepada Yth.</p>
              <p v-if="isPersonalized && greeting" class="envelope-guest-name">{{ greeting }}</p>
              <p v-else class="envelope-guest-name">Bapak/Ibu/Saudara/i</p>
            </div>
          </div>
        </div>

        <div class="envelope-flap">
          <div class="flap-inner"></div>
          <div class="flap-front-face"></div>
        </div>
      </div>

      <button
        class="envelope-btn"
        :class="{ hovering: isHovering }"
        @click="openEnvelope"
        @mouseenter="isHovering = true"
        @mouseleave="isHovering = false"
        :disabled="envelopeState !== 'closed'"
      >
        <span class="btn-icon">✉️</span>
        <span class="btn-label">Buka Undangan</span>
        <div class="btn-shine"></div>
      </button>
    </div>
  </section>
</template>

<style scoped>
.envelope-section {
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, var(--charcoal) 0%, var(--surface-dark) 50%, var(--charcoal) 100%);
  z-index: 5000;
  overflow: hidden;
}

.envelope-particles {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.particle {
  position: absolute;
  width: 3px;
  height: 3px;
  background: var(--emas);
  border-radius: 50%;
  opacity: 0.2;
  animation: floatParticle 6s ease-in-out infinite;
}

@keyframes floatParticle {
  0%, 100% { transform: translateY(0) scale(1); opacity: 0.2; }
  50% { transform: translateY(-30px) scale(1.5); opacity: 0.5; }
}

.envelope-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}

.envelope-container {
  width: min(380px, 90vw);
  height: 280px;
  position: relative;
  perspective: 1200px;
  cursor: default;
}

.envelope-back {
  position: absolute;
  inset: 0;
  z-index: 1;
}

.envelope-inner-bg {
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, var(--orange-bride) 0%, var(--emas-dark) 100%);
  border-radius: 8px;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.5);
}

.envelope-card {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 20px;
  width: min(300px, 75vw);
  min-height: 350px;
  background: linear-gradient(180deg, var(--surface) 0%, var(--surface-dark) 50%, var(--surface) 100%);
  border: 2px solid var(--emas);
  border-radius: 12px;
  z-index: 5;
  box-shadow: 0 -5px 30px rgba(0, 0, 0, 0.4);
  overflow: hidden;
}

.card-content {
  padding: 30px 24px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 350px;
  justify-content: center;
  gap: 16px;
}

.card-ornament {
  width: 100%;
  display: flex;
  justify-content: center;
  opacity: 0.6;
}

.ornament-top-svg,
.ornament-bottom-svg {
  width: 160px;
  height: 30px;
}

.card-bismillah {
  font-family: 'Amiri', serif;
  font-size: clamp(18px, 4vw, 22px);
  color: var(--emas);
  text-shadow: 0 2px 15px rgba(var(--emas-rgb), 0.3);
}

.card-label {
  font-family: 'Cormorant Garamond', serif;
  font-size: 12px;
  color: var(--emas-light);
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 600;
  opacity: 0.8;
}

.card-names {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.card-name {
  font-family: 'Great Vibes', cursive;
  font-size: clamp(24px, 5vw, 32px);
  color: var(--emas);
  text-shadow: 0 2px 15px rgba(var(--emas-rgb), 0.4);
}

.card-amp {
  font-family: 'Great Vibes', cursive;
  font-size: clamp(20px, 4vw, 26px);
  color: var(--merah-minang);
}

.card-date-badge {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(135deg, rgba(var(--emas-rgb), 0.15), rgba(var(--emas-rgb), 0.05));
  border: 1px solid rgba(var(--emas-rgb), 0.3);
  border-radius: 8px;
  padding: 10px 24px;
}

.date-text {
  font-family: 'Playfair Display', serif;
  font-size: 20px;
  color: var(--emas);
  font-weight: 700;
  letter-spacing: 3px;
}

.date-month {
  font-size: 11px;
  color: var(--emas-light);
  letter-spacing: 2px;
  text-transform: uppercase;
}

.envelope-body {
  position: absolute;
  inset: 0;
  z-index: 3;
}

.envelope-front {
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, var(--emas-light) 0%, var(--emas) 40%, var(--emas-dark) 100%);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.5);
  overflow: hidden;
}

.envelope-front::before {
  content: '';
  position: absolute;
  inset: 8px;
  border: 1px solid rgba(var(--emas-rgb), 0.3);
  border-radius: 4px;
  pointer-events: none;
}

.envelope-front::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  background: linear-gradient(180deg, transparent, rgba(var(--emas-rgb), 0.15));
  pointer-events: none;
}

.wax-seal {
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
}

.seal-outer {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, var(--merah-minang), var(--merah-dark));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(var(--merah-rgb), 0.5), inset 0 1px 2px rgba(255, 255, 255, 0.2);
  border: 2px solid rgba(var(--emas-rgb), 0.5);
}

.seal-inner {
  width: 34px;
  height: 34px;
  border: 1px solid rgba(var(--emas-rgb), 0.4);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.seal-icon {
  color: var(--emas);
  font-size: 14px;
}

.envelope-text-area {
  text-align: center;
  margin-top: 10px;
}

.envelope-label {
  font-family: 'Cormorant Garamond', serif;
  font-size: 11px;
  color: var(--charcoal);
  letter-spacing: 4px;
  text-transform: uppercase;
  font-weight: 700;
  margin-bottom: 8px;
}

.envelope-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 8px;
}

.env-line {
  width: 40px;
  height: 1px;
  background: var(--charcoal);
}

.env-dot {
  font-size: 6px;
  color: var(--charcoal);
}

.envelope-couple {
  font-family: 'Great Vibes', cursive;
  font-size: clamp(22px, 5vw, 28px);
  color: var(--charcoal);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
}

.envelope-guest-area {
  text-align: center;
  margin-top: 16px;
}

.envelope-guest-label {
  font-family: 'Cormorant Garamond', serif;
  font-size: 11px;
  color: var(--charcoal);
  opacity: 0.7;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 4px;
}

.envelope-guest-name {
  font-family: 'Playfair Display', serif;
  font-size: clamp(16px, 4vw, 20px);
  color: var(--charcoal);
  font-weight: 700;
}

.envelope-flap {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 160px;
  z-index: 4;
  transform-style: preserve-3d;
  transform-origin: top center;
}

.flap-inner {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, var(--emas) 0%, var(--emas-dark) 100%);
  clip-path: polygon(0 0, 50% 100%, 100% 0);
  backface-visibility: hidden;
  transform: rotateX(0deg);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.flap-front-face {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, var(--emas) 0%, var(--emas-dark) 100%);
  clip-path: polygon(0 0, 50% 100%, 100% 0);
  backface-visibility: hidden;
  transform: rotateX(180deg);
}

.envelope-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: linear-gradient(135deg, var(--merah-minang) 0%, var(--merah-dark) 100%);
  color: var(--cream);
  border: 2px solid var(--emas);
  padding: 16px 40px;
  border-radius: 50px;
  font-size: 16px;
  font-weight: 600;
  font-family: 'Cormorant Garamond', serif;
  cursor: pointer;
  box-shadow: 0 8px 30px rgba(var(--merah-rgb), 0.4);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  overflow: hidden;
  letter-spacing: 1px;
}

.envelope-btn:hover:not(:disabled),
.envelope-btn.hovering {
  transform: translateY(-4px) scale(1.02);
  box-shadow: 0 15px 45px rgba(var(--merah-rgb), 0.5), 0 0 40px rgba(var(--emas-rgb), 0.2);
}

.envelope-btn:disabled {
  cursor: default;
}

.btn-icon {
  font-size: 20px;
  position: relative;
  z-index: 1;
  animation: envelopeWiggle 2s ease-in-out infinite;
}

.envelope-btn:disabled .btn-icon {
  animation: none;
}

.btn-label {
  position: relative;
  z-index: 1;
}

.btn-shine {
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.25), transparent);
  animation: shine 3s infinite;
}

.envelope-btn:disabled .btn-shine {
  animation: none;
}

@keyframes envelopeWiggle {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-5deg); }
  75% { transform: rotate(5deg); }
}

@keyframes shine {
  0% { left: -100%; }
  50%, 100% { left: 100%; }
}

@media (max-width: 640px) {
  .envelope-container {
    width: min(320px, 88vw);
    height: 240px;
  }

  .envelope-card {
    width: min(260px, 72vw);
    min-height: 300px;
  }

  .card-content {
    padding: 24px 18px;
    min-height: 300px;
    gap: 12px;
  }

  .envelope-btn {
    padding: 14px 32px;
    font-size: 15px;
  }

  .envelope-couple {
    font-size: 22px;
  }

  .seal-outer {
    width: 42px;
    height: 42px;
  }

  .seal-inner {
    width: 28px;
    height: 28px;
  }
}
</style>
