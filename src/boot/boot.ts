import { boot } from 'quasar/wrappers'
import { authLogin, authLogout } from 'src/services/auth'
import { useUserStore } from 'src/stores/user'
import { api } from './axios'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ store }) => {
  const userStore = useUserStore(store)
  try {
    const check = await api.get('/auth/check')
    userStore.setUserData(check.data)
    authLogin()
  } catch (error) {
    authLogout()
  }
})
