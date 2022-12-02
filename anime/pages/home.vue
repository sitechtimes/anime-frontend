<template>
    <div id="home">
      
    </div>
  </template>
  
  <script lang="ts">

  import NavBar from '../components/navbar/NavBar.vue'
  import TrendingBox from '../components/homepage/TrendingBox.vue'

  export default ({
    name: 'HomePage',
    components:{
      // ComponentVue
      NavBar,
     TrendingBox
      
    },
  })
  </script>
  <style>
  @import url("./assets/global.css");
  .ex{
    background-color: var(--primary);
  }
  h1{
    font-size:var(--h1)
  }
  </style>