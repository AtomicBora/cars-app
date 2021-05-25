import Vue from 'vue'
import VueRouter from 'vue-router'
import AppCars from '../components/AppCars.vue';
import AddCar from '../components/AddCar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/cars'
  },
  {
    path: '/cars',
    name: 'AppCars',
    component: AppCars
  },
  {
    path: '/add',
    name: 'AddCar',
    component: AddCar
  },
  {
    path: '/edit/:id',
    name: 'EditCar',
    component: AddCar
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
