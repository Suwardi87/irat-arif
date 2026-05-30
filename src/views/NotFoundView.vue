<script setup lang="ts">
import { useRouter } from 'vue-router'
import BaseButton from '@/components/base/BaseButton.vue'

const router = useRouter()

function goHome() {
  router.push('/')
}
</script>

<template>
  <div class="min-h-screen bg-dark-950 text-white flex items-center justify-center px-4">
    <div class="text-center">
      <h1 class="font-serif text-6xl md:text-8xl text-gold-500 mb-4">404</h1>
      <p class="font-sans text-xl text-white/70 mb-8">Undangan tidak ditemukan</p>
      <BaseButton
        variant="primary"
        @click="goHome"
      >
        Kembali ke Beranda
      </BaseButton>
    </div>
  </div>
</template>
