import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/index'
import City from '@/pages/city'
import Detail from '@/pages/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/city',
      name: 'city',
      component: City
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    }
  ]
})
