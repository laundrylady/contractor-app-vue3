import { boot } from 'quasar/wrappers'
import { authLogin, authLogout } from 'src/services/auth'
import { useCommonStore } from 'src/stores/common'
import { useUserStore } from 'src/stores/user'
import { api } from './axios'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ store }) => {
  const commonStore = useCommonStore(store)
  const userStore = useUserStore(store)
  try {
    const common = await api.get('/common')
    commonStore.setCommonData(common.data)
    const check = await api.get('/auth/check')
    userStore.setUserData(check.data)
    authLogin()
  } catch (error) {
    authLogout()
  }
})
