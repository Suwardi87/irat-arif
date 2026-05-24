import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

const DEFAULT_INVITATION_SLUG = 'asratul-fitri'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: `/${DEFAULT_INVITATION_SLUG}`
  },
  {
    path: '/:slug',
    name: 'invitation',
    component: () => import('@/views/InvitationView.vue'),
    meta: {
      title: 'The Wedding of Asratul Fitri & Arif',
      description: 'Undangan Pernikahan Asratul Fitri & Arif Hidayatulah'
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
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0, behavior: 'smooth' }
  }
})

router.beforeEach((to, _from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title as string
  }
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
