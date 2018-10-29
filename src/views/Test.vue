
<template>
<div class="app">
 <p>   {{num}}</p>
     <el-button type="success" @click="add">+1</el-button>
</div>
</template>

<script>

export default {
  data() {
    return {
      num:0
    };
  },
  methods: {

    add(){
        this.num++
        this.$store.state.b = "john"
        console.log(this.$store.state.b)
    }
      
    }
  
};
</script>


<style scoped>
.app{
    background-color: #eee;
}
</style>
