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
}
</script>

<style scoped>
.img {
    float: right;
    height: 100px;
    vertical-align: middle;
}
.left-btn {
    float: left;
    margin: 5%;
    color: var(--white);
    background-color: unset;
    border: 1px solid var(--white);
}
.right-btn {
    float: right;
    margin: 5%;
    color: var(--white);
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
    margin: 3%;
    padding: 0%;
    overflow: hidden;
    color: var(--white);
    flex-direction: row;
    background-color: var(--tertiary);
}
.carouselitem {
    width: 65%;
    height: 50%;
    margin: 25px;
    display: inline-block;
}
</style>

