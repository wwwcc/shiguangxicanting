export default [
  {
    path: '/',
    component: resolve => require(['./views/index.vue'], resolve)
  },
  {
    path: '/register',
    component: resolve => require(['./views/register.vue'], resolve)
  },
  {
    path: '/login',
    component: resolve => require(['./views/login.vue'], resolve)
  },
  {
    path: '/services',
    component: resolve => require(['./views/services.vue'], resolve)
  },
  {
    path: '/typo',
    component: resolve => require(['./views/typo.vue'], resolve)
  },
  {
    path: '/menu',
    component: resolve => require(['./views/menu.vue'], resolve)
  },
  {
    path: '/contact',
    component: resolve => require(['./views/contact.vue'], resolve)
  },
  {
    path: '/single',
    component: resolve => require(['./views/single.vue'], resolve)
  }
]
