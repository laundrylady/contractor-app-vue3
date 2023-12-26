import { EventBus } from 'quasar'
import { LooseObject } from 'src/contracts/LooseObject'

const useMixinDebug = (error:LooseObject, bus:EventBus|undefined = undefined) => {
  // 404
  if (error.response && error.response.status && error.response.status === 404) {
    document.location = '/portal/error404'
    return
  }
  // Authentication
  if (error.response && error.response.status && error.response.status === 401) {
    document.location = '/portal/auth/signin'
    return
  }
  // CSRF
  if (error.response && error.response.status && error.response.status === 403) {
    if (error.response.data && (error.response.data.error === 'E_BAD_CSRF_TOKEN' || error.response.data.code === 'E_BAD_CSRF_TOKEN') && bus) {
      bus.emit('showValidationsModal', [{ field: 'Security Token', message: 'Your form session has expired. Click refresh to obtain a new security token and try again.' }])
    }
    return
  }
  if (error.response && error.response.status === 422 && bus) {
    bus.emit('showValidationsModal', error.response.data.errors)
  }
  // Authentication & General
  if (error.response && error.response.status && error.response.status === 500) {
    if (error.response.data) {
      if (error.response.data.name === 'AuthenticationException') {
        document.location = '/portal/auth/signin'
        return
      }
    }
    console.log(error)
  }
  console.log(error)
}
export { useMixinDebug }
