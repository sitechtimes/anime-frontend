<template>
    <div>
      <NuxtLayout>
        <NavigationMobile/>
        <NavBar/>
        <NuxtPage/>
        <ScrollBtn/>
    </NuxtLayout>
    </div>
  </template>
  
  <script lang="ts">
  import NavBar from './components/navbar/NavBar.vue'
  import { useUserStore } from "./stores/userStore"
  import NavigationMobile from './components/navbar/NavigationMobile.vue'
  import ScrollBtn from './components/ScrollBtn.vue'
  export default ({
    name: 'IndexPage',

    components:{
      NavBar,
      NavigationMobile,
      ScrollBtn
    },
    setup(){
      const userStore = useUserStore()
      return {
        userStore,
      }
    },
    beforeCreate() {
        this.userStore.checkCookie()
      }
    // methods: {
    //   onBeforeMount() {
    //     this.userStore.checkCookie()
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

  /* buttons */
  .button,
    .log-in,
    button{
        background: var(--primary);
        border-radius: 25px;
        font-style: normal;
        font-weight: var(--fw-bold);
        font-size: var(--h4);
        text-align: center;
        color: var(--dark-text);
        border:0;
        padding:1rem 3rem;
        transition: 2s ease-in-out;
        -webkit-transition: 2s ease-in-out;
	    cursor: pointer;
    }
  .button:hover,
    .log-in:hover{
        background: linear-gradient(84.66deg, var(--primary) 2.58%, var(--alt-linear) 97.55%);
    }

   ul, li, a{
        text-decoration: none;
        list-style-type: none;
        color:var(--white);
        transition: background 1s ease-in-out;-webkit-transition: background 1s ease-in-out;
    }

    /* media query */
  @media screen and (max-width: 1300px) {
   
  }
  @media screen and (min-width: 768px) {
    .nav-mobile,
    .menu{
      display: none;
    }
  }
  @media screen and (max-width: 768px) {
  #nav{
    display: none;
  }
}

@media screen and (max-width: 350px) {
  
}
@media screen and (max-width: 350px) {
  .dateBar {
    padding: 0.25rem 1rem;
  }
  .list {
    column-gap: 0;
  }
  .sub__container {
    display: flex;
  }
  #nav__span {
    display: flex;
  }
  .modeIcon:first-child {
    padding-right: 0rem;
  }
  .modeIcon:last-child {
    display: none;
  }
}

  </style>
