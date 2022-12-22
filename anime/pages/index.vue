<template>
  <div id="anime">
    <Carousel/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// import ComponentVue from '../components/Component.vue'
import Carousel from '../components/Carousel.vue'

export default Vue.extend({
  name: 'IndexPage',
  components:{
    // ComponentVue
    Carousel
  }
})
</script>

<style>
@import url("../assets/global.css");
.ex{
  background-color: var(--primary);
}
</style>