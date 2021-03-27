<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Hello World" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

import { login, getUserinfo } from '@/api/login'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  mounted () {
    // vuex样例
    this.$store.commit('user/setUserInfo', '用户信息')
    const userinfo = this.$store.getters['user/getUserInfo']
    console.log(userinfo)

    // 全局挂载-axios样例
    this.$http
      .get('/getUserInfo', { params: { id: 1 } })
      .then(function (response) {
        console.log(response)
      })
      .catch(function (error) {
        console.log(error)
      })

    // 封装api-post请求
    login('admin', '123456')
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })

    // 封装api-get请求
    const query = { id: 1 }

    getUserinfo(query)
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
  }
}
</script>
