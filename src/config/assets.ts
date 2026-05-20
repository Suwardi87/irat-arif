/**
 * Placeholder Assets Configuration
 *
 * These are temporary placeholder images for development.
 * Replace with actual wedding photos in production.
 */

export const placeholderAssets = {
  // Couple photos
  couplePortrait: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80',
  coupleCloseup: 'https://images.unsplash.com/photo-1606214174585-fe31582dc6ee?w=800&q=80',

  // Prewedding photos
  prewedding1: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80',
  prewedding2: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80',
  prewedding3: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&q=80',
  prewedding4: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80',

  // Details images
  venue: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=800&q=80',
  ring: 'https://images.unsplash.com/photo-1605106702734-205df224ecce?w=800&q=80',
  flowers: 'https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=800&q=80',

  // Three.js textures
  goldParticle: 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/sprites/spark1.png'
}

export const demoMusic = '/music/wedding-piano.mp3'

/**
 * Get random placeholder image from Unsplash
 */
export function getRandomPlaceholder(category: 'wedding' | 'flowers' | 'venue' = 'wedding'): string {
  const weddingImages = [
    'https://images.unsplash.com/photo-1519741497674-611481863552',
    'https://images.unsplash.com/photo-1606214174585-fe31582dc6ee',
    'https://images.unsplash.com/photo-1606800052052-a08af7148866',
    'https://images.unsplash.com/photo-1511285560929-80b456fea0bc'
  ]

  const flowerImages = [
    'https://images.unsplash.com/photo-1487530811176-3780de880c2d',
    'https://images.unsplash.com/photo-1490750967868-88aa4486c946',
    'https://images.unsplash.com/photo-1468327768560-75b778cbb551'
  ]

  const venueImages = [
    'https://images.unsplash.com/photo-1519167758481-83f550bb49b3',
    'https://images.unsplash.com/photo-1519225421980-715cb0202128',
    'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3'
  ]

  const images = category === 'wedding' ? weddingImages
    : category === 'flowers' ? flowerImages
    : venueImages

  return images[Math.floor(Math.random() * images.length)]
}
