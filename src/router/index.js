import { createRouter, createWebHistory } from 'vue-router'
import CreateOrder from '../views/CreateOrder.vue'
import OrderList from '../views/OrderList.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: CreateOrder,
  },
  {
    path: '/list',
    name: 'OrderList',
    component: OrderList,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
