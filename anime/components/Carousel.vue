<template>
<div class="Carousel">
    <div class="Space">
        <button class="BTN" @click="LeftMovement">.</button>
        <div class="Carousel-Item" v-for="Card in Cards" :key="Card">
            <h2> {{Card.Title}} </h2>
            <h3> {{Card.Description}} </h3>
            <img class="Img" src="Card.ImgLink" alt="TBD"/>
        </div>
        <button class="BTN" @click="RightMovement">.</button>
    </div>
</div>
</template>

<script>

export default {
    name: "Carousel",
    data () {
        return {
            ItemLength: {},
            Cards: [
                {
                    Title:"Title of Anime",
                    Description:"(Synopsis of Anime)",
                    ImgLink:"https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg",
                },
                {
                    Title:"Title of Anime",
                    Description:"(Synopsis of Anime)",
                    ImgLink:"https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg",
                },
                {
                    Title:"Title of Anime",
                    Description:"(Synopsis of Anime)",
                    ImgLink:"https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg",
                },
            ]
            }
    },
    methods: {
        Setup () {
            var ItemLength = this.CarouselItem.length 
            //Code for inputting the length of a carousel item (Currently not working/Needs Reworking)
        },
        RightMovement () {
            CarouselItem.transform = translateX(this.ItemLength)
            //Code for moving the carousel items right 
        },
        LeftMovement () {
            CarouselItem.transform = translateX(-this.ItemLength)
            //Code for moving the carousel items left (Needs Reworking)
        },
    },
}
</script>

<style scoped>
.Img {
    height: 55%;
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
    width: 100%;
    height: 55%;
    display: inline-flex;
}
</style>

