  <template>
    <div id="home">
      <span class="underNav"></span>
      <Carosaul/>
      <TrendingBox/>
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
    /* undernavigation  */
    .underNav{
  width:100vw;
  height:37vh;
  display:block;
}
  </style>