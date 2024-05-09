import { createWebHistory, createRouter } from 'vue-router'

import Dashboard from '@/layouts/Dashboard.vue'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import SettingsView from '@/views/SettingsView.vue'

const routes = [
  { 
    path: '/', 
    component: Dashboard,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: HomeView
      },
      {
        path: 'about',
        component: AboutView
      },
      {
        path: 'settings',
        component: SettingsView
      }
    ],  
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
