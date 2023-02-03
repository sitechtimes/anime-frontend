<template>
 <section id="nav" class="nav">
  <nav class="navigation" :class="{ 'is-hidden': !showHeader }">
   <h1 id="logo">
    <NuxtLink to="/">Technime</NuxtLink>
   </h1>
   <SearchBar />
   <ul class="routers">
    <li class="link">
     <NuxtLink to="/awards" class="link-href">Awards</NuxtLink>
    </li>
    <li class="link">
     <NuxtLink to="/ranking" class="link-href">Rankings</NuxtLink>
    </li>
    <li class="link">
     <NuxtLink to="/history" class="link-href">History</NuxtLink>
    </li>

    <button @click="test">TEST</button>
    <NuxtLink
     v-if="userStore.isAuthenticated == false"
     to="/login"
     class="link-href"
    >
     <button class="log-in button">Log In</button></NuxtLink
    >
    <button
     @click="userStore.logout"
     v-if="userStore.isAuthenticated == true"
     class="log-in button"
    >
     Logout
    </button>
   </ul>
  </nav>
 </section>
</template>
<script lang="ts">
import SearchBar from "./SearchBar.vue";
import axios from "axios";
import { useUserStore } from "../../stores/userStore";

export default {
 name: "NavBar",
 components: {
  SearchBar,
 },
 setup() {
  const userStore = useUserStore();
  // const router = useRoute()
  // userStore.$persist()
  // console.log(userStore.userData)

  return {
   userStore,
   // router
  };
 },

 //     data: () => ({
 //     showHeader: true,
 //     lastScrollPosition: 0,
 //     scrollOffset: 40,
 //     user: null
 //   }),
 data() {
  return {
   showHeader: true,
   lastScrollPosition: 0,
   scrollOffset: 40,
  };
 },
 mounted() {
  this.lastScrollPosition = window.pageYOffset;
  window.addEventListener("scroll", this.onScroll);

  // console.log(this.user)
 },

 beforeDestroy() {
  window.removeEventListener("scroll", this.onScroll);
 },
 methods: {
  test() {},
  // Toggle if navigation is shown or hidden
  onScroll() {
   if (window.pageYOffset < 0) {
    return;
   }
   if (
    Math.abs(window.pageYOffset - this.lastScrollPosition) <
    this.scrollOffset
   ) {
    return;
   }
   this.showHeader = window.pageYOffset < this.lastScrollPosition;
   this.lastScrollPosition = window.pageYOffset;
  },
  // signOut() {
  //     const auth2 = gapi.auth2.getAuthInstance()
  //     auth2.signOut().then(() => {
  //       console.log("user is signed out")
  //     })
  // },
  // callback(res: any) {
  //     console.log(res.access_token)
  //     axios.post("http://localhost:8000/social-login/google/", {access_token: res.access_token}).then((res) => {
  //         console.log(res)
  //         axios.get('http://127.0.0.1:8000/auth/user/', {headers:{"Authorization": `Bearer ${res.data.access_token}`}}).then((res)=>
  //         {
  //             console.log(res.data.first_name)
  //             // this.user = res.data.first_name
  //             this.user = res.data
  //         }
  //         )

  //     })

  // }
 },
};
</script>
<style scoped>
.navigation {
 background-color: var(--tertiary);
 width: 100%;
 height: 9vh;
 display: flex;
 justify-content: space-evenly;
 align-items: center;
 align-self: stretch;
 margin: 0 auto;
 position: fixed;
 z-index: 100;
 padding: 1rem;
 transform: translate3d(0, 0, 0);
 transition: 0.1s all ease-out;
}
.routers {
 width: 40%;
 display: flex;
 justify-content: space-between;
}
.navbar.navbar--hidden {
 box-shadow: none;
 transform: translate3d(0, -100%, 0);
}
#logo {
 font-size: var(--h2);
 color: var(--white);
 transition: all 1s ease-in-out;
 -webkit-transition: all 1s ease-in-out;
}

.link {
 font-size: var(--h4);
}

.link:hover {
 color: var(--tertiary);
}

.navigation {
 transform: translateY(0);
 transition: transform 300ms linear;
}
.navigation.is-hidden {
 transform: translateY(-100%);
}
</style>
