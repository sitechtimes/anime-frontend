  <template>
    <div id="home">
      <TrendingBox/>
      <h1>AHHAHAHAHHA</h1>
    </div>
  </template>
  
  <script lang="ts">
  import TrendingBox from '../components/homepage/TrendingBox.vue'

  export default ({
    name: 'IndexPage',
    components:{
     TrendingBox
    },
  })
  </script>
  <style scoped>
 h1{
  color:white;
  font-size: 50rem;
 }
  </style>