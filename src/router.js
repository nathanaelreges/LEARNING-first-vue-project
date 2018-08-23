import Vue from 'vue'
import Router from 'vue-router'
import Cycles from './views/Cycles.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'cycles',
      component: Cycles
    }
  ]
})
