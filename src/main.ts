import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components'
import { VDataTable } from 'vuetify/labs/VDataTable'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
import { aliases, md } from 'vuetify/iconsets/md'

import App from './App.vue'
import router from './router'

const app = createApp(App)
const vuetify = createVuetify({
  components: {
    ...components,
    VDataTable,
  },
  directives,
  theme: {
    defaultTheme: 'dark'
  },
  icons: {
    defaultSet: 'md',
    aliases,
    sets: {
      md,
    },
  },
})

app.use(createPinia())
app.use(vuetify)
app.use(router)

app.mount('#app')
