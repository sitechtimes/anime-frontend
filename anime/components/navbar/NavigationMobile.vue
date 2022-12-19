<template>
<div id="mobile">
    <div class="menu" v-class="{close: isClose}">
          <ul class="mq-routers">
                <li class="link" v-on:click="toggleOn()">
                    <NuxtLink to="/awards" class="link-href">Awards</NuxtLink>
                </li>
                <li class="link" v-on:click="toggleOn()">
                    <NuxtLink to="/ranking" class="link-href">Rankings</NuxtLink>
                </li>
                <li class="link" v-on:click="toggleOn()">
                    <NuxtLink to="/history" class="link-href">History</NuxtLink>
                </li>
                <button class="log-in button" v-on:click="toggleOn()">Log In</button>
            </ul>
        </div>
        <div class="nav-mobile">
           <div class="navigation-icon" v-on:click="toggleOn()">
          <div class="burger1 change"></div>
          <div class="burger2 change"></div>
          <div class="burger3 change"></div>
        </div>
          <h1 id="logo">
          <NuxtLink to="/">Technime</NuxtLink></h1>
          <button class="log-in button">Log In</button>
        </div>
       
</div>
</template>

<script>
export default {
    data(){
      return{
        isClose: true,
        // menuBoolean: true,
      }
    },
    methods:{
      toggleOn() {
        const navIcon = document.querySelector(`.navigation-icon`);
        const menu = document.querySelector(`.menu`);
        this.isClose = !this.isClose
        navIcon.classList.toggle("change");
        menu.classList.toggle("close");
      },
    }
}
</script>

<style>
.nav-mobile{
    background-color:var(--tertiary);
    width:100%;
    height:9vh;
    display:flex;
    justify-content:space-between;
    align-items:center;
    align-self: stretch;
}
.log-in{
  margin-right:2rem;
}
 .burger1,
  .burger2,
  .burger3{
    width: 35px;
  height: 5px;
  background-color: white;
  margin: 6px 0;
  transition: .25s;
  z-index:2000;

  }
  #logo{
        font-size: var(--h3);
        color:var(--white);
        transition: all 1s ease-in-out;-webkit-transition: all 1s ease-in-out;
    }
  .change{
    z-index:2000;
  }
  .change .burger1 {
    position: relative;
  transform: translate(0, 16px) rotate(-45deg);
}

  .change .burger2 {opacity: 0;}

  .change .burger3 {
    position: absolute;
    transform: translate(0, -11px) rotate(45deg);
  }
  div .close {
    transform: translateX(110%);
    z-index:1999;
  }
  .navigation-icon{
    cursor:pointer;
    margin-left:2rem;
  }
  .menu{
    background-color: var(--bg-primary);
    overflow: hidden;
    width:100%;
    height:100%;
    left:-110%;
    position:fixed;
    color: var(--white);
    transition:.5s;
    z-index:-1;
  }
  .mq-routers{
    display:flex;
    height:50%;
    width:80%;
    flex-direction: column;
    color: var(--white);
    font-size:var(--h3);
    justify-content: center;
    align-items: center;

  }
</style>