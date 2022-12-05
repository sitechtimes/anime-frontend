<template>
    <div>
      <NuxtLayout>
        <NavBar/>
      <NuxtPage/>
    </NuxtLayout>
    </div>
  </template>
  
  <script lang="ts">
  //import Vue from 'vue'
  //import ComponentVue from '../components/Component.vue'
  import NavBar from './components/navbar/NavBar.vue'

  export default ({
    name: 'IndexPage',
    components:{
      // ComponentVue
      NavBar,
     
      
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
