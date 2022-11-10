<template>
<div class="Carousel">
    <div class="Space">
        <span class="BTN" @click="TBD">.</span>
        <div class="Carousel-Item" v-for="Card in Cards" :key="Card">
            <h1> {{Card.Title}} </h1>
            <h2> {{Card.Description}} </h2>
            <img class="Img" src="" alt="TBD"/>
        </div>
        <span class="BTN" @click="TBD">.</span>
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
.Img {
    height: 45%;
}
.BTN {
    margin: 5px;
}
.Space {
    white-space: nowrap;
}
.Carousel {
    margin: 0%;
    padding: 0%;
    overflow: hidden;
    text-align: center;
    color: var(--white);
    background-color: var(--bg-primary);
}
.CarouselItem {
    display: inline-flex;
}
</style>

