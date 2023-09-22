import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Cadastro from '../views/Cadastro.vue'
import Cadastro_aposta from '../views/Cadastro_aposta.vue'
import login from '../views/Login.vue'
import Sites from '../views/Sites.vue'
import Users from '../views/Users.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cadastro',
      name: 'Cadastro',
      component: Cadastro
    },
    {
      path: '/cadastro-casa-de-aposta',
      name: 'Cadastro-aposta',
      component: Cadastro_aposta
    },
    {
      path: '/sites',
      name: 'Sites',
      component: Sites
    },
    {
      path: '/login',
      name: 'Login',
      component: login
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    }


  ]
})

export default router
