import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: null
    },

    actions: {
        async ['SAVE_USER'](context, userData) {
            return await axios.post('api/auth/register', userData)
        },
        async ['LOGIN']({commit}, credentials) {
            const token = await axios.post('api/auth/login', credentials)
            commit('SET_LOGGED_USER', token)
        }
    },

    mutations: {
        ['SET_LOGGED_USER'](state, token) {
            state.token = token
        }
    }
})
