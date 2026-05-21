<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import { gsap } from 'gsap'

/**
 * WaModal - WhatsApp-style bottom sheet modal
 *
 * Features:
 * - Slide up from bottom animation
 * - Backdrop fade in
 * - Swipe down to close gesture
 * - Smooth entrance/exit with GSAP
 */

interface Props {
  modelValue: boolean
  title?: string
  fullScreen?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  fullScreen: false
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const modalRef = ref<HTMLElement | null>(null)
const backdropRef = ref<HTMLElement | null>(null)
const contentRef = ref<HTMLElement | null>(null)
let tl: gsap.core.Timeline | null = null

// Watch for model value changes
watch(
  () => props.modelValue,
  (isOpen) => {
    if (isOpen) {
      openModal()
    } else {
      closeModal()
    }
  },
  { immediate: true }
)

function openModal() {
  if (!modalRef.value || !backdropRef.value || !contentRef.value) return

  // Kill existing timeline
  if (tl) tl.kill()

  // Create timeline
  tl = gsap.timeline()

  // Set initial states
  gsap.set(backdropRef.value, { opacity: 0 })
  gsap.set(contentRef.value, { y: '100%' })

  // Animate in
  tl.to(backdropRef.value, {
    opacity: 1,
    duration: 0.3,
    ease: 'power2.out'
  }).to(contentRef.value, {
    y: 0,
    duration: 0.4,
    ease: 'power3.out'
  }, '-=0.15')
}

function closeModal() {
  if (!modalRef.value || !backdropRef.value || !contentRef.value) return

  // Kill existing timeline
  if (tl) tl.kill()

  // Create timeline
  tl = gsap.timeline({
    onComplete: () => {
      emit('update:modelValue', false)
    }
  })

  // Animate out
  tl.to(contentRef.value, {
    y: '100%',
    duration: 0.3,
    ease: 'power2.in'
  }).to(backdropRef.value, {
    opacity: 0,
    duration: 0.3,
    ease: 'power2.in'
  }, '-=0.2')
}

// Close on backdrop click
function onBackdropClick(e: MouseEvent) {
  if (e.target === backdropRef.value) {
    closeModal()
  }
}

// Swipe down gesture
let startY = 0
let currentY = 0
let isDragging = false

function onTouchStart(e: TouchEvent) {
  if (!contentRef.value) return
  startY = e.touches[0].clientY
  isDragging = true
}

function onTouchMove(e: TouchEvent) {
  if (!isDragging || !contentRef.value) return
  currentY = e.touches[0].clientY
  const diff = currentY - startY

  // Only allow dragging down
  if (diff > 0) {
    gsap.to(contentRef.value, {
      y: diff,
      duration: 0,
      ease: 'none'
    })
  }
}

function onTouchEnd(_e: TouchEvent) {
  if (!isDragging || !contentRef.value) return
  isDragging = false

  const diff = currentY - startY

  // If swiped down more than 100px, close modal
  if (diff > 100) {
    closeModal()
  } else {
    // Snap back
    gsap.to(contentRef.value, {
      y: 0,
      duration: 0.3,
      ease: 'elastic.out(1, 0.75)'
    })
  }

  startY = 0
  currentY = 0
}

// Escape key to close
function onKeyDown(e: KeyboardEvent) {
  if (e.key === 'Escape' && props.modelValue) {
    closeModal()
  }
}

onMounted(() => {
  document.addEventListener('keydown', onKeyDown)
})
</script>

<template>
  <Teleport to="body">
    <Transition>
      <div
        v-if="props.modelValue"
        ref="modalRef"
        class="wa-modal fixed inset-0 z-[9999]"
        @click="onBackdropClick"
      >
        <!-- Backdrop -->
        <div
          ref="backdropRef"
          class="wa-modal-backdrop absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        <!-- Modal Content -->
        <div
          ref="contentRef"
          class="wa-modal-content absolute bottom-0 left-0 right-0"
          :class="fullScreen ? 'h-[90vh] sm:h-[85vh]' : 'h-auto max-h-[80vh]'"
          @touchstart="onTouchStart"
          @touchmove="onTouchMove"
          @touchend="onTouchEnd"
        >
          <!-- Handle bar -->
          <div class="wa-modal-handle">
            <div class="wa-modal-handle-bar"></div>
          </div>

          <!-- Header -->
          <div v-if="title" class="wa-modal-header">
            <h2 class="wa-modal-title">{{ title }}</h2>
            <button
              type="button"
              class="wa-modal-close"
              @click.stop="closeModal"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <!-- Content -->
          <div class="wa-modal-body">
            <slot />
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.wa-modal-content {
  background: #111b21;
  border-radius: 16px 16px 0 0;
  overflow: hidden;
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.4);
}

/* Handle bar */
.wa-modal-handle {
  display: flex;
  justify-content: center;
  padding: 12px 0 8px;
  cursor: grab;
}

.wa-modal-handle:active {
  cursor: grabbing;
}

.wa-modal-handle-bar {
  width: 40px;
  height: 4px;
  background: #2a3942;
  border-radius: 2px;
}

/* Header */
.wa-modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  border-bottom: 1px solid #2a3942;
}

.wa-modal-title {
  font-size: 18px;
  font-weight: 600;
  color: #e9edef;
  margin: 0;
}

.wa-modal-close {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  color: #8696a0;
  transition: all 0.2s;
  background: transparent;
  border: none;
  cursor: pointer;
}

.wa-modal-close:hover {
  background: rgba(255, 255, 255, 0.1);
  color: #e9edef;
}

/* Body */
.wa-modal-body {
  padding: 16px;
  overflow-y: auto;
  max-height: calc(100% - 60px);
}

.wa-modal-body::-webkit-scrollbar {
  width: 6px;
}

.wa-modal-body::-webkit-scrollbar-track {
  background: #111b21;
}

.wa-modal-body::-webkit-scrollbar-thumb {
  background: #374047;
  border-radius: 3px;
}
</style>
