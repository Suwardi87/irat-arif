<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

/**
 * Wedding3DScene - Layered 3D Wedding Invitation Background (360°)
 *
 * Features:
 * - Full 360° rotation with OrbitControls
 * - Zoom in/out
 * - Touch support for mobile
 * - Layers: Background, Middle, Foreground effects
 */

interface Props {
  theme?: 'gold' | 'rose-gold' | 'silver'
  intensity?: number // 0-1, controls particle density
  enableZoom?: boolean
  autoRotate?: boolean
  autoRotateSpeed?: number
}

const props = withDefaults(defineProps<Props>(), {
  theme: 'gold',
  intensity: 0.7,
  enableZoom: true,
  autoRotate: false,
  autoRotateSpeed: 0.5
})

const canvasContainer = ref<HTMLElement | null>(null)
let scene: THREE.Scene | null = null
let camera: THREE.PerspectiveCamera | null = null
let renderer: THREE.WebGLRenderer | null = null
let controls: OrbitControls | null = null

// Hint overlay
const showHint = ref(true)
let hintTimeout: number | null = null

// Layer containers
let backgroundParticles: THREE.Points | null = null
let floatingRings: THREE.Group | null = null
let heartParticles: THREE.Points | null = null
let fallingPetals: THREE.Points | null = null
let sparkleParticles: THREE.Points | null = null

// Animation
let animationId: number | null = null

// Theme colors
const themeColors = {
  gold: {
    primary: new THREE.Color(0xf9b31a),
    secondary: new THREE.Color(0xdb9010),
    ambient: new THREE.Color(0xffd700)
  },
  'rose-gold': {
    primary: new THREE.Color(0xb76e79),
    secondary: new THREE.Color(0xe8b4b8),
    ambient: new THREE.Color(0xffc0cb)
  },
  silver: {
    primary: new THREE.Color(0xc0c0c0),
    secondary: new THREE.Color(0xe8e8e8),
    ambient: new THREE.Color(0xffffff)
  }
}

const currentColors = themeColors[props.theme]

// ========== LAYER 1: Background ==========
function createBackgroundLayer() {
  const particleCount = 1500 * props.intensity
  const geometry = new THREE.BufferGeometry()
  const positions = new Float32Array(particleCount * 3)
  const sizes = new Float32Array(particleCount)
  const opacities = new Float32Array(particleCount)

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 100
    positions[i * 3 + 1] = (Math.random() - 0.5) * 100
    positions[i * 3 + 2] = (Math.random() - 0.5) * 50 - 25

    sizes[i] = Math.random() * 2 + 0.5
    opacities[i] = Math.random() * 0.5 + 0.1
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1))
  geometry.setAttribute('opacity', new THREE.BufferAttribute(opacities, 1))

  const material = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0 },
      color: { value: currentColors.ambient }
    },
    vertexShader: `
      attribute float size;
      attribute float opacity;
      varying float vOpacity;
      uniform float time;

      void main() {
        vOpacity = opacity;
        vec3 pos = position;
        pos.y += sin(time * 0.5 + position.x * 0.1) * 0.5;
        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_PointSize = size * (300.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragmentShader: `
      uniform vec3 color;
      varying float vOpacity;

      void main() {
        float dist = length(gl_PointCoord - vec2(0.5));
        if (dist > 0.5) discard;
        float alpha = (1.0 - dist * 2.0) * vOpacity;
        gl_FragColor = vec4(color, alpha);
      }
    `,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  })

  backgroundParticles = new THREE.Points(geometry, material)
  scene?.add(backgroundParticles)
}

// ========== LAYER 2: Middle Ground ==========
function createMiddleLayer() {
  floatingRings = new THREE.Group()

  // Create wedding rings
  const ringCount = Math.floor(5 * props.intensity)

  for (let i = 0; i < ringCount; i++) {
    const ringGroup = new THREE.Group()

    // Outer ring
    const outerGeometry = new THREE.TorusGeometry(1.5, 0.08, 16, 64)
    const outerMaterial = new THREE.MeshStandardMaterial({
      color: currentColors.primary,
      metalness: 0.8,
      roughness: 0.2,
      emissive: currentColors.primary,
      emissiveIntensity: 0.2
    })
    const outerRing = new THREE.Mesh(outerGeometry, outerMaterial)
    ringGroup.add(outerRing)

    // Inner ring (slightly offset)
    const innerGeometry = new THREE.TorusGeometry(1.3, 0.06, 16, 64)
    const innerMaterial = new THREE.MeshStandardMaterial({
      color: currentColors.secondary,
      metalness: 0.9,
      roughness: 0.1,
      emissive: currentColors.secondary,
      emissiveIntensity: 0.3
    })
    const innerRing = new THREE.Mesh(innerGeometry, innerMaterial)
    innerRing.position.x = 0.3
    innerRing.position.z = 0.2
    ringGroup.add(innerRing)

    // Position randomly in space
    ringGroup.position.set(
      (Math.random() - 0.5) * 40,
      (Math.random() - 0.5) * 30,
      (Math.random() - 0.5) * 20 - 10
    )

    ringGroup.rotation.set(
      Math.random() * Math.PI,
      Math.random() * Math.PI,
      Math.random() * Math.PI
    )

    ringGroup.userData = {
      rotationSpeed: {
        x: (Math.random() - 0.5) * 0.01,
        y: (Math.random() - 0.5) * 0.01
      },
      floatSpeed: Math.random() * 0.5 + 0.5,
      floatOffset: Math.random() * Math.PI * 2
    }

    floatingRings.add(ringGroup)
  }

  scene?.add(floatingRings)

  // Add heart particles
  createHeartParticles()
}

function createHeartParticles() {
  const heartCount = 50 * props.intensity
  const geometry = new THREE.BufferGeometry()
  const positions = new Float32Array(heartCount * 3)
  const sizes = new Float32Array(heartCount)

  for (let i = 0; i < heartCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 60
    positions[i * 3 + 1] = (Math.random() - 0.5) * 40
    positions[i * 3 + 2] = (Math.random() - 0.5) * 15

    sizes[i] = Math.random() * 3 + 1
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1))

  const material = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0 },
      color: { value: currentColors.primary }
    },
    vertexShader: `
      attribute float size;
      uniform float time;

      void main() {
        vec3 pos = position;
        pos.x += sin(time * 0.3 + position.y * 0.1) * 2.0;
        pos.y += cos(time * 0.2 + position.x * 0.1) * 2.0;
        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_PointSize = size * (200.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragmentShader: `
      uniform vec3 color;

      void main() {
        // Heart shape
        vec2 p = gl_PointCoord - vec2(0.5);
        p.x *= 1.2;
        float a = atan(p.x, p.y) / 3.141593;
        float r = length(p);
        float h = abs(a);
        float d = (13.0*h - 22.0*h*h + 10.0*h*h*h)/(6.0-5.0*h);
        float alpha = smoothstep(d - 0.1, d, r);
        if (r > d) discard;
        float glow = 1.0 - (r / d);
        gl_FragColor = vec4(color, glow * 0.6);
      }
    `,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  })

  heartParticles = new THREE.Points(geometry, material)
  scene?.add(heartParticles)
}

// ========== LAYER 4: Foreground ==========
function createForegroundLayer() {
  createFallingPetals()
  createSparkles()
}

function createFallingPetals() {
  const petalCount = 80 * props.intensity
  const geometry = new THREE.BufferGeometry()
  const positions = new Float32Array(petalCount * 3)
  const rotations = new Float32Array(petalCount * 3)
  const speeds = new Float32Array(petalCount)
  const sizes = new Float32Array(petalCount)

  for (let i = 0; i < petalCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 50
    positions[i * 3 + 1] = Math.random() * 40 + 20
    positions[i * 3 + 2] = Math.random() * 10 + 5

    rotations[i * 3] = Math.random() * Math.PI * 2
    rotations[i * 3 + 1] = Math.random() * Math.PI * 2
    rotations[i * 3 + 2] = Math.random() * Math.PI * 2

    speeds[i] = Math.random() * 0.02 + 0.01
    sizes[i] = Math.random() * 0.8 + 0.4
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geometry.setAttribute('rotation', new THREE.BufferAttribute(rotations, 3))
  geometry.setAttribute('speed', new THREE.BufferAttribute(speeds, 1))
  geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1))

  const material = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0 },
      color: { value: new THREE.Color(0xffc0cb) } // Pink for rose petals
    },
    vertexShader: `
      attribute vec3 rotation;
      attribute float speed;
      attribute float size;
      uniform float time;

      void main() {
        vec3 pos = position;
        pos.y -= time * speed * 10.0;
        pos.x += sin(time * 0.5 + position.z * 0.1) * 2.0;
        pos.z += cos(time * 0.3 + position.x * 0.1) * 1.0;

        // Reset to top when below screen
        if (pos.y < -20.0) pos.y = 30.0;

        // Rotation
        float rotX = rotation.x + time * speed;
        float rotY = rotation.y + time * speed * 0.5;

        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_PointSize = size * 8.0 * (100.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragmentShader: `
      uniform vec3 color;

      void main() {
        // Petal shape
        vec2 p = gl_PointCoord - vec2(0.5);
        float r = length(p);
        float angle = atan(p.y, p.x);

        // Petal curve
        float petal = pow(sin(angle * 2.0), 2.0) * 0.5 + 0.3;
        float shape = smoothstep(petal, petal + 0.1, r);

        if (r > petal + 0.1) discard;

        float alpha = (1.0 - shape) * 0.7;
        vec3 finalColor = mix(color, vec3(1.0), 0.3);
        gl_FragColor = vec4(finalColor, alpha);
      }
    `,
    transparent: true,
    depthWrite: false,
    blending: THREE.NormalBlending
  })

  fallingPetals = new THREE.Points(geometry, material)
  scene?.add(fallingPetals)
}

function createSparkles() {
  const sparkleCount = 100 * props.intensity
  const geometry = new THREE.BufferGeometry()
  const positions = new Float32Array(sparkleCount * 3)
  const sizes = new Float32Array(sparkleCount)
  const twinkleSpeeds = new Float32Array(sparkleCount)

  for (let i = 0; i < sparkleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 40
    positions[i * 3 + 1] = (Math.random() - 0.5) * 30
    positions[i * 3 + 2] = Math.random() * 15 + 5

    sizes[i] = Math.random() * 4 + 2
    twinkleSpeeds[i] = Math.random() * 2 + 1
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
  geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1))
  geometry.setAttribute('twinkleSpeed', new THREE.BufferAttribute(twinkleSpeeds, 1))

  const material = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0 },
      color: { value: currentColors.primary }
    },
    vertexShader: `
      attribute float size;
      attribute float twinkleSpeed;
      uniform float time;
      varying float vTwinkle;

      void main() {
        vTwinkle = sin(time * twinkleSpeed) * 0.5 + 0.5;
        vec3 pos = position;
        pos.y += sin(time * 0.5 + position.x * 0.2) * 0.5;
        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_PointSize = size * vTwinkle * (100.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `,
    fragmentShader: `
      uniform vec3 color;
      varying float vTwinkle;

      void main() {
        float dist = length(gl_PointCoord - vec2(0.5));
        if (dist > 0.5) discard;

        // Star/diamond shape
        float star = max(abs(gl_PointCoord.x - 0.5), abs(gl_PointCoord.y - 0.5)) * 2.0;
        float alpha = (1.0 - dist * 2.0) * vTwinkle;

        // Cross flare
        float flare = smoothstep(0.3, 0.0, abs(gl_PointCoord.x - 0.5)) * smoothstep(0.3, 0.0, abs(gl_PointCoord.y - 0.5));
        alpha += flare * 0.5 * vTwinkle;

        gl_FragColor = vec4(color, alpha);
      }
    `,
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending
  })

  sparkleParticles = new THREE.Points(geometry, material)
  scene?.add(sparkleParticles)
}

// ========== Scene Setup ==========
function initScene() {
  if (!canvasContainer.value) {
    console.error('[Wedding3DScene] Canvas container not found')
    return
  }

  // Scene
  scene = new THREE.Scene()
  scene.fog = new THREE.FogExp2(0x0a0a0a, 0.015)

  // Camera - positioned for 360° view
  camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )
  camera.position.set(0, 5, 40) // Start with a nice view

  // Renderer
  renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance'
  })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setClearColor(0x0a0a0a, 1)

  canvasContainer.value.appendChild(renderer.domElement)

  // OrbitControls for 360° interaction
  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.dampingFactor = 0.05
  controls.enableZoom = props.enableZoom
  controls.minDistance = 10
  controls.maxDistance = 100
  controls.autoRotate = props.autoRotate
  controls.autoRotateSpeed = props.autoRotateSpeed
  controls.enablePan = false
  controls.maxPolarAngle = Math.PI // Allow full vertical rotation
  controls.minPolarAngle = -Math.PI

  // Hide hint on user interaction
  controls.addEventListener('start', () => {
    showHint.value = false
  })

  // Auto-hide hint after 5 seconds
  hintTimeout = window.setTimeout(() => {
    showHint.value = false
  }, 5000)

  // Lighting
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.3)
  scene.add(ambientLight)

  const pointLight1 = new THREE.PointLight(currentColors.primary, 1, 100)
  pointLight1.position.set(10, 10, 10)
  scene.add(pointLight1)

  const pointLight2 = new THREE.PointLight(currentColors.secondary, 0.5, 100)
  pointLight2.position.set(-10, -10, 5)
  scene.add(pointLight2)

  // Create layers
  createBackgroundLayer()
  createMiddleLayer()
  createForegroundLayer()

  // Start animation
  animate()
}

// ========== Animation Loop ==========
let time = 0
function animate() {
  animationId = requestAnimationFrame(animate)
  time += 0.016

  // Update orbit controls
  controls?.update()

  // Update background particles
  if (backgroundParticles) {
    const material = backgroundParticles.material as THREE.ShaderMaterial
    material.uniforms.time.value = time
  }

  // Update floating rings
  if (floatingRings) {
    floatingRings.children.forEach((ring: any) => {
      ring.rotation.x += ring.userData.rotationSpeed.x
      ring.rotation.y += ring.userData.rotationSpeed.y
      ring.position.y += Math.sin(time * ring.userData.floatSpeed + ring.userData.floatOffset) * 0.01
    })
  }

  // Update heart particles
  if (heartParticles) {
    const material = heartParticles.material as THREE.ShaderMaterial
    material.uniforms.time.value = time
  }

  // Update falling petals
  if (fallingPetals) {
    const material = fallingPetals.material as THREE.ShaderMaterial
    material.uniforms.time.value = time
  }

  // Update sparkles
  if (sparkleParticles) {
    const material = sparkleParticles.material as THREE.ShaderMaterial
    material.uniforms.time.value = time
  }

  // Render
  if (renderer && scene && camera) {
    renderer.render(scene, camera)
  }
}

// ========== Events ==========
function onResize() {
  if (!camera || !renderer || !controls) return

  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}

// ========== Lifecycle ==========
onMounted(async () => {
  // Wait for DOM to be ready
  await nextTick()
  initScene()
  window.addEventListener('resize', onResize)
})

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }

  if (hintTimeout) {
    clearTimeout(hintTimeout)
  }

  window.removeEventListener('resize', onResize)

  // Dispose controls
  controls?.dispose()

  // Cleanup Three.js resources
  backgroundParticles?.geometry.dispose()
  backgroundParticles?.material.dispose()
  heartParticles?.geometry.dispose()
  heartParticles?.material.dispose()
  fallingPetals?.geometry.dispose()
  fallingPetals?.material.dispose()
  sparkleParticles?.geometry.dispose()
  sparkleParticles?.material.dispose()

  if (floatingRings) {
    floatingRings.children.forEach((child: any) => {
      if (child.geometry) child.geometry.dispose()
      if (child.material) child.material.dispose()
    })
  }

  renderer?.dispose()
  renderer?.domElement.remove()
})
</script>

<template>
  <div class="wedding-3d-scene fixed inset-0 -z-10">
    <div ref="canvasContainer" class="w-full h-full">
      <!-- Canvas will be appended here by Three.js -->
    </div>

    <!-- Control Hint -->
    <div
      v-show="showHint"
      class="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none transition-opacity duration-500"
      :class="showHint ? 'opacity-100' : 'opacity-0'"
    >
      <div class="flex items-center gap-3 bg-dark-950/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gold-500/30">
        <svg class="w-5 h-5 text-gold-500 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
        <span class="text-white/90 text-sm font-medium">Drag untuk rotasi 360°</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.wedding-3d-scene {
  pointer-events: auto;
}

canvas {
  display: block;
  cursor: grab;
}

canvas:active {
  cursor: grabbing;
}
</style>
