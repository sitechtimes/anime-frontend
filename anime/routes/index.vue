<template>
    <div id="home">
        <span class="underNav"></span>
        <Carousel />
        <Home />
        <footer class="footer"></footer>
    </div>
</template>

<script lang="ts">
import Home from "../components/homepage/Home.vue";
import Carousel from "../components/homepage/Carousel.vue";

export default {
    name: "IndexPage",
    components: {
        Carousel,
        Home,
    },
};
</script>
<style scoped>
/* undernavigation  */
.underNav {
    width: 100vw;
    height: 37vh;
    display: block;
}
.footer {
    width: 100vw;
    height: 5vw;
    display: block;
}
</style>
