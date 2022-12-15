<template>
<div class="carousel">
    <div class="slides">
    <input type="radio" name="btn" id="item-1" checked/>
    <div class="display">
        <div class="carousel-slide slide-01">
            <h2 class="text"> Blue Lock </h2>
            <h3 class="text"> Soccer Anime </h3>    
<!-- No Img Avaliable Link: https://t3.ftcdn.net/jpg/04/34/72/82/360_F_434728286_OWQQvAFoXZLdGHlObozsolNeuSxhpr84.jpg -->
            <img class="img" src="https://th.bing.com/th/id/R.e4651a3a9eed4e1e43044e638b076e1f?rik=KXg2eMKBaDhnOQ&pid=ImgRaw&r=0" alt="Img of Blue Lock"/>
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
        <div class="carousel-slide slide-02">
            <h2 class="text"> Jujutsu Kaisen </h2>
            <h3 class="text"> Supernatural Anime </h3>
            <img class="img" src="https://th.bing.com/th/id/OIP.mblZRlAplxkavD9u4ZgS2AHaD5?pid=ImgDet&rs=1" alt="Img of Jujutsu Kaisen"/>
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
        <div class="carousel-slide slide-03">
            <h2 class="text"> Burning Kabaddi </h2>
            <h3 class="text"> Kabaddi Anime (The sport exists irl) </h3>
            <img class="img" src="https://th.bing.com/th/id/OIP.pNP5th6ouY4RBF-LEKpskAHaJE?pid=ImgDet&rs=1" alt="Img of Burning Kabaddi"/>
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
    display: block;
    font-size: var(--h2);
}
h3 {
    max-width: 48%;
    white-space: normal;
    font-size: var(--h3);
    display: inline-block;
    overflow-wrap: break-word;
}
.img {
    width: 50%;
    float: right;
    display: inline;
    max-height: 77%;
    margin-right: 3%;
}
.text {
    clear: none;
    margin-left: 4%;
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
    opacity: 0;
    display: none;
    padding: 0 2rem;
    /* cursor: pointer; */
    font-size: 3.75rem;
    position: absolute;
    color: var(--white);
    margin: 11.5% 3.5% 11.5% 3.5%;
}
/* .controls label:hover {
    opacity: 1;
} */
.carousel {
    margin: 2.5%;
    padding: 0%;
    overflow: hidden;
    flex-direction: row;
}
.carousel-slide {
    opacity: 0;
    z-index: 0;
    height: 63%;
    width: 91.5%;
    padding: 0.5%;
    display: block;
    margin-left: 1.8%;
    margin-right: 1.8%;
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
input:checked + .display .carousel-slide {
    opacity: 1;
    z-index: 1;
    transition: 1.11s ease-in-out;
}
/* @keyframes test {
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
} */
@keyframes auto {
    0%, 32% {
        z-index: 2;
        opacity: 1;
    }
    33%, 84% {
        z-index: 0;
        opacity: 0;
    }
    85%, 100% {
        z-index: 2;
        opacity: 1;
    }
}
/* animation: name duration timing-function delay iteration-count direction fill-mode play-state; */
.slide-01 {
    animation: auto 15s linear 0s infinite normal none running;
}
.slide-02 {
    animation: auto 15s linear 4s infinite normal none running;
}
.slide-03 {
    animation: auto 15s linear 8s infinite normal none running;
}
</style>
