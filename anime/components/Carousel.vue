<template>
<div class="carousel">
    <div class="carousel-slide">
    <input type="radio" name="btn" id="item-1" checked />
    <div class="carousel-display">
        <div class="carousel-item" v-for="APart in AParts" :key="APart">
            <h1 class="text"> {{APart.Title}} </h1>
            <h3 class="text"> {{APart.Description}} </h3>
            <img class="img" :src="APart.ImgLink" alt="TBD"/>
        </div>
        <div class="controls">
            <label for="item-3" class="left-item">
                <span>&#8249;</span>
            </label>
            <label for="item-2" class="right-item">
                <span>&#8250;</span>
            </label>
        </div>
    </div>
    <input type="radio" name="btn" id="item-2"/>
    <div class="carousel-display">
        <div class="carousel-item" v-for="BPart in BParts" :key="BPart">
            <h1 class="text"> {{BPart.Title}} </h1>
            <h3 class="text"> {{BPart.Description}} </h3>
            <img class="img" :src="BPart.ImgLink" alt="TBD"/>
        </div>
        <div class="controls">
            <label for="item-1" class="left-item">
                <span>&#8249;</span>
            </label>
            <label for="item-3" class="right-item">
                <span>&#8250;</span>
            </label>
        </div>
    </div>
    <input type="radio" name="btn" id="item-3"/>
    <div class="carousel-display">
        <div class="carousel-item" v-for="CPart in CParts" :key="CPart">
            <h1 class="text"> {{CPart.Title}} </h1>
            <h3 class="text"> {{CPart.Description}} </h3>
            <img class="img" :src="CPart.ImgLink" alt="TBD"/>
        </div>
        <div class="controls">
            <label for="item-2" class="left-item">
                <span>&#8249;</span>
            </label>
            <label for="item-1" class="right-item">
                <span>&#8250;</span>
            </label>
        </div>
    </div>
</div>
</div>
</template>

<script>

export default {
    name: "Carousel",
    data () {
        return {
            AParts: [
                {
                    Title:"Title (1)",
                    Description:"(Synopsis)",
                    ImgLink:"https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg",
                },
            ],
            BParts: [
                {
                    Title:"Title (2)",
                    Description:"(Synopsis)",
                    ImgLink:"https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg",
                },
            ],
            CParts: [
                {
                    Title:"Title (3)",
                    Description:"(Synopsis)",
                    ImgLink:"https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg",
                },
            ],
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
.text {
    float: inline-start;
    text-align: center;
    vertical-align: middle;
}
input {
    display: none;
}
.controls label{
    display: none;
    position: absolute;
    padding: 0;
    opacity: 0;
}
.controls label:hover {
    opacity: 1;
}
.controls .left-item {
    text-align: left;
    left: 0;
}
.controls .right-item {
    text-align: right;
    right: 0;
}
.carousel {
    margin: 3%;
    padding: 0%;
    color: var(--white);
    flex-direction: row;
    background-color: var(--tertiary);
}
.carousel-item {
    width: 65%;
    height: 50%;
    margin: 25px;
    display: block;
    position: absolute;
}
.carousel-slide {
    margin: 0;
    padding: 0;
    display: block;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
}
.carousel-display {
    display: block;
}
</style>

