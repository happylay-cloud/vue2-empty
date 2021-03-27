import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import http from './utils/http'
// 自动注册全局组件
import '@/components/global'
// 自定义权限指令
import permission from './directive/permission'
// 全局注册自定义权限指令
Vue.use(permission)

Vue.config.productionTip = false

// 全局挂载网络请求库
Vue.prototype.$http = http

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
