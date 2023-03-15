/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import router from '@/router'

import { createI18n, useI18n } from 'vue-i18n'
import en from '../../locales/en.json'
import zhHant from '../../locales/zh-Hant.json'

const messages = {
  "en":en ,
  "zh-Hant":zhHant
}

const i18n = new createI18n({
  legacy: false, // Vuetify does not support the legacy mode of vue-i18n
  locale: 'zh-Hant',
  fallbackLocale: 'en',
  messages,
})

export function registerPlugins (app) {
  loadFonts()
  app.use(i18n)
    .use(vuetify)
    .use(router)
}
