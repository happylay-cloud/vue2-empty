import store from '@/store'

export default {
  /**
   * v-permission 验证权限自定义指令，在对象插入父级元素时验证
   * @param {*} el 绑定指令的element
   * @param {*} binding 指令的表达式对象
   * @param {*} vnode
   */
  inserted (el, binding, vnode) {
    // 自定义 v-permission
    const { value } = binding

    // 获取用户权限
    const perms = store.getters && store.getters['user/getUserPerms']

    if (value && value instanceof Array && value.length > 0) {
      const needPerms = value

      // 检查数组中元素是否满足条件
      const hasPermission = perms.some(perm => {
        return needPerms.includes(perm)
      })

      // 没有权限，删除节点
      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    } else {
      throw new Error(
        "自定义权限指令使用方式：v-permission=\"['system:user:add','system:user:delete']\""
      )
    }
  }
}
