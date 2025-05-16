import { defineNuxtPlugin } from '#app'
import posthog from 'posthog-js'
export default defineNuxtPlugin(nuxtApp => {
  const runtimeConfig = useRuntimeConfig();
  
  // Only initialize PostHog in production
  if (process.env.NODE_ENV === 'production') {
    const posthogClient = posthog.init(runtimeConfig.public.posthogPublicKey, {
      api_host: runtimeConfig.public.posthogHost || 'https://app.posthog.com',
      capture_pageview: false,
      loaded: (posthog) => {
        if (import.meta.env.MODE === 'development') posthog.debug();
      }
    });

    // Make sure that pageviews are captured with each route change
    const router = useRouter();
    router.afterEach((to) => {
      nextTick(() => {
        posthog.capture('$pageview', {
          current_url: to.fullPath
        });
      });
    });

    return {
      provide: {
        posthog: () => posthogClient
      }
    }
  } else {
    // Return a mock posthog client for development
    return {
      provide: {
        posthog: () => ({
          capture: () => {},
          identify: () => {},
          reset: () => {}
        })
      }
    }
  }
})