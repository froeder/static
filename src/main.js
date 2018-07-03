import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import uniqueEmail from './validators/uniqueEmail'
import VeeValidate, {Validator} from 'vee-validate'
import ptBR from 'vee-validate/dist/locale/pt_BR'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Validator.localize('pt_BR', ptBR)

Validator.extend('unique', {
    validate: uniqueEmail,
    getMessage: (field, params, data) => {
        return data.message
    }
})

Vue.config.productionTip = false
Vue.use(VeeValidate)
Vue.use(Vuetify)
Vue.use(require('vue-moment'))

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
