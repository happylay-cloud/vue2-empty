<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Hello World" />
  </div>
</template>

<script>
import { login, getUserinfo } from '@/api/login'

export default {
  name: 'Home',
  mounted () {
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
        // vuex样例-mutations
        this.$store.commit('user/setUserInfo', response.data.data)
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => {
        // vuex样例-getters
        const userinfo = this.$store.getters['user/getUserInfo']
        console.log('用户信息', userinfo)
      })
  }
}
</script>
