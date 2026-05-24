<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

interface Milestone {
  date: string
  title: string
  description: string
  icon: string
}

defineProps<{
  title: string
  milestones: Milestone[]
}>()

const sectionRef = ref<HTMLElement | null>(null)
const visibleItems = ref<Set<number>>(new Set())
let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Number((entry.target as HTMLElement).dataset.index)
          if (!isNaN(index)) {
            setTimeout(() => {
              visibleItems.value.add(index)
            }, index * 200)
          }
        }
      })
    },
    { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
  )

  const items = document.querySelectorAll('.story-item')
  items.forEach((item) => observer!.observe(item))
})

onUnmounted(() => observer?.disconnect())
</script>

<template>
  <section ref="sectionRef" id="section-story" class="story-section">
    <div class="story-content">
      <div class="section-title">
        <!-- <img src="/images/couples/cropped_assets/asset_23.png" alt="" class="title-floral" loading="lazy" /> -->
        <h2>{{ title }}</h2>
        <div class="title-underline"></div>
      </div>

      <div class="timeline">
        <div class="timeline-line">
          <div class="timeline-line-fill" :style="{ height: `${(visibleItems.size / milestones.length) * 100}%` }"></div>
        </div>

        <div
          v-for="(milestone, index) in milestones"
          :key="index"
          class="story-item"
          :data-index="index"
          :class="{ visible: visibleItems.has(index), 'is-left': index % 2 === 0, 'is-right': index % 2 !== 0 }"
        >
          <div class="story-connector">
            <div class="story-dot">
              <span class="dot-icon">{{ milestone.icon }}</span>
            </div>
          </div>

          <div class="story-card">
            <div class="card-glow"></div>
            <img src="/images/couples/cropped_assets/asset_12.png" alt="" class="card-floral" loading="lazy" />
            <div class="card-date">{{ milestone.date }}</div>
            <h3 class="card-title">{{ milestone.title }}</h3>
            <p class="card-desc">{{ milestone.description }}</p>
          </div>
        </div>

        <div class="timeline-end">
          <div class="end-heart">
            <span>💕</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.story-section {
  padding: 80px 20px;
  position: relative;
  overflow: hidden;
}

.story-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, transparent 0%, rgba(var(--emas-rgb), 0.03) 50%, transparent 100%);
  pointer-events: none;
}

.story-content {
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.section-title {
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title-floral {
  width: 40px;
  margin-bottom: 12px;
  opacity: 0.7;
}

.section-title h2 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(32px, 6vw, 48px);
  color: var(--emas);
  margin-bottom: 15px;
  font-weight: 700;
}

.title-underline {
  width: 80px;
  height: 3px;
  background: linear-gradient(90deg, transparent, var(--merah-minang), var(--emas), transparent);
}

.timeline {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0;
  padding-left: 40px;
}

.timeline-line {
  position: absolute;
  left: 14px;
  top: 0;
  bottom: 60px;
  width: 2px;
  background: rgba(var(--emas-rgb), 0.15);
}

.timeline-line-fill {
  width: 100%;
  background: linear-gradient(180deg, var(--emas), var(--merah-minang));
  transition: height 1s cubic-bezier(0.34, 1.56, 0.64, 1);
  border-radius: 2px;
}

.story-item {
  position: relative;
  display: flex;
  align-items: flex-start;
  gap: 30px;
  padding: 20px 0;
  opacity: 0;
  transform: translateX(-30px);
  transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.story-item.visible {
  opacity: 1;
  transform: translateX(0);
}

.story-item.is-right {
  flex-direction: row-reverse;
  transform: translateX(30px);
}

.story-item.is-right.visible {
  transform: translateX(0);
}

.story-connector {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 2;
}

.story-dot {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--charcoal), var(--surface));
  border: 2px solid var(--emas);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(var(--emas-rgb), 0.2);
  transition: all 0.4s ease;
  margin-left: -40px;
}

.story-item.visible .story-dot {
  box-shadow: 0 4px 25px rgba(var(--emas-rgb), 0.4);
  border-color: var(--emas-light);
}

.dot-icon {
  font-size: 22px;
}

.story-card {
  flex: 1;
  background: linear-gradient(135deg, rgba(var(--emas-rgb), 0.1), rgba(var(--emas-rgb), 0.04));
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 24px 28px;
  border: 1px solid rgba(var(--emas-rgb), 0.15);
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
}

.story-card:hover {
  border-color: rgba(var(--emas-rgb), 0.4);
  transform: translateY(-3px);
  box-shadow: 0 10px 40px rgba(var(--emas-rgb), 0.1);
}

.card-glow {
  position: absolute;
  width: 100px;
  height: 100px;
  background: radial-gradient(circle, rgba(var(--emas-rgb), 0.1), transparent);
  border-radius: 50%;
  top: -30px;
  right: -30px;
  pointer-events: none;
}

.card-floral {
  position: absolute;
  bottom: -10px;
  right: -10px;
  width: 70px;
  opacity: 0.15;
  pointer-events: none;
}

.card-date {
  font-family: 'Playfair Display', serif;
  font-size: 14px;
  color: var(--emas);
  font-weight: 700;
  letter-spacing: 2px;
  margin-bottom: 8px;
  text-transform: uppercase;
}

.card-title {
  font-family: 'Playfair Display', serif;
  font-size: 20px;
  color: var(--cream);
  font-weight: 700;
  margin-bottom: 10px;
}

.card-desc {
  font-family: 'Cormorant Garamond', serif;
  font-size: 15px;
  color: var(--cream);
  opacity: 0.75;
  line-height: 1.7;
}

.timeline-end {
  display: flex;
  justify-content: center;
  padding: 20px 0 0;
  margin-left: -40px;
}

.end-heart {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--merah-minang), var(--merah-dark));
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--emas);
  box-shadow: 0 4px 20px rgba(var(--merah-rgb), 0.3);
  animation: heartPulse 2s ease-in-out infinite;
}

.end-heart span {
  font-size: 22px;
}

@keyframes heartPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

@media (max-width: 768px) {
  .timeline {
    padding-left: 30px;
  }

  .timeline-line {
    left: 11px;
  }

  .story-item {
    flex-direction: row !important;
    gap: 20px;
    transform: translateX(-20px);
  }

  .story-item.is-right {
    transform: translateX(-20px);
  }

  .story-item.visible {
    transform: translateX(0);
  }

  .story-item.is-right.visible {
    transform: translateX(0);
  }

  .story-dot {
    width: 46px;
    height: 46px;
    margin-left: -30px;
  }

  .dot-icon {
    font-size: 18px;
  }

  .story-card {
    padding: 20px;
  }

  .card-title {
    font-size: 18px;
  }

  .timeline-end {
    margin-left: -30px;
  }

  .end-heart {
    width: 46px;
    height: 46px;
  }
}

@media (max-width: 480px) {
  .story-section {
    padding: 60px 12px;
  }

  .story-card {
    padding: 16px;
  }

  .card-desc {
    font-size: 14px;
  }

  .card-floral {
    width: 50px;
  }
}
</style>
