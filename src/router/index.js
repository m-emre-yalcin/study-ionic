import { createRouter, createWebHistory } from '@ionic/vue-router';
import Home from '@/views/Home.vue'
import Profile from '@/views/Profile.vue'

const routes = [
  {
    path: '/',
    component: () => import('@/components/Tabs.vue'),
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home
      },
      {
        path: 'message/:id',
        component: () => import('@/views/ViewMessage.vue')
      },
      {
        path: 'profile',
        name: 'Profile',
        component: Profile
      }
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
