<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface BankAccount {
  bankName: string
  accountNumber: string
  accountName: string
}

interface EWallet {
  name: string
  number: string
  holder: string
}

defineProps<{
  banks: BankAccount[]
}>()

const ewallets: EWallet[] = [
  { name: 'GoPay', number: '081234567890', holder: 'Asratul Fitri' },
  { name: 'OVO', number: '081234567890', holder: 'Asratul Fitri' },
  { name: 'DANA', number: '081234567890', holder: 'Asratul Fitri' }
]

const activeTab = ref<'bank' | 'ewallet'>('bank')
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

function getEwalletIcon(name: string): string {
  const icons: Record<string, string> = {
    GoPay: '💚',
    OVO: '💜',
    DANA: '💙',
    ShopeePay: '🧡',
    LinkAja: '❤️'
  }
  return icons[name] || '📱'
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
      <div class="section-title">
        <img src="/images/couples/cropped_assets/asset_23.png" alt="" class="title-floral" loading="lazy" />
        <h2>Amplop Digital</h2>
        <div class="title-underline"></div>
      </div>

      <p class="gift-intro">
        Doa restu Anda merupakan karunia yang sangat berarti bagi kami.
        Namun jika Anda ingin memberikan tanda kasih, kami menyediakan amplop digital.
      </p>

      <img src="/images/couples/cropped_assets/asset_19.png" alt="" class="gift-divider" loading="lazy" />

      <div class="gift-tabs">
        <button
          class="tab-btn"
          :class="{ active: activeTab === 'bank' }"
          @click="activeTab = 'bank'"
        >
          <span class="tab-icon">🏦</span>
          <span>Transfer Bank</span>
        </button>
        <button
          class="tab-btn"
          :class="{ active: activeTab === 'ewallet' }"
          @click="activeTab = 'ewallet'"
        >
          <span class="tab-icon">📱</span>
          <span>E-Wallet</span>
        </button>
      </div>

      <Transition name="tab-switch" mode="out-in">
        <div v-if="activeTab === 'bank'" key="bank" class="tab-content">
          <div class="bank-cards">
            <div v-for="bank in banks" :key="bank.bankName" class="bank-card">
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
        </div>

        <div v-else key="ewallet" class="tab-content">
          <div class="ewallet-cards">
            <div v-for="wallet in ewallets" :key="wallet.name" class="ewallet-card">
              <div class="ewallet-header">
                <span class="ewallet-icon">{{ getEwalletIcon(wallet.name) }}</span>
                <span class="ewallet-name">{{ wallet.name }}</span>
              </div>

              <div class="ewallet-details">
                <div class="detail-row">
                  <span class="detail-label">a.n.</span>
                  <span class="detail-value account-name">{{ wallet.holder }}</span>
                </div>
                <div class="detail-row account-row">
                  <span class="detail-value account-number">{{ wallet.number }}</span>
                  <button
                    class="copy-btn"
                    :class="{ copied: copiedId === wallet.name }"
                    @click="copyToClipboard(wallet.number, wallet.name)"
                  >
                    <Transition name="copy-icon" mode="out-in">
                      <span v-if="copiedId === wallet.name" key="check" class="copy-content">✅</span>
                      <span v-else key="copy" class="copy-content">📋</span>
                    </Transition>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div class="qris-note">
            <div class="qris-badge">
              <span class="qris-text">QRIS</span>
            </div>
            <p class="qris-info">Scan QR code di aplikasi e-wallet Anda untuk transfer mudah</p>
          </div>
        </div>
      </Transition>

      <div class="gift-footer">
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

.gift-divider {
  display: block;
  width: 50px;
  margin: 0 auto 32px;
  opacity: 0.5;
}

.gift-tabs {
  display: flex;
  gap: 4px;
  background: rgba(var(--emas-rgb), 0.08);
  border-radius: 12px;
  padding: 4px;
  margin-bottom: 32px;
  border: 1px solid rgba(var(--emas-rgb), 0.1);
}

.tab-btn {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 16px;
  border-radius: 10px;
  border: none;
  background: transparent;
  color: var(--cream);
  font-family: 'Cormorant Garamond', serif;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  opacity: 0.6;
}

.tab-btn.active {
  background: linear-gradient(135deg, rgba(var(--emas-rgb), 0.2), rgba(var(--emas-rgb), 0.08));
  color: var(--emas);
  opacity: 1;
  box-shadow: 0 2px 10px rgba(var(--emas-rgb), 0.1);
}

.tab-btn:hover:not(.active) {
  opacity: 0.9;
  background: rgba(var(--emas-rgb), 0.05);
}

.tab-icon {
  font-size: 16px;
}

.tab-content {
  min-height: 200px;
}

.tab-switch-enter-active {
  transition: all 0.3s ease-out;
}

.tab-switch-leave-active {
  transition: all 0.2s ease-in;
}

.tab-switch-enter-from {
  opacity: 0;
  transform: translateX(20px);
}

.tab-switch-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}

.bank-cards,
.ewallet-cards {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.bank-card,
.ewallet-card {
  background: linear-gradient(135deg, rgba(var(--emas-rgb), 0.1), rgba(var(--emas-rgb), 0.04));
  backdrop-filter: blur(10px);
  border: 1px solid rgba(var(--emas-rgb), 0.15);
  border-radius: 14px;
  padding: 20px;
  transition: all 0.3s ease;
}

.bank-card:hover,
.ewallet-card:hover {
  border-color: rgba(var(--emas-rgb), 0.35);
  box-shadow: 0 6px 25px rgba(var(--emas-rgb), 0.08);
}

.bank-header,
.ewallet-header {
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

.ewallet-icon {
  font-size: 28px;
}

.ewallet-name {
  font-family: 'Playfair Display', serif;
  font-size: 18px;
  color: var(--emas);
  font-weight: 700;
}

.bank-details,
.ewallet-details {
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

.qris-note {
  margin-top: 24px;
  padding: 16px 20px;
  background: linear-gradient(135deg, rgba(var(--emas-rgb), 0.08), rgba(var(--emas-rgb), 0.03));
  border: 1px dashed rgba(var(--emas-rgb), 0.2);
  border-radius: 12px;
  display: flex;
  align-items: center;
  gap: 14px;
}

.qris-badge {
  background: linear-gradient(135deg, var(--emas), var(--emas-dark));
  padding: 6px 12px;
  border-radius: 6px;
  flex-shrink: 0;
}

.qris-text {
  font-family: 'Playfair Display', serif;
  font-size: 12px;
  font-weight: 700;
  color: var(--charcoal);
  letter-spacing: 2px;
}

.qris-info {
  font-family: 'Cormorant Garamond', serif;
  font-size: 14px;
  color: var(--cream);
  opacity: 0.6;
  line-height: 1.5;
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
  .tab-btn {
    padding: 10px 12px;
    font-size: 14px;
  }
  .qris-note {
    flex-direction: column;
    text-align: center;
  }
}
</style>
