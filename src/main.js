import Vue from 'vue'
import appLoader from './App.Loader';
(async () => {
  try {
    let loaders = await appLoader.install()
    for (let i = 0; i < loaders.length; i++) {
      let loader = loaders[i].default
      if (!loader || !loader.load) continue
      await loader.load()
    }
    
    // 确保 HttpLoader 已经初始化
    if (global.Http && typeof global.Http.get === 'function') {
      global.Http.get('config/conf.json')
        .then(response => {
          global.config = response.data
          Promise.all([
            import('@/App.vue'),
            import('@/router'),
            import('@/store')
          ]).then(([{
            default: App
          }, {
            default: router
          }, {
            default: store
          }]) => {
            new Vue({
              router,
              store,
              render: h => h(App)
            }).$mount('#app')
          })
        })
        .catch(e => {
          console.error('Failed to load config:', e)
        })
    } else {
      console.error('HttpLoader not properly initialized')
    }
  } catch (error) {
    console.error('Failed to initialize app:', error)
  }
})()
