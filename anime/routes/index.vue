  <template>
    <div id="home">
      <span class="underNav"></span>
      <Carousel/>
      <!-- <TrendingBox/> -->
      <footer class="footer"></footer>
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
  width: 100vw;
  height: 37vh;
  display: block;
}
.footer{
  width: 100vw;
  height: 5vh;
  display: block;
}
@media screen and (max-width: 550px) {
.underNav {
  height: 18vh;
}
}
  </style>