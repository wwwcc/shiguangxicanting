import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import services from './views/services.vue'
import typo from './views/typo.vue'
import menu from './views/menu.vue'
import contact from './views/contact.vue'
import single from './views/single.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    }
  ]
})
