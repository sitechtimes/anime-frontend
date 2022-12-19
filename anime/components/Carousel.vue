<template>
<div class="carousel">
    <div class="slides">
    <input type="radio" name="btn" id="item-1"/>
    <div class="display">
        <div class="carousel-slide slide-01">
            <h2 class="text"> Blue Lock </h2>
            <h4 class="text"> Synopsis </h4>    
            <img class="img" src="https://th.bing.com/th/id/R.e4651a3a9eed4e1e43044e638b076e1f?rik=KXg2eMKBaDhnOQ&pid=ImgRaw&r=0" alt="Img of Blue Lock"/>
        </div>
        <!-- <div class="controls">
            <label for="item-3" class="left">
                <span> &#8249; </span>
            </label>
            <label for="item-2" class="right">
                <span> &#8250; </span>
            </label>
        </div> -->
    </div>
    <input type="radio" name="btn" id="item-2"/>
    <div class="display">
        <div class="carousel-slide slide-02">
            <h2 class="text"> Jujutsu Kaisen </h2>
            <h4 class="text"> Synopsis </h4>
            <img class="img" src="https://th.bing.com/th/id/OIP.mblZRlAplxkavD9u4ZgS2AHaD5?pid=ImgDet&rs=1" alt="Img of Jujutsu Kaisen"/>
        </div>
        <!-- <div class="controls">
            <label for="item-1" class="left">
                <span> &#8249; </span>
            </label>
            <label for="item-3" class="right">
                <span> &#8250; </span>
            </label>
        </div> -->
    </div>
    <input type="radio" name="btn" id="item-3"/> 
    <div class="display">
        <div class="carousel-slide slide-03">
            <h2 class="text"> Burning Kabaddi </h2>
            <h4 class="text"> Synopsis </h4>
            <img class="img" src="https://th.bing.com/th/id/OIP.pNP5th6ouY4RBF-LEKpskAHaJE?pid=ImgDet&rs=1" alt="Img of Burning Kabaddi"/>
        </div>
        <!-- <div class="controls">
            <label for="item-2" class="left">
                <span> &#8249; </span>
            </label>
            <label for="item-1" class="right">
                <span> &#8250; </span>
            </label>
        </div> -->
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
h4 {
    max-width: 48%;
    white-space: normal;
    font-size: var(--h4);
    display: inline-block;
    overflow-wrap: break-word;
}
.img {
    width: 44%;
    float: right;
    display: inline;
    max-height: 80%;
    margin-right: 2%;
}
.text {
    clear: none;
    margin-left: 2%;
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
/* .controls .left {
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
    padding: 0;
    display: none;
    font-size: 3.75rem;
    position: absolute;
    color: var(--white);
    margin: 11.5% 4.5% 11.5% 4.5%;
}
.controls label:hover {
    opacity: 1;
} */
.carousel {
    padding: 0%;
    margin: 2.25%;
    overflow: hidden;
    flex-direction: row;
}
.carousel-slide {
    opacity: 0;
    z-index: 0;
    width: 92%;
    height: 60%;
    padding: 0.35%;
    display: block;
    position: absolute;
    margin-left: 1.75%;
    margin-right: 1.75%;
    transition: all .75s ease-in-out;
    background-color: var(--tertiary);
}
@keyframes auto {
    0%, 33% {
        z-index: 2;
        opacity: 1;
    }
    34%, 100% {
        z-index: 0;
        opacity: 0;
    }
}
/* animation: name duration timing-function delay iteration-count direction fill-mode play-state; */
.slide-01 {
    animation: auto 18s ease-in-out 0s infinite normal none running;
}
.slide-02 {
    animation: auto 18s ease-in-out 6s infinite normal none running;
}
.slide-03 {
    animation: auto 18s ease-in-out 12s infinite normal none running;
}
</style>
