import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Login from '../views/login/Login.vue'
import HomeView from '../views/home/HomePage.vue'

const router = createRouter({
  // history: createWebHistory(),
  history: createWebHashHistory(),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/HomeView',
      name: 'HomeView',
      component: HomeView
    }
  ]
})

export default router
