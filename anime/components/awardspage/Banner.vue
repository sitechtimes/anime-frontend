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
                            <h3 class="animeTitle">{{ anime.title }}</h3>
                            <div class="star-rating">
                                <starSVG class="star"/>
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
    margin-bottom: 9vh;
}
.banner-flex {
    display: flex;
    width: 80%;
    height: 45rem;
    margin: auto;
    margin-top: 5vh;
    justify-content: center;
    column-gap: 7rem;
    color: var(--white);
}
.banner-bg {
    background: var(--primary);
    border-radius: 25px;
    display: flex;
    align-items: center;
}
.banner-text {
    height: 85%;
    width: 42rem;
    background: var(--secondary);
    border-radius: 25px;
    margin-left: 5%;
    display: flex;
    flex-direction: column;
    row-gap: 1rem;
    padding-top: 3rem;
}
.trending-text, .title-banner, .voting-description {
    margin: 0 2rem 0 2rem;
}
.trending-text {
    font-size: var(--h4);
    font-weight: var(--fw-light);
    text-transform: uppercase;
}
.title-banner {
    font-size: var(--h2);
    font-weight: var(--fw-bold);
    text-transform: uppercase;
}
.voting-description {
    font-size: var(--h5);
}
.banner-image {
    height: 75%;
}
.banner-season {
    background: var(--tertiary);
    width: 35%;
    border-radius: 25px;
    padding: 3rem 2rem;
}
.anime-list {
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    justify-content: space-around;
}
.season-text {
    text-align: center;
    font-size: var(--h3);
}
.bestAnime {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    column-gap: 1rem;
}
.picture-column {
    display: flex;
    align-items: center;
    column-gap: 1rem;
}
.anime-pfp {
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
    object-fit: cover;
}
.info-column {
    width: 50%;
    gap: 0;
    margin: 0;
}
.animeTitle {
    font-size: var(--h4);
    overflow: hidden;
    white-space: nowrap;
    display: block;
    text-overflow: ellipsis;
}
.star-rating {
    font-size: var(--h7);
    margin-top: -1rem;
}
.star {
    height: 100%;
    margin-right: 0.3rem;
}
.genre-text {
    background-color: var(--primary);
    width: 20%;
    height: 2rem;
    text-align: center;
    border-radius: 1rem;
}

@media screen and (max-width: 1440px) {
    .banner-flex {
        height: 37rem;
    }
    .banner-text {
        width: 32rem;
    }
    .banner-image {
        height: 70%;
    }
    .title-banner {
        font-size: var(--h3);
    }
    .trending-text {
        font-size: var(--h5);
    }
    .voting-description {
        font-size: var(--h6);
    }
    .anime-pfp {
        height: 4rem;
        width: 4rem;
    }
    .animeTitle {
        font-size: var(--h5);
    }
    .star-rating {
        font-size: var(--h8);
        margin-top: -0.5rem;
    }
}

@media screen and (max-width: 1200px) {
    .banner-flex {
        height: 33rem;
    }
    .banner-text {
        width: 30rem;
    }
    .season-text {
        font-size: var(--h4);
    }
}

@media screen and (max-width: 1024px) {
    .banner-flex {
        height: 30rem;
    }
    .banner-text {
        width: 25rem;
    }
    .title-banner {
        font-size: var(--h4);
    }
}

@media screen and (max-width: 915px) {
    .banner-image {
        display: none;
    }
}
</style>
