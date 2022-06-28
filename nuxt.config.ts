import {defineNuxtConfig} from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  app: {
    head: {
      meta: [{name: 'viewport', content: 'width=device-width, initial-scale=1'}],
      script: [{src: './assets/js/index.js'}],
    },
  },
  router: {
    options: {
      linkActiveClass: 'active',
      linkExactActiveClass: 'active',
    },
  },
  css: ['@/assets/css/tailwind.css', '@/assets/css/index.css'],
})
