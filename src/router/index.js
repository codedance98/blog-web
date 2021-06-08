import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/index.vue'),
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/d/:year/:month/:date/:title',
    name: 'd',
    component: () => import('@/views/detail.vue')
  },
  {
    path: '/b/',
    name: 'index',
    component: () => import('@/views/index.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
