<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { gsap } from 'gsap'

/**
 * WaChatBubble - WhatsApp-style chat bubble animation
 *
 * Features:
 * - Message bubbles slide in from sides
 * - Typing indicator with bouncing dots
 * - Double checkmark animations
 * - Timestamp fade in
 */

interface Message {
  id: string
  text: string
  sender: 'me' | 'them'
  time: string
  status?: 'sent' | 'delivered' | 'read'
  delay?: number
}

interface Props {
  messages: Message[]
  showTyping?: boolean
  typingDuration?: number
  avatar?: string
  name?: string
}

const props = withDefaults(defineProps<Props>(), {
  showTyping: true,
  typingDuration: 2000,
  name: 'Mempelai'
})

const emit = defineEmits<{
  complete: []
}>()

const chatContainer = ref<HTMLElement | null>(null)
const typingIndicator = ref<HTMLElement | null>(null)
const bubbles = ref<HTMLElement[]>([])

// WhatsApp colors
const colors = {
  sent: '#005c4b',
  received: '#202c33',
  bg: '#0b141a',
  text: '#e9edef',
  tick: '#53bdeb'
}

onMounted(() => {
  startChatAnimation()
})

function startChatAnimation() {
  // Clear any existing timeline
  const tl = gsap.timeline({
    onComplete: () => emit('complete')
  })

  // Initial state - hide all bubbles
  gsap.set('.wa-bubble', {
    opacity: 0,
    x: (i) => i % 2 === 0 ? -50 : 50,
    scale: 0.8
  })

  gsap.set('.wa-time', { opacity: 0 })
  gsap.set('.wa-tick', { opacity: 0, scale: 0 })

  // Animate each message
  props.messages.forEach((msg, index) => {
    const delay = msg.delay || (index * 800) + 500

    // Show typing indicator before their messages
    if (msg.sender === 'them' && props.showTyping && index > 0) {
      tl.to(typingIndicator.value, {
        opacity: 1,
        y: 0,
        duration: 0.3,
        delay: delay - 600
      }).to(typingIndicator.value, {
        opacity: 0,
        y: 10,
        duration: 0.3,
        delay: props.typingDuration / 1000
      })
    }

    // Animate bubble in
    tl.to(`.wa-bubble-${index}`, {
      opacity: 1,
      x: 0,
      scale: 1,
      duration: 0.4,
      ease: 'back.out(1.7)'
    }, delay / 1000)

    // Animate timestamp
    tl.to(`.wa-time-${index}`, {
      opacity: 1,
      duration: 0.2
    }, '-=0.2')

    // Animate checkmarks (for sent messages)
    if (msg.sender === 'me' && msg.status) {
      tl.to(`.wa-tick-${index}`, {
        opacity: 1,
        scale: 1,
        duration: 0.2,
        stagger: 0.1
      }, '-=0.1')
    }
  })
}

// Get checkmark SVG based on status
function getCheckmark(status?: string) {
  if (!status) return ''

  const color = status === 'read' ? colors.tick : '#8696a0'

  return `
    <svg viewBox="0 0 16 11" width="16" height="11" style="${status === 'read' ? 'filter: drop-shadow(0 0 1px #53bdeb);' : ''}">
      <path fill="${color}" d="M11.071.653a.457.457 0 0 0-.304-.102.493.493 0 0 0-.381.178l-6.19 7.636-2.405-2.272a.463.463 0 0 0-.336-.136.47.47 0 0 0-.343.17l-.311.35a.445.445 0 0 0-.008.627l2.993 2.827a.627.627 0 0 0 .443.175.583.583 0 0 0 .448-.208l6.769-8.348a.444.444 0 0 0-.014-.617l-.35-.402zM11.176 6.637l-.349.403a.457.457 0 0 0-.027.612l-3.625 4.458a.627.627 0 0 0 .448.208.583.583 0 0 0 .448-.208l3.626-4.458a.445.445 0 0 0-.028-.612l-.349-.403a.457.457 0 0 0-.616-.027.493.493 0 0 0-.178.381.47.47 0 0 0 .17.346z"/>
    </svg>
  `
}
</script>

<template>
  <div class="wa-chat-container">
    <div ref="chatContainer" class="wa-messages">
      <!-- Messages -->
      <div
        v-for="(msg, index) in messages"
        :key="msg.id"
        :class="[
          'wa-bubble',
          `wa-bubble-${index}`,
          msg.sender === 'me' ? 'wa-sent' : 'wa-received'
        ]"
      >
        <!-- Avatar for received messages -->
        <div v-if="msg.sender === 'them'" class="wa-avatar">
          <svg class="w-8 h-8 text-gold-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9H15V22H13V16H11V22H9V9H3V7H21V9Z" />
          </svg>
        </div>

        <!-- Message content -->
        <div class="wa-bubble-content">
          <p v-if="msg.sender === 'them'" class="wa-sender-name">{{ name }}</p>
          <p class="wa-text">{{ msg.text }}</p>

          <!-- Metadata (time + checkmarks) -->
          <div class="wa-meta">
            <span :class="['wa-time', `wa-time-${index}`]">{{ msg.time }}</span>
            <span
              v-if="msg.sender === 'me'"
              :class="['wa-tick', `wa-tick-${index}`]"
              v-html="getCheckmark(msg.status)"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Typing Indicator -->
    <div
      v-if="showTyping"
      ref="typingIndicator"
      class="wa-typing"
      style="opacity: 0; transform: translateY(10px);"
    >
      <div class="wa-avatar">
        <svg class="w-8 h-8 text-gold-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9H15V22H13V16H11V22H9V9H3V7H21V9Z" />
        </svg>
      </div>
      <div class="wa-typing-bubble">
        <div class="wa-typing-dots">
          <span class="wa-dot"></span>
          <span class="wa-dot"></span>
          <span class="wa-dot"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wa-chat-container {
  background: #0b141a;
  border-radius: 0;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}

.wa-messages {
  padding: 16px 8px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  max-height: 400px;
  overflow-y: auto;
}

/* Custom scrollbar */
.wa-messages::-webkit-scrollbar {
  width: 6px;
}

.wa-messages::-webkit-scrollbar-track {
  background: #0b141a;
}

.wa-messages::-webkit-scrollbar-thumb {
  background: #374047;
  border-radius: 3px;
}

/* Message bubble */
.wa-bubble {
  display: flex;
  gap: 8px;
  margin-bottom: 2px;
  max-width: 85%;
}

.wa-sent {
  margin-left: auto;
  flex-direction: row-reverse;
}

.wa-received {
  margin-right: auto;
}

/* Avatar */
.wa-avatar {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: linear-gradient(135deg, #f9b31a 0%, #db9010 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

/* Bubble content */
.wa-bubble-content {
  padding: 6px 7px 8px 9px;
  border-radius: 7.5px;
  position: relative;
  min-width: 80px;
}

.wa-sent .wa-bubble-content {
  background: #005c4b;
  border-top-right-radius: 0;
}

.wa-received .wa-bubble-content {
  background: #202c33;
  border-top-left-radius: 0;
}

/* Sender name */
.wa-sender-name {
  font-size: 12.8px;
  color: #f9b31a;
  font-weight: 500;
  margin-bottom: 2px;
}

/* Message text */
.wa-text {
  font-size: 14.2px;
  line-height: 19px;
  color: #e9edef;
  word-wrap: break-word;
  white-space: pre-wrap;
}

/* Metadata */
.wa-meta {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
  margin-top: 2px;
  float: right;
  position: relative;
  top: 4px;
}

.wa-time {
  font-size: 11px;
  color: #8696a0;
  margin-left: 8px;
}

.wa-tick {
  display: inline-flex;
  align-items: center;
}

/* Typing indicator */
.wa-typing {
  display: flex;
  gap: 8px;
  padding: 8px;
  margin-bottom: 8px;
  max-width: 85%;
}

.wa-typing-bubble {
  background: #202c33;
  border-radius: 7.5px;
  border-top-left-radius: 0;
  padding: 8px 12px;
}

.wa-typing-dots {
  display: flex;
  gap: 4px;
}

.wa-dot {
  width: 8px;
  height: 8px;
  background: #8696a0;
  border-radius: 50%;
  animation: waBounce 1.4s ease-in-out infinite;
}

.wa-dot:nth-child(1) {
  animation-delay: 0s;
}

.wa-dot:nth-child(2) {
  animation-delay: 0.2s;
}

.wa-dot:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes waBounce {
  0%, 60%, 100% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-8px);
  }
}
</style>
