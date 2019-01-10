
<template>
<div class="app">

<div class="head" >
  <mu-button style="font-size:26px;position:absolute;left:4px;top:4px" icon slot="left" @click="$router.back(-1)">
    <i class="el-icon-arrow-left"></i>
  </mu-button>
  <div style="padding-top:10px;font-size:23px">Info</div> 
</div>


<div class="card" v-for="data in datas" @click="viewAnswer(data._id,data.answerData)">
      
      <h2>{{data.question}}</h2>
      <p>{{data.description}}</p>
      <p>{{data.asker}}</p>
      <img style="display:block" v-if="data.picture" width="80px" :src="require('../assets/upload/' + data.picture)">
      <!-- <el-button style="float:right;margin-top:5px" v-on:click="putData(data._id)">respond</el-button> -->

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
      // console.log(this.$store.state.b)
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
    },
    
    putData(id){
        // this.task.answerData.push({a:6,b:7,c:5})
      let obj = {}
      obj = {a:2,b:2,c:2}
      axios.put("api/questions/" + id, obj).then(res=>{
      })
    },
    
    viewAnswer(id,answers){
      // console.log(id);
      this.$router.push({
        name: 'viewAnswer',
        params:{
          id:id,
          answers:answers
          }
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
h2{
  margin: 0;
  padding: 0;
  line-height: 0.5;
}
.head{
  background-color: #014d67;
  height: 56px;
  color: #fff;
}

.card
{
  margin-bottom: 15px;
  width: 100%;
  background-color: white;
  padding :22px;
  text-align: left;
}
</style>
