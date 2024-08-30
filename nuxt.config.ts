import vuetify from 'vite-plugin-vuetify';

export default defineNuxtConfig({
  ssr: false,
  sourcemap: false,

  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) =>
        // @ts-expect-error
        config.plugins.push(
          vuetify({
            // treeShake: true,
            autoImport: { labs: true },
          })
        )
      );
    },
    '@pinia/nuxt',
    '@vueuse/nuxt',
  ],

  build: {
    transpile: ['vuetify'],
  },

  compatibilityDate: '2024-08-30',
})