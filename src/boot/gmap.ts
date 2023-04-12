import VueGoogleMaps from 'vue-google-maps-community-fork'
import { boot } from 'quasar/wrappers'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {
  app.use(VueGoogleMaps, {
    load: {
      key: 'AIzaSyBUK5yMK5Zdz9MOUbzam56ORuFexFBMk-g'
    }
  })
})
