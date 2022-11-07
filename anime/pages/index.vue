<template>
  <div id="anime">
    <SearchBar/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SearchBar from '../components/SearchBar.vue'

export default Vue.extend({
  name: 'IndexPage',
  components:{
    SearchBar
  }
})
</script>
<style>
@import url("../assets/global.css");
.ex{
  background-color: var(--primary);
}
</style>