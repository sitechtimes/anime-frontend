<template>
    <section id="nav" class="nav">
        <nav class="navigation" :class="{ 'is-hidden': !showHeader }">
            <h1 id="logo">
                <NuxtLink to="/">Technime</NuxtLink></h1>       
                <SearchBar/>
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
                <GoogleLogin :callback="callback" popup-type="TOKEN">
                    <button class="log-in button">Log In</button>
                </GoogleLogin>
               
            </ul>
        </nav>

    </section>
</template>
<script lang="ts">
import SearchBar from './SearchBar.vue'
import axios from "axios"

  export default ({
    name: 'NavBar',
    components:{
        SearchBar
    },   
    data: () => ({
    showHeader: true,
    lastScrollPosition: 0,
    scrollOffset: 40,
  }),
  mounted() {
    this.lastScrollPosition = window.pageYOffset
    window.addEventListener('scroll', this.onScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    // Toggle if navigation is shown or hidden
    onScroll() {
      if (window.pageYOffset < 0) {
        return
      }
      if (Math.abs(window.pageYOffset - this.lastScrollPosition) < this.scrollOffset) {
        return
      }
      this.showHeader = window.pageYOffset < this.lastScrollPosition
      this.lastScrollPosition = window.pageYOffset
    },
    callback(res: any) {
        console.log(res.access_token)
        // axios.post("http://localhost:8000/social-login/google/", {access_token: res.access_token})
        
    }
}
    })
</script>
<style scoped>
.navigation{
    background-color:var(--tertiary);
    width:100%;
    height:9vh;
    display:flex;
    justify-content:space-evenly;
    align-items:center;
    align-self: stretch;
    margin:0 auto;
    position:fixed;
    z-index:100;
    padding:1rem;
    transform: translate3d(0, 0, 0);
    transition: 0.1s all ease-out;
}
.navbar.navbar--hidden {
  box-shadow: none;
  transform: translate3d(0, -100%, 0);
}
    #logo{
        font-size: var(--h2);
        color:var(--white);
        transition: all 1s ease-in-out;-webkit-transition: all 1s ease-in-out;
    }
    .routers{
        width:40%;
        display:flex;
        justify-content:space-between;
    }
   ul, li, a{
        text-decoration: none;
        list-style-type: none;
        color:var(--white);
        transition: background 1s ease-in-out;-webkit-transition: background 1s ease-in-out;
    }
    .link{
        font-size: var(--h4);
    }
    /* #logo:hover{
        text-shadow:
    0 0 7px var(--tertiary),
    0 0 7px var(--tertiary),
    0 0 11px var(--tertiary),
    0 0 22px var(--primary),
    0 0 32px var(--primary),
    0 0 42px var(--primary),
    0 0 82px var(--primary),
    0 0 92px var(--primary);
    } */
    .link:hover{
        color:var(--tertiary); 
    }
    .button{
        background: var(--primary);
        border-radius: 25px;
        font-style: normal;
        font-weight: var(--fw-bold);
        font-size: var(--h4);
        text-align: center;
        color: var(--dark-text);
        border:0;
        padding:1rem 3rem;
        transition: background 1s ease-in-out;-webkit-transition: background 1s ease-in-out;
	    cursor: pointer;
    }
    .button:hover{
        background: linear-gradient(84.66deg, var(--primary) 2.58%, var(--alt-linear) 97.55%);
    }
    .navigation {
        transform: translateY(0);
        transition: transform 300ms linear;
    }
    .navigation.is-hidden {
        transform: translateY(-100%);
    }
        
</style>