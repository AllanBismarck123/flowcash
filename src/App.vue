<template>
  <TheHome />
  <!-- <MainWindow /> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
// import MainWindow from './pages/MainWindow.vue';
import TheHome from './pages/TheHome.vue';

export default {
  name: 'App',
  components: {
    TheHome,
    // MainWindow,
}
}
</script>

<style>
* {
    margin: 0px;
    padding: 0px;
}
</style>
