/**
 * HTTP 加载器 - Vue3 版本
 * 将 axios 实例挂载到 app.config.globalProperties.$http
 *
 * @param {import('vue').App} app
 * @param {import('axios').AxiosInstance} instance 外部传入的 axios 实例，与 globalThis.Http 一致
 */
export function installHttp(app, instance) {
  if (!instance) return
  app.config.globalProperties.$http = instance
}

export default { install: installHttp }
