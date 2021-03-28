import Vue from 'vue'
// 读取文件的路径，读取文件的路径，匹配文件的正则
const requireComponents = require.context(
  // 其组件目录的相对路径
  '.',
  // 是否查询其子目录
  true,
  // 匹配基础组件文件名的正则表达式
  /\.vue$/
)
// 遍历出每个组件的路径
requireComponents.keys().forEach(fileName => {
  // 获取组件配置
  const componentConfig = requireComponents(fileName)
  // 获取组件实例
  const componentEntity = componentConfig.default
  // 获取组件文件名称
  const componentName = fileName
    .split('/')
    .pop()
    .replace(/\.vue$/, '')

  // 全局组件注册
  Vue.component(
    // 优先使用内置的组件名称进行注册，否则使用组件文件名进行注册
    componentEntity.name === '' ||
      componentEntity.name === undefined ||
      componentEntity.name === null
      ? componentName
      : componentEntity.name,
    // 如果这个组件选项是通过“export default”导出的，那么就会优先使用“.default”，
    // 否则回退到使用模块的根。
    componentEntity || componentConfig
  )
})
