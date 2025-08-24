/*
 * @Author: Caven
 * @Date: 2019-12-23 13:38:32
 * @Last Modified by: Caven
 * @Last Modified time: 2020-03-31 13:25:14
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '',
    component: () => import('../views/Home.vue'),
    redirect: '/index',
    children: [
      {
        path: '/index',
        name: 'index',
        component: () => import('../views/home/index.vue')
      },
      {
        path: '/index2',
        name: 'index2',
        component: () => import('../views/home/index2.vue')
      },
      {
        path: '/examples',
        name: 'examples',
        component: () => import('../views/examples/index.vue')
      },
      {
        path: '/docs/:nameId',
        name: 'docs',
        component: () => import('../views/docs/index.vue')
      },
      {
        path: '/application',
        name: 'application',
        component: () => import('../views/application/index.vue')
      },
      {
        path: '/editor',
        name: 'editor',
        component: () => import('../views/editor/index.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
