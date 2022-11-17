<template>
<div class="carousel">
    <button class="left-btn" @click="Left">&#8249;</button>
    <div class="space">
        <div class="carouselitem" v-for="Card in Cards" :key="Card">
            <h1 class="text"> {{Card.Title}} </h1>
            <h3 class="text"> {{Card.Description}} </h3>
            <img class="img" :src="Card.ImgLink" alt="TBD"/>
        </div>
    </div>
    <button class="right-btn" @click="Right">&#8250;</button>
</div>
</template>

<script>

export default {
    name: "Carousel",
    data () {
        return {
            Width: '',
            Length: '',
            Itemlength: '',
            Movement: {},
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
        Setup () { //Code for inputting the length of a carousel item (Needs Reworking)
            this.Width = this.space.scrollWidth
            this.Length = this.Cards.length 
            this.ItemLength = `${ this.Width / this.Length }px`
        },
        Right () { //Code for moving the carousel items right (Needs Reworking)
            this.Movement = {
                transform: `translateX(${this.ItemLength})`
            }
        },
        Left () { //Code for moving the carousel items left (Needs Reworking)
            this.Movement = {
                transform: `translateX(-${this.ItemLength})`
            }
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
    size: 2rem;
    float: left;
    margin-left: 5%;
    background-color: unset;
    border: 1px solid var(--white);
}
.right-btn {
    size: 2rem;
    float: right;
    margin-right: 5%;
    background-color: unset;
    border: 1px solid var(--white);
}
.text {
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
    color: var(--white);
    flex-direction: row;
}
.carouselitem {
    width: 65%;
    height: 50%;
    margin: 25px;
    display: inline-block;
}
</style>

