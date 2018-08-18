import Vue from 'vue'
import VueRouter from 'vue-router'
import View from '../components/View'

Vue.use(VueRouter)


const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'view',
      component: View
    },
  ]
})


export default router
