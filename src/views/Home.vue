
// 使用组件

<template>
  <div class="home">
    <div style="width:100%" ><router-link to="/register">Register</router-link> </div>
    
    <img alt="Vue logo" :src="require('../assets/'+img+'.png')">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
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
      img:"logo"
    }
  }
}
</script>
