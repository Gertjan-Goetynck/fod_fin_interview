import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import 'fullpage.js/vendors/scrolloverflow' // Optional. When using scrollOverflow:true
import VueFullPage from 'vue-fullpage.js'


Vue.config.productionTip = false

Vue.use(VueFullPage);

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
