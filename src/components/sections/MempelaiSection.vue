<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

defineProps<{
  bride: {
    fullName: string
    nickname: string
    title?: string
    fatherName: string
    motherName: string
    photo?: string
  }
  groom: {
    fullName: string
    nickname: string
    title?: string
    fatherName: string
    motherName: string
    photo?: string
  }
  couplePhoto?: string
}>()

const isVisible = ref(false)
let observer: IntersectionObserver | null = null

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) isVisible.value = true
      })
    },
    { threshold: 0.15 }
  )
  const el = document.getElementById('section-mempelai')
  if (el) observer!.observe(el)
})

onUnmounted(() => observer?.disconnect())
</script>

<template>
  <section id="section-mempelai" data-section class="section-mempelai scroll-reveal" :class="{ visible: isVisible }" aria-label="Profil Mempelai">
    <div class="section-content">
      <div class="section-title">
        <img src="/images/couples/cropped_assets/asset_23.png" alt="" class="title-floral" loading="lazy" />
        <h2>Mempelai</h2>
        <div class="title-underline"></div>
      </div>

      <p class="mempelai-intro">
        Dengan memohon Rahmat dan Ridho Allah SWT, kami bermaksud menyelenggarakan pernikahan putra-putri kami:
      </p>



      <div class="mempelai-cards">
        <div class="mempelai-card groom-card">
          <div class="card-character">
            <img src="/images/couples/cropped_assets/asset_1.png" alt="Mempelai Pria" class="character-img" loading="lazy" />
          </div>
          <div class="card-body">
            <h3 class="mempelai-name">{{ groom.fullName }}</h3>
            <p v-if="groom.title" class="mempelai-title">{{ groom.title }}</p>
            <div class="mempelai-parents">
              <p class="parents-label">Putra dari:</p>
              <p class="parents-name">Bpk. {{ groom.fatherName }} & Ibu {{ groom.motherName }}</p>
            </div>
          </div>
        </div>

        <div class="card-divider">
          <div class="divider-line"></div>
          <img src="/images/couples/cropped_assets/asset_15.png" alt="" class="divider-monogram" loading="lazy" />
          <div class="divider-line"></div>
        </div>

        <div class="mempelai-card bride-card">
          <div class="card-character">
            <img src="/images/couples/cropped_assets/asset_5.png" alt="Mempelai Wanita" class="character-img" loading="lazy" />
          </div>
          <div class="card-body">
            <h3 class="mempelai-name">{{ bride.fullName }}</h3>
            <p v-if="bride.title" class="mempelai-title">{{ bride.title }}</p>
            <div class="mempelai-parents">
              <p class="parents-label">Putri dari:</p>
              <p class="parents-name">Bpk. {{ bride.fatherName }} & Ibu {{ bride.motherName }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.section-content {
  max-width: 900px;
  margin: 0 auto;
  padding: 80px 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-title {
  margin-bottom: 40px;
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

.mempelai-intro {
  font-family: 'Cormorant Garamond', serif;
  font-size: 18px;
  color: var(--cream);
  opacity: 0.9;
  max-width: 700px;
  margin: 0 auto 50px;
  line-height: 1.8;
  text-align: center;
}

.couple-frame {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  margin-bottom: 60px;
}

.frame-border {
  position: absolute;
  inset: 0;
  border: 2px solid rgba(var(--emas-rgb), 0.3);
  border-radius: 16px;
  box-shadow: 0 0 40px rgba(var(--emas-rgb), 0.08), inset 0 0 40px rgba(var(--emas-rgb), 0.04);
}

.corner {
  position: absolute;
  width: 70px;
  opacity: 0.6;
  pointer-events: none;
  z-index: 2;
}
.tl { top: -16px; left: -16px; }
.tr { top: -16px; right: -16px; }
.bl { bottom: -16px; left: -16px; transform: scaleY(-1); }
.br { bottom: -16px; right: -16px; transform: scale(-1); }

.couple-photo {
  max-height: 380px;
  width: auto;
  position: relative;
  z-index: 1;
  filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.4));
}

.mempelai-cards {
  display: flex;
  align-items: stretch;
  gap: 0;
  width: 100%;
  justify-content: center;
}

.mempelai-card {
  flex: 1;
  max-width: 340px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 28px 20px;
  background: linear-gradient(135deg, rgba(var(--emas-rgb), 0.1), rgba(var(--emas-rgb), 0.04));
  border: 1px solid rgba(var(--emas-rgb), 0.2);
  border-radius: 16px;
  gap: 16px;
}

.card-character {
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(var(--emas-rgb), 0.08);
  border: 2px solid rgba(var(--emas-rgb), 0.2);
  overflow: hidden;
  flex-shrink: 0;
}

.character-img {
  width: 80%;
  height: 80%;
  object-fit: contain;
}

.groom-card .card-character {
  background: rgba(var(--merah-rgb), 0.08);
  border-color: rgba(var(--merah-rgb), 0.2);
}

.card-body {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.mempelai-name {
  font-family: 'Playfair Display', serif;
  font-size: 20px;
  color: var(--emas);
  margin-bottom: 6px;
  font-weight: 700;
}

.mempelai-title {
  font-size: 12px;
  color: var(--orange-bride);
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 12px;
}

.mempelai-parents {
  border-top: 1px solid rgba(var(--emas-rgb), 0.2);
  padding-top: 12px;
}

.parents-label {
  color: var(--cream);
  font-size: 13px;
  margin-bottom: 4px;
  opacity: 0.7;
  font-family: 'Cormorant Garamond', serif;
}

.parents-name {
  font-family: 'Cormorant Garamond', serif;
  font-size: 15px;
  color: var(--emas-light);
  font-weight: 600;
}

.card-divider {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 0 16px;
}

.divider-line {
  width: 1px;
  height: 40px;
  background: linear-gradient(180deg, transparent, var(--emas), transparent);
}

.divider-monogram {
  width: 30px;
  opacity: 0.6;
}

.scroll-reveal {
  opacity: 0;
  transform: translateY(60px);
  transition: all 1s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.scroll-reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 640px) {
  .couple-photo {
    max-height: 300px;
  }
  .couple-frame {
    padding: 28px;
  }
  .corner {
    width: 50px;
  }
  .mempelai-cards {
    flex-direction: column;
    gap: 16px;
  }
  .card-divider {
    flex-direction: row;
    padding: 8px 0;
  }
  .divider-line {
    width: 40px;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--emas), transparent);
  }
  .mempelai-card {
    max-width: 100%;
    flex-direction: row;
    text-align: left;
    align-items: center;
  }
  .card-body {
    align-items: flex-start;
  }
}
</style>
