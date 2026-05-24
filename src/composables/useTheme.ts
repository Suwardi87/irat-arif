import { ref, watchEffect } from 'vue'

export interface ThemeColors {
  primary: string
  primaryLight: string
  primaryDark: string
  accent: string
  accentDark: string
  accentLight: string
  bg: string
  bgGradient: string
  cardBg: string
  cardBorder: string
  text: string
  textMuted: string
  orangeBride: string
  creamLight: string
  surface: string
  surfaceDark: string
}

export interface Theme {
  id: string
  name: string
  colors: ThemeColors
}

function hexToRgb(hex: string): string {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `${r}, ${g}, ${b}`
}

const themes: Record<string, Theme> = {
  'elegant-gold': {
    id: 'elegant-gold',
    name: 'Elegant Gold',
    colors: {
      primary: '#C9A86A',
      primaryLight: '#D8C8B0',
      primaryDark: '#8A6B4F',
      accent: '#B07060',
      accentDark: '#8A5248',
      accentLight: '#C89080',
      bg: '#12100E',
      bgGradient: 'linear-gradient(180deg, #1A1610 0%, #0C0B08 100%)',
      cardBg: 'rgba(201,168,106,0.08)',
      cardBorder: 'rgba(201,168,106,0.25)',
      text: '#E8E0D1',
      textMuted: 'rgba(232,224,209,0.6)',
      orangeBride: '#8A6B4F',
      creamLight: '#F2EDE5',
      surface: '#221E18',
      surfaceDark: '#181410'
    }
  },
  'sage-green': {
    id: 'sage-green',
    name: 'Sage Garden',
    colors: {
      primary: '#8fbc8f',
      primaryLight: '#b4d7b4',
      primaryDark: '#6a9a6a',
      accent: '#c9a96e',
      accentDark: '#a08040',
      accentLight: '#dfc08a',
      bg: '#1a1f1a',
      bgGradient: 'linear-gradient(180deg, #1f2a1f 0%, #0f150f 100%)',
      cardBg: 'rgba(143,188,143,0.08)',
      cardBorder: 'rgba(143,188,143,0.2)',
      text: '#e8f0e8',
      textMuted: 'rgba(232,240,232,0.7)',
      orangeBride: '#a8c4a8',
      creamLight: '#f5faf5',
      surface: '#202a20',
      surfaceDark: '#182018'
    }
  },
  'blush-rose': {
    id: 'blush-rose',
    name: 'Blush Rose',
    colors: {
      primary: '#d4a0a0',
      primaryLight: '#e8c4c4',
      primaryDark: '#b07878',
      accent: '#c41e3a',
      accentDark: '#8b1a2d',
      accentLight: '#e86080',
      bg: '#1a1418',
      bgGradient: 'linear-gradient(180deg, #221a1f 0%, #120e10 100%)',
      cardBg: 'rgba(212,160,160,0.08)',
      cardBorder: 'rgba(212,160,160,0.2)',
      text: '#f5eef0',
      textMuted: 'rgba(245,238,240,0.7)',
      orangeBride: '#c49090',
      creamLight: '#faf5f7',
      surface: '#2a2024',
      surfaceDark: '#1f181c'
    }
  },
  'royal-blue': {
    id: 'royal-blue',
    name: 'Royal Blue',
    colors: {
      primary: '#4a90d9',
      primaryLight: '#7bb3e8',
      primaryDark: '#2d6ab0',
      accent: '#d4af37',
      accentDark: '#b8952d',
      accentLight: '#f0d890',
      bg: '#0d1520',
      bgGradient: 'linear-gradient(180deg, #121e30 0%, #080e18 100%)',
      cardBg: 'rgba(74,144,217,0.08)',
      cardBorder: 'rgba(74,144,217,0.2)',
      text: '#e8f0f8',
      textMuted: 'rgba(232,240,248,0.7)',
      orangeBride: '#7aaad0',
      creamLight: '#f5f7fa',
      surface: '#1a2535',
      surfaceDark: '#121c2a'
    }
  },
  'earthy-warm': {
    id: 'earthy-warm',
    name: 'Earthy Warm',
    colors: {
      primary: '#c8956c',
      primaryLight: '#ddb896',
      primaryDark: '#a07548',
      accent: '#6b8f71',
      accentDark: '#4a6b50',
      accentLight: '#8cb894',
      bg: '#1a1614',
      bgGradient: 'linear-gradient(180deg, #221e1a 0%, #100e0c 100%)',
      cardBg: 'rgba(200,149,108,0.08)',
      cardBorder: 'rgba(200,149,108,0.2)',
      text: '#f0e8e0',
      textMuted: 'rgba(240,232,224,0.7)',
      orangeBride: '#b88060',
      creamLight: '#faf7f5',
      surface: '#2a2420',
      surfaceDark: '#1f1a15'
    }
  }
}

const THEME_VERSION = 2
const storedVersion = parseInt(localStorage.getItem('wedding-theme-version') || '1', 10)
if (storedVersion < THEME_VERSION) {
  localStorage.removeItem('wedding-theme')
  localStorage.setItem('wedding-theme-version', String(THEME_VERSION))
}

const currentThemeId = ref(localStorage.getItem('wedding-theme') || 'elegant-gold')

function applyTheme(theme: Theme) {
  const root = document.documentElement
  const c = theme.colors

  root.style.setProperty('--emas', c.primary)
  root.style.setProperty('--emas-light', c.primaryLight)
  root.style.setProperty('--emas-dark', c.primaryDark)
  root.style.setProperty('--emas-rgb', hexToRgb(c.primary))
  root.style.setProperty('--merah-minang', c.accent)
  root.style.setProperty('--merah-dark', c.accentDark)
  root.style.setProperty('--merah-rgb', hexToRgb(c.accent))
  root.style.setProperty('--charcoal', c.bg)
  root.style.setProperty('--bg-gradient', c.bgGradient)
  root.style.setProperty('--cream', c.text)
  root.style.setProperty('--cream-rgb', hexToRgb(c.text))
  root.style.setProperty('--cream-light', c.creamLight)
  root.style.setProperty('--card-bg', c.cardBg)
  root.style.setProperty('--card-border', c.cardBorder)
  root.style.setProperty('--text-muted', c.textMuted)
  root.style.setProperty('--orange-bride', c.orangeBride)
  root.style.setProperty('--surface', c.surface)
  root.style.setProperty('--surface-dark', c.surfaceDark)
}

export function useTheme() {
  const currentTheme = ref<Theme>(themes[currentThemeId.value])
  const availableThemes = Object.values(themes)

  function setTheme(themeId: string) {
    if (themes[themeId]) {
      currentThemeId.value = themeId
      currentTheme.value = themes[themeId]
      localStorage.setItem('wedding-theme', themeId)
    }
  }

  watchEffect(() => {
    applyTheme(currentTheme.value)
  })

  return {
    currentTheme,
    availableThemes,
    setTheme,
    themeId: currentThemeId
  }
}
