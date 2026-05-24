<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  color: string
  shape: 'rect' | 'circle' | 'heart'
  rotation: number
  rotationSpeed: number
  opacity: number
  gravity: number
  wobble: number
  wobbleSpeed: number
}

const props = defineProps<{
  active: boolean
  duration?: number
}>()

const canvasRef = ref<HTMLCanvasElement | null>(null)
const showCanvas = ref(false)
let animFrameId: number | null = null
let particles: Particle[] = []
let startTime = 0

function getThemeColors(): string[] {
  const style = getComputedStyle(document.documentElement)
  const primary = style.getPropertyValue('--emas').trim()
  const primaryLight = style.getPropertyValue('--emas-light').trim()
  const accent = style.getPropertyValue('--merah-minang').trim()
  return [
    primary,
    primaryLight,
    accent,
    '#e8a0bf',
    '#f5c542',
    '#ff6b6b',
    '#4ecdc4',
    '#ffe66d',
    '#ff8a5c',
    '#a8e6cf'
  ]
}

const shapes: Particle['shape'][] = ['rect', 'circle', 'heart']

function createParticle(canvasWidth: number, canvasHeight: number): Particle {
  const colors = getThemeColors()
  const shape = shapes[Math.floor(Math.random() * shapes.length)]
  return {
    x: Math.random() * canvasWidth,
    y: -20 - Math.random() * 100,
    vx: (Math.random() - 0.5) * 6,
    vy: Math.random() * 3 + 2,
    size: Math.random() * 8 + 4,
    color: colors[Math.floor(Math.random() * colors.length)],
    shape,
    rotation: Math.random() * 360,
    rotationSpeed: (Math.random() - 0.5) * 10,
    opacity: 1,
    gravity: 0.08 + Math.random() * 0.04,
    wobble: Math.random() * Math.PI * 2,
    wobbleSpeed: 0.03 + Math.random() * 0.05
  }
}

function drawHeart(ctx: CanvasRenderingContext2D, x: number, y: number, size: number) {
  ctx.beginPath()
  const s = size * 0.5
  ctx.moveTo(x, y - s * 0.4)
  ctx.bezierCurveTo(x, y - s, x - s, y - s, x - s, y - s * 0.4)
  ctx.bezierCurveTo(x - s, y + s * 0.2, x, y + s * 0.6, x, y + s)
  ctx.bezierCurveTo(x, y + s * 0.6, x + s, y + s * 0.2, x + s, y - s * 0.4)
  ctx.bezierCurveTo(x + s, y - s, x, y - s, x, y - s * 0.4)
  ctx.fill()
}

function animate(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) {
  const elapsed = Date.now() - startTime
  const totalDuration = (props.duration || 4000)

  if (elapsed > totalDuration + 2000) {
    stopConfetti()
    return
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height)

  const fadeOutStart = totalDuration
  const isSpawning = elapsed < totalDuration * 0.6

  if (isSpawning && particles.length < 200) {
    for (let i = 0; i < 4; i++) {
      particles.push(createParticle(canvas.width, canvas.height))
    }
  }

  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i]

    p.vy += p.gravity
    p.x += p.vx + Math.sin(p.wobble) * 0.5
    p.y += p.vy
    p.rotation += p.rotationSpeed
    p.wobble += p.wobbleSpeed

    if (elapsed > fadeOutStart) {
      p.opacity = Math.max(0, 1 - (elapsed - fadeOutStart) / 2000)
    }

    if (p.y > canvas.height + 50 || p.opacity <= 0) {
      particles.splice(i, 1)
      continue
    }

    ctx.save()
    ctx.translate(p.x, p.y)
    ctx.rotate((p.rotation * Math.PI) / 180)
    ctx.globalAlpha = p.opacity
    ctx.fillStyle = p.color

    switch (p.shape) {
      case 'rect':
        ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2)
        break
      case 'circle':
        ctx.beginPath()
        ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2)
        ctx.fill()
        break
      case 'heart':
        drawHeart(ctx, 0, 0, p.size)
        break
    }

    ctx.restore()
  }

  animFrameId = requestAnimationFrame(() => animate(ctx, canvas))
}

function startConfetti() {
  const canvas = canvasRef.value
  if (!canvas) return

  showCanvas.value = true
  particles = []
  startTime = Date.now()

  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  const ctx = canvas.getContext('2d')
  if (!ctx) return

  for (let i = 0; i < 50; i++) {
    const p = createParticle(canvas.width, canvas.height)
    p.y = Math.random() * canvas.height * 0.3
    particles.push(p)
  }

  animate(ctx, canvas)
}

function stopConfetti() {
  if (animFrameId) {
    cancelAnimationFrame(animFrameId)
    animFrameId = null
  }
  particles = []
  showCanvas.value = false
}

watch(() => props.active, (val) => {
  if (val) {
    startConfetti()
  }
})

onMounted(() => {
  if (props.active) startConfetti()
})

onUnmounted(() => {
  stopConfetti()
})
</script>

<template>
  <canvas
    v-if="showCanvas"
    ref="canvasRef"
    class="confetti-canvas"
  />
</template>

<style scoped>
.confetti-canvas {
  position: fixed;
  inset: 0;
  z-index: 9999;
  pointer-events: none;
  width: 100%;
  height: 100%;
}
</style>
