<template>
  <TheHeader />
  <TheBody />
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheBody from './components/TheBody.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    TheBody
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

* {
    margin: 0px;
    padding: 0px;
}
</style>
