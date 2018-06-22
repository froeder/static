import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Login from './views/Login'
import Register from './views/Register'
import Confirmation from './views/Confirmation'
import SendFile from './views/SendFile' 
import GenerateToken from './views/GenerateToken'
import HistoryPatient from './views/HistoryPatient'
import Logout from './views/Logout'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'login',
            component: Login
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        {
            path: '/confirmation',
            name: 'confirmation',
            component: Confirmation
        },
        {
            path: '/upload_pdf',
            name: 'sendFile',
            component: SendFile
        },
        {
            path: '/generate_token',
            name: 'generateToken',
            component: GenerateToken
        },
        {
            path: '/history_patient',
            name: 'historyPatient',
            component: HistoryPatient
        },
        {
            path: '/logout',
            name: 'logout',
            component: Logout
        }
    ]
})