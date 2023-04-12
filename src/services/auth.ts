const authCheck = () => {
  return sessionStorage.getItem('auth')
}
const authLogin = () => {
  sessionStorage.setItem('auth', 'true')
}
const authLogout = () => {
  sessionStorage.removeItem('auth')
}
export { authCheck, authLogin, authLogout }
