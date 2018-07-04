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
        fileUploadName: null,
        loggedUser: null,
        messageText: '',
        messageType: 'info'
    },

    actions: {
        async [events.actions.REGISTER](context, userData) {
            return await axios.post('auth/register', userData)
        },

        async [events.actions.COMPLETE_REGISTER](context, userData) {
            return await axios.post('api/organization/register', userData)
        },

        async [events.actions.LOGIN]({commit}, credentials) {
            const {data} = await axios.post('auth/login', credentials)
            commit(events.mutations.SET_TOKEN, data.token)
            commit(events.mutations.SET_LOGGED_USER, credentials.email)
        },

        async [events.actions.CHECK_EMAIL](context, check_email) {
            return await axios.get('auth/exists/:', check_email)
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
                commit(events.mutations.SET_FILE_UPLOAD_NAME, null)

                const {data} = await axios.post('api/files', formData, options)

                commit(events.mutations.SET_UNLOADING)
                commit(events.mutations.SET_FILE_UPLOAD_NAME, data.filename)
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

        async [events.actions.CREATE_EXAM](context, exam) {
            return await axios.post('/exams', exam)
        },

        async [events.actions.GET_MY_EXAMS]({state}) {
            const {data} = await axios.get(`/exams/mine/${state.loggedUser}`)
            return data
        }
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
        },

        [events.mutations.SET_FILE_UPLOAD_NAME](state, name) {
            state.fileUploadName = name
        },

        [events.mutations.SET_LOGGED_USER](state, loggedUser) {
            state.loggedUser = loggedUser
        },

        [events.mutations.SET_ERROR_MESSAGE](state, messageText) {
            state.messageText = messageText
            state.messageType = 'error'
        },

        [events.mutations.SET_INFO_MESSAGE](state, messageText) {
            state.messageText = messageText
            state.messageType = 'info'
        }
    }
})
