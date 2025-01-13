// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    '@formkit/auto-animate'
  ],
  css:[
    '~/assets/main.css'
  ],
  googleFonts:{
    families:{
      'Plus Jakarta Sans': true,
    }
  },
  fonts: {
    families: [
      // do not resolve this font with any provider from `@nuxt/fonts`
      { name: 'Plus Jakarta Sans', provider: 'google' },
    ]
  }
})