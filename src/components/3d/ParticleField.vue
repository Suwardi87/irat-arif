<script setup lang="ts">
import { ref, onMounted, watch, type Ref } from 'vue'
import * as THREE from 'three'
import { createGoldParticleTexture } from '@/composables/useThreeScene'
import type { ParticleConfig } from '@/types'

/**
 * ParticleField - Gold Floating Particles Component
 *
 * Purpose: Creates a field of floating gold particles:
 * - Customizable particle count, size, color
 * - Floating animation
 * - Mouse interaction (optional)
 * - Performance optimized
 *
 * @example
 * ```vue
 * <ParticleField
 *   :count="500"
 *   :size="0.1"
 *   :speed="0.5"
 *   :interactive="true"
 * />
 * ```
 */

interface Props {
  count?: number
  size?: number
  color?: number | string
  speed?: number
  opacity?: number
  spreadX?: number
  spreadY?: number
  spreadZ?: number
  interactive?: boolean
  mouseInfluence?: number
}

const props = withDefaults(defineProps<Props>(), {
  count: 500,
  size: 0.05,
  color: 0xf9b31a, // Gold color
  speed: 1,
  opacity: 0.8,
  spreadX: 20,
  spreadY: 20,
  spreadZ: 20,
  interactive: false,
  mouseInfluence: 2
})

const emit = defineEmits<{
  ready: [points: THREE.Points]
}>()

// Refs
const particleSystem = ref<THREE.Points | null>(null)
const animationFrameId = ref<number | null>(null)

// Mouse position for interaction
const mouse = ref({ x: 0, y: 0 })
const targetMouse = ref({ x: 0, y: 0 })

// Create particle system
function createParticles(scene: THREE.Scene) {
  // Clean up existing particles
  if (particleSystem.value) {
    scene.remove(particleSystem.value)
    if (particleSystem.value.geometry) {
      particleSystem.value.geometry.dispose()
    }
    if (particleSystem.value.material instanceof THREE.Material) {
      particleSystem.value.material.dispose()
    }
  }

  // Create geometry
  const geometry = new THREE.BufferGeometry()
  const positions = new Float32Array(props.count * 3)
  const velocities = new Float32Array(props.count * 3)
  const originalPositions = new Float32Array(props.count * 3)

  // Initialize particles
  for (let i = 0; i < props.count; i++) {
    const i3 = i * 3

    // Random position within spread
    positions[i3] = (Math.random() - 0.5) * props.spreadX
    positions[i3 + 1] = (Math.random() - 0.5) * props.spreadY
    positions[i3 + 2] = (Math.random() - 0.5) * props.spreadZ

    // Store original positions
    originalPositions[i3] = positions[i3]
    originalPositions[i3 + 1] = positions[i3 + 1]
    originalPositions[i3 + 2] = positions[i3 + 2]

    // Random velocity
    velocities[i3] = (Math.random() - 0.5) * 0.01
    velocities[i3 + 1] = Math.random() * 0.02 + 0.01 // Always float up
    velocities[i3 + 2] = (Math.random() - 0.5) * 0.01
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geometry.setAttribute('velocity', new THREE.BufferAttribute(velocities, 3))
  geometry.setAttribute('originalPosition', new THREE.BufferAttribute(originalPositions, 3))

  // Create material with gold texture
  const texture = createGoldParticleTexture()
  const material = new THREE.PointsMaterial({
    color: typeof props.color === 'string' ? new THREE.Color(props.color) : props.color,
    size: props.size,
    map: texture,
    transparent: true,
    opacity: props.opacity,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    sizeAttenuation: true
  })

  // Create particle system
  const points = new THREE.Points(geometry, material)
  particleSystem.value = points

  scene.add(points)

  // Store velocities for animation
  ;(points as any).userData.velocities = velocities
  ;(points as any).userData.originalPositions = originalPositions

  emit('ready', points)
}

// Animate particles
function animateParticles() {
  if (!particleSystem.value) return

  const positions = particleSystem.value.geometry.attributes.position.array as Float32Array
  const velocities = (particleSystem.value as any).userData.velocities as Float32Array
  const originalPositions = (particleSystem.value as any).userData.originalPositions as Float32Array

  // Smooth mouse following
  mouse.value.x += (targetMouse.value.x - mouse.value.x) * 0.05
  mouse.value.y += (targetMouse.value.y - mouse.value.y) * 0.05

  for (let i = 0; i < props.count; i++) {
    const i3 = i * 3

    // Apply velocity
    positions[i3] += velocities[i3] * props.speed
    positions[i3 + 1] += velocities[i3 + 1] * props.speed
    positions[i3 + 2] += velocities[i3 + 2] * props.speed

    // Interactive mouse influence
    if (props.interactive) {
      const dx = mouse.value.x - positions[i3]
      const dy = -mouse.value.y - positions[i3 + 1]
      const dist = Math.sqrt(dx * dx + dy * dy)

      if (dist < props.mouseInfluence) {
        const force = (props.mouseInfluence - dist) / props.mouseInfluence
        positions[i3] -= dx * force * 0.02
        positions[i3 + 1] -= dy * force * 0.02
      }
    }

    // Reset particles that go too high
    if (positions[i3 + 1] > props.spreadY / 2) {
      positions[i3] = originalPositions[i3]
      positions[i3 + 1] = -props.spreadY / 2
      positions[i3 + 2] = originalPositions[i3 + 2]
    }
  }

  particleSystem.value.geometry.attributes.position.needsUpdate = true

  animationFrameId.value = requestAnimationFrame(animateParticles)
}

// Handle mouse move
function handleMouseMove(event: MouseEvent) {
  if (!props.interactive) return

  // Normalize mouse position to -1 to 1
  const rect = (event.currentTarget as HTMLElement).getBoundingClientRect()
  targetMouse.value.x = ((event.clientX - rect.left) / rect.width) * 2 - 1
  targetMouse.value.y = ((event.clientY - rect.top) / rect.height) * 2 - 1
}

// Expose methods
function init(scene: THREE.Scene) {
  createParticles(scene)
  animateParticles()
}

function stop() {
  if (animationFrameId.value) {
    cancelAnimationFrame(animationFrameId.value)
    animationFrameId.value = null
  }
}

defineExpose({
  init,
  stop,
  particleSystem
})

// Cleanup on unmount
onUnmounted(() => {
  stop()
  if (particleSystem.value) {
    if (particleSystem.value.geometry) {
      particleSystem.value.geometry.dispose()
    }
    if (particleSystem.value.material instanceof THREE.Material) {
      particleSystem.value.material.dispose()
    }
  }
})
</script>

<template>
  <div
    class="particle-field"
    @mousemove="handleMouseMove"
  >
    <slot
      name="default"
      :init="init"
      :stop="stop"
      :particle-system="particleSystem"
    />
  </div>
</template>
