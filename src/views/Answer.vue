
<template>
<div class="app">

<div class="head" >
  <mu-button style="font-size:26px;position:absolute;left:4px;top:4px" icon slot="left" @click="$router.back(-1)">
    <i class="el-icon-arrow-left"></i>
  </mu-button>
  <div style="padding-top:10px;font-size:23px">Info</div> 
</div>


<div class="card" v-for="data in datas" @click="viewAnswer(data._id,data)">
      
      <span class="point point2">{{data.question}}</span>
      <div style="height:10px;width:50px;"></div>
      <span class="point point3">{{data.description}}</span>
      <div v-if="data.description" style="height:7px;"></div>
      <span>{{data.asker}}</span>
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
      this.getData()
      // console.log(this.$store.state.b)
  },
  methods: {

    add(){
        this.num++
        this.$store.state.b = "john"
        console.log(this.$store.state.b)
    },

    getData: function() {
      axios.get("/api/questions").then(res => {
        // console.log(res.data)
        this.datas = res.data;
        // console.log(this.datas);
      });
    },
    
    putData(id){
        // this.task.answerData.push({a:6,b:7,c:5})
         console.log(id);
      let obj = {}
      obj = {a:4,b:2,c:2}
      axios.put("/api/questions/" + id, obj).then(res=>{
      })
    },

    viewAnswer(id,data){
      // console.log(id);
      this.$router.push({
        name: 'viewAnswer',
        params:{
          id:id,
          data:data,
          // answers:answers
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
  padding-top: 56px;
}
.point{
display: -webkit-box;
-webkit-box-orient: vertical;
overflow: hidden;
}

.point2{
  -webkit-line-clamp: 2;
  font-weight:bold;
  color: rgb(74, 137, 231);
  font-size: 16px;
}
.point2:first-letter{
  text-transform:capitalize;
}
.point3{
  -webkit-line-clamp: 3;
}
.head{
  background-color: #fafafa;
  height: 56px;
  color:#014d67;
  position: fixed;
  width: 100%;
  top:0;
  border-bottom: 1px solid #eee;
}

.card
{
  margin-bottom: 12px;
  width: 100%;
  background-color: white;
  padding :18px;
  text-align: left;
  word-wrap:break-word;
}


</style>
