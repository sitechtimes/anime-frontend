<template>
<div class="Carousel">
    <div class="Space">
        <button @click="Previous">.</button>
        <div class="Carousel-Item" v-for="Card in Cards" :key="Card">
            <div class="Title"> {{Card.Title}} </div>
            <div class="Text"> {{Card.Description}} </div>
            <img src="" alt="TBD"/>
        </div>
        <button @click="Next">.</button>
    </div>
</div>
</template>

<script>

export default {
    name: "Carousel",
    data () {
        return {
            Cards: [
                {
                    Title:"Title of Anime",
                    Description:"(Synopsis)",
                    ImgLink:"",
                },
                {
                    Title:"Title of Anime",
                    Description:"(Synopsis)",
                    ImgLink:"",
                },
                {
                    Title:"Title of Anime",
                    Description:"(Synopsis)",
                    ImgLink:"",
                },
            ]
            }
    }
}
</script>

<style scoped>
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

