<template>
  <div id="submit">
      <el-form ref="form" :model="task">

         <el-form-item>
             <el-input v-model="task.title" placeholder="title"></el-input>
         </el-form-item>

         <el-form-item>
             <el-input v-model="task.description" placeholder="description"></el-input>
         </el-form-item>

         <el-form-item>
             <el-button type="success" id="postbutton" size="medium" @click="addTask">Post Data</el-button>
         </el-form-item>

      </el-form>
  </div>
</template>

<script>
import axios from "axios";
class Task{
    constructor(title,description){
        this.title = title
        this.description = description
    }
}
export default {
  data() {
    return {
      // title:null,
      task: new Task()
    };
  },
  mounted() {
    //this.addTask()
    // this.getTitle()
  },
  methods: {
    // getTitle(){
    //   axios.get('api/task').then((res)=>{
    //     this.title = res.data[1].description
    //   })
    // },
    addTask() {
      //下面是不用class的写法
      // let newTask = {
      //   title: this.task.title,
      //   description: this.task.description
      // };
      // console.log(newTask); // eslint-disable-line
      axios
        .post("api/task", this.task)//this.task 换成 newTask(不用class的写法)
        .then(response => {
          console.log(response); // eslint-disable-line
        })
        .catch(error => {
          console.log(error); // eslint-disable-line
        });
        this.task = new Task()
       this.$notify({
          title: 'POST',
          message: 'post to database successful',
          type: 'success'
        });
    }
  }
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#submit {
  background-color: #fff;
  width: 280px;
  height: 180px;
  margin: auto;
  padding: 30px;
  border-radius: 15px;
}
#postbutton{
  width: 280px;
}
</style>

