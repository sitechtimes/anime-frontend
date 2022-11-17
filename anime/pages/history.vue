<template>
    <div id="history">
      <NavBar/>
    </div>
  </template>
  
  <script lang="ts">
  import Vue from 'vue'
  import NavBar from '../components/NavBar.vue'
  export default Vue.extend({
    name: 'HistoryPage',
    components:{
      NavBar
    }
  })
  </script>
  <style>
  @import url("../assets/global.css");

  </style>