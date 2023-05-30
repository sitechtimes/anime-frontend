<template>
    <div id="home">
        <span class="underNav"></span>
        <section id="carousel">
            <div class="carousel">
                <div
                    v-for="anime in animes"
                    :key="anime.animeID"
                    class="carousel-slide"
                    :class="anime.animeID"
                    :id="anime.animeID"
                >
                    <div class="carousel-info">
                        <h2 class="carousel-title carousel-text">
                            {{ anime.title }}
                        </h2>
                        <div class="descript-box">
                            <h4 class="carousel-date carousel-text">
                                {{ anime.releaseDate }}
                            </h4>
                            <p class="carousel-description carousel-text">
                                {{ anime.description }}
                            </p>
                        </div>
                    </div>
                    <img
                        class="carousel-img"
                        :src="anime.image"
                        :alt="anime.alt"
                    />
                    <div class="carousel-dots">
                        <label class="carousel-dot dot-01"></label>
                        <label class="carousel-dot dot-02"></label>
                        <label class="carousel-dot dot-03"></label>
                    </div>
                </div>
            </div>
        </section>
        <section class="home-body">
            <div class="airing-container">
                <div class="airing-header">
                    <h2 class="airing-title">Currently Airing</h2>
                    <div class="page-container">
                        <div class="page-number">
                            <p class="page-text">Page</p>
                            <form
                                @submit.prevent="
                                    selectPage(userStore.pageNumber)
                                "
                            >
                                <input
                                    class="page-input"
                                    type="number"
                                    v-model="userStore.pageNumber"
                                    min="1"
                                    max="999"
                                    @change="selectPage(userStore.pageNumber)"
                                />
                            </form>
                        </div>
                        <div class="page-buttonBox">
                            <button class="page-button" v-on:click="previous">
                                <LeftPageButtonSvg :pageExist="pageExistLeft" />
                            </button>
                            <button class="page-button" v-on:click="next">
                                <RightPageButtonSvg
                                    :pageExist="pageExistRight"
                                />
                            </button>
                        </div>
                    </div>
                </div>
                <div class="airing-content" v-if="loading">
                    <HomepageAnimeCardLoading
                        v-for="anime in loadingAnimeHome"
                    />
                </div>
                <div class="airing-content" v-else>
                    <HomepageAnimeCard
                        @saveAnimeID="saveClickedAnimeID(anime.mal_id)"
                        v-for="anime in pagePopularAnime"
                        :id="anime.mal_id"
                        :key="anime.mal_id"
                        :episode="anime.episodes"
                        :animeName="anime.anime_name"
                        :imageUrl="anime.large_image_url"
                        :mediaType="anime.media_type"
                    />
                </div>
            </div>
            <div class="topCharts-container">
                <h2 class="topCharts-title">Top Charts</h2>
                <HomepageTopCharts
                    v-for="charts in top"
                    :key="charts.id"
                    :img="charts.img"
                    :episode="charts.episode"
                    :votes="charts.votes"
                    :title="charts.title"
                    :rank="charts.rank"
                />
            </div>
        </section>
        <footer class="footer"></footer>
    </div>
</template>

<script setup lang="ts">
import { useUserStore } from "~~/stores/userStore";
import { ref } from "vue";

const userStore = useUserStore();

const pageExistLeft = ref(false);
const pageExistRight = ref(true);
const pagePopularAnime = ref([] as any);
if (userStore.startPageIndex != 0) {
    pageExistLeft.value = true;
}
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
const loadingAnimeHome = [...Array(12).keys()];
const loading = ref(true);
const top = ref([
    {
        id: 1,
        img: "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg",
        episode: 126,
        votes: 100,
        title: "One Piecesd dflkjasdfk ldkflksdjkldfalsdknflasnflds",
        rank: 1,
    },
    {
        id: 2,
        img: "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg",
        episode: 1252,
        votes: 100,
        title: "One Piecesd dflkjasdfk ldkflksdjkldfalsdknflasnflds",
        rank: 2,
    },
    {
        id: 3,
        img: "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg",
        episode: 129,
        votes: 100,
        title: "nsdlfnsflksdnflknslfsdlnfldsnfls",
        rank: 3,
    },
    {
        id: 4,
        img: "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg",
        episode: 125,
        votes: 100,
        title: "One Piece",
        rank: 4,
    },
    {
        id: 5,
        img: "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg",
        episode: 121,
        votes: 100,
        title: "One Piece",
        rank: 5,
    },
    {
        id: 6,
        img: "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg",
        episode: 125,
        votes: 100,
        title: "One Piece",
        rank: 6,
    },
    {
        id: 7,
        img: "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg",
        episode: 125,
        votes: 100,
        title: "One Piece",
        rank: 7,
    },
    {
        id: 8,
        img: "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg",
        episode: 125,
        votes: 100,
        title: "One Piece",
        rank: 8,
    },
    {
        id: 9,
        img: "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg",
        episode: 125,
        votes: 100,
        title: "One Piece",
        rank: 9,
    },
    {
        id: 10,
        img: "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg",
        episode: 125,
        votes: 100,
        title: "One Piece",
        rank: 10,
    },
]);

onMounted(
    () => {
        userStore.animeId = null;
        userStore.startPageIndex = 0;
        userStore.endPageIndex = 12;
        userStore.pageNumber = 1;

        userStore
            .getAllAnime()
            .then((data) => {
                const refineData = data.filter(function (anime: any) {
                    //delete anime.large_image_url;
                    delete anime.small_image_url;
                    delete anime.image_url;
                    delete anime.trailer_youtube_url;
                    delete anime.aired_from;
                    delete anime.aired_to;
                    delete anime.summary;
                    delete anime.anime_studio;
                    delete anime.anime_genre;
                    delete anime.number_rating;
                    delete anime.anime_characters;
                    delete anime.anime_awards;
                    delete anime.season;
                    delete anime.avg_rating;
                    delete anime.id;

                    return true;
                });

                const airingAnime = [] as any;

                refineData.filter(function (anime: any) {
                    if (anime.status == "Currently Airing") {
                        airingAnime.push(anime);
                    }
                });

                userStore.allAnime = refineData;
                userStore.currentAnime = airingAnime;

                pagePopularAnime.value = userStore.currentAnime.slice(
                    userStore.startPageIndex,
                    userStore.endPageIndex
                );

                loading.value = false;
                console.log(userStore.currentAnime);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    //}
);

function next() {
    if (userStore.endPageIndex < userStore.currentAnime.length) {
        userStore.startPageIndex += 11;
        userStore.endPageIndex += 11;
        userStore.pageNumber += 1;
        pageExistLeft.value = true;
        pagePopularAnime.value = userStore.currentAnime.slice(
            userStore.startPageIndex,
            userStore.endPageIndex
        );
    } else {
        pageExistRight.value = false;
    }
}

function previous() {
    if (userStore.pageNumber == 1) {
        pageExistLeft.value = false;
        pageExistRight.value = true;
    } else {
        userStore.startPageIndex -= 11;
        userStore.endPageIndex -= 11;
        userStore.pageNumber -= 1;
        pageExistRight.value = true;
        pagePopularAnime.value = userStore.currentAnime.slice(
            userStore.startPageIndex,
            userStore.endPageIndex
        );
    }
}

function saveClickedAnimeID(id: number) {
    userStore.storeAnimeId(id);
}

function selectPage(num: number) {
    userStore.startPageIndex = num * 11 - 11;
    userStore.endPageIndex = num * 11 + 1;

    pagePopularAnime.value = userStore.currentAnime.slice(
        userStore.startPageIndex,
        userStore.endPageIndex
    );
}
</script>
<style scoped>
/* undernavigation  */
.underNav {
    height: 45vh;
    display: block;
}
.footer {
    height: 5vw;
    display: block;
}
/* carousel css */
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
.carousel-img {
    height: 89%;
    width: 60%;
    object-fit: cover;
    object-position: center;
    display: block;
    border-radius: 7.25%;
    margin: 0.55% 1.25% 0% 1.25%;
}
.carousel-dots {
    left: 0;
    right: 0;
    top: 91%;
    z-index: 5;
    position: absolute;
    text-align: center;
}
.carousel-dots .carousel-dot {
    opacity: 0.15;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    display: inline-block;
    margin: 0.75% 0.45% 0% 0.45%;
    background-color: var(--white);
}
.carousel-text {
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

/* homebody section css */
.home-body {
    display: flex;
    flex-direction: row;
    width: 100%;
    border-radius: 10px;
    column-gap: 2rem;
    align-items: flex-start;
    background-size: cover;
    margin-bottom: 10rem;
}
.topCharts-container {
    background-color: var(--bg-primary);
    border-radius: 1.5rem;
    display: flex;
    flex-direction: column;
    height: 100%;
    margin-right: 2rem;
    margin-top: 10rem;
    width: 20vw;
}
.airing-container {
    background-color: var(--bg-primary);
    border-radius: 1.5rem;
    margin-bottom: 3rem;
    margin-left: 2rem;
    padding: 1.5rem 3rem 3rem;
    width: 100vw;
}
.airing-header {
    align-items: center;
    display: flex;
    height: 6rem;
    justify-content: space-between;
    margin-bottom: 0.5rem;
}
.airing-title {
    font-size: var(--h3);
    font-weight: var(--fw-semi-bold);
    color: var(--light-text);
    height: 6rem;
    padding: 0;
}
.topCharts-title {
    font-size: var(--h3);
    font-family: "LIBRARY 3 AM", sans-serif;
    font-weight: var(--fw-semi-bold);
    color: var(--light-text);
    height: 7rem;
    width: 100%;
    display: flex;
    align-items: center;
    padding-left: 2rem;
    background-color: var(--tertiary);
    border-radius: 0.75rem;
    margin-bottom: 0.5rem;
}
.airing-content {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    row-gap: 4rem;
    column-gap: 1.2%;
}
.page-container {
    justify-content: flex-end;
    display: flex;
    align-items: center;
    column-gap: 1rem;
}
.page-button {
    background-color: transparent;
    border: none;
    padding: 0;
    padding-right: 0;
    cursor: pointer;
    display: flex;
    justify-content: center;
}
.page-text {
    font-size: var(--h5);
    font-weight: var(--fw-semi-bold);
    color: var(--light-text);
}

.page-input::-webkit-outer-spin-button,
.page-input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
.page-input {
    min-width: 4.5rem;
    font-size: var(--h5);
    font-weight: var(--fw-med);
    color: var(--light-text);
    background-color: var(--bg-secondary);
    border: none;
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    text-align: center;
}
.page-input:focus {
    outline: none;
}
.page-number {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 0.8rem;
}
.page-buttonBox {
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 1rem;
}
.svg-button {
    display: block;
}

input[type="number"] {
    -moz-appearance: textfield;
}
</style>
