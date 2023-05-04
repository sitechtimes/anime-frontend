<template>
    <div id="profile">
        <span class="underNav"></span>
        <div class="profile-top">
            <div class="banner">
                <img
                    class="banner"
                    src="https://i.pinimg.com/originals/e8/56/45/e856453f7f9b8c29bd73e51fc71813db.jpg"
                    alt=""
                />
            </div>
            <div class="profile-info">
                <img
                    class="profile-img"
                    src="https://th.bing.com/th/id/OIP.5Xv2gQmaNhcCJVB0E6zuwgHaEK?pid=ImgDet&rs=1"
                    alt="profile picture"
                />
                <div class="profile-name">
                    <h3 class="profile-id">{{ firstName }} {{ lastName }}</h3>
                    <p class="profile-grade">{{ emailDOE }}</p>
                    <!-- <p class="profile-grade">Senior Class of 2023</p> -->
                    <!-- <p class="profile-grade">Date Started: 01/19/2023</p> -->
                </div>
            </div>
        </div>
        <div class="tabs-class">
            <TabsWrapper>
                <Tab title="Watchlist">
                    <div class="tabShow">
                        <div class="tab-logo">
                            <h3 class="tab-detail">Technime</h3>
                        </div>
                        <div class="tab-bottom">
                            <h3 class="tab-title">Watchlist</h3>
                                <div class="pf-carousel">
                                    <button class="carousel-arrow left-arrow" v-on:click="currentLeft"> &lsaquo; </button>
                                    <transition-group name="test" tag="div">
                                        <div v-for="i in [currentIndex]" :key="i">
                                            <div class="pf-carousel-slide">
                                            <img :src="showCurrent.img" class="anime-img"/>
                                            <h3 class="anime-title"> {{ showCurrent.title }} </h3>
                                            </div>
                                            <div class="pf-carousel-slide">
                                            <img :src="secondCurrent.img" class="anime-img"/>
                                            <h3 class="anime-title"> {{ secondCurrent.title }} </h3>
                                            </div>
                                            <div class="pf-carousel-slide">
                                            <img :src="thirdCurrent.img" class="anime-img"/>
                                            <h3 class="anime-title"> {{ thirdCurrent.title }} </h3>
                                            </div>
                                        </div>
                                    </transition-group>
                                    <button class="carousel-arrow right-arrow" v-on:click="currentRight"> &rsaquo; </button>
                                </div>
                        </div>
                    </div>
                </Tab>
                <Tab title="Favorites">
                    <div class="tabShow">
                        <div class="tab-logo">
                            <h3 class="tab-detail">Technime</h3>
                        </div>
                        <div class="tab-bottom">
                            <h3 class="tab-title">Favorites</h3>
                                <div class="pf-carousel">
                                    <button class="carousel-arrow left-arrow" v-on:click="favoriteLeft"> &lsaquo; </button>
                                    <transition-group name="test" tag="div">
                                        <div v-for="i in [favoriteIndex]" :key="i">
                                            <div class="pf-carousel-slide">
                                            <img :src="showFavorite.img" class="anime-img"/>
                                            <h3 class="anime-title"> {{ showFavorite.title }} </h3>
                                            </div>
                                            <div class="pf-carousel-slide">
                                            <img :src="secondFavorite.img" class="anime-img"/>
                                            <h3 class="anime-title"> {{ secondFavorite.title }} </h3>
                                            </div>
                                            <div class="pf-carousel-slide">
                                            <img :src="thirdFavorite.img" class="anime-img"/>
                                            <h3 class="anime-title"> {{ thirdFavorite.title }} </h3>
                                            </div>
                                        </div>
                                    </transition-group>
                                    <button class="carousel-arrow right-arrow" v-on:click="favoriteRight"> &rsaquo; </button>
                                </div>
                        </div>
                    </div>
                </Tab>
                <Tab title="Rated">
                    <div class="tabShow">
                        <div class="tab-logo">
                            <h3 class="tab-detail">Technime</h3>
                        </div>
                        <div class="tab-bottom">
                            <h3 class="tab-title">Rated</h3>
                             <div class="pf-carousel">
                                    <button class="carousel-arrow left-arrow" v-on:click="ratedLeft"> &lsaquo; </button>
                                    <transition-group name="test" tag="div">
                                        <div v-for="i in [ratedIndex]" :key="i">
                                            <div class="pf-carousel-slide">
                                            <img :src="showRated.img" class="anime-img"/>
                                            <h3 class="anime-title"> {{ showRated.title }} </h3>
                                            </div>
                                            <div class="pf-carousel-slide">
                                            <img :src="secondRated.img" class="anime-img"/>
                                            <h3 class="anime-title"> {{ secondRated.title }} </h3>
                                            </div>
                                            <div class="pf-carousel-slide">
                                            <img :src="thirdRated.img" class="anime-img"/>
                                            <h3 class="anime-title"> {{ thirdRated.title }} </h3>
                                            </div>
                                        </div>
                                    </transition-group>
                                    <button class="carousel-arrow right-arrow" v-on:click="ratedRight"> &rsaquo; </button>
                                </div>
                        </div>
                    </div>
                </Tab>
                <Tab title="Example 2">
                    <div class="tabShow">
                        <div class="tab-logo">
                            <h3 class="tab-detail">Technime</h3>
                        </div>
                        <div class="tab-bottom">
                            <h3 class="tab-title">Example 2</h3>
                        </div>
                    </div>
                </Tab>
            </TabsWrapper>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useUserStore } from "~~/stores/userStore";

const userStore = useUserStore();

const firstName = userStore.first_name;
const lastName = userStore.last_name;
const emailDOE = userStore.email;
</script>

<script lang="ts">
import Tab from "../components/profile/Tab.vue";
import TabsWrapper from "../components/profile/TabsWrapper.vue";
import AnimeList from "../components/profile/AnimeList.vue";
// import Tabs from '../components/profile/Tabs.vue'
export default {
    components: {
        Tab,
        TabsWrapper,
        AnimeList,
        //   Tabs
    },
    data: () => ({
        ratedIndex: 0,
        currentIndex: 0,
        favoriteIndex: 0,
        currentAnimes: [
            {
                animeID: "01",
                title: "One Punch Man",
                img: "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg",
            },
            {
                animeID: "02",
                title: "Spy x Family",
                img: "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg",
            },
            {
                animeID: "03",
                title: "Chainsaw Man",
                img: "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg",
            },
            {
                animeID: "04",
                title: "Blue Lock",
                img: "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg",
            },
            {
                animeID: "05",
                title: "Oshi no Ko",
                img: "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg",
            },
            {
                animeID: "06",
                title: "Jujutsu Kaisen",
                img: "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg",
            },
        ],
        favoriteAnimes: [
            {
                animeID: "01",
                title: "One Punch Man",
                img: "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg",
            },
            {
                animeID: "02",
                title: "Spy x Family",
                img: "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg",
            },
            { 
                animeID: "03",
                title: "Chainsaw Man",
                img: "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg",
            },
            {
                animeID: "04",
                title: "Blue Lock",
                img: "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg",
            },
            {
                animeID: "05",
                title: "Oshi no Ko",
                img: "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg",
            },
            {
                animeID: "06",
                title: "Jujutsu Kaisen",
                img: "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg",
            },
        ],
        RatedAnimes: [
            {
                animeID: "01",
                title: "One Punch Man",
                img: "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg",
            },
            {
                animeID: "02",
                title: "Spy x Family",
                img: "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg",
            },
            { 
                animeID: "03",
                title: "Chainsaw Man",
                img: "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg",
            },
            {
                animeID: "04",
                title: "Blue Lock",
                img: "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg",
            },
            {
                animeID: "05",
                title: "Oshi no Ko",
                img: "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg",
            },
            {
                animeID: "06",
                title: "Jujutsu Kaisen",
                img: "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg",
            },
        ],
    }),
    methods: {
        ratedLeft () {
            this.ratedIndex -= 1;
        },
        ratedRight () {
            this.ratedIndex += 1;
        },
        currentLeft () {
            this.currentIndex -=1;
        },
        currentRight () {
            this.currentIndex +=1;
        },
        favoriteLeft () {
            this.favoriteIndex -=1;
        },
        favoriteRight () {
            this.favoriteIndex +=1;
        },
    },
    computed: {
        showRated () {
            return this.RatedAnimes[Math.abs(this.ratedIndex) % this.RatedAnimes.length];
        },
        secondRated () {
            return this.RatedAnimes[Math.abs(this.ratedIndex+1) % this.RatedAnimes.length];
        },
        thirdRated () {
            return this.RatedAnimes[Math.abs(this.ratedIndex+2) % this.RatedAnimes.length];
        },
        showCurrent () {
            return this.currentAnimes[Math.abs(this.currentIndex) % this.currentAnimes.length];
        },
        secondCurrent () {
            return this.currentAnimes[Math.abs(this.currentIndex+1) % this.currentAnimes.length];
        },
        thirdCurrent () {
            return this.currentAnimes[Math.abs(this.currentIndex+2) % this.currentAnimes.length];
        },
        showFavorite () {
            return this.favoriteAnimes[Math.abs(this.favoriteIndex) % this.favoriteAnimes.length];
        },
        secondFavorite () {
            return this.favoriteAnimes[Math.abs(this.favoriteIndex+1) % this.favoriteAnimes.length];
        },
        thirdFavorite () {
            return this.favoriteAnimes[Math.abs(this.favoriteIndex+2) % this.favoriteAnimes.length];
        },
    },
};
</script>

<style scoped>
.profile-top,
.tabs-class {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    color: var(--white);
    margin-bottom: 8%;
}
.tabs-class .tab {
    background-color: var(--tertiary);
    width: 70vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 var(--tertiary);
}
.banner {
    object-fit: cover;
    object-position: bottom;
    width: 80vw;
    height: 25vh;
    position: absolute;
    margin: 0 auto;
    border-radius: 1rem;
}
.profile-grade {
    color: rgb(219, 219, 219);
    font-size: var(--h5);
    font-weight: var(--fw-light);
}
.profile-info {
    display: flex;
    width: 40vw;
    height: 10rem;
    margin-top: 20rem;
    margin-right: 25vw;
    position: relative;
    margin-bottom: 5rem;
}
.profile-img {
    width: 15rem;
    height: 15rem;
    border-radius: 50%;
    object-fit: cover;
}
.profile-name {
    color: var(--white);
    font-size: var(--h4);
    font-weight: var(--fw-bold);
    margin-top: 5rem;
    margin-left: 2vw;
}
.current-anime {
    width: 35%;
    height: 30vh;
    margin-right: 5%;
    margin-top: 8vh;
    border-radius: 1rem;
}
.anime-info-labels {
    display: flex;
    justify-content: center;
}
.profile-stats {
    width: 25%;
    height: 30vh;
    margin-top: 8vh;
    border-radius: 1rem;
}
.favorite-anime {
    width: 40%;
    height: 30vh;
    margin-right: 5%;
    margin-top: 5vh;
    border-radius: 1rem;
}
.labels {
    color: rgb(219, 219, 219);
}
.rank {
    width: 20%;
}
.title {
    width: 45%;
}
.genre {
    width: 20%;
}
.favorite-genre {
    width: 20%;
    height: 30vh;
    margin-top: 5vh;
    border-radius: 1rem;
}
.middle-title {
    margin-bottom: 2.5%;
    margin-left: 5%;
    font-size: var(--h4);
}

/* overall best anime (gray section) */
.bestAnime {
    display: flex;
    flex-direction: row;
}

.anime-pfp {
    border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    -o-border-radius: 50%;
    width: 5rem;
    height: 5rem;
    margin-left: 1rem;
}
.genre-text {
    background-color: var(--primary);
    width: 20%;
    height: 35%;
    display: flex;
    justify-content: center;
    border-radius: 1rem;
    margin-top: 1vw;
    overflow: hidden;
}
.info-column {
    width: 45%;
}

.picture-column {
    width: 22%;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* actual (inside each) tab css */
.tabShow {
    display: flex;
    flex-direction: column;
    width: 70%;
    justify-content: center;
}
.tab-logo {
    display: flex;
    justify-content: flex-end;
    font-size: var(--h3);
    color: var(--primary);
    text-transform: lowercase;
    right: 5%;
    top: 10%;
    position: absolute;
}
.tab-title {
    margin-left: 2rem;
    font-size: var(--h3);
    color: var(--white);
    font-weight: var(--fw-light);
}
.underNav {
    width: 100vw;
    height: 12vh;
    display: block;
}
.pf-carousel {
    width: 55vw;
    height: 25vh;
    display: flex;
    overflow: hidden;
    flex-direction: row;
    justify-content: center;
}
.pf-carousel-slide {
    width: 15vw;
    height: 25vh;
    align-items: center;
    display: inline-flex;
    flex-direction: column;
}
.anime-img {
    width: 10vw;
    height: 22vh;
    object-fit: cover;
}
.anime-title {
    width: 11vw;
    overflow: hidden;
    text-align: center;
    font-size: var(--h5);
}
.left-arrow {
    left: 0;
    text-align: left;
}
.right-arrow {
    right: 0;
    text-align: right;
}
.carousel-arrow {
    padding: 0.5rem;
    color: var(--white);
    font-size: var(--h2);
    background-color: unset;
}
.test-enter-active,
.test-leave-active {
    width: 0%;
    opacity: 0;
    overflow: hidden;
}
@media screen and (max-width: 1575px) {
.profile-info {
    margin-top: 16rem;
}
}
@media screen and (max-width: 1285px) {
.tab-title {
    margin-bottom: 2rem;
    font-size: var(--h4);
}
.anime-img {
    height: 20vh;
}
.anime-title {
    font-size: var(--h6);
}
.carousel-arrow {
    font-size: var(--h3);
}
.pf-carousel {
    height: 28vh;
}
.pf-carousel-slide {
    width: 13vw;
    height: 22vh;
    margin: auto;
}
.profile-info {
    margin-top: 15rem;
}
}
@media screen and (max-width: 1025px) {
.tab-title {
    margin-left: 3rem;
}
.anime-img {
    height: 17vh;
}
.anime-title {
    font-size: var(--h7);
}
.pf-carousel {
    height: 22vh;
}
.pf-carousel-slide {
    width: 13vw;
    height: 20vh;
    margin: auto;
}
.profile-info {
    margin-top: 10rem;
    margin-bottom: 8rem;
}
}
@media screen and (max-width: 915px) {
.tab-title {
    margin-left: 4rem;
    margin-bottom: 1rem;
}
.anime-img {
    height: 8vh;
}
.pf-carousel {
    height: 11vh;
    margin-left: 4rem;
}
.pf-carousel-slide {
    height: 10vh;
}
.profile-info {
    margin-top: 26rem;
    margin-bottom: 6rem;
}
}
@media screen and (max-width: 900px) {
.anime-img {
    height: 15vh;
}
.pf-carousel {
    height: 18vh;
    margin-left: 4rem;
}
.pf-carousel-slide {
    height: 17vh;
}
.profile-info {
    margin-top: 15rem;
}
}
@media screen and (max-width: 825px) {
.anime-img {
    height: 10vh;
}
.pf-carousel {
    width: 58vw;
    height: 13vh;
    margin-left: 1.5rem;
}
.pf-carousel-slide {
    width: 13vw;
    height: 12vh;
}
.profile-info {
    margin-top: 20rem;
    margin-bottom: 2rem;
}
}
@media screen and (max-width: 780px) {
.pf-carousel {
    margin-left: 2rem;
}
.profile-info {
    margin-top: 15rem;
}
}
@media screen and (max-width: 550px) {
.tab-logo {
    font-size: var(--h6);
}
.tab-title {
    margin-left: 5.5rem;
    font-size: var(--h6);
}
.anime-img {
    height: 8vh;
}
.anime-title {
    width: 11vw;
    height: 1.5rem;
    font-size: var(--smallText);
}
.pf-carousel {
    width: 59vw;
    height: 11vh;
}
.pf-carousel-slide {
    width: 11vw;
}
.carousel-arrow {
    font-size: var(--h5);
}
.profile-img {
    width: 12rem;
    height: 12rem;
}
.profile-info {
    margin-top: 12rem;
    margin-bottom: 1rem;
}
.underNav {
    height: 5vh;
}
}
@media screen and (max-width: 420px) {
.tab-title {
    margin-left: 3.5rem;
}
.anime-title {
    width: 13vw;
}
.pf-carousel {
    width: 58vw;
    margin-left: 1rem;
}
.pf-carousel-slide {
    width: 13vw;
    height: 12vh;
}
.profile-info {
    margin-top: 17rem;
    margin-bottom: 2rem;
}
}
@media screen and (max-width: 380px) {
.profile-info {
    margin-top: 11rem;
}
}
@media screen and (max-width: 370px) {
.profile-info {
    margin-top: 16rem;
}
}
@media screen and (max-width: 285px) {
.tab-logo {
    font-size: var(--smallText);
}
.tab-title {
    font-size: var(--h7);
}
.anime-title {
    height: 2rem;
    font-size: 0.6rem;
}
}
</style>
