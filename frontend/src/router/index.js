import { createRouter, createWebHistory } from 'vue-router'
import CreateBill from '../views/CreateBill.vue'
import OrderList from '../views/OrderList.vue'
import SignUp from '@/views/SignUp'

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
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
