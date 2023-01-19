  <template>
    <div id="home">
      <span class="underNav"></span>
      <Carousel/>
      <TrendingBox/>
    </div>
  </template>
  
  <script lang="ts">
  import TrendingBox from '../components/homepage/TrendingBox.vue';
  import Carousel from '../components/homepage/Carousel.vue';

  export default ({
    name: 'IndexPage',
    components:{
      Carousel,
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