<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import * as THREE from 'three'

const canvasContainer = ref<HTMLElement | null>(null)
const shouldRender = ref(true)
let scene: THREE.Scene | null = null
let camera: THREE.PerspectiveCamera | null = null
let renderer: THREE.WebGLRenderer | null = null
let animationId: number | null = null
let time = 0
let particles: THREE.Points | null = null
let isVisible = true

function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function isWebGLAvailable(): boolean {
  try {
    const canvas = document.createElement('canvas')
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    )
  } catch {
    return false
  }
}

function getCssVar(name: string): string {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim()
}

function initScene() {
  if (!canvasContainer.value) return
  if (prefersReducedMotion()) {
    shouldRender.value = false
    return
  }
  if (!isWebGLAvailable()) {
    shouldRender.value = false
    return
  }

  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  camera.position.z = 50

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  canvasContainer.value.appendChild(renderer.domElement)

  createParticles()
  animate()
}

function createParticles() {
  const isMobile = window.innerWidth < 768
  const count = isMobile ? 600 : 1500

  const geometry = new THREE.BufferGeometry()
  const positions = new Float32Array(count * 3)
  const colors = new Float32Array(count * 3)

  const color1 = new THREE.Color(getCssVar('--emas'))
  const color2 = new THREE.Color(getCssVar('--emas-light'))

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 150
    positions[i * 3 + 1] = (Math.random() - 0.5) * 150
    positions[i * 3 + 2] = (Math.random() - 0.5) * 100

    const mixedColor = Math.random() > 0.5 ? color1 : color2
    colors[i * 3] = mixedColor.r
    colors[i * 3 + 1] = mixedColor.g
    colors[i * 3 + 2] = mixedColor.b
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

  const material = new THREE.PointsMaterial({
    size: 1.5,
    vertexColors: true,
    transparent: true,
    opacity: 0.6,
    blending: THREE.AdditiveBlending,
    sizeAttenuation: true
  })

  particles = new THREE.Points(geometry, material)
  scene?.add(particles)
}

function animate() {
  if (!isVisible) {
    animationId = requestAnimationFrame(animate)
    return
  }

  animationId = requestAnimationFrame(animate)
  time += 0.001

  if (particles) {
    particles.rotation.y = time * 0.1
    particles.rotation.x = time * 0.05

    const positions = particles.geometry.attributes.position.array as Float32Array
    for (let i = 0; i < positions.length; i += 3) {
      positions[i + 1] += Math.sin(time + positions[i] * 0.1) * 0.02
    }
    particles.geometry.attributes.position.needsUpdate = true
  }

  renderer?.render(scene!, camera!)
}

function onResize() {
  if (!camera || !renderer) return
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

function onVisibilityChange() {
  isVisible = !document.hidden
}

onMounted(() => {
  setTimeout(() => {
    initScene()
  }, 100)

  window.addEventListener('resize', onResize)
  document.addEventListener('visibilitychange', onVisibilityChange)
})

onUnmounted(() => {
  if (animationId) cancelAnimationFrame(animationId)
  window.removeEventListener('resize', onResize)
  document.removeEventListener('visibilitychange', onVisibilityChange)

  if (renderer) {
    renderer.dispose()
    if (particles) {
      particles.geometry.dispose()
      ;(particles.material as THREE.Material).dispose()
    }
  }
})
</script>

<template>
  <div class="wedding-3d-bg fixed inset-0 -z-10 pointer-events-none" role="presentation" aria-hidden="true">
    <div v-if="shouldRender" ref="canvasContainer" class="canvas-container"></div>
  </div>
</template>

<style scoped>
.wedding-3d-bg {
  background: var(--bg-gradient);
}

.canvas-container {
  width: 100%;
  height: 100%;
}
</style>
