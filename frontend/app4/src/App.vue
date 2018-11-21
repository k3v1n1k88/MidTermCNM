<template>
  <div id="app">
    
    <c_Login msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import c_Login from './components/c_Login.vue'

export default {
  name: 'app',
  components: {
    c_Login
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
