<template>
    <div>
      <NuxtLayout>
        <NavBar/>
        <NuxtPage/>
    </NuxtLayout>
    </div>
  </template>
  
  <script lang="ts">
  import NavBar from './components/navbar/NavBar.vue'
  export default ({
    name: 'IndexPage',
    components:{
      NavBar,
    },
  })
  </script>

  <style>
  @import url("./assets/global.css");

  </style>
