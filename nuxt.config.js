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
      title: 'My Portfolio',
      meta: [
        { name: 'description', 
          content: 'Experienced, Webflow, Frontend Web Developer in Lincoln, Nebraska, crafting engaging online experiences. Transforming designs into seamless, responsive websites. Let\'s bring your digital vision to life! Contact me for expert frontend development.'
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
  css: ['~/assets/css/main.css'],

  runtimeConfig: {

    public: {
      // API_BEARER_TOKEN: process.env.VUE_APP_API_BEARER_TOKEN,
      // API: process.env.VUE_APP_API,

      apiKey: process.env.API_KEY,
      apiUrl: process.env.API_URL,
      
      posthogPublicKey: process.env.POST_KEY,
      posthogHost: process.env.POST_URL,

    }
  },
  build: {
    transpile: ['gsap'],
  },


  
})
