<template>
<div class="carousel">
        <div class="carousel-slide slide-01">
            <img class="img" src="https://th.bing.com/th/id/R.e4651a3a9eed4e1e43044e638b076e1f?rik=KXg2eMKBaDhnOQ&pid=ImgRaw&r=0" alt="Image of Blue Lock Characters"/>
            <h2 class="text"> Blue Lock </h2>  
            <h5 class="text"> In 2018, the Japanese national team finished 16th in the FIFA World Cup. As a result, the Japanese Football Union hires the football enigma Ego Jinpachi.
                 His master plan to lead Japan to stardom is Blue Lock, a training regimen designed to create the world's greatest egotist striker. Those who fail Blue Lock will 
                 never again be permitted to represent any Japanese team. Yoichi Isagi, an unknown high school football player who is conflicted about his playing style, decides to
                 join the program in order to become the best egotistical striker in the world. </h5>    
            <div class="dots">
                <label class="dot dot-01" ></label>
                <label class="dot dot-02" ></label>
                <label class="dot dot-03" ></label>
            </div>
        </div>
        <div class="carousel-slide slide-02">
            <img class="img" src="https://wallpapercave.com/wp/wp4445507.jpg" alt="Image of Kimetsu no Yaiba Characters"/>
            <h2 class="text"> Kimetsu no Yaiba </h2>
            <h5 class="text"> Rumors have echoed from time immemorial about the Demons that lurk in the wilderness. According to legend, a Demon Slayer sometimes roams the night,
                 battling blood thirsty Demons. Since his father's death, a boy named Tanjiro has taken it upon himself to support his family. Although the disaster had affected 
                 their lives, they were happy. The family is murdered by a Demons during the Taisho Period in Japan, and the eldest son Tanjiro finds that his sister, Nezuko has 
                 also been transformed into a Demon. The sister still shows signs of human emotion, to his surprise, an unusual trait when compared to other Demons. Tanjiro quickly 
                 sets out on a journey to fight Demons and find a way to turn his sister back into a human. </h5>
            <div class="dots">
                <label class="dot dot-01" ></label>
                <label class="dot dot-02" ></label>
                <label class="dot dot-03" ></label>
            </div>
        </div>
        <div class="carousel-slide slide-03">
            <img class="img" src="https://th.bing.com/th/id/OIP.frbPaUGvaphnnZ8AWM-T8gHaKf?pid=ImgDet&rs=1" alt="Image of Burning Kabaddi Characters"/>
            <h2 class="text"> Burning Kabaddi </h2>
            <h5 class="text"> Tatsuya Yoigoshi used to be a famous soccer player called “Unbeatable Yoigoshi,” but he decides to give up sports when he enters high school. But
                then he’s approached by an athletic club looking to recruit him and gets into a friendly competition that will change the course of his high school life and
                propel him back into sports as a kabaddi player! </h5>
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
    margin-top: 0.35%;
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
    height: 89%;
    width: 49.5%;
    float: right;
    display: block;
    border-radius: 7.25%;
    margin: 0.55% 1.25% 0% 1.25%;
} 
.dots {   
    left: 0;
    right: 0;
    top: 91%;
    z-index: 5;
    position: absolute;
    text-align: center;
} 
.dots .dot {
    opacity: 0.15;
    width: 1.85rem;
    height: 1.85rem;
    border-radius: 50%; 
    display: inline-block;
    margin: 0.75% 0.45% 0% 0.45%;
    background-color: var(--white);
}
.text {
    margin-left: 1.75%;
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
    width: 70%;
    height: 52%;
    display: flex;   
    margin-left: 1%;
    margin-right: 1%;
    position: absolute; 
    background-color: var(--bg-primary);
}
@keyframes auto-dot {
    0%, 33% {
        opacity: 1;
    }
    34%, 100% {
        opacity: 0.15;
    }
}
@keyframes auto-slide {
    0%, 26% {
        z-index: 4;
        opacity: 1;
    }
    27% {
        z-index: 4;
        opacity: 0.8;
    }
    29% {
        z-index: 4;
        opacity: 0.6;
    }
    31% {
        z-index: 4;
        opacity: 0.4;
    }
    33% {
        z-index: 4;
        opacity: 0.2;
    }
    34%, 95% {
        z-index: 0;
        opacity: 0;
    }
    96% {
        z-index: 3;
        opacity: 0.33;
    }
    98% {
        z-index: 3;
        opacity: 0.67;
    }
    100% {
        z-index: 3;
        opacity: 1;
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
    z-index: 2;
    opacity: 0.5;
    animation: auto-slide 9s ease-in-out 3s infinite normal none running;
}
.slide-03 {
    z-index: 1;
    opacity: 0.5;
    animation: auto-slide 9s ease-in-out 6s infinite normal none running;
}
</style>
