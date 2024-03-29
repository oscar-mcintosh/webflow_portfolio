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
  ],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      title: 'My Portfolio',
      meta: [
        { name: 'description', 
          content: 'Experienced, Webflow, Frontend Web Developer in Lincoln, Nebraska, crafting engaging online experiences. Transforming designs into seamless, responsive websites. Let\'s bring your digital vision to life! Contact me for expert frontend development.'
        }
      ],
      link: [
        {
          
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css'
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
  css: ['~/assets/css/main.css'],

  runtimeConfig: {

    public: {
      // API_BEARER_TOKEN: process.env.VUE_APP_API_BEARER_TOKEN,
      // API: process.env.VUE_APP_API,

      apiKey: process.env.API_KEY,
      apiUrl: process.env.API_URL,
      
      posthogPublicKey: 'phc_wq7R6qivBGL3eIK1Wh7ixkTvTuCTjOV9GjVMMyKQFp1',
      posthogHost: "https://us.posthog.com"

    }
  },
  build: {
    transpile: ['gsap'],
  },


  
})
