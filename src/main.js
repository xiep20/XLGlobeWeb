/**
 * 入口 - Vue3 + Vite
 * 先初始化 HTTP，再加载 conf.json，然后注册组件并挂载
 */
import { createApp } from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/display.css'
import 'animate.css'
import { installHttp } from './loader/HttpLoader'
import { registerComponents } from './App.Loader'
import './themes/index.scss'
import './themes/iconfont/iconfont.css'
import 'highlight.js/styles/atom-one-dark.css'

const http = axios.create({ timeout: 15000 })
http.interceptors.request.use((c) => c, (e) => Promise.reject(e))
http.interceptors.response.use((r) => r, (e) => Promise.reject(e))
if (typeof globalThis !== 'undefined') {
  globalThis.Http = http
}

const app = createApp(App)
app.use(router)
app.use(store)
app.use(ElementPlus)
installHttp(app, http)



async function bootstrap() {
  try {
    if (http && typeof http.get === 'function') {
      const res = await http.get('config/conf.json')
      if (typeof globalThis !== 'undefined') {
        globalThis.config = res.data
      }
    }
  } catch (e) {
    console.warn('config/conf.json load failed, using defaults', e)
    if (typeof globalThis !== 'undefined') {
      globalThis.config = globalThis.config || {}
    }
  }
  await registerComponents(app)
  app.mount('#app')
}

bootstrap()
