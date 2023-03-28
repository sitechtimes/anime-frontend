<template>
    <div id="home">
        <span class="underNav"></span>
        <Carousel />
        <TrendingBox />
        <footer class="footer"></footer>
    </div>
</template>

<script lang="ts">
import Carousel from "../components/homepage/Carousel.vue";
import TrendingBox from "../components/homepage/HomePage.vue";

export default {
    name: "IndexPage",
    components: {
        Carousel,
        TrendingBox,
    },
};
</script>
<style scoped>
/* undernavigation  */
.underNav {
    height: 45vh;
    display: block;
}
.footer {
    height: 5vw;
    display: block;
}
</style>
