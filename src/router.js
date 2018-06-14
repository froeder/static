import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
import About from './views/About.vue'
import Login from './components/Login'
import CadastroUsuario from './components/CadastroUsuario'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }, {
      path: '/cadastro-usuario',
      name: 'cadastroUsuario',
      component: CadastroUsuario
    }
  ]
})