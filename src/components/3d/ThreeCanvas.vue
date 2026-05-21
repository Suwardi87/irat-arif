<script setup lang="ts">
import { ref, watch } from 'vue'
import { useThreeScene } from '@/composables/useThreeScene'
import type { SceneConfig, CameraConfig, LightingConfig } from '@/types'

/**
 * ThreeCanvas - Three.js Canvas Wrapper Component
 *
 * Purpose: Wraps a Three.js scene in a Vue component with:
 * - Automatic canvas sizing
 * - Scene initialization
 * - Proper cleanup
 * - Customizable configuration
 *
 * @example
 * ```vue
 * <ThreeCanvas
 *   :scene="{ backgroundColor: 0x0a0a0a, fog: true }"
 *   :camera="{ position: { x: 0, y: 0, z: 5 } }"
 * >
 *   <template #default="{ scene, camera }">
 *     <!-- Add your 3D objects here -->
 *   </template>
 * </ThreeCanvas>
 * ```
 */

interface Props {
  scene?: SceneConfig
  camera?: CameraConfig
  lighting?: LightingConfig
  pixelRatioLimit?: number
  antialias?: boolean
  alpha?: boolean
  autoInit?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  pixelRatioLimit: 2,
  antialias: true,
  alpha: false,
  autoInit: true
})

const emit = defineEmits<{
  ready: [scene: THREE.Scene, camera: THREE.Camera, renderer: THREE.WebGLRenderer]
  resize: [width: number, height: number]
}>()

// Container ref
const containerRef = ref<HTMLElement | null>(null)

// Use Three.js composable
const {
  scene,
  camera,
  renderer,
  container,
  isInitialized,
  init,
  cleanup,
  resize
} = useThreeScene({
  scene: props.scene,
  camera: props.camera,
  lighting: props.lighting,
  pixelRatioLimit: props.pixelRatioLimit,
  antialias: props.antialias,
  alpha: props.alpha
})

// Link container ref
watch(containerRef, (newValue) => {
  container.value = newValue
  if (props.autoInit && newValue && !isInitialized.value) {
    init()
  }
})

// Watch for initialization
watch(isInitialized, (newValue) => {
  if (newValue && scene.value && camera.value && renderer.value) {
    emit('ready', scene.value, camera.value, renderer.value)
  }
})

// Expose scene methods to parent
defineExpose({
  scene,
  camera,
  renderer,
  isInitialized,
  init,
  cleanup,
  resize
})
</script>

<template>
  <div
    ref="containerRef"
    class="relative w-full h-full"
  >
    <!-- Canvas will be inserted here by Three.js -->

    <!-- Default slot for additional content -->
    <slot
      v-if="isInitialized"
      name="default"
      :scene="scene"
      :camera="camera"
      :renderer="renderer"
    />

    <!-- Loading slot (shown before init) -->
    <slot
      v-if="!isInitialized"
      name="loading"
    >
      <div class="absolute inset-0 flex items-center justify-center">
        <div class="w-8 h-8 border-2 border-gold-500 border-t-transparent rounded-full animate-spin" />
      </div>
    </slot>

    <!-- Overlay slot (for UI overlays on top of canvas) -->
    <div
      v-if="$slots.overlay"
      class="absolute inset-0 pointer-events-none"
    >
      <slot name="overlay" :scene="scene" :camera="camera" />
    </div>
  </div>
</template>

<style scoped>
/* Ensure canvas fills container */
:deep(canvas) {
  display: block;
  width: 100% !important;
  height: 100% !important;
  outline: none;
}
</style>
