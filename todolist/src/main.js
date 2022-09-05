import Vue from 'vue'
import App from './App.vue'
import router from './router'

import { BootstrapVue } from 'bootstrap-vue'

//para instalar os icones IconsPlugin adicionar no import acima dentro das {}

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin) PRECISAR SER ATIVDO PARA USAR ICONS

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
