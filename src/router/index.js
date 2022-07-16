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
        },
        {
          path: 'provide-inject-basic',
          name: 'provide-inject-basic',
          component: () => import('views/composition-api/provide-inject/basic/basic.vue')
        },
        {
          path: 'provide-inject-advance',
          name: 'provide-inject-advance',
          component: () => import('views/composition-api/provide-inject/advance/basic.vue')
        },
        {
          path: 'ref-template',
          name: 'ref-template',
          component: () => import('views/composition-api/ref-template/ref.vue')
        },
        {
          path: 'ref-v-for',
          name: 'ref-v-for',
          component: () => import('views/composition-api/ref-template/ref-v-for.vue')
        }
        ,
        {
          path: 'teleport',
          name: 'teleport',
          component: () => import('views/composition-api/teleport/index.vue')
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
