<template>
    <div id="awards">
      <Banner/>
      <AwardVoting/>
    </div>
  </template>
  
<script lang="ts">
import Banner from '../components/awardspage/Banner.vue'
import AwardVoting from '../components/awardspage/AwardVoting.vue'

export default({
  name: 'awards',
  components:{
    Banner,
    AwardVoting
  }
})
</script>

<style scoped>
 
</style>