import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import events from './events'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: null,
        loading: false,
        fileUploadProgress: 0,
        user_logged: ''
    },

    actions: {
        async [events.actions.REGISTER](context, userData) {
            return await axios.post('api/auth/register', userData)
        },
        async [events.actions.COMPLETE_REGISTER](context, userData) {
            return await axios.post('api/organization/register', userData)
        },
        async [events.actions.LOGIN]({commit}, credentials) {
            const {data} = await axios.post('api/auth/login', credentials)
            commit(events.mutations.SET_TOKEN, data.token)
            this.state.user_logged = credentials.email
        },
        async [events.actions.UPLOAD_FILE]({commit}, formData) {
            const onUploadProgress = (progressEvent) => {
                const progress = parseInt(Math.round((progressEvent.loaded * 100) / progressEvent.total))
                commit(events.mutations.SET_FILE_UPLOAD_PROGRESS, progress)
            }
            const options = {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                onUploadProgress: onUploadProgress
            }

            try {
                commit(events.mutations.SET_LOADING)
                commit(events.mutations.SET_FILE_UPLOAD_PROGRESS, 0)
                const {data} = await axios.post('api/files', formData, options)
                commit(events.mutations.SET_UNLOADING)
                return data
            } catch (err) {
                commit(events.mutations.SET_FILE_UPLOAD_PROGRESS, 0)
                commit(events.mutations.SET_UNLOADING)
                throw err
            }
        },
        async [events.actions.GET_FILES](context, formData) {
            return await axios.post('/api/files/:filename', formData)
        },
    },

    mutations: {
        [events.mutations.SET_TOKEN](state, token) {
            state.token = token
        },
        [events.mutations.SET_FILE_UPLOAD_PROGRESS](state, progress) {
            state.fileUploadProgress = progress
        },
        [events.mutations.SET_LOADING](state) {
            state.loading = true
        },
        [events.mutations.SET_UNLOADING](state) {
            state.loading = false
        }
    }
})
