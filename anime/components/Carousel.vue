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
    </div>
    <input type="radio" name="btn" id="item-2"/>
    <div class="display">
        <div class="carousel-slide slide-02">
            <h2 class="text"> Jujutsu Kaisen </h2>
            <h4 class="text"> Synopsis </h4>
            <img class="img" src="https://th.bing.com/th/id/OIP.mblZRlAplxkavD9u4ZgS2AHaD5?pid=ImgDet&rs=1" alt="Img of Jujutsu Kaisen"/>
        </div>
    </div>
    <input type="radio" name="btn" id="item-3"/> 
    <div class="display">
        <div class="carousel-slide slide-03">
            <h2 class="text"> Burning Kabaddi </h2>
            <h4 class="text"> Synopsis </h4>
            <img class="img" src="https://th.bing.com/th/id/OIP.pNP5th6ouY4RBF-LEKpskAHaJE?pid=ImgDet&rs=1" alt="Img of Burning Kabaddi"/>
        </div>
    <div class="dots">
        <label class="dot dot-01" ></label>
        <label class="dot dot-02" ></label>
        <label class="dot dot-03" ></label>
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
h4 {
    max-width: 48%;
    white-space: normal;
    font-size: var(--h4);
    display: inline-block;
    overflow-wrap: break-word;
}
.img {
    width: 45%;
    height: 75%;
    float: right;
    display: inline;
    margin-right: 1.5%;
} 
/* Note: Dots have yet to be properly vertically aligned  */
.dots { 
    left: 0;
    right: 0;
    top: 63.5%;
    z-index: 5;
    /* bottom: 30rem; */
    position: absolute;
    text-align: center;
} 
.dots .dot {
    opacity: 0.25;
    width: 2.5rem;
    height: 2.5rem;
    margin: 0.75rem;
    border-radius: 50%; 
    display: inline-block;
    background-color: var(--white);
}
.text {
    clear: none;
    margin-left: 1.5%;
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
.carousel {
    padding: 0%;
    margin: 2.55%;
    overflow: hidden;
    flex-direction: row;
}
.carousel-slide {
    opacity: 0;
    z-index: 0;
    width: 92%;
    height: 65%;
    padding: 0.25%;
    display: block;
    position: absolute;
    margin-left: 1.75%;
    margin-right: 1.75%;
    background-color: var(--tertiary);
}
@keyframes auto-dot {
    0%, 33% {
        opacity: 1;
    }
    34%, 100% {
        opacity: 0.25;
    }
}
@keyframes auto-carousel {
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
.dot-01 {
    animation: auto-dot 18s ease-in-out 0s infinite normal none running;
}
.dot-02 {
    animation: auto-dot 18s ease-in-out 6s infinite normal none running;
}
.dot-03 {
    animation: auto-dot 18s ease-in-out 12s infinite normal none running;
}
.slide-01 {
    animation: auto-carousel 18s ease-in-out 0s infinite normal none running;
}
.slide-02 {
    animation: auto-carousel 18s ease-in-out 6s infinite normal none running;
}
.slide-03 {
    animation: auto-carousel 18s ease-in-out 12s infinite normal none running;
}
</style>

