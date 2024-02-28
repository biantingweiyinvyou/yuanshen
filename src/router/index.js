import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/index.vue'
import News from '@/views/News/index.vue'
import Role from '@/views/Role/index.vue'
import Details from '@/views/News/details/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/news'
    },
    {
      path: '/news',
      name: 'News',
      component: News,
      meta: {
        keepAlive: true
      },
      children: [
        {
          path: 'details',
          name: 'Details',
          component: Details,
          meta: {
            keepAlive: true
          }
        }
      ]
    },
    {
      path: '/details',
      name: 'Details',
      component: Details,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/role',
      name: 'Role',
      component: Role,
      meta: {
        keepAlive: true
      }
    }
  ]
})

export default router
