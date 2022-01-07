import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/horas',
    name: 'horas',
    component: () => import(/* webpackChunkName: "horas" */ '../views/Horas.vue')
  },
  {
    path: '/materias',
    name: 'materias',
    component: () => import(/* webpackChunkName: "materias" */ '../views/Materias.vue')
  },
  {
    path: '/result',
    name: 'resultado',
    component: () => import(/* webpackChunkName: "resultado" */ '../views/Resultado.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
