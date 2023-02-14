<template>
<div id="mobile">
    <div class="menu" v-class="{ close: isClose }">
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
.nav-mobile {
  width: 100%;
  height: 9vh;
  display: flex;
  align-items: center;
  align-self: stretch;
  justify-content: space-between;
  background-color: var(--tertiary);
}
.log-in {
  width: 25%;
  margin-right: 2rem;
}
.burger1,
.burger2,
.burger3 {
  width: 35px;
  height: 5px;
  margin: 6px 0;
  z-index: 2000;
  transition: .25s;
  background-color: white;
}
#logo {
  color: var(--white);
  font-size: var(--h3); 
  transition: all 1s ease-in-out;        
  -webkit-transition: all 1s ease-in-out;
}
.change {
  z-index: 2000;
}
.change .burger1 {
  position: relative;
  transform: translate(0, 16px) rotate(-45deg);
}
.change .burger2 { 
  opacity: 0;
}
.change .burger3 {
  position: absolute;
  transform: translate(0, -11px) rotate(45deg);
}
div .close {
  z-index: 1999;
  transform: translateX(110%);
}
.navigation-icon {
  cursor: pointer;
  margin-left: 2rem;
}
.menu {
  z-index: -1;
  left: -110%;
  width: 100%;
  height: 100%;
  position: fixed;
  transition: .5s;
  overflow: hidden;
  color: var(--white);
  background-color: var(--bg-primary);
}
  .mq-routers{
  width: 90%;
  height: 50%;
  display: flex;
  margin-top: 4%;
  margin-bottom: 4%;
  align-items: center;
  color: var(--white);
  font-size: var(--h3);
  flex-direction: column;
  justify-content: center;
}
</style>