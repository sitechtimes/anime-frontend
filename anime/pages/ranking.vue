<template>
    <div id="rankings">
        <span class="underNav"></span>
        <h2 id="rankings-title">Top Anime of the Month</h2>
        <div class="monthly-ranking-box">
            <RankingpageRankingCard
                v-for="(anime, index) in ranking_arr"
                :key="anime.id"
                :stars="anime.avg_rating"
                :title="anime.anime_name"
                :studio="anime.anime_studio"
                :rank="index + 1"
                :img="anime.large_image_url"
            />
        </div>
        <div class="monthly-ranking-graph"></div>
    </div>
</template>

<script setup lang="ts">
// <!-- :stars="anime.stars" -->

import { animeRest } from "~~/types/anime";
import { useUserStore } from "~~/stores/userStore";
import { ref, onMounted } from "vue";

const userStore = useUserStore();
const ranking_arr = ref();

onMounted(() => {
    const arr_anime = JSON.parse(JSON.stringify(userStore.allAnime));
    arr_anime.sort((a: any, b: any) => b.avg_rating - a.avg_rating);
    // console.log(arr_anime)
    const x = arr_anime.slice(1,11)
    ranking_arr.value = x
	// userStore
	// 	.getAllAnime()
	// 	.then((data) => {
	// 		const airingAnimeArr = [] as animeRest[];

    // 		data!.filter(function (anime: animeRest): void {
    // 			if (anime.status == "Currently Airing") {
    // 				airingAnimeArr.push(anime);
    // 			}
    // 		});

    // 		userStore.airingAnime = airingAnimeArr;

    // 		airingAnime.value = userStore.airingAnime.slice(
    // 			userStore.startPageIndex,
    // 			userStore.endPageIndex
    // 		);

    // 		loading.value = false;
    // 	})
    // 	.catch((err) => {
    // 		alert(err)
    // 	});
});
</script>

<style scoped>
.underNav {
    width: 100%;
    height: 10rem;
    display: block;
}
#rankings-title {
    color: #fff;
    font-size: var(--h2);
    font-weight: var(--fw-semi);
    margin-top: 4rem;
    margin-bottom: 6rem;
    margin-left: 14.5%;
}
</style>
