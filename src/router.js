import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import Login from './views/Login'
import Register from './views/Register'

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
        }
    ]
})