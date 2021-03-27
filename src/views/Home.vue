<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Hello World" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  mounted () {
    this.$store.commit('user/setUserInfo', '用户信息')
    const userinfo = this.$store.getters['user/getUserInfo']
    console.log(userinfo)
  }
}
</script>
