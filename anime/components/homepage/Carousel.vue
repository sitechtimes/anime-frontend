<template>
    <div id="carousel">
        <div class="carousel">
            <div
                v-for="anime in animes"
                :key="anime.animeID"
                class="carousel-slide"
                :class="anime.animeID"
                :id="anime.animeID"
            >
                <div class="carousel-info">
                    <h2 class="carousel-title text">{{ anime.title }}</h2>
                    <div class="descript-box">
                        <h4 class="carousel-date text">
                            {{ anime.releaseDate }}
                        </h4>
                        <p class="carousel-description text">
                            {{ anime.description }}
                        </p>
                    </div>
                </div>
                <img class="img" :src="anime.image" :alt="anime.alt" />
                <div class="dots">
                    <label class="dot dot-01"></label>
                    <label class="dot dot-02"></label>
                    <label class="dot dot-03"></label>
                </div>
            </div>
        </div>
    </div>
</template>
<!-- https://th.bing.com/th/id/R.e4651a3a9eed4e1e43044e638b076e1f?rik=KXg2eMKBaDhnOQ&pid=ImgRaw&r=0 -->
<script setup lang="ts">

         const animes = ref([
            {
                animeID: "slide-01",
                title: "Blue Lock",
                stars: 8.5,
                releaseDate: "Oct 5, 2015",
                genre: "Adventure",
                image: `https://th.bing.com/th/id/R.e4651a3a9eed4e1e43044e638b076e1f?rik=KXg2eMKBaDhnOQ&pid=ImgRaw&r=0`,
                alt: `Image of Blue Lock Characters`,
                description: `In 2018, the Japanese national team finished 16th in the FIFA World Cup. As a result, the Japanese Football Union hires the football enigma Ego Jinpachi.
                     His master plan to lead Japan to stardom is Blue Lock, a training regimen designed to create the world's greatest egotist striker. Those who fail Blue Lock will 
                     never again be permitted to represent any Japanese team. Yoichi Isagi, an unknown high school football player who is conflicted about his playing style, decides to
                     join the program in order to become the best egotistical striker in the world.`,
            },
            {
                animeID: "slide-02",
                title: "Kimetsu no Yaiba",
                stars: 9.99,
                releaseDate: "Apr 9, 2022",
                genre: "Comedy",
                image: `https://wallpapercave.com/wp/wp4445507.jpg`,
                alt: `Image of Kimetsu no Yaiba Characters`,
                description: `Rumors have echoed from time immemorial about the Demons that lurk in the wilderness. According to legend, a Demon Slayer sometimes roams the night,
                     battling blood thirsty Demons. Since his father's death, a boy named Tanjiro has taken it upon himself to support his family. Although the disaster had affected 
                     their lives, they were happy. The family is murdered by a Demons during the Taisho Period in Japan, and the eldest son Tanjiro finds that his sister, Nezuko has 
                     also been transformed into a Demon. The sister still shows signs of human emotion, to his surprise, an unusual trait when compared to other Demons. Tanjiro quickly 
                     sets out on a journey to fight Demons and find a way to turn his sister back into a human.`,
            },
            {
                animeID: "slide-03",
                title: "Burning Kabaddi",
                stars: 8.24,
                releaseDate: "Oct 11, 2022",
                genre: "Graphic",
                image: `https://th.bing.com/th/id/OIP.frbPaUGvaphnnZ8AWM-T8gHaKf?pid=ImgDet&rs=1`,
                alt: `Image of Burning Kabaddi Characters`,
                description: `Tatsuya Yoigoshi used to be a famous soccer player called “Unbeatable Yoigoshi,” but he decides to give up sports when he enters high school. But
                    then he’s approached by an athletic club looking to recruit him and gets into a friendly competition that will change the course of his high school life and
                    propel him back into sports as a kabaddi player!`,
            },
        ]);
</script>

<style scoped>
.carousel-info {
    display: flex;
    flex-direction: column;
    width: 35%;
}
.carousel-title {
    display: block;
    margin-top: 10%;
    font-size: var(--h2);
    font-weight: var(--fw-bold);
    color: var(--white);
}
.carousel-description {
    font-size: var(--h5);
    font-weight: var(--fw-light);
    color: var(--secondary);
    overflow: hidden;
    margin-right: 5rem;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}
.img {
    height: 89%;
    width: 60%;
    object-fit: cover;
    object-position: center;
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
    width: 1.5rem;
    height: 1.5rem;
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
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    width: 100vw;
    margin-bottom: 30vh;
}
.carousel-slide {
    overflow: hidden;
    opacity: 0;
    z-index: 0;
    /* width: 70%; */
    width: 90%;
    height: 60%;
    display: flex;
    margin-left: 1%;
    margin-right: 1%;
    position: absolute;
}
@keyframes auto-dot {
    0%,
    33% {
        opacity: 1;
    }
    34%,
    100% {
        opacity: 0.15;
    }
}
@keyframes auto-slide {
    0%,
    26% {
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
    34%,
    95% {
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
    opacity: 0;
    animation: auto-slide 9s ease-in-out 3s infinite normal none running;
}
.slide-03 {
    z-index: 1;
    opacity: 0;
    animation: auto-slide 9s ease-in-out 6s infinite normal none running;
}
</style>
