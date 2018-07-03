import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home'
import Login from './views/Login'
import Register from './views/Register'
import Internal from './views/Internal'
import CreateExam from './views/CreateExam'

import Confirmation from './views/Confirmation'
import GenerateToken from './views/GenerateToken'
import HistoryPatient from './views/HistoryPatient'
import Logout from './views/Logout'
import Token from './views/Token'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/internal',
            name: 'internal',
            component: Internal
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
            path: '/createExam',
            name: 'createExam',
            component: CreateExam
        },
        {
            path: '/generateToken',
            name: 'generateToken',
            component: GenerateToken
        },
        {
            path: '/history',
            name: 'historyPatient',
            component: HistoryPatient
        },
        {
            path: '/logout',
            name: 'logout',
            component: Logout
        },
        {
            path: '/token',
            name: 'token',
            component: Token
        }
    ]
})
