<template>
<div class="carousel">
    <div class="space">
        <button class="btn" @click="LeftMovement">.</button>
        <div class="carousel-item" v-for="Card in Cards" :key="Card">
            <h1 class="text"> {{Card.Title}} </h1>
            <h3 class="text"> {{Card.Description}} </h3>
            <img class="img" :src="Card.ImgLink" alt="TBD"/>
        </div>
        <button class="btn" @click="RightMovement">.</button>
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
                    Title:"Title",
                    Description:"(Synopsis)",
                    ImgLink:"https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg",
                },
                {
                    Title:"Title",
                    Description:"(Synopsis)",
                    ImgLink:"https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg",
                },
                {
                    Title:"Title",
                    Description:"(Synopsis)",
                    ImgLink:"https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg",
                },
            ]
            }
    },
    methods: {
        Setup () {
            ItemLength = this.Card.width 
            //Code for inputting the length of a carousel item (Currently not working/Needs Reworking)
        },
        RightMovement () {
            Cards.transform = translateX(this.ItemLength)
            //Code for moving the carousel items right (Needs Reworking)
        },
        LeftMovement () {
            Cards.transform = translateX(-this.ItemLength)
            //Code for moving the carousel items left (Needs Reworking)
        },
    },
}
</script>

<style scoped>
.img {
    height: 100px;
    float:inline-end;
}
.btn {
    color: var(white);
}
.text {
    color: var(white);
    float: inline-start;
}
.Space {
    white-space: nowrap;
}
.carousel {
    margin: 0%;
    padding: 0%;
    overflow: hidden;
    flex-direction: row;
}
.carousel-item {
    width: 100%;
    height: 55%;
    align-self: center;
    margin: 25px;
    display: inline-block;
}
</style>

