  <template>
    <div id="home">
      <TrendingBox/>
    </div>
  </template>
  
  <script lang="ts">
  import TrendingBox from '../components/homepage/TrendingBox.vue'

  export default ({
    name: 'home',
    components:{
     TrendingBox
      
    },
  })
  </script>
  <style scoped>
  .ex{
    background-color: var(--primary);
  }
  h1{
    font-size:var(--h1)
  }
  </style>