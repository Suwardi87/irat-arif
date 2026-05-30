<script setup lang="ts">
import { ref } from 'vue'
import WaModal from './WaModal.vue'
import WaChatBubble from './WaChatBubble.vue'

/**
 * WaRsvpModal - WhatsApp-style RSVP modal
 *
 * Features:
 * - Chat conversation animation
 * - RSVP form with WA-style inputs
 * - Send to WhatsApp functionality
 * - Complete GSAP animations
 */

interface Props {
  modelValue: boolean
  coupleName: string
  whatsappNumber: string
  weddingDate: Date
}

const props = defineProps<Props>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const isOpen = ref(props.modelValue)
const currentStep = ref<'chat' | 'form'>('chat')
const isSending = ref(false)

// Form data
const formData = ref({
  name: '',
  attendance: 'hadir',
  guests: '1',
  message: ''
})

// Chat messages
const chatMessages = ref([
  {
    id: '1',
    sender: 'them' as const,
    text: `Halo! Terima kasih sudah membuka undangan pernikahan ${props.coupleName}. 🎉`,
    time: '09:00',
    delay: 500
  },
  {
    id: '2',
    sender: 'them' as const,
    text: 'Mohon konfirmasi kehadiran Anda ya. Apakah bisa hadir?',
    time: '09:01',
    delay: 2000
  }
])

// Watch prop changes
const emitIsOpen = (val: boolean) => {
  isOpen.value = val
  emit('update:modelValue', val)
}

// Proceed to form
function goToForm() {
  currentStep.value = 'form'
}

// Submit RSVP
async function submitRsvp() {
  isSending.value = true

  // Format message for WhatsApp
  const message = `Halo, saya ${formData.value.name}. Konfirmasi kehadiran untuk pernikahan ${props.coupleName}:

Status: ${formData.value.attendance === 'hadir' ? '✅ Hadir' : formData.value.attendance === 'tidak' ? '❌ Tidak Hadir' : '❓ Masih Ragu'}
Jumlah Tamu: ${formData.value.guests} orang
Pesan: ${formData.value.message || 'Terima kasih undangannya!'}

Mohon info lebih lanjut. Terima kasih! 🙏`

  // Open WhatsApp
  const url = `https://wa.me/${props.whatsappNumber}?text=${encodeURIComponent(message)}`
  window.open(url, '_blank')

  // Show success animation
  await new Promise(resolve => setTimeout(resolve, 1000))
  isSending.value = false
  emitIsOpen(false)

  // Reset form after modal closes
  setTimeout(() => {
    currentStep.value = 'chat'
    formData.value = {
      name: '',
      attendance: 'hadir',
      guests: '1',
      message: ''
    }
  }, 500)
}
</script>

<template>
  <WaModal
    :model-value="isOpen"
    @update:model-value="emitIsOpen"
    :title="currentStep === 'form' ? 'Konfirmasi Kehadiran' : undefined"
    :full-screen="true"
  >
    <!-- Chat Step -->
    <template v-if="currentStep === 'chat'">
      <WaChatBubble
        :messages="chatMessages"
        :name="coupleName"
        @complete="() => setTimeout(goToForm, 1000)"
      />

      <!-- Quick Reply Buttons -->
      <div class="wa-quick-replies">
        <button
          type="button"
          class="wa-quick-reply"
          @click="goToForm"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
          </svg>
          <span>Konfirmasi Sekarang</span>
        </button>
      </div>
    </template>

    <!-- Form Step -->
    <template v-else>
      <!-- Form -->
      <div class="wa-form">
        <div class="wa-form-group">
          <label class="wa-label">Nama Lengkap</label>
          <input
            v-model="formData.name"
            type="text"
            class="wa-input"
            placeholder="Masukkan nama Anda"
            required
          />
        </div>

        <div class="wa-form-group">
          <label class="wa-label">Konfirmasi Kehadiran</label>
          <div class="wa-radio-group">
            <label
              v-for="option in [
                { value: 'hadir', label: 'Hadir', emoji: '✅' },
                { value: 'tidak', label: 'Tidak Hadir', emoji: '❌' },
                { value: 'ragu', label: 'Masih Ragu', emoji: '❓' }
              ]"
              :key="option.value"
              class="wa-radio-label"
              :class="{ active: formData.attendance === option.value }"
            >
              <input
                v-model="formData.attendance"
                type="radio"
                :value="option.value"
                class="wa-radio"
              />
              <span>{{ option.emoji }} {{ option.label }}</span>
            </label>
          </div>
        </div>

        <div class="wa-form-group">
          <label class="wa-label">Jumlah Tamu</label>
          <select v-model="formData.guests" class="wa-select">
            <option value="1">1 Orang</option>
            <option value="2">2 Orang</option>
          </select>
        </div>

        <div class="wa-form-group">
          <label class="wa-label">Pesan (Opsional)</label>
          <textarea
            v-model="formData.message"
            class="wa-textarea"
            rows="3"
            placeholder="Tulis pesan untuk mempelai..."
          />
        </div>

        <!-- Submit Button -->
        <button
          type="button"
          class="wa-submit-btn"
          :disabled="!formData.name || isSending"
          @click="submitRsvp"
        >
          <svg v-if="!isSending" class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
          </svg>
          <span v-else class="wa-spinner"></span>
          <span>{{ isSending ? 'Mengirim...' : 'Kirim ke WhatsApp' }}</span>
        </button>
      </div>
    </template>
  </WaModal>
</template>

<style scoped>
/* Quick Replies */
.wa-quick-replies {
  padding: 8px;
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.wa-quick-reply {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  background: #00a884;
  color: #111b21;
  border: none;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
}

.wa-quick-reply:hover {
  background: #00bf99;
  transform: translateY(-1px);
}

.wa-quick-reply:active {
  transform: translateY(0);
}

/* Form */
.wa-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.wa-form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.wa-label {
  font-size: 13px;
  color: #8696a0;
  font-weight: 500;
}

.wa-input,
.wa-select,
.wa-textarea {
  background: #2a3942;
  border: 1px solid #374047;
  border-radius: 8px;
  padding: 12px 14px;
  color: #e9edef;
  font-size: 15px;
  outline: none;
  transition: all 0.2s;
}

.wa-input:focus,
.wa-select:focus,
.wa-textarea:focus {
  border-color: #00a884;
  background: #374047;
}

.wa-input::placeholder,
.wa-textarea::placeholder {
  color: #8696a0;
}

.wa-textarea {
  resize: none;
  font-family: inherit;
}

/* Radio Group */
.wa-radio-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.wa-radio-label {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 14px;
  background: #2a3942;
  border: 1px solid #374047;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
}

.wa-radio-label.active {
  background: rgba(0, 168, 132, 0.15);
  border-color: #00a884;
}

.wa-radio {
  display: none;
}

/* Submit Button */
.wa-submit-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 14px 20px;
  background: #00a884;
  color: #111b21;
  border: none;
  border-radius: 24px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s;
  margin-top: 8px;
}

.wa-submit-btn:hover:not(:disabled) {
  background: #00bf99;
  transform: translateY(-1px);
}

.wa-submit-btn:active:not(:disabled) {
  transform: translateY(0);
}

.wa-submit-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Spinner */
.wa-spinner {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(17, 27, 33, 0.3);
  border-top-color: #111b21;
  border-radius: 50%;
  animation: waSpin 0.8s linear infinite;
}

@keyframes waSpin {
  to {
    transform: rotate(360deg);
  }
}
</style>
