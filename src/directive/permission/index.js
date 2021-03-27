import permission from './permission'

/**
 * install 是默认的方法
 * @param {*} Vue 当外界在 use 这个组件的时候，就会调用本身的 install 方法，同时传一个 Vue 这个类的参数。
 */
const install = function (Vue, opts = {}) {
  Vue.directive('permission', permission)
}

/**
 * https://www.cnblogs.com/max-tlp/p/9338855.html
 * 支持使用标签的方式引入Vue是全局变量时，自动install
 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

permission.install = install

export default permission
