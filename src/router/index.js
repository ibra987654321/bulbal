import Vue from 'vue'
import VueRouter from 'vue-router'
import {routes} from "@/router/pages";
import {getToken, removeToken} from "@/helpers/token";
import {decodeJWT} from "@/helpers/helpers";

Vue.use(VueRouter)


const router = new VueRouter({
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
if (getToken()) {
  const exp = decodeJWT().exp
  const cur = Math.floor(Date.now() / 1000)
  if (cur >= exp) {
    removeToken()
  }
}

router.beforeEach((to, from, next) => {
  const requireAuth = to.matched.some(record => record.meta.auth)
  const currentUser = getToken()

  if (requireAuth && !currentUser) {
    next('/')
  } else {
    next()
  }
})



export default router
