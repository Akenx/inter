
<template>
  <div class="hello">
    <!-- <el-button v-on:click="putData()">put datas</el-button> -->

<!-- eslint-disable-next-line -->
    <div v-for="task in tasks">
      
      
        <li>title:{{task.title}}</li>
        <li> description:{{task.description}}</li>  
        <el-button type="danger" v-on:click="deleteData(task._id)">delete</el-button>
    </div>

  </div>
</template>

<script>
import axios from 'axios'

class Task{
    constructor(title='',description=''){  //也可写成constructor(title,description)，但不会赋空值
        this.title = title
        this.description = description
    }
}
export default {
  data(){
        return{
              newtask: new Task(),
              tasks: new Array()
        }
  },
  created(){
    this.getData()
  },
  methods:{
    deleteData(id){
      axios.delete('api/task/' + id,this.newtask)
      this.getData()
    },
    getData(){
      axios.get('api/task').then((res)=>{
        // this.title = res.data[0].title  
        // let i = 0
        // while(res.data[i]){
        //     console.log(res.data[i],i)
        //     this.task.title = res.data[i].title
        //     this.task.description = res.data[i].description
        //     i++
        // }
        this.tasks = res.data
        // console.log(res.data[0]._id)
      })   
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

a {
  color: #42b983;
}

li{
    display: block;
}
</style>
