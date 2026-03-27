/**
 * Vuex 4  store - Vue3 架构
 * 模块改为静态导入（Vite 不支持 require.context）
 */
import { createStore } from 'vuex'
import getters from './getters/index.js'
import apiindex from './modules/apiindex.js'

const store = createStore({
  modules: {
    apiindex
  },
  getters
})

export default store
