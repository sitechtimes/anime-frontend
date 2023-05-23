<template>
    <div id="child">
      <ActualVoting
      :awardName="id"
      />
      <!-- <p>asdsad: {{ id }}</p> -->
    </div>
  </template>
  
  <script setup lang="ts">
  import ActualVoting from '../../components/awardspage/ActualVoting.vue'

  // const {awardName} = useRoute().params
  const route = useRoute()
  const id = route.params.id



  
//   export default ({
//     name: 'vote',
//     components:{
//       ActualVoting,
//     },
//     setup() {
//         const { awardName } = useRoute().params
//     }
//   })
  </script>
  
  <style scoped>
  </style>