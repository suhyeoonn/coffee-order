import { createRouter, createWebHistory } from 'vue-router'
import CreateBill from '../views/CreateBill.vue'
import OrderList from '../views/OrderList.vue'
import SignUp from '@/views/SignUp'
import SignIn from '@/views/SignIn'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: CreateBill,
  },
  {
    path: '/list',
    name: 'OrderList',
    component: OrderList,
  },
  {
    path: '/signUp',
    name: 'SignUp',
    component: SignUp,
  },
  {
    path: '/signIn',
    name: 'SignIn',
    component: SignIn,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
