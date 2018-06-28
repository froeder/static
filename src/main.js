import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import VeeValidate from 'vee-validate'
import 'vuetify/dist/vuetify.min.css'
import './registerServiceWorker'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false
Vue.use(VeeValidate)
Vue.use(Vuetify)
Vue.use(require('vue-moment'));

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')