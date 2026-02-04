// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxtjs/color-mode'
  ],

  css: ['~/assets/css/main.css'],

  nitro: {
    routeRules: {
      // Make JSON edits reflect immediately on refresh
      '/data/**': {
        headers: {
          'cache-control': 'no-store'
        }
      }
    }
  },

  colorMode: {
    classSuffix: '',
    preference: 'dark',
    fallback: 'dark'
  },

  app: {
    head: {
      title: 'My Portfolio',
      meta: [
        { name: 'description', content: 'Professional portfolio showcasing my work and skills' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap' },
        { rel: 'icon', type: 'image/png', href: '/qhlogo.png' }
      ]
    }
  }
})
