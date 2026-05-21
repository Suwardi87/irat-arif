<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from 'vue'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

/**
 * Wedding3DScene - Immersive 3D Wedding Invitation
 * 
 * Features:
 * - Interactive 3D Card with dynamic lighting
 * - Luxury Golden Particle system
 * - Mouse/Touch movement parallax
 * - Cinematic 360° background
 */

interface Props {
  theme?: 'gold' | 'rose-gold' | 'silver'
  intensity?: number
  enableZoom?: boolean
  autoRotate?: boolean
  autoRotateSpeed?: number
  enableControls?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  theme: 'gold',
  intensity: 0.8,
  enableZoom: false,
  autoRotate: false,
  autoRotateSpeed: 0.3,
  enableControls: false
})

const canvasContainer = ref<HTMLElement | null>(null)
let scene: THREE.Scene | null = null
let camera: THREE.PerspectiveCamera | null = null
let renderer: THREE.WebGLRenderer | null = null
let controls: OrbitControls | null = null

// Animation State
let animationId: number | null = null
let time = 0
const mouse = new THREE.Vector2(0, 0)
const targetMouse = new THREE.Vector2(0, 0)

// 3D Objects
let backgroundParticles: THREE.Points | null = null
let heartParticles: THREE.Points | null = null
let fallingPetals: THREE.Points | null = null
let sparkleParticles: THREE.Points | null = null
let interactiveCard: THREE.Group | null = null
let mainLight: THREE.PointLight | null = null

const themeColors = {
  gold: {
    primary: new THREE.Color(0xf9b31a),
    secondary: new THREE.Color(0xdb9010),
    ambient: new THREE.Color(0xffd700),
    bg: 0x0a1a0f // Deep green for gold contrast
  }
}

const currentColors = themeColors.gold

// ========== LAYER: Interactive 3D Card ==========
function createInteractiveCard() {
  interactiveCard = new THREE.Group()

  // Card Geometry (Golden Ratio inspired)
  const cardGeometry = new THREE.PlaneGeometry(12, 18, 64, 64)
  
  // High-Resolution Texture Canvas
  const canvas = document.createElement('canvas')
  canvas.width = 1024
  canvas.height = 1024 * (18/12)
  const ctx = canvas.getContext('2d')
  
  if (ctx) {
    // 1. Premium Green Gradient Background
    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
    gradient.addColorStop(0, '#1a4d2e')
    gradient.addColorStop(0.5, '#133a22')
    gradient.addColorStop(1, '#0c2616')
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // 2. Luxury Pattern
    ctx.globalAlpha = 0.05
    ctx.strokeStyle = '#ffffff'
    ctx.lineWidth = 1
    for(let i=0; i<canvas.width; i+=40) {
      ctx.beginPath()
      ctx.moveTo(i, 0)
      ctx.lineTo(i, canvas.height)
      ctx.stroke()
    }

    // 3. Golden Borders
    ctx.globalAlpha = 1.0
    ctx.strokeStyle = '#c9a962'
    ctx.lineWidth = 15
    ctx.strokeRect(50, 50, canvas.width - 100, canvas.height - 100)
    ctx.lineWidth = 2
    ctx.strokeRect(70, 70, canvas.width - 140, canvas.height - 140)

    // 4. Content
    ctx.fillStyle = '#c9a962'
    ctx.textAlign = 'center'
    
    // Arabic
    ctx.font = '60px serif'
    ctx.fillText('بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم', canvas.width/2, 200)
    
    // Title
    ctx.font = 'bold 30px sans-serif'
    ctx.letterSpacing = '10px'
    ctx.fillText('UNDANGAN PERNIKAHAN', canvas.width/2, 300)
    
    // Names
    ctx.font = 'italic 150px "Great Vibes", cursive'
    ctx.shadowBlur = 20
    ctx.shadowColor = 'rgba(201, 169, 98, 0.5)'
    ctx.fillText('Putri & Putra', canvas.width/2, canvas.height/2 + 50)
    
    // Date
    ctx.shadowBlur = 0
    ctx.font = '40px serif'
    ctx.fillText('JUMAT, 05 JUNI 2026', canvas.width/2, canvas.height - 250)
  }

  const texture = new THREE.CanvasTexture(canvas)
  texture.anisotropy = 16

  const cardMaterial = new THREE.MeshStandardMaterial({
    map: texture,
    metalness: 0.6,
    roughness: 0.2,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.95
  })

  const cardMesh = new THREE.Mesh(cardGeometry, cardMaterial)
  interactiveCard.add(cardMesh)

  // Decorative Golden Frame (Physical Depth)
  const frameGeo = new THREE.BoxGeometry(12.4, 18.4, 0.2)
  const frameMat = new THREE.MeshStandardMaterial({
    color: 0xc9a962,
    metalness: 0.9,
    roughness: 0.1
  })
  const frame = new THREE.Mesh(frameGeo, frameMat)
  frame.position.z = -0.15
  interactiveCard.add(frame)

  scene?.add(interactiveCard)
}

// ========== LAYER: Luxury Particles ==========
function createLuxuryParticles() {
  const count = 2000 * props.intensity
  const geometry = new THREE.BufferGeometry()
  const positions = new Float32Array(count * 3)
  const sizes = new Float32Array(count)
  
  for(let i=0; i<count; i++) {
    positions[i*3] = (Math.random() - 0.5) * 100
    positions[i*3+1] = (Math.random() - 0.5) * 100
    positions[i*3+2] = (Math.random() - 0.5) * 80
    sizes[i] = Math.random() * 2 + 0.5
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
      varying float vOpacity;
      uniform float time;
      void main() {
        vec3 pos = position;
        pos.y += sin(time * 0.2 + position.x * 0.1) * 2.0;
        pos.x += cos(time * 0.1 + position.z * 0.1) * 2.0;
        vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
        gl_PointSize = size * (400.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
        vOpacity = 1.0 - (abs(pos.z) / 50.0);
      }
    `,
    fragmentShader: `
      uniform vec3 color;
      varying float vOpacity;
      void main() {
        float d = length(gl_PointCoord - vec2(0.5));
        if (d > 0.5) discard;
        float strength = (1.0 - d * 2.0) * vOpacity;
        gl_FragColor = vec4(color, strength * 0.6);
      }
    `,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false
  })
  
  backgroundParticles = new THREE.Points(geometry, material)
  scene?.add(backgroundParticles)
}

function initScene() {
  if (!canvasContainer.value) return

  scene = new THREE.Scene()
  scene.fog = new THREE.FogExp2(currentColors.bg, 0.01)

  camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1, 1000)
  camera.position.set(0, 0, 45)

  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
  renderer.setClearColor(currentColors.bg, 1)
  canvasContainer.value.appendChild(renderer.domElement)

  controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true
  controls.enableZoom = props.enableZoom
  controls.autoRotate = props.autoRotate
  controls.autoRotateSpeed = props.autoRotateSpeed
  controls.maxDistance = 80
  controls.minDistance = 20
  controls.enabled = props.enableControls

  // Lighting
  const ambient = new THREE.AmbientLight(0xffffff, 0.4)
  scene.add(ambient)

  mainLight = new THREE.PointLight(0xffd700, 2, 100)
  mainLight.position.set(10, 10, 20)
  scene.add(mainLight)

  const sideLight = new THREE.PointLight(0xffffff, 1, 50)
  sideLight.position.set(-20, -10, 10)
  scene.add(sideLight)

  createInteractiveCard()
  createLuxuryParticles()

  animate()
}

function animate() {
  animationId = requestAnimationFrame(animate)
  time += 0.01

  controls?.update()

  // Smooth mouse movement for parallax
  targetMouse.lerp(mouse, 0.05)

  if (interactiveCard) {
    // Subtle float
    interactiveCard.position.y = Math.sin(time * 0.5) * 0.5
    
    // Parallax rotation
    interactiveCard.rotation.y = targetMouse.x * 0.2
    interactiveCard.rotation.x = -targetMouse.y * 0.1
    
    // Light follows mouse
    if (mainLight) {
      mainLight.position.x = targetMouse.x * 20
      mainLight.position.y = targetMouse.y * 20
    }
  }

  if (backgroundParticles) {
    (backgroundParticles.material as THREE.ShaderMaterial).uniforms.time.value = time
  }

  renderer?.render(scene!, camera!)
}

function handleMouseMove(e: MouseEvent) {
  mouse.x = (e.clientX / window.innerWidth) * 2 - 1
  mouse.y = (e.clientY / window.innerHeight) * 2 - 1
}

onMounted(() => {
  initScene()
  window.addEventListener('mousemove', handleMouseMove)
  window.addEventListener('resize', onResize)
})

onUnmounted(() => {
  if (animationId) cancelAnimationFrame(animationId)
  window.removeEventListener('mousemove', handleMouseMove)
  window.removeEventListener('resize', onResize)
  renderer?.dispose()
})

function onResize() {
  if (!camera || !renderer) return
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
}
</script>

<template>
  <div class="wedding-3d-scene fixed inset-0 -z-10 overflow-hidden">
    <div ref="canvasContainer" class="canvas-3d"></div>
  </div>
</template>

<style scoped>
.wedding-3d-scene {
  background: radial-gradient(circle at center, #1a4d2e 0%, #0a1a0f 100%);
}

.canvas-3d {
  width: 100%;
  height: 100%;
  /* Default: no interaction, clicks pass through */
  pointer-events: none;
}

/* Only enable interaction on desktop for 3D exploration */
@media (min-width: 1024px) {
  .canvas-3d {
    pointer-events: auto;
    cursor: grab;
  }

  .canvas-3d:active {
    cursor: grabbing;
  }
}
</style>
