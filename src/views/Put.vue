
<template>
  <div class="hello">
    <button v-on:click="putData()">put datas</button>
<!-- eslint-disable-next-line -->
    <!-- <div v-for="task in tasks">
        <li>title:{{task.title}}</li>
        <li> description:{{task.description}}</li>  
    </div> -->

  </div>
</template>

<script>
import axios from 'axios'

class Task{
    constructor(title,description){
        this.title = title
        this.description = description
    }
}
export default {
  data(){       
        return{
            task: new Task()
        }
  },
  methods:{
    putData(){
      axios.put('api/task/' + "5bb07e8114c9227e00ed80e9",{title:"sssssss",description:"ssssss"})
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
