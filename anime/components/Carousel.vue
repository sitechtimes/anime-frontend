<template>
<div class="Carousel">
    <div class="Space">
        <button @click="Previous">Prev</button>
        <div class="CarouselItem">
            <h2 class="Title">Title of Anime</h2>
            <h3 class="Synopsis">Description</h3>
            <img src="https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg" alt="Img of Anime"/>
        </div>
        <div class="CarouselItem">
            <h2 class="Title">Title of Anime</h2>
            <h3 class="Synopsis">Description</h3>
            <img src="https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg" alt="Img of Anime"/>
        </div>
        <div class="CarouselItem">
            <h2 class="Title">Title of Anime</h2>
            <h3 class="Synopsis">Description</h3>
            <img src="https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg" alt="Img of Anime"/>
        </div>
        <button @click="Next">Next</button>
    </div>
</div>
</template>

<script>

export default {
    name: "Carousel",
    data () {
        return {}
    }
}
</script>

<style scoped>
h2, h3 {
    color: var(--white);
}
.Carousel {
    overflow: hidden;
}
.Space {
    white-space: nowrap;
}
.CarouselItem {
    display: inline-flex;
}
</style>

