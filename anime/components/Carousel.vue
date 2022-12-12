<template>
<div class="carousel">
    <div class="slides">
    <input type="radio" name="btn" id="item-1" checked/>
    <div class="display">
        <div class="carousel-item slide-01">
            <h2 class="text"> Blue Lock </h2>
            <h3 class="text"> Synopsis </h3>
            <img class="img" src="https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg" alt="TBD1"/>
        </div>
        <div class="controls">
            <label for="item-3" class="left">
                <span> &#8249; </span>
            </label>
            <label for="item-2" class="right">
                <span> &#8250; </span>
            </label>
        </div>
    </div>
    <input type="radio" name="btn" id="item-2"/>
    <div class="display">
        <div class="carousel-item slide-02">
            <h2 class="text"> Jujutsu Kaisen </h2>
            <h3 class="text"> Synopsis </h3>
            <img class="img" src="https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg" alt="TBD2"/>
        </div>
        <div class="controls">
            <label for="item-1" class="left">
                <span> &#8249; </span>
            </label>
            <label for="item-3" class="right">
                <span> &#8250; </span>
            </label>
        </div>
    </div>
    <input type="radio" name="btn" id="item-3"/> 
    <div class="display">
        <div class="carousel-item slide-03">
            <h2 class="text"> Burning Kabaddi </h2>
            <h3 class="text"> Synopsis </h3>
            <img class="img" src="https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg" alt="TBD3"/>
        </div>
        <div class="controls">
            <label for="item-2" class="left">
                <span> &#8249; </span>
            </label>
            <label for="item-1" class="right">
                <span> &#8250; </span>
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
    font-size: var(--h2);
    display: block;
}
h3 {
    display: block;
    max-width: 33vw;
    white-space: normal;
    font-size: var(--h3);
    overflow-wrap: break-word;
}
.img {
    clear: both;
    height: 55%;
    margin: auto;
    float: right;
    display: block;
}
.text {
    margin-left: 10%;
    color: var(--white);
}
input {
    display: none;
}
.slides {
    white-space: nowrap;
}
.display {
    display: block;
}
.controls .left {
    left: 0;
    text-align: left;
}
.controls .right {
    right: 0;
    text-align: right;
}
.controls label { 
    z-index: 4;
    opacity: 0.45;
    display: none;
    cursor: pointer;
    padding: 0 2rem;
    font-size: 3.85rem;
    position: absolute;
    color: var(--white);
    margin: 9.5% 3.5% 9.5% 3.5%;
}
.controls label:hover {
    opacity: 1;
}
.carousel {
    margin: 3%;
    padding: 0%;
    overflow: hidden;
    flex-direction: row;
}
.carousel-item {
    opacity: 0;
    z-index: 0;
    width: 85vw;
    height: 58%;
    padding: 1%;
    display: block;
    margin-left: 5%;
    margin-right: 5%;
    position: absolute;
    transition: all .75s ease-in-out;
    background-color: var(--tertiary);
}
input:checked + .display .nav label {
    display: block;
}
input:checked + .display .controls label {
    display: block;
}
input:checked + .display .carousel-item {
    opacity: 1;
    z-index: 1;
    transition: 0.25s linear;
}
@keyframes auto {
    0% {
        z-index: 0;
        opacity: 0;
    }
    2%, 95% {
        z-index: 2;
        opacity: 1;
    }
    100% {
        z-index: 0;
        opacity: 0;
    }
}
/* animation: name duration timing-function delay iteration-count direction fill-mode play-state; */
.slide-01 {
    animation: auto 5s linear 0s 1 normal none running;
}
.slide-02 {
    animation: auto 5s linear 4s 1 normal none running;
}
.slide-03 {
    animation: auto 5s linear 8s 1 normal none running;
}
</style>
