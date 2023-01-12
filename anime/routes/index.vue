  <template>
    <div id="home">
      <Carosaul/>
      <!-- <TrendingBox/> -->
    </div>
  </template>
  
  <script lang="ts">
  import TrendingBox from '../components/homepage/TrendingBox.vue';
  import Carosaul from '../components/homepage/Carosaul.vue';

  export default ({
    name: 'IndexPage',
    components:{
      Carosaul,
     TrendingBox
    },
  })
  </script>
  <style scoped>

  </style>