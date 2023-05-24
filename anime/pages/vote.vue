<template>
  <div id="child">
    <ActualVoting/>
  </div>
</template>

<script lang="ts">
import ActualVoting from '../../components/awardspage/ActualVoting.vue'

export default ({
  name: 'vote',
  components:{
    ActualVoting,
  }
})
</script>

<style scoped>

</style>