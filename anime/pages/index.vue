<template>
  <div id="anime">
    <NavBar/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// import ComponentVue from '../components/Component.vue'
import NavBar from '../components/NavBar.vue'

export default Vue.extend({
  name: 'IndexPage',
  components:{
    // ComponentVue
    NavBar
  },

})
</script>
<style>
@import url("../assets/global.css");
.ex{
  background-color: var(--primary);
}
</style>