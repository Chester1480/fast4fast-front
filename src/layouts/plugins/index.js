/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import router from '@/router'

import { createI18n } from 'vue-i18n'
import en from '../../locales/en.json'
import zhHant from '../../locales/zhHant.json'

const messages = {
  "en":en ,
  "zhHant":zhHant
}

const i18n = createI18n({
  silentFallbackWarn: true,
  locale:  'zhHant',
  messages, 
  globalInjection: true // 全域注入
})

export function registerPlugins (app) {
  loadFonts()
  app.use(i18n)
    .use(vuetify)
    .use(router)
}
