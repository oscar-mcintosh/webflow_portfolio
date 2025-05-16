// https://nuxt.com/docs/api/configuration/nuxt-config
// import { defineNuxtConfig } from "nuxt";
import { resolve } from "path"

export default defineNuxtConfig({
  devtools: { enabled: true },
  alias: {
    "@": resolve(__dirname, "/")
  },

  modules: [
    '@pinia/nuxt',
    '@nuxtjs/sitemap'
  ],
  site: {
    url: 'https://twofortytwo.dev',
  },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'TwoFortyTwo Dev',
      meta: [
        { name: 'description', 
          content: 'Professional frontend web developer and Webflow expert based in Lincoln, NE. Specializing in responsive web design and custom development.'
        },
        { name: 'keywords', 
        content: 'Frontend Web Developer Lincoln NE, Webflow Developer Lincoln NE, Custom Web Development Lincoln, Responsive Web Design Lincoln NE'
      }

      ],
      link: [
        {
          
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css',
          defer: true
        }
      ],
      script: [
        {
          src: 'https://web3forms.com/client/script.js',
          async: true,
          defer: true
        }
      ]

    }
  },
  css: ['~/assets/css/main.css', '~/assets/css/style.css'],
  

  runtimeConfig: {
    public: {
      apiKey: process.env.API_KEY,
      apiUrl: process.env.API_URL,
      
      // Only include PostHog in production
      ...(process.env.NODE_ENV === 'production' ? {
        posthogPublicKey: 'phc_wq7R6qivBGL3eIK1Wh7ixkTvTuCTjOV9GjVMMyKQFp1',
        posthogHost: "https://us.i.posthog.com"
      } : {})
    }
  },
  build: {
    transpile: ['gsap'],
  },


  
})
