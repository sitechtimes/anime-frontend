<template>
    <div id="awards">
      <AwardVoting/>
  </div>
</template>
  
<script lang="ts">
  import AwardVoting from '../components/AwardVoting.vue'

  export default ({
    name: 'awards',
    components:{
      AwardVoting
    }
  })
</script>

<style scoped>
 
</style>