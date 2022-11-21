<template>
  <div id="anime">
    <NavBar/>
    <SearchBar/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// import ComponentVue from '../components/Component.vue'
import NavBar from '../components/NavBar.vue'
import SearchBar from '../components/SearchBar.vue'

export default Vue.extend({
  name: 'IndexPage',
  components:{
    // ComponentVue
    NavBar,
    SearchBar
  },
})
</script>
<style>
@import url("../assets/global.css");
.ex{
  background-color: var(--primary);
}
</style>