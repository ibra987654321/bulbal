import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('../pages/MainPage/MainPage')
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('../pages/DetailPage/DetailPage')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../pages/ProfilePage/ProfilePage')
  },
  {
    path: '/profile-settings',
    name: 'profile-settings',
    component: () => import('../pages/ProfileEditPage/ProfileEditPage')
  },
]

const router = new VueRouter({
  routes
})

export default router
