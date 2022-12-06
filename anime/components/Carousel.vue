<template>
<div class="carousel">
    <div class="carousel-slides">
    <input type="radio" name="btn" id="item-1" />
    <div class="carousel-display">
        <div class="carousel-item">
            <h2 class="text">Title of Anime (1)</h2>
            <h3 class="text">Synopsis</h3>
            <img class="img" src="https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg" alt="TBD1"/>
        </div>
        <div class="controls">
            <label for="item-3" class="left">
                <span>&#8249;</span>
            </label>
            <label for="item-2" class="right">
                <span>&#8250;</span>
            </label>
        </div>
    </div>
    <input type="radio" name="btn" id="item-2" checked/>
    <div class="carousel-display">
        <div class="carousel-item">
            <h2 class="text">Title of Anime (2)</h2>
            <h3 class="text">Synopsis</h3>
            <img class="img" src="https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg" alt="TBD2"/>
        </div>
        <div class="controls">
            <label for="item-1" class="left">
                <span>&#8249;</span>
            </label>
            <label for="item-3" class="right">
                <span>&#8250;</span>
            </label>
        </div>
    </div>
    <input type="radio" name="btn" id="item-3"/> 
    <div class="carousel-display">
        <div class="carousel-item">
            <h2 class="text">Title of Anime (3)</h2>
            <h3 class="text">Synopsis</h3>
            <img class="img" src="https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg" alt="TBD3"/>
        </div>
        <div class="controls">
            <label for="item-2" class="left">
                <span>&#8249;</span>
            </label>
            <label for="item-1" class="right">
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
        return {}
    },
}
</script>

<style scoped>
h2 {
    margin-top: 2.5%;
    font-size: var(--h2);
}
h3 {
    font-size: var(--h3);
    word-break: break-all;
}
.img {
    height: 50%;
    float: right;
    margin-right: 6%;
    margin-bottom: 6%;
    vertical-align: middle;
}
.text {
    max-width: 45vw;
    margin-left: 20%;
    text-align: left;
    color: var(--white);
    float: inline-start;
}
input {
    display: none;
}
.controls label{ 
    padding: 0;
    opacity: 0.5;
    display: none;
    cursor: pointer;
    font-size: 3.8rem;
    position: absolute;
    color: var(--white);
    margin: 9.5% 3.5% 9.5% 3.5%;
}
.controls label:hover {
    opacity: 1;
}
.controls .left {
    left: 0;
    text-align: left;
}
.controls .right {
    right: 0;
    text-align: right;
}
.carousel {
    margin: 3%;
    padding: 0%;
    overflow: hidden;
    flex-direction: row;
}
.carousel-item {
    opacity: 0;
    width: 85vw;
    height: 55%;
    display: block;
    margin-left: 5%;
    margin-right: 5%;
    position: absolute;
    transition: all .75s ease-in-out;
    background-color: var(--tertiary);
}
.carousel-display {
    display: block;
}
.carousel-slides {
    white-space: nowrap;
}
input:checked + .carousel-display .carousel-item {
    opacity: 1;
    transform: scale(1);
    transition: 1.54s ease-in-out;
}
input:checked + .carousel-display .controls label {
    display: block;
}
input:checked + .carousel-display .nav label {
    display: block;
}
</style>

