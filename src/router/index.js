import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('../pages/MainPage/MainPage')
  }
]

const router = new VueRouter({
  routes
})

export default router
