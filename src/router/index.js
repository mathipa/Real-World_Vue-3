import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import EventList from '../views/EventList.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Events',
    component: Home
  },
  {
    path: '/eventlist',
    name: 'EventList',
    component: EventList
  },
  {
    path: '/about',
    name: 'About',
    component: About
   
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
