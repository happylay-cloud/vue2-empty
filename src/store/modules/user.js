const state = {
  // 用户信息
  userinfo: '',
  perms: ['system:user:add']
}

const mutations = {
  // 设置用户信息
  setUserInfo (state, userinfo) {
    state.userinfo = userinfo
  }
}

const actions = {}
const getters = {
  // 获取用户信息
  getUserInfo (state) {
    return state.userinfo
  },
  // 获取用户权限
  getUserPerms: state => {
    return state.perms
  }
}

export default {
  // 启用命名空间
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
