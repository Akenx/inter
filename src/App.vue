<template>
  <div id="app">
    <!-- <div id="nav"> -->
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/get">Get</router-link> |
      <router-link to="/post">Post</router-link> |
      <router-link to="/put">Put</router-link> |
      <router-link to="/delete">Delete</router-link> |
      <router-link to="/test">Test</router-link> | -->
      <!-- <router-link to="/register">Register</router-link>  -->
    <!-- </div> -->
    <router-view/>
  </div>
</template>

<style>
#app {
  margin:0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: fixed;
  top:0;
  bottom: 0;
  background-color: #f0f0f0;
  width: 100%;
  left: 0;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration-line: none  
}

#nav a.router-link-exact-active {
  color: #42b983;
  text-decoration-line: none
}
body{
  background-color: #f5f5f5
}
</style>
