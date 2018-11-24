
<template>
  <div class="main">
    
    <mu-appbar style="width: 100%;" color="cyan500">
  <mu-button icon slot="left">
    <i class="el-icon-arrow-left"></i>
  </mu-button>
<span class="span">Ask a Question</span> 
</mu-appbar>

    <div class="write">
      <el-form ref="form" :model="task">

         <el-form-item>
             <el-input v-model="task.title" placeholder="title"></el-input>
         </el-form-item>

         <el-form-item>
             <el-input v-model="task.description" placeholder="description"></el-input>
         </el-form-item>

 <div class="uploadbutton">
 

        <input class="upload" type="file" name="file" accept="image/png,image/jpeg" @change="changeFile"/>
        <i class="el-icon-picture iconwidth"></i>
        <label class="picname"> {{task.picture}}</label>
      
        <!-- <button @click="sendAjax">发送请求</button><br /> -->
        <!-- <el-progress style="width:300px; margin:auto" color="#8e71c7"  :percentage="rate"></el-progress> -->
    </div>




         <el-form-item>
             <el-button type="success" id="postbutton" size="medium" @click="sendForm">Post Data</el-button>
         </el-form-item>

      </el-form>
    </div>



    <div v-for="data in datas">
    <img v-if="data.picture" width="60px" :src="require('../assets/'+data.picture)">
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
        username: this.$store.state.b,
        title: "",
        description: "",
        picture: null
      }
    };
  },
  mounted() {
    this.getPic();
  },
  methods: {
    sendForm: function() {
      // console.log(this.file);
      // if(this.file){
      //   this.sendAjax()
      // }
      // console.log(this.task);
      axios
        .post("api/questions", this.task) //this.task 换成 newTask(不用class的写法)
        .then(response => {
          console.log(response); // eslint-disable-line
        })
        .catch(error => {
          console.log(error); // eslint-disable-line
        });
        this.getPic();
      // this.task = new Task()
      this.$notify({
        title: "POST",
        message: "post to database successful",
        type: "success"
      });
      
    },

    sendAjax: function() {
      // if (this.file) console.log(this.file);
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
      // console.log(this.file.name,33)
      if (this.file) this.task.picture = this.file.name;
      this.sendAjax()
      // console.log(this.task.picture,33)
    },
    getPic: function() {
      axios.get("api/questions").then(res => {
        // console.log(res.data)
        this.datas = res.data;
        console.log(this.datas);
      });
    }
  }
};
</script>

<style scoped>
.main {
  position: fixed;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: #eee;
  overflow: scroll;
}

.main::-webkit-scrollbar {
  display: none;
}

.upload {
  border: 1px solid rgb(161, 33, 33);
  width: 40px;
  height: 30px;
  opacity: 0;
  /* overflow: hidden; */
  position: absolute;
  left: 0;

  /* z-index: -1; */
}

.picname{
  font-size: 12pt;
  position: absolute;
  top:10px;
}

.write {
  margin-top: 15px;
}
.span{
  padding-right: 60px;
}
.iconwidth{
  font-size: 34px;
}
.uploadbutton{
  position: relative;
  font-size: 15pt;
  text-align: left;
  width: 100%;
  height: 30px;
  /* background-color: rgb(236, 118, 118); */
}
</style>

