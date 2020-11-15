import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import HomePage from '@/components/HomePage'
import Profile from '@/components/Profile'
import Prizes from '@/components/Prizes'
import About from '@/components/About'
import Options from '@/components/Options'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/prizes',
    name: 'Prizes',
    component: Prizes
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/options',
    name: 'Options',
    component: Options
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
