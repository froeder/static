import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: null,
        uploading: false
    },

    actions: {
        async ['REGISTER'](context, userData) {
            return await axios.post('api/auth/register', userData)
        },
        async ['LOGIN']({commit}, credentials) {
            const token = await axios.post('api/auth/login', credentials)
            commit('SET_TOKEN', token)
        },
        async ['UPLOAD_FILE'](context, formData) {
            const {data} = await axios.post('api/files', formData)
            return data
        }
    },

    mutations: {
        ['SET_TOKEN'](state, token) {
            state.token = token
        }
    }
})
