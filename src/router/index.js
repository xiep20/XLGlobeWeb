/**
 * Vue Router 4 - 与菜单配置一致，保留旧路径重定向
 */
import path from 'path-browserify'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/views/Home.vue'),
    redirect: '/index',
    children: [
      { path: '/index', name: 'index', component: () => import('@/views/home/index.vue') },
      { path: '/functional-example', name: 'functional-example', component: () => import('@/views/functional-example/index.vue') },
      { path: '/cesium-native', name: 'cesium-native', component: () => import('@/views/cesium-native/index.vue') },
      { path: '/threejs', name: 'threejs', component: () => import('@/views/threejs/index.vue') },
      { path: '/webgpu', name: 'webgpu', component: () => import('@/views/webgpu/index.vue') },
      { path: '/scene-example', name: 'scene-example', component: () => import('@/views/scene-example/index.vue') },
      { path: '/doc', name: 'doc', component: () => import('@/views/doc/index.vue') },
      { path: '/demo/:module/:id', name: 'demo', component: () => import('@/layout/DemoPageLayout.vue') },
      { path: '/editor', name: 'editor', component: () => import('@/views/editor/index.vue') },
      { path: '/deveditor', name: 'deveditor', component: () => import('@/components/demodoc/Editor.vue') }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
