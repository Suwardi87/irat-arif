<script setup lang="ts">
import { ref } from 'vue'
import { useTheme } from '@/composables/useTheme'
import { useI18n } from '@/composables/useI18n'

const { currentTheme, availableThemes, setTheme, themeId } = useTheme()
const { t, toggleLocale } = useI18n()

const isOpen = ref(false)

function toggle() {
  isOpen.value = !isOpen.value
}

function selectTheme(id: string) {
  setTheme(id)
  setTimeout(() => {
    isOpen.value = false
  }, 300)
}

function handleBackdropClick(e: MouseEvent) {
  if ((e.target as HTMLElement).classList.contains('settings-backdrop')) {
    isOpen.value = false
  }
}
</script>

<template>
  <div class="settings-wrapper">
    <button class="settings-trigger" @click="toggle" :aria-label="isOpen ? 'Close settings' : 'Open settings'">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
      </svg>
    </button>

    <Transition name="settings-panel">
      <div v-if="isOpen" class="settings-backdrop" @click="handleBackdropClick">
        <div class="settings-panel">
          <div class="panel-header">
            <h3 class="panel-title">{{ t('section.story') === 'Cerita Kami' ? 'Pengaturan' : 'Settings' }}</h3>
            <button class="panel-close" @click="isOpen = false" aria-label="Close">✕</button>
          </div>

          <div class="panel-body">
            <div class="setting-group">
              <label class="setting-label">
                {{ t('section.story') === 'Cerita Kami' ? 'Bahasa / Language' : 'Language / Bahasa' }}
              </label>
              <button class="lang-toggle" @click="toggleLocale">
                <span class="lang-flag">{{ t('section.story') === 'Cerita Kami' ? '🇮🇩' : '🇬🇧' }}</span>
                <span class="lang-text">{{ t('lang') }}</span>
              </button>
            </div>

            <div class="setting-group">
              <label class="setting-label">
                {{ t('section.story') === 'Cerita Kami' ? 'Tema Warna' : 'Color Theme' }}
              </label>
              <div class="theme-grid">
                <button
                  v-for="theme in availableThemes"
                  :key="theme.id"
                  class="theme-btn"
                  :class="{ active: themeId === theme.id }"
                  @click="selectTheme(theme.id)"
                >
                  <div class="theme-preview">
                    <div class="preview-color primary" :style="{ background: theme.colors.primary }"></div>
                    <div class="preview-color accent" :style="{ background: theme.colors.accent }"></div>
                  </div>
                  <span class="theme-name">{{ theme.name }}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.settings-wrapper {
  position: fixed;
  bottom: 90px;
  left: 20px;
  z-index: 998;
}

.settings-trigger {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: var(--cream);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.settings-trigger:hover {
  background: rgba(255, 255, 255, 0.15);
  border-color: var(--emas);
  color: var(--emas);
  transform: scale(1.05);
}

.settings-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  z-index: 999;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding: 20px;
}

.settings-panel {
  width: 100%;
  max-width: 400px;
  background: linear-gradient(180deg, var(--surface) 0%, var(--surface-dark) 100%);
  border: 1px solid var(--card-border);
  border-radius: 20px;
  overflow: hidden;
}

.panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.panel-title {
  font-family: 'Playfair Display', serif;
  font-size: 18px;
  color: var(--emas);
  font-weight: 700;
}

.panel-close {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  border: none;
  color: var(--cream);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  transition: all 0.2s ease;
}

.panel-close:hover {
  background: rgba(255, 255, 255, 0.1);
}

.panel-body {
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 28px;
}

.setting-group {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.setting-label {
  font-family: 'Cormorant Garamond', serif;
  font-size: 14px;
  color: var(--cream);
  opacity: 0.6;
  letter-spacing: 0.5px;
}

.lang-toggle {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 18px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: var(--cream);
  cursor: pointer;
  font-family: 'Cormorant Garamond', serif;
  font-size: 15px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.lang-toggle:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: var(--emas);
}

.lang-flag {
  font-size: 20px;
}

.lang-text {
  color: var(--emas);
}

.theme-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.theme-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 12px 8px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.theme-btn:hover {
  background: rgba(255, 255, 255, 0.06);
}

.theme-btn.active {
  border-color: var(--emas);
  background: rgba(var(--emas-rgb), 0.08);
}

.theme-preview {
  display: flex;
  gap: 4px;
  border-radius: 6px;
  overflow: hidden;
}

.preview-color {
  width: 24px;
  height: 24px;
  border-radius: 4px;
}

.theme-name {
  font-family: 'Cormorant Garamond', serif;
  font-size: 11px;
  color: var(--cream);
  opacity: 0.7;
  text-align: center;
  line-height: 1.2;
}

.theme-btn.active .theme-name {
  color: var(--emas);
  opacity: 1;
}

.settings-panel-enter-active {
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.settings-panel-leave-active {
  transition: all 0.25s ease-in;
}

.settings-panel-enter-from {
  opacity: 0;
}

.settings-panel-enter-from .settings-panel {
  transform: translateY(40px) scale(0.95);
}

.settings-panel-leave-to {
  opacity: 0;
}

.settings-panel-leave-to .settings-panel {
  transform: translateY(20px) scale(0.98);
}

@media (max-width: 640px) {
  .settings-wrapper {
    bottom: 80px;
    left: 16px;
  }

  .theme-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
  }

  .theme-btn {
    padding: 10px 6px;
  }
}
</style>
