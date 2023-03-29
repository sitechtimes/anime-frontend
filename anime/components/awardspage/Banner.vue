<template>
    <div id="banner">
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
                        v-for="anime in animes"
                        :key="anime.animeID"
                        class="bestAnime"
                    >
                        <div class="picture-column">
                            <h2 class="rank-number">{{ anime.animeID }}</h2>
                            <img
                                class="anime-pfp"
                                src="https://cdn.myanimelist.net/images/characters/4/457933.jpg"
                                alt=""
                            />
                        </div>
                        <div class="info-column">
                            <h1 class="animeTitle">{{ anime.title }}</h1>
                            <div class="star-rating">
                                <starSVG />
                                <p>{{ anime.stars.toFixed(2) }}</p>
                            </div>
                        </div>
                        <span class="genre-text">{{ anime.genre }}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import starSVG from "@/components/starSVG.vue";
export default {
    components: {
        starSVG,
    },
    data: () => ({
        animes: [
            {
                animeID: "01",
                title: "One Punch Man",
                stars: 8.5,
                releaseDate: "Oct 5, 2015",
                genre: "Adventure",
            },
            {
                animeID: "02",
                title: "Spy x Family",
                stars: 9.99,
                releaseDate: "Apr 9, 2022",
                genre: "Comedy",
            },
            {
                animeID: "03",
                title: "Chainsaw Man",
                stars: 8.24,
                releaseDate: "Oct 11, 2022",
                genre: "Graphic",
            },
            {
                animeID: "04",
                title: "Summertime Render",
                stars: 9.61,
                releaseDate: "Apr 15, 2022",
                genre: "School Life",
            },
            {
                animeID: "05",
                title: "Is It Wrong To Try To Pick Up Girls In A Dungeon?",
                stars: 7.69,
                releaseDate: "Apr 4, 2015",
                genre: "Fantasy",
            },
        ],
    }),
};
</script>

<style scoped>
#banner {
    padding-top: 9vh;
    margin-bottom: 100vh;
}
.banner-flex {
    display: flex;
    width: 80%;
    height: 45vh;
    margin: auto;
    justify-content: center;
    column-gap: 1rem;
}
.banner-bg {
    background: red;
    width: 45%;
}
.banner-season {
    background: blue;
    width: 30%;
}
img {
    display: none;
}
</style>
