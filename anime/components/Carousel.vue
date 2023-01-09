<template>
<div class="carousel">
        <div class="carousel-slide slide-01">
            <img class="img" src="https://th.bing.com/th/id/R.e4651a3a9eed4e1e43044e638b076e1f?rik=KXg2eMKBaDhnOQ&pid=ImgRaw&r=0" alt="Img of Blue Lock Characters"/>
            <h2 class="text"> Blue Lock </h2>  
            <h5 class="text"> Synopsis </h5>    
            <div class="dots">
                <label class="dot dot-01" ></label>
                <label class="dot dot-02" ></label>
                <label class="dot dot-03" ></label>
            </div>
        </div>
        <div class="carousel-slide slide-02">
            <img class="img" src="https://th.bing.com/th/id/OIP.mblZRlAplxkavD9u4ZgS2AHaD5?pid=ImgDet&rs=1" alt="Img of Jujutsu Kaisen Characters"/>
            <h2 class="text"> Jujutsu Kaisen </h2>
            <h5 class="text"> Synopsis </h5>
            <div class="dots">
                <label class="dot dot-01" ></label>
                <label class="dot dot-02" ></label>
                <label class="dot dot-03" ></label>
            </div>
        </div>
        <div class="carousel-slide slide-03">
            <img class="img" src="https://th.bing.com/th/id/OIP.frbPaUGvaphnnZ8AWM-T8gHaKf?pid=ImgDet&rs=1" alt="Img of Burning Kabaddi Characters"/>
            <h2 class="text"> Burning Kabaddi </h2>
            <h5 class="text"> Synopsis </h5>
            <div class="dots">
                <label class="dot dot-01" ></label>
                <label class="dot dot-02" ></label>
                <label class="dot dot-03" ></label>
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
    margin-top: 0.45%;
    font-size: var(--h2);
}
h5 {
    max-width: 40%;
    display: block;
    white-space: normal;
    font-size: var(--h5);
    overflow-wrap: break-word;
}
.img {
    width: 52%;
    height: 88%;
    float: right;
    display: block;
    border-radius: 6.5%;
    margin: 0.75% 1.5% 0% 1.5%;
} 
.dots {  
    left: 0;
    right: 0;
    top: 90.5%;
    z-index: 5;
    position: absolute;
    text-align: center;
} 
.dots .dot {
    opacity: 0.15;
    width: 1.7rem;
    height: 1.7rem;
    border-radius: 50%; 
    display: inline-block;
    margin: 0.75% 0.45% 0% 0.45%;
    background-color: var(--white);
}
.text {
    margin-left: 1.5%;
    color: var(--white);
}
.carousel {
    padding: 0%;
    overflow: hidden;
    margin-top: 1.5%;
    flex-direction: row;
}
.carousel-slide {
    opacity: 0;
    z-index: 0;
    width: 97%;
    height: 57%;
    display: block;   
    margin-left: 1.5%;
    margin-right: 1.5%;
    position: absolute;  
    background-color: var(--tertiary);
}
@keyframes auto-dot {
    0%, 34% {
        opacity: 1;
    }
    35%, 100% {
        opacity: 0.15;
    }
}
@keyframes auto-slide {
    0%, 27% {
        z-index: 2;
        opacity: 1;
    }
    28% {
        z-index: 2;
        opacity: 0.8;
    }
    30% {
        z-index: 2;
        opacity: 0.6;
    }
    32% {
        z-index: 2;
        opacity: 0.4;
    }
    34% {
        z-index: 2;
        opacity: 0.2;
    }
    35%, 95% {
        z-index: 0;
        opacity: 0;
    }
    96% {
        z-index: 1;
        opacity: 0.33;
    }
    98% {
        z-index: 1;
        opacity: 0.66;
    }
    100% {
        z-index: 1;
        opacity: 0.99;
    }
}
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
</style>
