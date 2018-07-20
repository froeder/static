import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import vuetifyPlugin from './plugins/vuetify'
import momentPlugin from './plugins/moment'
import validatorPlugin from './plugins/validator'

Vue.config.productionTip = false
Vue.use(vuetifyPlugin)
Vue.use(validatorPlugin)
Vue.use(momentPlugin)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
