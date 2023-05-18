<template>
    <div id="awards">
        <section id="banner">
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
                        <AwardspageBanner
                            v-for="anime in bestAnimesAward"
                            :key="anime.rank"
                            :title="anime.title"
                            :stars="anime.stars"
                            :img="anime.img"
                            :genre="anime.genre"
                        />
                    </ul>
                </div>
            </div>
        </section>
        <section id="awards-list">
            <div class="text-box">
                <h1 class="text-head">#Vote Here in the Boxes Below</h1>
                <div class="text-sub">
                    <h2 class="text-tab">Seasonal</h2>
                    <h2 class="text-tab">Year</h2>
                    <NuxtLink to="/history"
                        ><h2 class="text-tab">Past Winners</h2></NuxtLink
                    >
                </div>
            </div>
            <NuxtLink to="/vote" class="award-container">
                <AwardspageAwardVoting
                    v-for="award in awards"
                    :key="award.award"
                    :award="award.award"
                    :img="award.img"
                />
            </NuxtLink>
        </section>
    </div>
</template>
<script lang="ts">
export default {
    data: () => ({
        bestAnimesAward: [
            {
                rank: 0o1,
                title: "One Punch Man",
                stars: 8.5,
                releaseDate: "Oct 5, 2015",
                genre: "Adventure",
                img: `https://cdn.myanimelist.net/images/characters/4/457933.jpg`,
            },
            {
                rank: 0o2,
                title: "Spy x Family",
                stars: 9.99,
                releaseDate: "Apr 9, 2022",
                genre: "Comedy",
                img: `https://cdn.myanimelist.net/images/characters/4/457933.jpg`,
            },
            {
                rank: 0o3,
                title: "Chainsaw Man",
                stars: 8.24,
                releaseDate: "Oct 11, 2022",
                genre: "Graphic",
                img: `https://cdn.myanimelist.net/images/characters/4/457933.jpg`,
            },
            {
                rank: 0o4,
                title: "Summertime Render",
                stars: 9.61,
                releaseDate: "Apr 15, 2022",
                genre: "School Life",
                img: `https://cdn.myanimelist.net/images/characters/4/457933.jpg`,
            },
            {
                rank: 0o5,
                title: "Is It Wrong To Try To Pick Up Girls In A Dungeon?",
                stars: 7.69,
                releaseDate: "Apr 4, 2015",
                genre: "Fantasy",
                img: `https://cdn.myanimelist.net/images/characters/4/457933.jpg`,
            },
        ],
        awards: [
            {
                award: "Best Anime",
                img: `https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg`,
            },
            {
                award: "Best Character Design",
                img: `https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg`,
            },
            {
                award: "Best Animation",
                img: `https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg`,
            },
            {
                award: "Best New Series",
                img: `https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg`,
            },
            {
                award: "Best Continuing Series",
                img: `https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg`,
            },
            {
                award: "Best Opening Sequence",
                img: `https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg`,
            },
            {
                award: "Best Ending Sequence",
                img: `https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg`,
            },
            {
                award: "Best Main Character",
                img: `https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg`,
            },
            {
                award: "Best Supporting Character",
                img: `https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg`,
            },
            {
                award: "Best Action",
                img: `https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg`,
            },
            {
                award: "Best Comedy",
                img: `https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg`,
            },
            {
                award: "Best Drama",
                img: `https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg`,
            },
            {
                award: "Best Fantasy",
                img: `https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg`,
            },
            {
                award: "Best Romance",
                img: `https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg`,
            },
            {
                award: "Best Anime Song",
                img: `https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg`,
            },
        ],
    }),
};
</script>
<style scoped>
#banner {
    padding-top: 9vh;
}
.banner-flex {
    display: flex;
    width: 80%;
    height: 45rem;
    margin: auto;
    margin-top: 5vh;
    margin-bottom: 9vh;
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
    padding-top: 5rem;
}
.trending-text,
.title-banner,
.voting-description {
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
.banner-season {
    background: var(--tertiary);
    width: 35%;
    border-radius: 25px;
    padding: 3rem 2rem;
}
.anime-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
}
.banner-image {
    height: 75%;
}
.season-text {
    text-align: center;
    font-size: var(--h3);
}
/* section #awards-list */
.award-container {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    column-gap: 6rem;
    row-gap: 6rem;
}
#awards-list {
    margin: auto;
    width: 75vw;
    margin-bottom: 30vh;
    color: var(--white);
}
.text-box {
    margin-bottom: 4rem;
}
.text-head {
    font-size: var(--h2);
}
.text-sub {
    display: flex;
}
.text-tab {
    font-size: var(--h4);
    margin-right: 3rem;
    transition: 200ms ease-in-out;
    font-weight: var(--fw-light);
}
.text-tab:hover {
    color: var(--primary);
    text-decoration: underline;
}
@media screen and (max-width: 1440px) {
    .banner-flex {
        height: 37rem;
    }
    .banner-text {
        width: 32rem;
        padding-top: 4rem;
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
    .anime-season {
        padding: 2rem;
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
        margin-bottom: 5vh;
    }
    .banner-text {
        width: 30rem;
        padding-top: 3rem;
    }
    .banner-season {
        width: 40%;
    }
    .season-text {
        font-size: var(--h4);
        margin-bottom: 1rem;
    }
    .genre-text {
        font-size: var(--smallText);
    }
}

@media screen and (max-width: 1024px) {
    .banner-flex {
        height: 30rem;
        column-gap: 3rem;
    }
    .banner-text {
        width: 25rem;
    }
    .anime-pfp {
        height: 3rem;
        width: 3rem;
    }
    .title-banner {
        font-size: var(--h4);
    }
}

@media screen and (max-width: 915px) {
    .banner-image {
        display: none;
    }
    .banner-bg {
        background: var(--secondary);
        height: 28rem;
        box-shadow: var(--primary) -2rem 2rem;
    }
    .banner-text {
        margin: 1rem;
        background: none;
        padding-top: 1rem;
        width: 22rem;
    }
    .banner-season {
        width: 50%;
    }
    .animeTitle {
        font-size: var(--h6);
    }
}

@media screen and (max-width: 767px) {
    #banner {
        padding-top: 0;
    }
    .banner-flex {
        flex-direction: column;
        height: auto;
        align-items: center;
    }
    .banner-bg {
        margin-bottom: 5rem;
        width: 80%;
        height: fit-content;
        padding: 2rem 0;
    }
    .banner-text {
        width: fit-content;
        padding: 0;
    }
    .banner-season {
        width: 80%;
    }
    br {
        display: none;
    }
}

@media screen and (max-width: 425px) {
    .banner-bg {
        width: 90%;
    }
    .banner-season {
        width: 100%;
    }
}
</style>
