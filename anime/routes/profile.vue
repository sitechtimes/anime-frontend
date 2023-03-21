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
                    <h3 class="profile-id">Alpha-Red</h3>
                    <p class="profile-grade">Senior Class of 2023</p>
                    <p class="profile-grade">Date Started: 01/19/2023</p>
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
                            <div class="profile-slide">
                                <div class="pf-carousel">
                                    <AnimeList
                                        v-for="anime in currentAnimes"
                                        :key="anime.animeID"
                                        :img="anime.img"
                                        :title="anime.title"
                                    />
                                </div>
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
                            <div class="profile-slide">
                                <div class="pf-carousel">
                                    <AnimeList
                                        v-for="anime in favoriteAnime"
                                        :key="anime.animeID"
                                        :img="anime.img"
                                        :title="anime.title"
                                    />
                                </div>
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
        ],
        favoriteAnime: [
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
        ],
    }),
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
    font-size: var(--h3);
    color: var(--white);
    font-weight: var(--fw-light);
}
.pf-carousel {
    display: flex;
    width: 70vw;
}
.underNav {
    width: 100vw;
    height: 12vh;
    display: block;
}
</style>
