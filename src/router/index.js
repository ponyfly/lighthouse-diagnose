import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: () => import('../views/Home') },
    { path: '/about', component: () => import('../views/About') },

  ]
})

export default router
