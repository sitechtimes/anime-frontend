<template>
<div class="carousel">
    <div class="slides">
        <div class="carousel-slide slide-01">
            <h2 class="text"> Blue Lock </h2>  
            <h5 class="text"> Synopsis </h5>    
            <img class="img" src="https://th.bing.com/th/id/R.e4651a3a9eed4e1e43044e638b076e1f?rik=KXg2eMKBaDhnOQ&pid=ImgRaw&r=0" alt="Img of Blue Lock Characters"/>
        </div>
        <div class="carousel-slide slide-02">
            <h2 class="text"> Jujutsu Kaisen </h2>
            <h5 class="text"> Synopsis </h5>
            <img class="img" src="https://th.bing.com/th/id/OIP.mblZRlAplxkavD9u4ZgS2AHaD5?pid=ImgDet&rs=1" alt="Img of Jujutsu Kaisen Characters"/>
        </div>
        <div class="carousel-slide slide-03">
            <h2 class="text"> Burning Kabaddi </h2>
            <h5 class="text"> Synopsis </h5>
            <img class="img" src="https://th.bing.com/th/id/OIP.pNP5th6ouY4RBF-LEKpskAHaJE?pid=ImgDet&rs=1" alt="Img of Burning Kabaddi Characters"/>
        </div>
    </div>
    <div class="dots">
        <label class="dot dot-01" ></label>
        <label class="dot dot-02" ></label>
        <label class="dot dot-03" ></label>
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
h5 {
    max-width: 44%;
    white-space: normal;
    font-size: var(--h5);
    display: inline-block;
    overflow-wrap: break-word;
}
.img {
    width: 50%;
    height: 77%;
    float: right;
    display: inline;
    margin-right: 1%;
    border-radius: 10%;
} 
.dots {  
    left: 0;
    right: 0;
    top: 64.5%;
    z-index: 5;
    position: absolute;
    text-align: center;
} 
.dots .dot {
    opacity: 0.25;
    width: 2.45rem;
    height: 2.45rem;
    border-radius: 50%; 
    display: inline-block;
    margin: 0.65% 0.75% 0% 0.75%;
    background-color: var(--white);
}
.text {
    margin-left: 1%;
    color: var(--white);
}
.carousel {
    padding: 0%;
    margin: 2.5%;
    overflow: hidden;
    flex-direction: row;
}
.carousel-slide {
    opacity: 0;
    z-index: 0;
    width: 92%;
    height: 66%;
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
@keyframes auto-slide {
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
    animation: auto-dot 9s ease-in-out 0s infinite normal none running;
}
.dot-02 {
    animation: auto-dot 9s ease-in-out 3s infinite normal none running;
}
.dot-03 {
    animation: auto-dot 9s ease-in-out 6s infinite normal none running;
}
.slide-01 {
    animation: auto-slide 9s ease-in-out 0s infinite normal none running;
}
.slide-02 {
    animation: auto-slide 9s ease-in-out 3s infinite normal none running;
}
.slide-03 {
    animation: auto-slide 9s ease-in-out 6s infinite normal none running;
}
/* .slide-01 {
    animation: auto-slide 11s ease-in-out 0s infinite normal none running;
    transition: 1s all ease-in-out;
}
.slide-02 {
    animation: auto-slide 11s ease-in-out 4s infinite normal none running;
}
.slide-03 {
    animation: auto-slide 11s ease-in-out 8s infinite normal none running;
} */
</style>
