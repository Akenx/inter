
<template>
<div class="app">
     <p>{{num}}</p>
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
  created(){
    // console.log(this.$route.params.id);
    console.log(this.$route.params.answers);
  },
  methods: {

    add(){
        this.num++
        this.$store.state.b = "john"
        // console.log(this.$store.state.b)
    }
     
    }
  
};
</script>


<style scoped>
.app{
  position: fixed;
  width: 100%;
  height: 100%;
  background-color:#f9f9f9;
  padding: 10px;
}
</style>
