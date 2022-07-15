import { createRouter,createWebHistory } from 'vue-router'
import App from '@/App.vue'
const router = createRouter({
  history:createWebHistory(),
  routes:[
    {
      path: '/',
      component: App,
    },
    {
      path: '/name',
      component: App,
    }
  ]
})
export default router
