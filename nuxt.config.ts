const isDev = process.env.NODE_ENV !== 'production';
const currentDate = new Date();
const timestamp = currentDate.getTime();

export default defineNuxtConfig({
  app: {
    baseURL: '/',
    buildAssetsDir: 'assets'
  },
  experimental: {
    payloadExtraction: false
  },
  nitro: {
    inlineDynamicImports: true
  },
  runtimeConfig: {
    // The private keys which are only available within server-side
    timestamp,
    // Keys within public, will be also exposed to the client-side
    public: {
      timestamp
    }
  },
  vite: {
    resolve: {
      alias: {
        'vue-i18n': 'vue-i18n/dist/vue-i18n.esm-bundler.js',
      },
    },
  },
  // debug: true,
  modules: [
    [
      '@nuxtjs/i18n',
      {
        vueI18n: './i18n.config.ts',
        locale: 'en',
        defaultLocale: 'en',
        lazy: true,
        debug: false,
        langDir: 'lang',
        // compilation: {
        //   jit: false
        // },
        bundle: {
          runtimeOnly: false,
        },
        experimental: {

        },
        locales: [
          {
            code: 'en',
            iso: 'en-US',
            file: 'en.json'
          },
          {
            code: 'ru',
            iso: 'ru-RU',
            file: 'ru.json'
          },
          {
            code: 'de',
            iso: 'de-DE',
            file: 'de.json'
          }
        ],
      }
    ],
  ],

  devtools: {
    enabled: false,
  },
})
