import axios, { AxiosInstance } from 'axios'
import moment from 'moment-timezone'
import { boot } from 'quasar/wrappers'
import { useUserStore } from 'src/stores/user'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $axios: AxiosInstance;
  }
}

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create({
  baseURL: '/api',
  xsrfCookieName: 'XSRF-TOKEN',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Cache-Control': 'no-cache',
    'If-Modified-Since': '0',
    Tz: sessionStorage.getItem('timezone') || moment.tz.guess()
  }
})
const userStore = useUserStore()
api.interceptors.response.use((response) => {
  userStore.setLastRequest(moment())
  return response
})

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
})

export { api }
