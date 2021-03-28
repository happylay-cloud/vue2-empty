import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 创建自定义（模块）上下文
const modulesFiles = require.context('./modules', true, /\.js$/)

// 它将自动从模块文件中导入所有的vuex模块
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // 获取模块名称 './app.js' => 'app'模块名
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')

  // 传入模块相对路径，返回一个模块 './app.js' => app模块
  const value = modulesFiles(modulePath)

  // 获取模块内容 state，actions 等等
  modules[moduleName] = value.default

  return modules
}, {})

const store = new Vuex.Store({
  modules
})

export default store
