<template>
<div class="carousel">
    <button class="left-btn" @click="LeftMovement">&#8249;</button>
    <div class="space">
        <div class="carouselitem" v-for="Card in Cards" :key="Card">
            <h1 class="text"> {{Card.Title}} </h1>
            <h3 class="text"> {{Card.Description}} </h3>
            <img class="img" :src="Card.ImgLink" alt="TBD"/>
        </div>
    </div>
    <button class="right-btn" @click="RightMovement">&#8250;</button>
</div>
</template>

<script>

export default {
    name: "Carousel",
    data () {
        return {
            Itemlength: {},
            Cards: [
                {
                    Title:"Title (1)",
                    Description:"(Synopsis)",
                    ImgLink:"https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg",
                },
                {
                    Title:"Title (2)",
                    Description:"(Synopsis)",
                    ImgLink:"https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg",
                },
                {
                    Title:"Title (3)",
                    Description:"(Synopsis)",
                    ImgLink:"https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg",
                },
            ]
            }
    },
    methods: {
        Setup () {
            this.ItemLength = this.carouselitem.width 
            //Code for inputting the length of a carousel item (Currently not working/Needs Reworking)
        },
        RightMovement () {
            this.Card.transform = translateX(this.ItemLength)
            //Code for moving the carousel items right (Needs Reworking)
        },
        LeftMovement () {
            this.Card.transform = translateX(-this.ItemLength)
            //Code for moving the carousel items left (Needs Reworking)
        },
    },
}
</script>

<style scoped>
.img {
    float: right;
    height: 100px;
}
.left-btn {
    float: left;
    margin-left: 5%;
    margin-top: 10.845%;
    color: var(--white);
    background-color: unset;
    border: 2px solid var(--white);
}
.right-btn {
    float: right;
    margin-right: 5%;
    color: var(--white);
    background-color: unset;
    border: 2px solid var(--white);
}
.text {
    color: var(--white);
    float: inline-start;
    text-align: center;
    vertical-align: middle;
}
.space {
    white-space: nowrap;
}
.carousel {
    margin: 0%;
    padding: 0%;
    overflow: hidden;
    flex-direction: row;
}
.carouselitem {
    width: 65%;
    height: 50%;
    margin: 25px;
    display: inline-block;
}
</style>

