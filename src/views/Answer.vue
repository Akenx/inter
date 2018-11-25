
<template>
<div class="app">

<mu-appbar style="width: 100%; margin-bottom:2px;" color="cyan500">
  <mu-button icon slot="left" @click="$router.back(-1)">
    <i class="el-icon-arrow-left"></i>
  </mu-button>
<span class="span">Answer</span> 
</mu-appbar>

  <div v-for="data in datas">
    <img v-if="data.picture" width="60px" :src="require('../assets/'+data.picture)">
    <p>{{data.username}}</p>
    <p>{{data.title}}</p>
    <p>{{data.description}}</p>
    </div>
</div>
</template>

<script>
import axios from "axios"

export default {
  data() {
    return {
      datas: new Array(),
    };
  },
  mounted(){
      this.getPic()
      console.log(this.$store.state.b)
  },
  methods: {

    add(){
        this.num++
        this.$store.state.b = "john"
        console.log(this.$store.state.b)
    },
    getPic: function() {
      axios.get("api/questions").then(res => {
        // console.log(res.data)
        this.datas = res.data;
        // console.log(this.datas);
      });
    }

 }
};
</script>


<style scoped>
.app{
    position: fixed;
  right: 0;
  width: 100%;
  height: 100%;
  background-color:#f9f9f9;
  overflow: scroll;
}
.span {
  padding-right: 50px;
}
</style>
