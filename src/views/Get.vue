
<template>
  <div class="hello">
    <el-button type="success" v-on:click="getTitle()">get datas</el-button>



<!-- eslint-disable-next-line -->
    <div style="width:200px;margin:auto;background-color:skyblue;margin-top:10px;" v-for="task in tasks">
        <li style="float:left;">title:{{task.title}}</li>
        <li> description:{{task.description}}</li>  
    </div>
        </div>

</template>

<script>
import axios from "axios";

// class Task{
//     constructor(title,description){
//         this.title = title
//         this.description = description
//     }
// }
export default {
  data() {
    //   tasks:new Array(),
    return {
      tasks: new Array()
      // task = new Task()
    };
  },
  methods: {
    getTitle() {
      this.get = true;
      axios.get("api/task").then(res => {
        // this.title = res.data[0].title
        // let i = 0
        // while(res.data[i]){
        //     console.log(res.data[i],i)
        //     this.task.title = res.data[i].title
        //     this.task.description = res.data[i].description
        //     i++
        // }
        this.tasks = res.data;
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}

li {
  display: block;
}
</style>
