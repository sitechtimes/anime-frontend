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
  import { useUserStore } from "./stores/userStore"
  export default ({
    name: 'IndexPage',
    components:{
      NavBar,
    },
    // setup(){
    //   const userStore = useUserStore()
    //   const localStorage = window.localStorage
    //   return {
    //     userStore,
    //     localStorage
    //   }
    // },
    // mounted() {
    //   this.userStore.getToken
    //   console.log(this.userStore.getToken, this.userStore.getUser)
    // }
  })
  </script>

  <style>
  @import url("./assets/global.css");

  </style>
