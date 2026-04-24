import { createRouter, createWebHistory } from 'vue-router'

import HomeScreen from '@/paths/HomeScreen.vue'
import MovementsScreen from '@/paths/MovementsScreen.vue'
import SavingsScreen from '@/paths/SavingsScreen.vue'
import SettingsScreen from '@/paths/SettingsScreen.vue'

const routes = [
  {path: '/', component: HomeScreen},
  {path: '/movements', component: MovementsScreen},
  {path: '/savings', component: SavingsScreen},
  {path: '/settings', component: SettingsScreen},
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
