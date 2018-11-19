
<template>
  <div class="main">

<el-form ref="form" :model="task">

         <el-form-item>
             <el-input v-model="task.title" placeholder="title"></el-input>
         </el-form-item>

         <el-form-item>
             <el-input v-model="task.description" placeholder="description"></el-input>
         </el-form-item>

         <el-form-item>
             <el-button type="success" id="postbutton" size="medium" @click="sendForm">Post Data</el-button>
         </el-form-item>

      </el-form>


    <div v-for="data in datas">
    <img v-if="data.picture" width="60px" :src="require('../assets/'+data.picture)">
    </div>
    
   <div>
        <input type="file" name="file" @change="changeFile" /><br />
        <button @click="sendAjax">发送请求</button><br />
        <el-progress style="width:300px; margin:auto" color="#8e71c7"  :percentage="rate"></el-progress>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  data() {
    return {
      datas: new Array(),
      file: null,
      rate: 0,
      task: {
        username:this.$store.state.b,
        title:"",
        description:"",
        picture:null
      }

    };
  },
  mounted(){
      this.getPic()
  },
  methods: {
    sendForm: function(){
            console.log(this.task)
       axios
        .post("api/questions", this.task)//this.task 换成 newTask(不用class的写法)
        .then(response => {
          console.log(response); // eslint-disable-line
        })
        .catch(error => {
          console.log(error); // eslint-disable-line
        });
        // this.task = new Task()
       this.$notify({
          title: 'POST',
          message: 'post to database successful',
          type: 'success'
        });
        this.getPic()
    },

    sendAjax: function() {
        if(this.file)
        console.log(this.file)
      var fd = new FormData(); //创建form对象
      fd.append("file", this.file); //通过append向form对象添加数据
      axios.post("api/upload", fd, {
        onUploadProgress: progressEvent => {
          //这里要用箭头函数
          //不然这个this的指向会有问题
          this.rate = parseInt(
            (progressEvent.loaded / progressEvent.total) * 100
          );
        }
      });
    },
    changeFile: function(e) {
      this.file = e.target.files[0];
      this.task.picture = this.file.name;

    },
    getPic: function(){
        
        axios.get("api/questions").then(res => {
            // console.log(res.data)
        this.datas = res.data;
        console.log(this.datas)
      });
    }
  }
};
</script>

<style scoped>
.main{
  /* width: 500px;
  height: 1200px;
  background-color: blueviolet;
  overflow: hidden; */
}
</style>

