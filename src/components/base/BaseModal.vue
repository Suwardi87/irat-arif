<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted, nextTick } from 'vue'

/**
 * BaseModal - Modal/Dialog component
 *
 * Features:
 * - Backdrop blur effect
 * - Escape key to close
 * - Click outside to close
 * - Body scroll lock
 * - Smooth animations
 * - Focus trap
 */

interface Props {
  modelValue: boolean
  title?: string
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
  closeOnBackdrop?: boolean
  closeOnEscape?: boolean
  showClose?: boolean
  persistent?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 'md',
  closeOnBackdrop: true,
  closeOnEscape: true,
  showClose: true,
  persistent: false
})

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
  close: []
  open: []
}>()

// State
const modalRef = ref<HTMLElement | null>(null)
const contentRef = ref<HTMLElement | null>(null)

// Handle open state changes
const isOpen = ref(props.modelValue)

watch(() => props.modelValue, (newValue) => {
  isOpen.value = newValue
  if (newValue) {
    emit('open')
    nextTick(() => {
      focusFirstElement()
    })
  }
})

watch(isOpen, (newValue) => {
  emit('update:modelValue', newValue)
  if (!newValue) {
    emit('close')
  }
})

// Focus management
function focusFirstElement() {
  if (!contentRef.value) return

  // Find first focusable element
  const focusable = contentRef.value.querySelector(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  ) as HTMLElement

  if (focusable) {
    focusable.focus()
  }
}

// Handle backdrop click
function handleBackdropClick(event: any) {
  if (props.persistent) return
  if (props.closeOnBackdrop && event.target === modalRef.value) {
    close()
  }
}

// Handle escape key
function handleEscapeKey(event: any) {
  if (props.persistent) return
  if (props.closeOnEscape && event.key === 'Escape' && props.modelValue) {
    close()
  }
}

// Close modal
function close() {
  isOpen.value = false
}

// Body scroll lock
onMounted(() => {
  document.addEventListener('keydown', handleEscapeKey)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscapeKey)
})

// Watch for open state to toggle body scroll
watch(isOpen, (newValue) => {
  if (newValue) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
})

// Modal size classes
const sizeClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  full: 'max-w-full mx-4'
}
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-all duration-300"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-all duration-300"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        ref="modalRef"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
        :class="{ 'bg-black/80 backdrop-blur-sm': isOpen }"
        @click="handleBackdropClick"
      >
        <Transition
          enter-active-class="transition-all duration-300"
          enter-from-class="opacity-0 scale-95 translate-y-4"
          enter-to-class="opacity-100 scale-100 translate-y-0"
          leave-active-class="transition-all duration-200"
          leave-from-class="opacity-100 scale-100 translate-y-0"
          leave-to-class="opacity-0 scale-95 translate-y-4"
        >
          <div
            v-if="isOpen"
            ref="contentRef"
            class="relative w-full bg-dark-900 border border-gold-500/20 rounded-lg shadow-2xl shadow-gold-500/10 overflow-hidden"
            :class="[sizeClasses[size]]"
            @click.stop
          >
            <!-- Header -->
            <div
              v-if="title || showClose"
              class="flex items-center justify-between p-6 border-b border-white/10"
            >
              <h2 v-if="title" class="font-serif text-xl text-gold-500">
                {{ title }}
              </h2>
              <div v-else /> <!-- Spacer for close button alignment -->

              <!-- Close button -->
              <button
                v-if="showClose"
                type="button"
                class="p-2 text-gold-500 hover:text-gold-400 hover:bg-gold-500/10 rounded-lg transition-colors"
                @click="close"
                aria-label="Close modal"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <!-- Body -->
            <div class="p-6 max-h-[70vh] overflow-y-auto">
              <slot />
            </div>

            <!-- Footer -->
            <div
              v-if="$slots.footer"
              class="p-6 border-t border-white/10 bg-dark-950/50"
            >
              <slot name="footer" />
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>
