import { createRouter, createWebHistory } from 'vue-router'
import TheHome from '../pages/TheHome.vue'
import MainWindow from '../pages/MainWindow.vue'
import showAllCategories from '../pages/showAllCategories.vue'
import showAllTransactions from '../pages/showAllTransactions.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: TheHome
  },
  {
    path: '/main',
    name: 'mainwindow',
    component: MainWindow
  },
  {
    path: '/categories',
    name: 'categories',
    component: showAllCategories
  },
  {
    path: '/transactions',
    name: 'transactions',
    component: showAllTransactions
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router