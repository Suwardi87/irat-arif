import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

/**
 * Vue Router configuration
 * Handles navigation between home page and invitation pages
 */

// Default invitation slug - change this to set the active invitation
const DEFAULT_INVITATION_SLUG = 'asratul-fitri'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    redirect: `/${DEFAULT_INVITATION_SLUG}`
  },
  {
    path: '/:slug',
    name: 'invitation',
    component: () => import('@/views/InvitationView.vue'),
    meta: {
      title: 'The Wedding of...',
      description: 'You are invited to our wedding celebration'
    },
    props: true
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/NotFoundView.vue'),
    meta: {
      title: '404 - Not Found'
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // If there's a saved position (browser back/forward), use it
    if (savedPosition) {
      return savedPosition
    }

    // If the route has a hash, scroll to the element
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
        top: 80 // Offset for fixed header
      }
    }

    // Default scroll to top
    return {
      top: 0,
      behavior: 'smooth'
    }
  }
})

/**
 * Navigation guard to update page title
 */
router.beforeEach((to, _from, next) => {
  // Update document title
  if (to.meta.title) {
    document.title = to.meta.title as string
  }

  // Update meta description
  const description = to.meta.description as string
  if (description) {
    let metaDescription = document.querySelector('meta[name="description"]')
    if (!metaDescription) {
      metaDescription = document.createElement('meta')
      metaDescription.setAttribute('name', 'description')
      document.head.appendChild(metaDescription)
    }
    metaDescription.setAttribute('content', description)
  }

  next()
})

export default router
