const state = {
  apiid: '1-1-1',
  docMenuType: 0,//开发文档子菜单类型0：开发指南，1：类参考，2：相关文档
}
const mutations = {
  apiid_info: (state, apiid) => {
    state.apiid = apiid
  },
  changeDocMenuType: (state, docMenuType) => {
    state.docMenuType = docMenuType
  }
}
const actions = {
  setapiid({
    commit
  }, apiid) {
    commit('apiid_info', apiid)
  },
  setDocMenuType({
    commit
  }, docMenuType) {
    commit('changeDocMenuType', docMenuType)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
