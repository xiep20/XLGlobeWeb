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
        path: '/cesiumexamples',
        name: 'cesiumexamples',
        component: () => import('../views/cesiumexamples/index.vue')
      },
      {
        path: '/sceneexamples',
        name: 'sceneexamples',
        component: () => import('../views/sceneexamples/index.vue')
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
      },
      {
        path: '/deveditor',
        name: 'deveditor',
        component: () => import('../components/demodoc/Editor.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
