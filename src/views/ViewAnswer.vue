
<template>
<div class="viewAnswer_main">
  <div class="head" >
  <mu-button style="font-size:26px;position:absolute;left:4px;top:4px" icon slot="left" @click="$router.back(-1)">
    <i class="el-icon-arrow-left"></i>
  </mu-button>
  <div style="padding-top:10px;font-size:23px">View Answers</div> 
</div>
  <!-- <el-button style="float:right;margin-top:5px" v-on:click="putData(id)">respond</el-button> -->
  <div class="card">
 <span class="question">{{question}}</span> 
 <div style="height:10px;width:50px;"></div>
     <div><pre>{{description}}</pre></div>
     <div style="height:10px;width:50px;"></div>
     <img style="display:block" v-if="picture" width="100%" :src="require('../assets/upload/' + picture)">

  </div>
  <div  style="font-weight:bold;margin:10px">{{answerNum}} answers</div>
   <div  v-for="answer in answers" class="card">
   <span>{{answer.answer}}</span>
   <!-- {{answer.b}}
   {{answer.c}} -->
   </div>

   <div class="card">
     <el-form ref="form" :model="inputForm">
     <el-form-item >
             <el-input rows="6" type="textarea" v-model="inputForm.answer"  placeholder="Your Answer"> </el-input>
         </el-form-item>
     </el-form>
     <el-button type="primary" @click="postAnswer">Post Your Answer</el-button>
   </div>
    </div>
</template>

<script>

import axios from "axios"

export default {
  data() {
    return {
      datas: new Array(),
      question:this.$route.params.data.question,
      description:this.$route.params.data.description,
      answers:this.$route.params.data.answerData,
      picture:this.$route.params.data.picture,
      id:this.$route.params.data._id,
      inputForm:{
        answer:'',
      },
      answerNum:this.$route.params.data.answerData.length
      
    };
  },
  created(){
    // console.log(this.$route.params.data._id);
    // console.log(this.$route.params.data);
    // this.getData();
    console.log(this.answers.length);
  },

  methods: {
    getData: function() {
      axios.get("/api/questions").then(res => {
        // console.log(res.data)
        this.datas = res.data;
        // console.log(this.datas);
      });
    },
    postAnswer(){
      axios.put("/api/questions/" + this.id, this.inputForm).then(res=>{
      })
      this.$router.push({path: '/answer'});
    },
     
    }
  
};
</script>

<style>
.viewAnswer_main .el-textarea__inner:focus{
  border:solid 1px #608f9f;
}

.viewAnswer_main .el-textarea__inner{
  border:solid 1px #eee;
  resize:none;
  padding-bottom: 0;
  margin: auto;
}
</style>



<style scoped>
pre{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
.viewAnswer_main{
  position: fixed;
  right: 0;
  width: 100%;
  height: 100%;
  background-color:#f9f9f9;
  overflow: scroll;
  padding-top: 56px;
  text-align:left
}
.head{
  background-color: #fafafa;
  height: 56px;
  color:#014d67;
  position: fixed;
  width: 100%;
  top:0;
  border-bottom: 1px solid #eee;
  text-align:center
}
.card
{
  margin-bottom: 12px;
  width: 100%;
  background-color: white;
  padding :18px;
  text-align: left;
  word-wrap:break-word
}
.question{
  font-weight:bold;
  font-size: 18px;
}
</style>
