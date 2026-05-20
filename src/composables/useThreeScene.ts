import { ref, onMounted, onUnmounted, type Ref } from 'vue'
import * as THREE from 'three'
import type { SceneConfig, CameraConfig, LightingConfig, UseThreeSceneReturn } from '@/types'

/**
 * useThreeScene - Three.js Scene Manager Composable
 *
 * Purpose: Manages the complete lifecycle of a Three.js scene including:
 * - Scene initialization and setup
 * - Camera configuration
 * - Renderer optimization
 * - Resize handling with debouncing
 * - Proper cleanup on unmount
 * - Performance optimizations
 *
 * @example
 * ```ts
 * const { scene, camera, renderer, container, init, cleanup } = useThreeScene({
 *   scene: { backgroundColor: 0x0a0a0a, fog: true },
 *   camera: { position: { x: 0, y: 0, z: 5 }, lookAt: { x: 0, y: 0, z: 0 }, fov: 75 },
 *   lighting: { ambient: { intensity: 0.5 } }
 * })
 * ```
 */

export function useThreeScene(
  config: {
    scene?: SceneConfig
    camera?: CameraConfig
    lighting?: LightingConfig
    pixelRatioLimit?: number
    antialias?: boolean
    alpha?: boolean
  } = {}
): UseThreeSceneReturn {
  // Reactive references
  const scene = ref<THREE.Scene | null>(null)
  const camera = ref<THREE.PerspectiveCamera | null>(null)
  const renderer = ref<THREE.WebGLRenderer | null>(null)
  const container = ref<HTMLElement | null>(null)
  const isInitialized = ref(false)

  // Animation frame ID for cleanup
  let animationFrameId: number | null = null

  // Resize handler with debouncing
  let resizeTimeout: ReturnType<typeof setTimeout> | null = null

  /**
   * Initialize the Three.js scene
   * Creates scene, camera, renderer, and sets up lighting
   */
  const init = () => {
    if (!container.value) {
      console.warn('[useThreeScene] Container element not found')
      return
    }

    if (isInitialized.value) {
      console.warn('[useThreeScene] Scene already initialized')
      return
    }

    const width = container.value.clientWidth
    const height = container.value.clientHeight

    // === CREATE SCENE ===
    scene.value = new THREE.Scene()

    // Apply scene configuration
    if (config.scene) {
      // Set background color
      if (config.scene.backgroundColor) {
        const bgColor = typeof config.scene.backgroundColor === 'string'
          ? new THREE.Color(config.scene.backgroundColor)
          : config.scene.backgroundColor
        scene.value.background = bgColor
      }

      // Add fog for depth
      if (config.scene.fog) {
        const fogColor = config.scene.fogColor || 0x0a0a0a
        const fogNear = config.scene.fogNear || 1
        const fogFar = config.scene.fogFar || 100
        scene.value.fog = new THREE.Fog(fogColor, fogNear, fogFar)
      }
    }

    // === CREATE CAMERA ===
    const fov = config.camera?.fov || 75
    const aspect = width / height || 1
    const near = config.camera?.near || 0.1
    const far = config.camera?.far || 1000

    camera.value = new THREE.PerspectiveCamera(fov, aspect, near, far)

    // Set camera position
    if (config.camera?.position) {
      camera.value.position.set(
        config.camera.position.x,
        config.camera.position.y,
        config.camera.position.z
      )
    }

    // Point camera at target
    if (config.camera?.lookAt) {
      camera.value.lookAt(
        config.camera.lookAt.x,
        config.camera.lookAt.y,
        config.camera.lookAt.z
      )
    }

    // === CREATE RENDERER ===
    const pixelRatioLimit = config.pixelRatioLimit || 2
    const devicePixelRatio = Math.min(window.devicePixelRatio, pixelRatioLimit)

    renderer.value = new THREE.WebGLRenderer({
      antialias: config.antialias ?? true,
      alpha: config.alpha ?? false,
      powerPreference: 'high-performance'
    })

    renderer.value.setSize(width, height)
    renderer.value.setPixelRatio(devicePixelRatio)

    // Optimize renderer settings
    renderer.value.outputColorSpace = THREE.SRGBColorSpace
    renderer.value.toneMapping = THREE.ACESFilmicToneMapping
    renderer.value.toneMappingExposure = 1

    // Append canvas to container
    container.value.appendChild(renderer.value.domElement)

    // === SETUP LIGHTING ===
    if (config.lighting && scene.value) {
      setupLighting(scene.value, config.lighting)
    }

    isInitialized.value = true

    // Setup resize listener
    window.addEventListener('resize', handleResize)

    console.log('[useThreeScene] Scene initialized successfully')
  }

  /**
   * Setup lighting for the scene
   */
  function setupLighting(targetScene: THREE.Scene, lightingConfig: LightingConfig) {
    // Ambient light - soft base lighting
    if (lightingConfig.ambient) {
      const ambient = new THREE.AmbientLight(
        lightingConfig.ambient.color || 0xffffff,
        lightingConfig.ambient.intensity || 0.5
      )
      targetScene.add(ambient)
    }

    // Directional light - key light
    if (lightingConfig.directional) {
      const directional = new THREE.DirectionalLight(
        lightingConfig.directional.color || 0xffffff,
        lightingConfig.directional.intensity || 1
      )
      if (lightingConfig.directional.position) {
        directional.position.set(
          lightingConfig.directional.position.x,
          lightingConfig.directional.position.y,
          lightingConfig.directional.position.z
        )
      }
      targetScene.add(directional)
    }

    // Point light - accent light
    if (lightingConfig.point) {
      const point = new THREE.PointLight(
        lightingConfig.point.color || 0xf9b31a, // Gold color default
        lightingConfig.point.intensity || 1,
        lightingConfig.point.distance || 0,
        lightingConfig.point.decay || 2
      )
      if (lightingConfig.point.position) {
        point.position.set(
          lightingConfig.point.position.x,
          lightingConfig.point.position.y,
          lightingConfig.point.position.z
        )
      }
      targetScene.add(point)
    }

    // Hemisphere light - natural sky/ground light
    if (lightingConfig.hemisphere) {
      const hemisphere = new THREE.HemisphereLight(
        lightingConfig.hemisphere.skyColor || 0xffffff,
        lightingConfig.hemisphere.groundColor || 0x0a0a0a,
        lightingConfig.hemisphere.intensity || 0.5
      )
      targetScene.add(hemisphere)
    }
  }

  /**
   * Handle resize events with debouncing
   * Debouncing prevents excessive resize calculations during window drag
   */
  function handleResize() {
    // Clear existing timeout
    if (resizeTimeout) {
      clearTimeout(resizeTimeout)
    }

    // Debounce resize to 100ms
    resizeTimeout = setTimeout(() => {
      resize()
    }, 100)
  }

  /**
   * Resize handler - updates camera aspect and renderer size
   * Call this manually if you need immediate resize (e.g., after layout changes)
   */
  const resize = () => {
    if (!container.value || !camera.value || !renderer.value) return

    const width = container.value.clientWidth
    const height = container.value.clientHeight

    // Update camera aspect ratio
    camera.value.aspect = width / height
    camera.value.updateProjectionMatrix()

    // Update renderer size
    renderer.value.setSize(width, height)

    console.log('[useThreeScene] Resized to', width, 'x', height)
  }

  /**
   * Cleanup function - disposes all Three.js resources
   * CRITICAL: Call this when component unmounts to prevent memory leaks
   */
  const cleanup = () => {
    // Remove resize listener
    window.removeEventListener('resize', handleResize)

    // Cancel any pending resize
    if (resizeTimeout) {
      clearTimeout(resizeTimeout)
    }

    // Cancel animation frame
    if (animationFrameId !== null) {
      cancelAnimationFrame(animationFrameId)
    }

    // Dispose renderer
    if (renderer.value) {
      renderer.value.dispose()
      // Remove canvas from DOM
      if (renderer.value.domElement.parentNode) {
        renderer.value.domElement.parentNode.removeChild(renderer.value.domElement)
      }
    }

    // Dispose scene objects (geometries, materials)
    if (scene.value) {
      scene.value.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          if (object.geometry) {
            object.geometry.dispose()
          }
          if (object.material) {
            if (Array.isArray(object.material)) {
              object.material.forEach(material => material.dispose())
            } else {
              object.material.dispose()
            }
          }
        }
      })
      scene.value.clear()
    }

    // Reset references
    scene.value = null
    camera.value = null
    renderer.value = null
    isInitialized.value = false

    console.log('[useThreeScene] Cleanup completed')
  }

  // Auto-cleanup on unmount
  onUnmounted(() => {
    cleanup()
  })

  return {
    scene,
    camera,
    renderer,
    container,
    isInitialized,
    init,
    cleanup,
    resize
  }
}

/**
 * Helper function to create a gold-colored particle texture programmatically
 * Useful when you don't want to load external texture files
 */
export function createGoldParticleTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas')
  canvas.width = 64
  canvas.height = 64

  const ctx = canvas.getContext('2d')!
  if (!ctx) throw new Error('Could not get canvas context')

  // Create radial gradient for soft particle
  const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32)
  gradient.addColorStop(0, 'rgba(249, 179, 26, 1)')     // Center - gold
  gradient.addColorStop(0.4, 'rgba(249, 179, 26, 0.6)')  // Mid
  gradient.addColorStop(1, 'rgba(249, 179, 26, 0)')     // Edge - transparent

  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, 64, 64)

  return new THREE.CanvasTexture(canvas)
}

/**
 * Helper function to limit pixel ratio for performance
 * Mobile devices can have very high pixel ratios (3x, 4x) which kills performance
 */
export function getOptimalPixelRatio(maxLimit: number = 2): number {
  const devicePixelRatio = window.devicePixelRatio || 1
  return Math.min(devicePixelRatio, maxLimit)
}

/**
 * Helper to check if WebGL is available
 */
export function isWebGLAvailable(): boolean {
  try {
    const canvas = document.createElement('canvas')
    return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')))
  } catch (e) {
    return false
  }
}
