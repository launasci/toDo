import Vue from 'vue'
import VueRouter from 'vue-router'
import Lista from '../views/lista.vue'
import addTarefa from '../views/addTarefa.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'lista',
    component: Lista
  },
    {
    path: '/addTarefa',
    name: 'addTarefa',
    component: addTarefa
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
