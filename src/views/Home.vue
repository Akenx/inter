
// 使用组件

<template>
  <div class="home">
    <nav style="margin:20px;">
      <el-button type="primary" @click="register()">Sign in</el-button>
      <el-button type="success" @click="login()">Login</el-button>
      <!-- <router-link to="/register">Register</router-link>  -->
    </nav>
    
    <img width="60px" :src="require('../assets/'+img+'.png')">
    <HelloWorld/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data(){
    return{
      img:"personal"
    }
  },
  methods:{
    register(){
      this.$router.push({path: '/register'});
    },
    login(){
      this.$router.push({path: '/login'});
    }
  }
}
</script>
