import Vue from 'vue'
// 读取文件的路径，读取文件的路径，匹配文件的正则
const requireComponents = require.context('.', true, /\.vue$/)

// requireComponents.keys()得到匹配文件的相对路径数组
requireComponents.keys().forEach(fileName => {
  // 获取组件配置(组件模板)
  const componentConfig = requireComponents(fileName)

  // 获取组件实例
  const componentEntity = componentConfig.default

  console.log('注册全局组件实例', componentEntity, fileName)

  // 使用内置的组件名称进行全局组件注册
  Vue.component(componentEntity.name, componentEntity || componentConfig)
})
