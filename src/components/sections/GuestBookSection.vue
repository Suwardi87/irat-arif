<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

interface GuestWish {
  id: string
  name: string
  message: string
  attendance: 'hadir' | 'tidak' | 'ragu'
  createdAt: string
}

const props = defineProps<{
  invitationSlug: string
}>()

const STORAGE_KEY = `guestbook-${props.invitationSlug}`

const form = ref({
  name: '',
  message: '',
  attendance: 'hadir' as 'hadir' | 'tidak' | 'ragu'
})

const wishes = ref<GuestWish[]>([])
const isSubmitting = ref(false)
const showSuccess = ref(false)
const formVisible = ref(false)
const listVisible = ref(false)

const totalWishes = computed(() => wishes.value.length)
const totalAttending = computed(() => wishes.value.filter(w => w.attendance === 'hadir').length)

function loadWishes() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      wishes.value = JSON.parse(stored)
    }
  } catch {
    wishes.value = []
  }
}

function saveWishes() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(wishes.value))
}

function submitWish() {
  if (!form.value.name.trim() || !form.value.message.trim()) return

  isSubmitting.value = true

  setTimeout(() => {
    const wish: GuestWish = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
      name: form.value.name.trim(),
      message: form.value.message.trim(),
      attendance: form.value.attendance,
      createdAt: new Date().toISOString()
    }

    wishes.value.unshift(wish)
    saveWishes()

    form.value.name = ''
    form.value.message = ''
    form.value.attendance = 'hadir'
    isSubmitting.value = false
    showSuccess.value = true

    setTimeout(() => {
      showSuccess.value = false
    }, 3000)
  }, 600)
}

function formatDate(isoString: string): string {
  const date = new Date(isoString)
  return date.toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}

function getInitials(name: string): string {
  return name.split(' ').map(w => w.charAt(0).toUpperCase()).slice(0, 2).join('')
}

const avatarColors = [
  'from-amber-600 to-yellow-500',
  'from-rose-600 to-pink-400',
  'from-emerald-600 to-green-400',
  'from-blue-600 to-cyan-400',
  'from-purple-600 to-violet-400',
  'from-orange-600 to-amber-400'
]

function getAvatarColor(name: string): string {
  let hash = 0
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash)
  }
  return avatarColors[Math.abs(hash) % avatarColors.length]
}

function getAttendanceLabel(a: string): string {
  switch (a) {
    case 'hadir': return '✅ Hadir'
    case 'tidak': return '❌ Tidak Hadir'
    case 'ragu': return '🤔 Masih Ragu'
    default: return a
  }
}

onMounted(() => {
  loadWishes()

  const formObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) formVisible.value = true
      })
    },
    { threshold: 0.15 }
  )

  const listObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) listVisible.value = true
      })
    },
    { threshold: 0.1 }
  )

  const formEl = document.querySelector('.gb-form-wrapper')
  const listEl = document.querySelector('.gb-list-wrapper')
  if (formEl) formObserver.observe(formEl)
  if (listEl) listObserver.observe(listEl)
})
</script>

<template>
  <section id="section-guestbook" class="gb-section">
    <div class="gb-content">
      <div class="section-title">
        <span class="title-icon">💌</span>
        <h2>Ucapan & Doa</h2>
        <div class="title-underline"></div>
      </div>

      <p class="gb-intro">
        Berikan ucapan dan doa terbaik untuk kedua mempelai
      </p>

      <div v-if="totalWishes > 0" class="gb-stats">
        <div class="stat-item">
          <span class="stat-num">{{ totalWishes }}</span>
          <span class="stat-label">Ucapan</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat-item">
          <span class="stat-num">{{ totalAttending }}</span>
          <span class="stat-label">Hadir</span>
        </div>
      </div>

      <div class="gb-form-wrapper scroll-reveal" :class="{ visible: formVisible }">
        <form @submit.prevent="submitWish" class="gb-form">
          <div class="form-group">
            <input
              v-model="form.name"
              type="text"
              placeholder="Nama Anda"
              class="form-input"
              required
              maxlength="50"
            />
          </div>

          <div class="form-group attendance-group">
            <label class="attendance-label">Konfirmasi Kehadiran</label>
            <div class="attendance-options">
              <label class="attendance-option" :class="{ active: form.attendance === 'hadir' }">
                <input type="radio" v-model="form.attendance" value="hadir" />
                <span class="option-content">✅ Hadir</span>
              </label>
              <label class="attendance-option" :class="{ active: form.attendance === 'tidak' }">
                <input type="radio" v-model="form.attendance" value="tidak" />
                <span class="option-content">❌ Tidak Hadir</span>
              </label>
              <label class="attendance-option" :class="{ active: form.attendance === 'ragu' }">
                <input type="radio" v-model="form.attendance" value="ragu" />
                <span class="option-content">🤔 Ragu</span>
              </label>
            </div>
          </div>

          <div class="form-group">
            <textarea
              v-model="form.message"
              placeholder="Tulis ucapan dan doa Anda..."
              class="form-input form-textarea"
              required
              maxlength="500"
              rows="3"
            ></textarea>
          </div>

          <button
            type="submit"
            class="gb-submit-btn"
            :disabled="isSubmitting || !form.name.trim() || !form.message.trim()"
          >
            <span v-if="isSubmitting" class="btn-loading">
              <span class="spinner-sm"></span>
              Mengirim...
            </span>
            <span v-else>Kirim Ucapan ✨</span>
          </button>
        </form>
      </div>

      <Transition name="success-toast">
        <div v-if="showSuccess" class="success-toast">
          <span class="toast-icon">✅</span>
          <span>Terima kasih! Ucapan Anda telah terkirim.</span>
        </div>
      </Transition>

      <div v-if="wishes.length > 0" class="gb-list-wrapper scroll-reveal" :class="{ visible: listVisible }">
        <div class="gb-list">
          <TransitionGroup name="wish-card">
            <div v-for="wish in wishes" :key="wish.id" class="wish-card">
              <div class="wish-header">
                <div class="wish-avatar" :class="getAvatarColor(wish.name)">
                  <span>{{ getInitials(wish.name) }}</span>
                </div>
                <div class="wish-meta">
                  <span class="wish-name">{{ wish.name }}</span>
                  <span class="wish-date">{{ formatDate(wish.createdAt) }}</span>
                </div>
                <span class="wish-attendance" :class="wish.attendance">
                  {{ getAttendanceLabel(wish.attendance) }}
                </span>
              </div>
              <p class="wish-message">{{ wish.message }}</p>
            </div>
          </TransitionGroup>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.gb-section {
  padding: 80px 20px;
  position: relative;
}

.gb-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 0%, rgba(var(--merah-rgb), 0.05) 50%, transparent 100%);
  pointer-events: none;
}

.gb-content {
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

.title-icon {
  font-size: 36px;
  display: block;
  margin-bottom: 15px;
}

.title-underline {
  width: 80px;
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--merah-minang), var(--emas), transparent);
}

.gb-intro {
  text-align: center;
  font-family: 'Cormorant Garamond', serif;
  font-size: 16px;
  color: var(--cream);
  opacity: 0.7;
  margin-bottom: 30px;
}

.gb-stats {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin-bottom: 40px;
  padding: 16px 32px;
  background: linear-gradient(135deg, rgba(var(--emas-rgb), 0.1), rgba(var(--emas-rgb), 0.04));
  border: 1px solid rgba(var(--emas-rgb), 0.15);
  border-radius: 12px;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
}

.stat-num {
  font-family: 'Playfair Display', serif;
  font-size: 28px;
  color: var(--emas);
  font-weight: 700;
  line-height: 1;
}

.stat-label {
  font-size: 11px;
  color: var(--cream);
  opacity: 0.5;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.stat-divider {
  width: 1px;
  height: 36px;
  background: rgba(var(--emas-rgb), 0.2);
}

.gb-form-wrapper {
  margin-bottom: 40px;
}

.gb-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.form-group {
  width: 100%;
}

.form-input {
  width: 100%;
  padding: 14px 18px;
  background: rgba(var(--emas-rgb), 0.08);
  border: 1px solid rgba(var(--emas-rgb), 0.2);
  border-radius: 12px;
  color: var(--cream);
  font-family: 'Cormorant Garamond', serif;
  font-size: 16px;
  outline: none;
  transition: all 0.3s ease;
}

.form-input::placeholder {
  color: rgba(var(--cream-rgb), 0.3);
}

.form-input:focus {
  border-color: var(--emas);
  box-shadow: 0 0 0 3px rgba(var(--emas-rgb), 0.1);
  background: rgba(var(--emas-rgb), 0.1);
}

.form-textarea {
  resize: vertical;
  min-height: 100px;
  max-height: 200px;
}

.attendance-label {
  display: block;
  font-family: 'Cormorant Garamond', serif;
  font-size: 14px;
  color: var(--cream);
  opacity: 0.6;
  margin-bottom: 8px;
  letter-spacing: 0.5px;
}

.attendance-options {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.attendance-option {
  flex: 1;
  min-width: 100px;
  cursor: pointer;
}

.attendance-option input {
  display: none;
}

.option-content {
  display: block;
  padding: 10px 12px;
  text-align: center;
  font-size: 13px;
  font-family: 'Cormorant Garamond', serif;
  background: rgba(var(--emas-rgb), 0.08);
  border: 1px solid rgba(var(--emas-rgb), 0.15);
  border-radius: 10px;
  color: var(--cream);
  opacity: 0.6;
  transition: all 0.3s ease;
}

.attendance-option.active .option-content {
  background: rgba(var(--emas-rgb), 0.15);
  border-color: var(--emas);
  color: var(--emas);
  opacity: 1;
}

.option-content:hover {
  border-color: rgba(var(--emas-rgb), 0.4);
  opacity: 0.9;
}

.gb-submit-btn {
  padding: 14px 28px;
  background: linear-gradient(135deg, var(--merah-minang), var(--merah-dark));
  color: var(--cream);
  border: 2px solid var(--emas);
  border-radius: 50px;
  font-size: 16px;
  font-weight: 600;
  font-family: 'Cormorant Garamond', serif;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
  overflow: hidden;
}

.gb-submit-btn:hover:not(:disabled) {
  transform: translateY(-3px);
  box-shadow: 0 10px 35px rgba(var(--merah-rgb), 0.4), 0 0 25px rgba(var(--emas-rgb), 0.15);
}

.gb-submit-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.btn-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.spinner-sm {
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: var(--cream);
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.success-toast {
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, var(--surface), var(--surface-dark));
  border: 1px solid rgba(var(--merah-rgb), 0.4);
  color: var(--emas-light);
  padding: 14px 24px;
  border-radius: 12px;
  font-size: 14px;
  font-family: 'Cormorant Garamond', serif;
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 9999;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
}

.toast-icon {
  font-size: 18px;
}

.success-toast-enter-active {
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.success-toast-leave-active {
  transition: all 0.3s ease-in;
}

.success-toast-enter-from {
  opacity: 0;
  transform: translateX(-50%) translateY(-20px) scale(0.9);
}

.success-toast-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-10px);
}

.gb-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-height: 600px;
  overflow-y: auto;
  padding-right: 8px;
}

.gb-list::-webkit-scrollbar {
  width: 4px;
}

.gb-list::-webkit-scrollbar-track {
  background: transparent;
}

.gb-list::-webkit-scrollbar-thumb {
  background: rgba(var(--emas-rgb), 0.2);
  border-radius: 4px;
}

.gb-list::-webkit-scrollbar-thumb:hover {
  background: rgba(var(--emas-rgb), 0.4);
}

.wish-card {
  background: linear-gradient(135deg, rgba(var(--emas-rgb), 0.1), rgba(var(--emas-rgb), 0.04));
  backdrop-filter: blur(10px);
  border: 1px solid rgba(var(--emas-rgb), 0.12);
  border-radius: 14px;
  padding: 20px;
  transition: all 0.3s ease;
}

.wish-card:hover {
  border-color: rgba(var(--emas-rgb), 0.3);
  box-shadow: 0 4px 20px rgba(var(--emas-rgb), 0.08);
}

.wish-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.wish-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Playfair Display', serif;
  font-size: 14px;
  font-weight: 700;
  color: white;
  flex-shrink: 0;
  background-size: 200% 200%;
}

.wish-meta {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.wish-name {
  font-family: 'Playfair Display', serif;
  font-size: 15px;
  color: var(--emas);
  font-weight: 600;
}

.wish-date {
  font-size: 11px;
  color: var(--cream);
  opacity: 0.4;
}

.wish-attendance {
  font-size: 11px;
  padding: 4px 10px;
  border-radius: 20px;
  background: rgba(var(--emas-rgb), 0.08);
  white-space: nowrap;
  flex-shrink: 0;
}

.wish-attendance.hadir {
  background: rgba(var(--merah-rgb), 0.15);
  color: var(--merah-minang);
}

.wish-attendance.tidak {
  background: rgba(var(--emas-dark), 0.15);
  color: var(--emas-dark);
}

.wish-attendance.ragu {
  background: rgba(var(--emas-rgb), 0.12);
  color: var(--emas);
}

.wish-message {
  font-family: 'Cormorant Garamond', serif;
  font-size: 15px;
  color: var(--cream);
  opacity: 0.85;
  line-height: 1.7;
  padding-left: 52px;
}

.wish-card-enter-active {
  transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.wish-card-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.95);
}

.wish-card-leave-active {
  transition: all 0.3s ease;
}

.wish-card-leave-to {
  opacity: 0;
  transform: scale(0.95);
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
  .gb-section {
    padding: 60px 16px;
  }

  .gb-stats {
    gap: 16px;
    padding: 14px 24px;
  }

  .attendance-options {
    flex-direction: column;
  }

  .attendance-option {
    min-width: unset;
  }

  .wish-header {
    flex-wrap: wrap;
  }

  .wish-message {
    padding-left: 0;
  }

  .gb-list {
    max-height: 500px;
  }
}
</style>
