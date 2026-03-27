/**
 * 应用加载器 - Vue3 版本
 * 负责全局组件注册（通过 import.meta.glob）、不再注册 Element（由 main.js 使用 Element Plus）
 */
const componentFiles = import.meta.glob('@/components/**/index.vue')

/**
 * 注册所有 components 下 index.vue 为全局组件（以 name 为组件名）
 * @param {import('vue').App} app
 */
export async function registerComponents(app) {
  for (const path in componentFiles) {
    const mod = await componentFiles[path]()
    const comp = mod.default
    if (comp && comp.name) {
      app.component(comp.name, comp)
    }
  }
}

export default { registerComponents }
