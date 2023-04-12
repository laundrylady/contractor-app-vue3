import * as Sentry from '@sentry/vue'
import { BrowserTracing } from '@sentry/tracing'

import { boot } from 'quasar/wrappers'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(({ app, router }) => {
  if (process.env.NODE_ENV === 'production') {
    Sentry.init({
      app,
      dsn: 'https://e57a61f71dfa45438d5feb0581d51a5d@o78498.ingest.sentry.io/4504883920961536',
      // This sets the sample rate to be 10%. You may want this to be 100% while
      // in development and sample at a lower rate in production
      replaysSessionSampleRate: 1.0,
      // If the entire session is not sampled, use the below sample rate to sample
      // sessions when an error occurs.
      replaysOnErrorSampleRate: 1.0,
      integrations: [
        new BrowserTracing({
          routingInstrumentation: Sentry.vueRouterInstrumentation(router),
          tracePropagationTargets: ['localhost', 'sandbox.thelaundrylady.com.au', 'app.thelaundrylady.com.au', /^\//]
        }),
        new Sentry.Replay()
      ],
      // Set tracesSampleRate to 1.0 to capture 100%
      // of transactions for performance monitoring.
      // We recommend adjusting this value in production
      tracesSampleRate: 1.0
    })
  }
})
