import { createGtm } from '@gtm-support/vue-gtm'
import { boot } from 'quasar/wrappers'

export default boot(async ({ app, router }) => {
  app.use(
    createGtm({
      id: 'GTM-PNZZFQF',
      vueRouter: router
    })
  )
})
