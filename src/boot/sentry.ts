import { BrowserTracing } from '@sentry/tracing'
import * as Sentry from '@sentry/vue'

import { boot } from 'quasar/wrappers'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(({ app, router }) => {
  if (process.env.NODE_ENV === 'production') {
    Sentry.init({
      app,
      dsn: 'https://db124b9ff66641e7acbeec05fc3c720f@o78498.ingest.sentry.io/4505541940936704',
      integrations: [
        new BrowserTracing({
          routingInstrumentation: Sentry.vueRouterInstrumentation(router),
          tracePropagationTargets: ['localhost', 'sandbox.thelaundrylady.au', 'app.thelaundrylady.au', 'app.thelaundrylady.nz', /^\//]
        })
      ],
      // Set tracesSampleRate to 1.0 to capture 100%
      // of transactions for performance monitoring.
      // We recommend adjusting this value in production
      tracesSampleRate: 0
    })
  }
})
