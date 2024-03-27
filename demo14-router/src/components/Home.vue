<template>
  <div>
    <h1>home页面</h1>
    <h3>欢迎 {{username}} 登录</h3>
    <button @click="logout()">退出登录</button>
  </div>
</template>

<script setup>
  import {ref} from 'vue'
  import {useRouter} from "vue-router";
  let router = useRouter()

  let username = window.sessionStorage.getItem('username')

  function logout(){
    // 1 清楚sessionStorage中的用户登录信息
    window.sessionStorage.removeItem("username")
    // 2 跳转到login视图
    router.push("/login")
  }
</script>

<style scoped>

</style>