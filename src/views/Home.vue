
<template>
  <div class="home">
    <nav style="margin:20px;">
      <el-button type="primary" @click="register()">Sign in</el-button>
      <el-button type="success" @click="login()">Login</el-button>
      
      
      <!-- <router-link to="/register">Register</router-link>  -->
    </nav>
    
    <img width="60px" :src="require('../assets/'+img+'.png')">
  
    <HelloWorld/>
    <el-button @click="ask">ask</el-button>
    <el-button @click="info">info</el-button>
    <el-button @click="comment">comment</el-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import axios from "axios";

export default {
  name: "home",
  components: {
    HelloWorld
  },
  data() {
    return {
      img: "personal",
    };
  },
  methods: {
    register() {
      this.$router.push({ path: "/register" });
    },
    login() {
      this.$router.push({ path: "/login" });
    },
    ask(){
      // this.$store.state.b = 
          console.log(this.$store.state.b)
          this.$router.push({path: '/ask'});
    },
    info(){
       this.$router.push({path: '/answer'});
    },
    comment(){
      this.$router.push({path: '/comment'});
    }
  }
};
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.home{
  /* background-color:rgb(251, 178, 23); */
}


</style>