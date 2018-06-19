import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: null,
        loading: false,
        fileUploadProgress: 0
    },

    actions: {
        async ['REGISTER'](context, userData) {
            return await axios.post('api/auth/register', userData)
        },
        async ['LOGIN']({commit}, credentials) {
            const token = await axios.post('api/auth/login', credentials)
            commit('SET_TOKEN', token)
        },
        async ['UPLOAD_FILE']({commit}, formData) {
            const onUploadProgress = (progressEvent) => {
                const progress = parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total))
                commit('SET_FILE_UPLOAD_PROGRESS', progress)
            }
            const options = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                onUploadProgress: onUploadProgress
            }

            try {
                commit('SET_LOADING')
                commit('SET_FILE_UPLOAD_PROGRESS', 0)
                const {data} = await axios.post('api/files', formData, options)
                commit('SET_UNLOADING')
                return data
            } catch (err) {
                commit('SET_FILE_UPLOAD_PROGRESS', 0)
                commit('SET_UNLOADING')
                throw err
            }
        }
    },

    mutations: {
        ['SET_TOKEN'](state, token) {
            state.token = token
        },
        ['SET_FILE_UPLOAD_PROGRESS'](state, progress) {
            state.fileUploadProgress = progress
        },
        ['SET_LOADING'](state) {
            state.loading = true
        },
        ['SET_UNLOADING'](state) {
            state.loading = false
        }
    }
})
