<script setup lang="ts">
const props = defineProps<{
  show: boolean
}>()

const emit = defineEmits(['close'])

const photos = [
  '/public/images/contoh-1.jpeg',
  '/public/images/contoh-2.jpeg',
  'https://images.unsplash.com/photo-1519741497674-611481863552?w=800',
  'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800'
]

function close() {
  emit('close')
}
</script>

<template>
  <Transition name="fade">
    <div v-if="show" class="gallery-overlay" @click.self="close">
      <div class="gallery-container">
        <button @click="close" class="close-gallery-btn">×</button>
        <h2 class="gallery-title">Gallery Foto</h2>
        
        <div class="gallery-grid">
          <div v-for="(photo, index) in photos" :key="index" class="gallery-item">
            <img :src="photo" alt="Wedding Photo" loading="lazy" />
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.gallery-overlay {
  position: fixed;
  inset: 0;
  z-index: 600;
  background: rgba(0, 0, 0, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
  overflow-y: auto;
}

.gallery-container {
  width: 100%;
  max-width: 1000px;
  position: relative;
}

.gallery-title {
  color: #d4af37;
  font-family: 'Great Vibes', cursive;
  font-size: 48px;
  text-align: center;
  margin-bottom: 40px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.gallery-item {
  border-radius: 8px;
  overflow: hidden;
  border: 2px solid rgba(212, 175, 55, 0.2);
  transition: transform 0.3s;
}

.gallery-item:hover {
  transform: scale(1.02);
  border-color: #d4af37;
}

.gallery-item img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  display: block;
}

.close-gallery-btn {
  position: fixed;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: white;
  font-size: 48px;
  cursor: pointer;
  line-height: 1;
}

.fade-enter-active, .fade-leave-active { transition: opacity 0.5s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

@media (max-width: 640px) {
  .gallery-grid { grid-template-columns: 1fr; }
  .gallery-title { font-size: 36px; }
}
</style>
