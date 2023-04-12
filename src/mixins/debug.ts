import { LooseObject } from 'src/contracts/LooseObject'

const useMixinDebug = (error:LooseObject) => {
  // 404
  if (error.response && error.response.status && error.response.status === 404) {
    document.location = '/manager/error404'
    return
  }
  // Authentication
  if (error.response && error.response.status && error.response.status === 401) {
    document.location = '/manager/auth/signin'
    return
  }
  // Authentication & General
  if (error.response && error.response.status && error.response.status === 500) {
    if (error.response.data) {
      if (error.response.data.name === 'AuthenticationException') {
        document.location = '/manager/auth/signin'
        return
      }
    }
    console.log(error)
  }
}
export { useMixinDebug }
