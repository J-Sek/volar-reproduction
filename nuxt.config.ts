export default defineNuxtConfig({
  ssr: false,
  sourcemap: false,

  modules: [
    '@pinia/nuxt',
    '@vueuse/nuxt',
  ],

  compatibilityDate: '2024-08-30',
})