import 'vuetify/styles';
import '@mdi/font/css/materialdesignicons.css';

import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import colors from 'vuetify/util/colors';

// example: https://github.com/Pinegrow/pg-nuxt-vuetify-tailwindcss/blob/main/vuetify.config.ts
const config = createVuetify({
  theme: {
    defaultTheme: 'dark',
    themes: {
      light: {
        dark: false,
        colors: {
          surface: '#fff',
          'surface-variant': '#5f5f5f',
          primary: '#3c61af', // colors.blue.darken2,
          accent: '#ff6142',
          secondary: colors.blueGrey.darken1,
          info: colors.lightBlue.darken1,
          warning: colors.amber.darken2,
          success: colors.green.base,
          error: `#ff2c2c`,
          grey: colors.grey.base,
          background: '#ebebeb',
          scroll: '#ccc',
        },
      },
    },
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi },
  },
  display: {
    mobileBreakpoint: 'xs',
    thresholds: {
      xs: 0,
      sm: 960,
      md: 1400,
      lg: 1600,
      xl: 1900
    },
  },
  defaults: {
    // VIcon: {
    //   size: '24',
    // },
    VBtn: {
      variant: 'flat',
    },
    VChip: {
      variant: 'flat',
      size: 'small',
    },
    VOutlinedChip: {
      variant: 'outlined',
      size: 'small',
      color: 'current',
      class: 'border',
    },
    VTabs: {
      color: 'primary',
    },
    VSwitch: {
      density: 'compact',
      color: 'primary',
    },
    VCheckboxBtn: {
      color: 'primary',
    },
    VTextField: {
      variant: 'outlined',
      density: 'compact',
    },
    VNumberInput: {
      variant: 'outlined',
      density: 'compact',
      controlVariant: 'stacked',
    },
    InlineIconBtn: {
      size: 'x-small',
      variant: 'text',
      icon: true,
      style: 'margin-block: -2px',
      VIcon: {
        size: '16',
      },
    },
  },
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(config);
});
