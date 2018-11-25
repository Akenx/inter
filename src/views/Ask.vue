
<template>
  <div class="main">
    <mu-appbar style="width: 100%; margin-bottom:2px;" color="cyan500">
  <mu-button icon slot="left" @click="$router.back(-1)">
    <i class="el-icon-arrow-left"></i>
  </mu-button>
<span class="span">Ask a Question</span> 
</mu-appbar>

<div class="content">
  <div class="write">
      <el-form ref="form" :model="task">

         <el-form-item>
             <el-input rows="2" type="textarea" v-model="task.title" placeholder="Question"></el-input>
         </el-form-item>

         <el-form-item >
             <el-input rows="5" type="textarea" v-model="task.description" placeholder="Description"></el-input>
         </el-form-item>


 <div class="uploadbutton">
 
        <input class="upload" type="file" name="file" accept="image/png,image/jpeg" @change="changeFile"/>
        <i class="el-icon-picture iconwidth"></i>
        <label class="picname"> {{task.picture}}</label>
        <!-- <button @click="sendAjax">发送请求</button><br /> -->
        <!-- <el-progress style="width:300px; margin:auto" color="#8e71c7"  :percentage="rate"></el-progress> -->
    </div>


        <el-button type="primary" @click="sendForm">Post Your Question</el-button>

         <!-- <el-form-item>
             <el-button  id="postbutton" size="medium" @click="sendForm">Post Data</el-button>
         </el-form-item> -->

      </el-form>
    </div>
</div>
      
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

export default {
  data() {
    return {
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
  },
  methods: {
    open6() {
        this.$message({
          showClose: true,
          message: 'post successful',
          type: 'success'
        });
      },
    sendForm: function() {

      axios
        .post("api/questions", this.task) //this.task 换成 newTask(不用class的写法)
        .then(response => {
          console.log(response); // eslint-disable-line
        })
        .catch(error => {
          console.log(error); // eslint-disable-line
        });
      this.open6()
      this.$router.push({path: '/'});
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
      if (this.file)
      { this.task.picture = this.file.name;
      this.sendAjax();
      }
      // console.log(this.task.picture,33)
    },
  }
};
</script>

<style scoped>

.main {
  position: fixed;
  right: 0;
  width: 100%;
  height: 100%;
  background-color:#f9f9f9;
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

.picname {
  font-size: 10pt;
  position: absolute;
  top: 9px;
  left: 33px;
}

.write {
  margin-top: 15px;
}

.span {
  padding-right: 60px;
}

.iconwidth {
  font-size: 30px;
  color: rgb(218, 218, 218);
}

.uploadbutton {
  position: relative;
  font-size: 15pt;
  text-align: left;
  width: 100%;
  height: 30px;
  margin-bottom: 20px;
  /* background-color: rgb(255, 255, 255); */
  /* border:solid 1px #ddd; */
  border-radius: 4px;
}

.content{
  padding: 8px;
  text-align: left;
}

</style>

