import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    server: {
      host: '0.0.0.0',
      port: 5173
    },
    base: env.BASE_URL || '/undangan-asratul-fitri/',
    plugins: [
      vue(),
      AutoImport({
        imports: [
          'vue',
          'vue-router',
          'pinia',
          '@vueuse/core',
          {
            'gsap': ['gsap', 'ScrollTrigger'],
            'three': ['*']
          }
        ],
        dts: 'src/auto-imports.d.ts',
        vueTemplate: true
      }),
      Components({
        dts: 'src/components.d.ts',
        dirs: ['src/components/base', 'src/components/ui', 'src/components/sections', 'src/components/3d']
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    build: {
      target: 'es2020',
      minify: 'terser',
      rollupOptions: {
        output: {
          manualChunks: {
            'three': ['three'],
            'gsap': ['gsap'],
            'vue-vendor': ['vue', 'vue-router', 'pinia']
          }
        }
      }
    }
  }
})
