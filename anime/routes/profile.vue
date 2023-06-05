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
                                    <button class="carousel-arrow left-arrow" v-on:click="watchLeft"> &lsaquo; </button>
                                    <transition-group name="test" tag="div">
                                        <div v-for="i in [watchIndex]" :key="i">
                                            <div class="pf-carousel-slide">
                                            <img :src="showWatch.img" class="anime-img"/>
                                            <h3 class="anime-title"> {{ showWatch.title }} </h3>
                                            </div>
                                            <div class="pf-carousel-slide">
                                            <img :src="secondWatch.img" class="anime-img"/>
                                            <h3 class="anime-title"> {{ secondWatch.title }} </h3>
                                            </div>
                                            <div class="pf-carousel-slide">
                                            <img :src="thirdWatch.img" class="anime-img"/>
                                            <h3 class="anime-title"> {{ thirdWatch.title }} </h3>
                                            </div>
                                        </div>
                                    </transition-group>
                                    <button class="carousel-arrow right-arrow" v-on:click="watchRight"> &rsaquo; </button>
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

export default {
    components: {
        Tab,
        TabsWrapper,
        AnimeList,
    },
    data: () => ({
        ratedIndex: 0,
        watchIndex: 0,
        favoriteIndex: 0,
        WatchlistAnimes: [
            {
                animeID: "01",
                title: "One Punch Man",
                img: "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg",
            },
            {
                animeID: "02",
                title: "Dead Mount Death Play",
                img: "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg",
            },
            {
                animeID: "03",
                title: "Trigun Stampede",
                img: "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg",
            },
            {
                animeID: "04",
                title: "World Trigger",
                img: "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg",
            },
            {
                animeID: "05",
                title: "Assassination Classroom",
                img: "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg",
            },
            {
                animeID: "06",
                title: "Jujutsu Kaisen",
                img: "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg",
            },
            {
                animeID: "07",
                title: "Bungo Stray Dogs",
                img: "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg",
            },
            {
                animeID: "08",
                title: "Hell's Paradise",
                img: "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg",
            },
            {
                animeID: "09",
                title: "Kimetsu no Yaiba",
                img: "https://wallpapercave.com/wp/wp4445507.jpg",
            },
        ],
        FavoriteAnimes: [
            {
                animeID: "01",
                title: "One Piece",
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
            {
                animeID: "07",
                title: "Bungo Stray Dogs",
                img: "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg",
            },
            {
                animeID: "08",
                title: "Hell's Paradise",
                img: "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg",
            },
            {
                animeID: "09",
                title: "Kimetsu no Yaiba",
                img: "https://wallpapercave.com/wp/wp4445507.jpg",
            },
        ],
        RatedAnimes: [
            {
                animeID: "01",
                title: "World Trigger",
                img: "https://wallpapercave.com/wp/wp6557115.jpg",
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
            {
                animeID: "07",
                title: "Bungo Stray Dogs",
                img: "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg",
            },
            {
                animeID: "08",
                title: "Hell's Paradise",
                img: "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg",
            },
            {
                animeID: "09",
                title: "Kimetsu no Yaiba",
                img: "https://wallpapercave.com/wp/wp4445507.jpg",
            },
        ],
    }), 
    methods: {
        ratedLeft () {
            this.ratedIndex -= 1;
            if ( this.ratedIndex <= -1) {
                this.ratedIndex = this.RatedAnimes.length-1
            }
        },
        ratedRight () {
            this.ratedIndex += 1;
            if ( this.ratedIndex >= this.RatedAnimes.length) {
                this.ratedIndex = 0
            }
        },
        watchLeft () {
            this.watchIndex -=1;
            if ( this.watchIndex <= -1) {
                this.watchIndex = this.WatchlistAnimes.length-1
            }
        },
        watchRight () {
            this.watchIndex +=1;
            if ( this.watchIndex >= this.WatchlistAnimes.length) {
                this.watchIndex = 0
            }
        },
        favoriteLeft () {
            this.favoriteIndex -=1;
            if ( this.favoriteIndex <= -1) {
                this.favoriteIndex = this.FavoriteAnimes.length-1
            }
        },
        favoriteRight () {
            this.favoriteIndex +=1;
            if ( this.favoriteIndex >= this.FavoriteAnimes.length) {
                this.favoriteIndex = 0
            }
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
        showWatch () {
            return this.WatchlistAnimes[Math.abs(this.watchIndex) % this.WatchlistAnimes.length];
        },
        secondWatch () {
            return this.WatchlistAnimes[Math.abs(this.watchIndex+1) % this.WatchlistAnimes.length];
        },
        thirdWatch () {
            return this.WatchlistAnimes[Math.abs(this.watchIndex+2) % this.WatchlistAnimes.length];
        },
        showFavorite () {
            return this.FavoriteAnimes[Math.abs(this.favoriteIndex) % this.FavoriteAnimes.length];
        },
        secondFavorite () {
            return this.FavoriteAnimes[Math.abs(this.favoriteIndex+1) % this.FavoriteAnimes.length];
        },
        thirdFavorite () {
            return this.FavoriteAnimes[Math.abs(this.favoriteIndex+2) % this.FavoriteAnimes.length];
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
    margin-bottom: 8%;
    color: var(--white);
    justify-content: center;
}
.tabs-class .tab {
    width: 70vw;
    height: 100%;
    display: flex;
    position: relative;
    border-radius: 5px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    background-color: var(--tertiary);
    box-shadow: 0 4px 8px 0 var(--tertiary);
}
.banner {
    width: 80vw;
    height: 25vh;
    margin: 0 auto;
    object-fit: cover;
    position: absolute;
    border-radius: 1rem;
    object-position: bottom;
}
.profile-grade {
    width: 20rem;
    font-size: var(--h5);
    color: rgb(219, 219, 219);
    font-weight: var(--fw-light);
}
.profile-info {
    width: 40vw;
    height: 10rem;
    display: flex;
    margin-top: 20rem;
    margin-right: 25vw;
    position: relative;
    margin-bottom: 5rem;
}
.profile-img {
    width: 15rem;
    height: 15rem;
    object-fit: cover;
    border-radius: 50%;
}
.profile-name {
    margin-top: 5rem;
    margin-left: 2vw;
    color: var(--white);
    font-size: var(--h4);
    font-weight: var(--fw-bold);
}
.current-anime {
    width: 35%;
    height: 30vh;
    margin-top: 8vh;
    margin-right: 5%;
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
    margin-left: 5%;
    margin-bottom: 2.5%;
    font-size: var(--h4);
}
/* overall best anime (gray section) */
.bestAnime {
    display: flex;
    flex-direction: row;
}
.anime-pfp {
    width: 5rem;
    height: 5rem;
    margin-left: 1rem;
    border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    -o-border-radius: 50%;
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
    height: 15vh;
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
    margin: auto;
    padding: 0.2rem;
    align-self: center;
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
.anime-title {
    font-size: var(--h5);
}
.profile-img {
    width: 20rem;
    height: 20rem;
}
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
    height: 22vh;
}
.anime-title {
    font-size: var(--h6);
}
.carousel-arrow {
    font-size: var(--h3);
}
.pf-carousel {
    height: 26vh;
}
.pf-carousel-slide {
    width: 13vw;
    height: 23vh;
    margin: auto;
}
.profile-img {
    width: 13rem;
    height: 13rem;
}
.profile-info {
    margin-top: 15rem;
}
.profile-name {
    margin-top: 7rem;
}
.profile-grade {
    font-size: var(--h6);
}
}
@media screen and (max-width: 1025px) {
.banner {
    height: 35vh;
}
.underNav {
    height: 20vh;
}
.tab-title {
    margin-left: 5rem;
}
.anime-img {
    height: 20vh;
}
.anime-title {
    font-size: var(--h7);
}
.pf-carousel {
    height: 24vh;
}
.pf-carousel-slide {
    height: 23vh;
}
.profile-info {
    margin-top: 18rem;
    margin-bottom: 8rem;
}
}
@media screen and (max-width: 1010px) {
.underNav {
    height: 13vh;
}
.banner {
    height: 25vh;
}
.anime-img {
    height: 17vh;
}
.tab-title {
    margin-left: 3rem;
}
.pf-carousel {
    height: 22vh;
}
.pf-carousel-slide {
    height: 20vh;
}
.profile-img {
    width: 16rem;
    height: 16rem;
}
.profile-info {
    margin-top: 18rem;
}
.profile-name {
    margin-top: 4rem;
}
}
@media screen and (max-width: 915px) {
.banner {
    height: 18vh;
}
.tab-title {
    margin-left: 5rem;
    margin-bottom: 1rem;
}
.anime-img {
    height: 10vh;
}
.pf-carousel {
    height: 13vh;
    margin-left: 4rem;
}
.pf-carousel-slide {
    height: 12vh;
}
.profile-img {
    width: 15rem;
    height: 15rem;
}
.profile-info {
    margin-top: 19rem;
    margin-bottom: 2rem;
}
}
@media screen and (max-width: 900px) {
.anime-img {
    height: 15vh;
}
.tab-title {
    margin-left: 7rem;
}
.pf-carousel {
    height: 18vh;
    margin-left: 4rem;
}
.pf-carousel-slide {
    height: 17vh;
}
.profile-img {
    width: 12rem;
    height: 12rem;
}
.profile-info {
    margin-top: 13rem;
    margin-bottom: 0rem;
}
.profile-name {
    margin-top: 6rem;
}
}
@media screen and (max-width: 825px) {
.anime-img {
    height: 10vh;
}
.anime-title {
    width: 17vw;
}
.pf-carousel {
    width: 57vw;
    height: 14vh;
    margin-left: 2.5rem;
}
.pf-carousel-slide {
    width: 16vw;
    height: 12vh;
}
.profile-img {
    width: 11rem;
    height: 11rem;
}
.profile-info {
    margin-top: 18rem;
}
.profile-name {
    margin-top: 7rem;
}
}
@media screen and (max-width: 780px) {
.underNav {
    height: 15vh;
}
.anime-title {
    width: 15vw;
}
.pf-carousel {
    width: 57vw;
    height: 13vh;
}
.pf-carousel-slide {
    width: 15vw;
    height: 12vh;
}
.profile-img {
    width: 12rem;
    height: 12rem;
}
.profile-info {
    margin-top: 16rem;
}
}
@media screen and (max-width: 680px) {
.underNav {
    height: 5vh;
}
.tab-title {
    margin-left: 6rem;
}
.anime-title {
    font-size: var(--smallText);
}
.profile-img {
    width: 11rem;
    height: 11rem;
}
.profile-info {
    margin-top: 18rem;
}
.profile-name {
    margin-top: 4rem;
}
}
@media screen and (max-width: 550px) {
.banner {
    height: 15vh;
}
.tab-logo {
    font-size: var(--h6);
}
.tab-title {
    margin-left: 5.5rem;
    font-size: var(--h6);
}
.anime-img {
    height: 9vh;
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
    height: 11vh;
}
.carousel-arrow {
    font-size: var(--h5);
}
.profile-img {
    width: 7rem;
    height: 7rem;
}
.profile-info {
    margin-top: 9rem;
    margin-bottom: 1rem;
}
.underNav {
    height: 5vh;
}
}
@media screen and (max-width: 520px) {
.anime-img {
    height: 8vh;
}
.profile-name {
    margin-top: 5rem;
}
}
@media screen and (max-width: 435px) {
.banner {
    height: 10vh;
}
.tab-title {
    margin-left: 4.5rem;
}
.anime-title {
    width: 12.5vw;
    font-size: 0.75rem;
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
    margin-top: 7rem;
    margin-bottom: 0rem;
}
}
@media screen and (max-width: 415px) {
.pf-carousel {
    width: 56vw;
    margin-left: 2.5rem;
}
}
@media screen and (max-width: 395px) {
.banner {
    height: 11vh;
}
.anime-title {
    font-size: 0.5rem;
}
.tab-title {
    margin-left: 3.5rem;
    font-size: var(--h7);
}
.pf-carousel {
    margin-left: 1.5rem;
}
.profile-img {
    width: 6rem;
    height: 6rem;
}
.profile-info {
    margin-top: 7.5rem;
    margin-bottom: 0rem;
}
.profile-name {
    margin-top: 3rem;
}
.profile-grade {
    width: 15rem;
    font-size: var(--h7);
}
}
@media screen and (max-width: 380px) {
.profile-info {
    margin-top: 6.5rem;
}
}
@media screen and (max-width: 290px) {
.tab {
    width: 105vw;
}
.banner {
    height: 8vh;
}
.pf-carousel {
    margin-left: 1.5rem;
}
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
.profile-img {
    width: 5rem;
    height: 5rem;
}
.profile-info {
    margin-top: 4rem;
}
.profile-name {
    margin-top: 3rem;
    font-size: var(--smallText);
}
.profile-grade {
    width: 13rem;
}
}
</style>
