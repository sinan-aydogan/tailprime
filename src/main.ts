import './assets/main.sass'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import {i18n} from './locales'

import PrimeVue from "primevue/config";
import Asena from "./presets/asena/index";
import StyleClass from "primevue/styleclass";

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.directive("styleclass", StyleClass);
app.use(PrimeVue, {
  unstyled: true,
  pt: Asena
});

app.mount('#app')
