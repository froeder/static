import Vue from 'vue'
import axios from 'axios'

const loadingPlugin = {

    install(Vue) {

        axios.interceptors.request.use(config => {
            return config
        })

        axios.interceptors.response.use(response => {
            return response
        })

        Vue.prototype.$errorHandler = ()=>{

        }
    }

}

Vue.use(loadingPlugin)
