const CACHE_NAME = 'wedding-v1'
const STATIC_ASSETS = [
  '/',
  '/asratul-fitri',
  '/data/invitations.json',
  '/manifest.json',
  '/images/bride-traditional.png',
  '/images/groom-traditional.png',
  '/images/bride-cartoon.svg',
  '/images/groom-cartoon.svg'
]

const FONT_CACHE = 'wedding-fonts-v1'
const IMAGE_CACHE = 'wedding-images-v1'
const DATA_CACHE = 'wedding-data-v1'

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS).catch(() => {})
    })
  )
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME && name !== FONT_CACHE && name !== IMAGE_CACHE && name !== DATA_CACHE)
          .map((name) => caches.delete(name))
      )
    })
  )
  self.clients.claim()
})

self.addEventListener('fetch', (event) => {
  const { request } = event
  const url = new URL(request.url)

  if (request.method !== 'GET') return

  if (url.origin !== self.location.origin) {
    if (url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com') {
      event.respondWith(cacheFirst(request, FONT_CACHE))
      return
    }
    return
  }

  if (url.pathname.startsWith('/data/')) {
    event.respondWith(networkFirst(request, DATA_CACHE))
    return
  }

  if (url.pathname.match(/\.(png|jpg|jpeg|svg|gif|webp|ico)$/)) {
    event.respondWith(cacheFirst(request, IMAGE_CACHE))
    return
  }

  if (url.pathname.match(/\.(js|css|woff2?)$/)) {
    event.respondWith(staleWhileRevalidate(request, CACHE_NAME))
    return
  }

  event.respondWith(networkFirst(request, CACHE_NAME))
})

async function cacheFirst(request, cacheName) {
  const cached = await caches.match(request)
  if (cached) return cached

  try {
    const response = await fetch(request)
    if (response.ok) {
      const cache = await caches.open(cacheName)
      cache.put(request, response.clone())
    }
    return response
  } catch {
    return new Response('', { status: 503 })
  }
}

async function networkFirst(request, cacheName) {
  try {
    const response = await fetch(request)
    if (response.ok) {
      const cache = await caches.open(cacheName)
      cache.put(request, response.clone())
    }
    return response
  } catch {
    const cached = await caches.match(request)
    if (cached) return cached
    if (request.headers.get('accept')?.includes('text/html')) {
      return caches.match('/')
    }
    return new Response('', { status: 503 })
  }
}

async function staleWhileRevalidate(request, cacheName) {
  const cached = await caches.match(request)
  const fetchPromise = fetch(request).then((response) => {
    if (response.ok) {
      const cache = caches.open(cacheName)
      cache.then((c) => c.put(request, response.clone()))
    }
    return response
  }).catch(() => cached)

  return cached || fetchPromise
}
