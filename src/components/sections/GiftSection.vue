<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface BankAccount {
  bankName: string
  accountNumber: string
  accountName: string
}

defineProps<{
  banks: BankAccount[]
}>()

const copiedId = ref<string | null>(null)
const isVisible = ref(false)
let observer: IntersectionObserver | null = null
let copyTimeout: ReturnType<typeof setTimeout> | null = null

const bankLogos: Record<string, string> = {
  BCA: '#003d79',
  MANDIRI: '#003066',
  BNI: '#f05a22',
  BRI: '#00529c',
  BSI: '#00a650',
  CIMB: '#7b0e24',
  DANAMON: '#fdd20e',
  PERMATA: '#005596'
}

function getBankColor(name: string): string {
  return bankLogos[name.toUpperCase()] || '#d4af37'
}

function getBankInitials(name: string): string {
  return name.slice(0, 2).toUpperCase()
}

async function copyToClipboard(text: string, id: string) {
  try {
    await navigator.clipboard.writeText(text)
    copiedId.value = id
    if (copyTimeout) clearTimeout(copyTimeout)
    copyTimeout = setTimeout(() => {
      copiedId.value = null
    }, 2000)
  } catch {
    const textarea = document.createElement('textarea')
    textarea.value = text
    textarea.style.position = 'fixed'
    textarea.style.opacity = '0'
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    document.body.removeChild(textarea)
    copiedId.value = id
    if (copyTimeout) clearTimeout(copyTimeout)
    copyTimeout = setTimeout(() => {
      copiedId.value = null
    }, 2000)
  }
}

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) isVisible.value = true
      })
    },
    { threshold: 0.15 }
  )
  const el = document.getElementById('section-gift')
  if (el) observer!.observe(el)
})

onUnmounted(() => {
  observer?.disconnect()
  if (copyTimeout) clearTimeout(copyTimeout)
})
</script>

<template>
  <section id="section-gift" class="gift-section scroll-reveal" :class="{ visible: isVisible }">
    <div class="gift-content">
      <div class="section-title anim anim-up" style="--d: 0s">
        <h2>Amplop Digital</h2>
        <div class="title-underline"></div>
      </div>

      <p class="gift-intro anim anim-up" style="--d: 0.15s">
        Doa restu Anda merupakan karunia yang sangat berarti bagi kami.
        Namun jika Anda ingin memberikan tanda kasih, kami menyediakan amplop digital.
      </p>

      <div class="bank-cards">
            <div v-for="(bank, idx) in banks" :key="bank.bankName" class="bank-card anim anim-up" :style="{ '--d': `${0.35 + idx * 0.1}s` }">
              <div class="bank-header">
                <div class="bank-logo" :style="{ background: getBankColor(bank.bankName) }">
                  <span class="bank-initials">{{ getBankInitials(bank.bankName) }}</span>
                </div>
                <span class="bank-name">{{ bank.bankName }}</span>
              </div>

              <div class="bank-details">
                <div class="detail-row">
                  <span class="detail-label">a.n.</span>
                  <span class="detail-value account-name">{{ bank.accountName }}</span>
                </div>
                <div class="detail-row account-row">
                  <div class="account-number-wrapper">
                    <span class="detail-value account-number">{{ bank.accountNumber }}</span>
                  </div>
                  <button
                    class="copy-btn"
                    :class="{ copied: copiedId === bank.bankName }"
                    @click="copyToClipboard(bank.accountNumber, bank.bankName)"
                  >
                    <Transition name="copy-icon" mode="out-in">
                      <span v-if="copiedId === bank.bankName" key="check" class="copy-content">✅</span>
                      <span v-else key="copy" class="copy-content">📋</span>
                    </Transition>
                  </button>
                </div>
              </div>
            </div>
          </div>

      <div class="gift-footer anim anim-up" style="--d: 0.5s">
        <img src="/images/couples/cropped_assets/asset_16.png" alt="" class="footer-crown" loading="lazy" />
        <p class="gift-thanks">
          Merupakan suatu kebahagiaan dan kehormatan bagi kami apabila Bapak/Ibu/Saudara/i
          berkenan hadir memberikan doa restu.
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.gift-section {
  padding: 80px 20px;
  position: relative;
}

.gift-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 0%, rgba(var(--emas-rgb), 0.05) 50%, transparent 100%);
  pointer-events: none;
}

.gift-content {
  max-width: 700px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.section-title {
  margin-bottom: 20px;
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

.gift-intro {
  text-align: center;
  font-family: 'Cormorant Garamond', serif;
  font-size: 16px;
  color: var(--cream);
  opacity: 0.7;
  line-height: 1.7;
  margin-bottom: 20px;
  max-width: 560px;
  margin-left: auto;
  margin-right: auto;
}

.bank-cards {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.bank-card {
  background: linear-gradient(135deg, rgba(var(--emas-rgb), 0.1), rgba(var(--emas-rgb), 0.04));
  backdrop-filter: blur(10px);
  border: 1px solid rgba(var(--emas-rgb), 0.15);
  border-radius: 14px;
  padding: 20px;
  transition: all 0.3s ease;
}

.bank-card:hover {
  border-color: rgba(var(--emas-rgb), 0.35);
  box-shadow: 0 6px 25px rgba(var(--emas-rgb), 0.08);
}

.bank-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.bank-logo {
  width: 42px;
  height: 42px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.bank-initials {
  font-family: 'Playfair Display', serif;
  font-size: 14px;
  font-weight: 700;
  color: white;
  letter-spacing: 1px;
}

.bank-name {
  font-family: 'Playfair Display', serif;
  font-size: 18px;
  color: var(--emas);
  font-weight: 700;
}

.bank-details {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.detail-row {
  display: flex;
  align-items: center;
  gap: 8px;
}

.detail-label {
  font-family: 'Cormorant Garamond', serif;
  font-size: 13px;
  color: var(--cream);
  opacity: 0.5;
}

.detail-value {
  font-family: 'Cormorant Garamond', serif;
  font-size: 15px;
  color: var(--cream);
  opacity: 0.8;
}

.account-name {
  font-weight: 600;
}

.account-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 12px 14px;
  margin-top: 4px;
}

.account-number-wrapper {
  flex: 1;
}

.account-number {
  font-family: 'Playfair Display', serif;
  font-size: 20px;
  color: var(--emas);
  font-weight: 700;
  letter-spacing: 2px;
}

.copy-btn {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  border: 1px solid rgba(var(--emas-rgb), 0.25);
  background: rgba(var(--emas-rgb), 0.1);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  flex-shrink: 0;
  padding: 0;
}

.copy-btn:hover {
  background: rgba(var(--emas-rgb), 0.2);
  border-color: var(--emas);
  transform: scale(1.05);
}

.copy-btn.copied {
  background: rgba(var(--merah-rgb), 0.15);
  border-color: rgba(var(--merah-rgb), 0.4);
}

.copy-content {
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.copy-icon-enter-active {
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.copy-icon-leave-active {
  transition: all 0.15s ease;
}

.copy-icon-enter-from {
  transform: scale(0);
  opacity: 0;
}

.copy-icon-leave-to {
  transform: scale(0);
  opacity: 0;
}

.gift-footer {
  margin-top: 40px;
  text-align: center;
  padding-top: 30px;
  border-top: 1px solid rgba(var(--emas-rgb), 0.1);
}

.footer-crown {
  width: 40px;
  margin-bottom: 16px;
  opacity: 0.5;
}

.gift-thanks {
  font-family: 'Cormorant Garamond', serif;
  font-size: 15px;
  color: var(--cream);
  opacity: 0.5;
  line-height: 1.7;
  font-style: italic;
}

.scroll-reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: all 1s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.scroll-reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 640px) {
  .gift-section {
    padding: 60px 16px;
  }
  .account-number {
    font-size: 17px;
    letter-spacing: 1px;
  }
}
</style>
