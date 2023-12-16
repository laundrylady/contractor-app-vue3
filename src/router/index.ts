import { route } from 'quasar/wrappers'
import { authCheck } from 'src/services/auth'
import { useUserStore } from 'src/stores/user'
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory
} from 'vue-router'

import routes from './routes'

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : (process.env.VUE_ROUTER_MODE === 'history' ? createWebHistory : createWebHashHistory)

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE)
  })

  Router.beforeEach((to, from, next) => {
    // check for auth
    if (to.meta.auth && !authCheck() && to.name !== 'signIn') {
      next({ name: 'signIn' })
      return false
    }
    // check for tfa
    if (to.meta.auth && authCheck() && to.name !== 'tfaSetup' && to.name !== 'tfaSms') {
      const store = useUserStore()
      if (!store.data || (store.data && !store.data.tfa_ok)) {
        if (store.data && !store.data.tfa_method) {
          next({ name: 'tfaSetup' })
          return false
        }
        if (store.data && store.data.tfa_method) {
          next({ name: 'tfaSms' })
          return false
        }
      }
    }
    if (to.meta.title) {
      document.title = to.meta.title.toString()
    }
    next()
  })

  Router.onError((error) => {
    if (
      error.message.includes('Failed to fetch dynamically imported module') ||
      error.message.includes('Importing a module script failed')
    ) {
      console.log('File component hash not found - reloading')
      window.location.reload()
    }
  })

  return Router
})
