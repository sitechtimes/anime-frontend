<template>
    <div id="banner">
        <span class="underNav"></span>
        <div class="banner-flex">
            <div class="banner-bg">
                <div class="banner-text">
                    <h2 class="trending-text">#trending</h2>
                    <h1 class="title-banner">
                        vote for your <br />faves anytime
                    </h1>
                    <p class="voting-description">
                        Mission Statement and more writing yeah
                    </p>
                </div>
                <img
                    src="@/assets/media/award-anya.png"
                    alt="Anya falling with icecream"
                    class="banner-image"
                />
            </div>
            <div class="banner-season">
                <ul class="anime-list">
                    <h2 class="season-text">Anime of the Season</h2>
                    <li
                        v-for="(anime, index) in animes"
                        :key="anime.animeID"
                        class="bestAnime"
                    >
                        <div class="picture-column">
                            <h2 class="rank-number">{{ index + 1}}</h2>
                            <img
                                class="anime-pfp"
                                :src="anime.image_url"
                                alt="anime-image"
                            />
                        </div>
                        <div class="info-column">
                            <h1 class="animeTitle">{{ anime.anime_name }}</h1>
                            <div class="star-rating">
                                <starSVG />
                                <p>{{ anime.avg_rating }}</p>
                            </div>
                        </div>
                        <span class="genre-text">{{ anime.anime_genre[0].genre }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import starSVG from "@/components/starSVG.vue";
import { useUserStore } from "~/stores/userStore";

const userStore = useUserStore();

const animes = ref([])

onMounted(() => {
    const arr_anime = JSON.parse(JSON.stringify(userStore.allAnime))
    arr_anime.sort((a: any, b: any) => b.avg_rating - a.avg_rating);
    // console.log(arr_anime)
    const x = arr_anime.slice(1,6)
    animes.value = x

    console.log(animes.value)
});
// export default {
//     components: {
//         starSVG,
//     },
//     data: () => ({
//         animes: [
//             {
//                 animeID: "01",
//                 title: "One Punch Man",
//                 stars: 8.5,
//                 releaseDate: "Oct 5, 2015",
//                 genre: "Adventure",
//             },
//             {
//                 animeID: "02",
//                 title: "Spy x Family",
//                 stars: 9.99,
//                 releaseDate: "Apr 9, 2022",
//                 genre: "Comedy",
//             },
//             {
//                 animeID: "03",
//                 title: "Chainsaw Man",
//                 stars: 8.24,
//                 releaseDate: "Oct 11, 2022",
//                 genre: "Graphic",
//             },
//             {
//                 animeID: "04",
//                 title: "Summertime Render",
//                 stars: 9.61,
//                 releaseDate: "Apr 15, 2022",
//                 genre: "School Life",
//             },
//             {
//                 animeID: "05",
//                 title: "Is It Wrong To Try To Pick Up Girls In A Dungeon?",
//                 stars: 7.69,
//                 releaseDate: "Apr 4, 2015",
//                 genre: "Fantasy",
//             },
//         ],
//     }),
// };
</script>

<style scoped>
#banner {
    margin-bottom: 7vh;
}
.banner-flex {
    width: 80%;
    height: 45vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin: 0 auto;
}
.banner-bg {
    background-color: var(--primary);
    width: 50%;
    height: 100%;
    border-radius: 25px;
    display: flex;
    align-items: center;
    color: var(--white);
}
/* top anime section */
.banner-season {
    background-color: var(--tertiary);
    width: 35%;
    height: 100%;
    border-radius: 25px;
    margin: 0 auto;
    color: var(--white);
}
.anime-pfp {
    border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    -o-border-radius: 50%;
    width: 5rem;
    height: 5rem;
    margin-left: 1rem;
    object-fit: cover;
}
.season-text {
    font-size: var(--h3);
    margin: 2.7vw 0 0 0;
    text-align: center;
}
.animeTitle {
    font-size: var(--h4);
    overflow: hidden;
    white-space: nowrap;
    display: block;
    text-overflow: ellipsis;
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
/* flex for primary section */
.banner-text {
    width: 55%;
    height: 90%;
    margin-left: 5%;
    line-height: 1.4;
    display: flex;
    justify-content: start;
    flex-direction: column;
    background-color: var(--secondary);
    border-radius: 25px;
    position: relative;
}
/* anya */
.banner-image {
    width: 20%;
    margin-left: 20%;
    position: absolute;
}
/* primary color section */
.title-banner,
.trending-text,
.voting-description {
    margin-left: 5%;
}
/* "vote for faves" */
.title-banner {
    font-size: var(--h2);
    font-weight: var(--fw-bold);
    text-transform: uppercase;
    margin-top: 5%;
}
/* words trending */
.trending-text {
    font-size: var(--h4);
    margin-top: 15%;
    letter-spacing: 1rem;
    text-transform: uppercase;
    font-weight: var(--fw-light);
}
/* small text to describe process */
.voting-description {
    font-size: var(--h5);
    font-weight: var(--fw-reg);
    margin-top: 4%;
}
/* rating to make it aligned and flex row */
.star-rating {
    display: flex;
    align-items: center;
}
/* smaller than best anime not including title */
.anime-list {
    display: flex;
    flex-direction: column;
}
/* overall best anime (gray section) */
.bestAnime {
    display: flex;
    flex-direction: row;
}
/* undernavigation  */

.underNav{
  height: 15rem;
  display: block;

}

/* Media Queries */
@media screen and (max-width: 1285px) {
    .title-banner {
        font-size: var(--h4);
    }
    .banner-bg {
        width: 57%;
        height: 40vh;
    }
    .banner-flex {
        width: 80%;
        height: 50%;
    }
    .banner-text {
        width: 60%;
        height: 90%;
        line-height: 1.3;
    }
    .banner-image {
        width: 20%;
        margin-left: 27%;
    }
    .banner-season {
        width: 40%;
        height: 101%;
    }
    .animeTitle {
        font-size: var(--h4);
    }
    .anime-pfp {
        width: 4.2rem;
        height: 4.2rem;
    }
}
@media screen and (max-width: 1025px) {
    .banner-bg {
        width: 60%;
    }
    .banner-text {
        width: 60%;
    }
    .banner-flex {
        height: 60%;
    }
    .banner-image {
        width: 21%;
        margin-left: 27%;
    }
    .banner-season {
        width: 40%;
        margin-left: 2%;
    }
    .animeTitle {
        font-size: var(--h5);
    }
    .anime-pfp {
        width: 4rem;
        height: 4rem;
    }
}
@media screen and (max-width: 915px) {
    #banner {
        width: 110vw;
        height: 125vh;
    }
    .anime-pfp {
        width: 6rem;
        height: 6rem;
    }
    .bestAnime {
        margin-top: 1%;
        margin-bottom: 1%;
    }
    .banner-bg {
        width: 67%;
        height: 90%;
        margin-bottom: 10%;
        box-shadow: -18px 20px var(--secondary);
    }
    .banner-flex {
        width: 85%;
        margin-top: 5%;
        flex-direction: column;
    }
    .banner-text {
        width: 92%;
        height: 90%;
        background-color: transparent;
    }
    .banner-image {
        display: none;
    }
    .banner-season {
        width: 67%;
        height: 98%;
        margin-left: 16%;
    }
    .season-text {
        font-size: var(--h2);
    }
    .star-rating {
        font-size: 18px;
    }
    .animeTitle {
        font-size: var(--h3);
    }
    .rank-number {
        font-size: var(--h4);
    }
    .genre-text {
        font-size: var(--h5);
        margin-left: 2%;
    }
    .title-banner {
        font-size: var(--h1);
    }
    .trending-text {
        font-size: var(--h2);
        letter-spacing: 0rem;
    }
    .voting-description {
        display: none;
    }
}
@media screen and (max-width: 825px) {
    #banner {
        width: 100vw;
        height: 110vh;
    }
    .anime-pfp {
        width: 4rem;
        height: 4rem;
    }
    .banner-bg {
        width: 65%;
        height: 55%;
        margin-right: 1%;
    }
    .banner-flex {
        width: 86%;
        height: 63%;
    }
    .star-rating {
        font-size: 15px;
    }
    .banner-season {
        width: 65%;
        height: 75%;
        margin-left: 17%;
    }
    .animeTitle {
        font-size: var(--h4);
    }
    .season-text {
        margin-bottom: 1rem;
        font-size: var(--h4);
    }
    .title-banner {
        font-size: var(--h2);
    }
    .trending-text {
        font-size: var(--h3);
    }
}
@media screen and (max-width: 770px) {
    #banner {
        width: 90vw;
        height: 110vh;
    }
    .underNav {
        height: 12rem;
    }
    .banner-bg {
        width: 65%;
        height: 75%;
        box-shadow: -15px 15px var(--secondary);
    }
    .anime-pfp {
        width: 3.5rem;
        height: 3.5rem;
    }
    .banner-season {
        width: 65%;
        height: 70%;
        margin-left: 17%;
    }
    .animeTitle {
        margin-left: 2%;
        font-size: var(--h4);
    }
    .genre-text {
        font-size: var(--h6);
    }
    .star-rating {
        font-size: 13px;
    }
}
@media screen and (max-width: 545px) {
#banner{
  height: 100vh;
}
.underNav {
  height: 4rem;
}
.banner-bg {
  width: 58%;
  height: 50%;
}
.banner-flex {
  width: 97%;
  height: 55rem;
  flex-direction: column;
}
.banner-season {
  width: 58%;
  height: 54%;
  margin-left: 20%;
}
.genre-text {
  width: 25%;
  margin-left: 3%;
  font-size: var(--h7);
}
.info-column {
  width: 35%;
  margin-left: 5%;
}
.picture-column {
  width: 18%;
}
.animeTitle {
  font-size: var(--h6);
}
.title-banner {
  font-size: var(--h3);
}
.trending-text {
  font-size: var(--h4);
}
.season-text {
  font-size: var(--h5);
}

}
@media screen and (max-width: 415px) {
    .banner-bg {
        width: 79%;
        height: 55%;
    }
    .banner-season {
        width: 79%;
        height: 70%;
        margin-left: 10%;
    }
    .animeTitle {
        font-size: var(--h6);
    }
    .star-rating {
        font-size: 10px;
    }
    .rank-number {
        font-size: var(--h5);
    }
}
@media screen and (max-width: 395px) {
    .anime-pfp {
        width: 4rem;
        height: 4rem;
    }
    .season-text {
        font-size: var(--h4);
    }
    .banner-season {
        height: 75%;
    }
}
@media screen and (max-width: 285px) {
    .anime-pfp {
        width: 3rem;
        height: 3rem;
    }
    .banner-bg {
        height: 45%;
    }
    .season-text {
        font-size: var(--h5);
    }
    .banner-season {
        height: 50%;
        margin-left: 11%;
    }
    .genre-text {
        width: 27%;
        font-size: var(--smallText);
    }
    .animeTitle,
    .rank-number {
        font-size: var(--h7);
    }
}
</style>