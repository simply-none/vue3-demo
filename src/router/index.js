import { createRouter,createWebHistory } from 'vue-router'
import App from '@/App.vue'
import Wrapper from  'components/wrapper.vue'

const router = createRouter({
  history:createWebHistory(),
  routes:[
    {
      path: '/',
      name: 'app',
      component: App,
    },
    {
      path: '/composition-api',
      component: Wrapper,
      name: 'composition-api',
      children: [
        {
          path: 'basic',
          name: 'composition-api-basic',
          component: () => import('views/composition-api/basic/setup.vue')
        }
      ],
    },
    {
      path: '/reactive-api',
      component: Wrapper,
      name: 'reactive-api',
      children: [
        {
          path: 'basic',
          name: 'reactive-api-basic',
          component: () => import('views/reactive/basic/basic.vue')
        }
      ],
    }
  ]
})
export default router
