<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// Set page title based on route
onMounted(() => {
  document.title = route.meta.title || 'Undangan Digital Premium'
})
</script>

<template>
  <RouterView />
</template>

<style>
/* Hide scrollbar for cleaner look */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #0a0a0a;
}

::-webkit-scrollbar-thumb {
  background: #f9b31a;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #db9010;
}

/* Smooth scroll behavior */
html {
  scroll-behavior: smooth;
}

/* Prevent text selection on interactive elements */
.no-select {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>
