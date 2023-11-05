import { createApp } from "vue"
import App from "./App.vue"
import { clientRoutes } from "./modules/client/routes"
import "./style.css"
// Vuetify
import { createRouter, createWebHistory } from "vue-router"
import { createVuetify } from "vuetify"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"
import "vuetify/styles"
import { vuetifyPlugin } from "./config/vuetify"

const router = createRouter({
  history: createWebHistory(),
  routes: [...clientRoutes],
})

const vuetify = createVuetify({
  components,
  directives,
  ...vuetifyPlugin,
})

createApp(App).use(router).use(vuetify).mount("#app")
