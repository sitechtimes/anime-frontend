<template>
    <div id="rankings">
        <h2 id="rankings-title">Top Anime of the Month</h2>
        <div class="monthly-ranking-box">
            <RankingCard
                v-for="(anime, index) in ranking_arr"
                :key="anime.id"
                :stars="anime.avg_rating"
                :title="anime.anime_name"
                :studio="anime.anime_studio"
                :rank="index + 1"
                :img="anime.large_image_url"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
import RankingCard from "~~/components/rankingpage/RankingCard.vue";
// <!-- :stars="anime.stars" -->

import { animeRest } from "~~/types/anime";
import { useUserStore } from "~~/stores/userStore";
import { ref, onMounted } from "vue";

const userStore = useUserStore();
const ranking_arr = ref()





onMounted(() => {
    const arr_anime = JSON.parse(JSON.stringify(userStore.allAnime))
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
#rankings {
    display: flex;
    flex-direction: column;
    width: 70vw;
    margin: 0 auto 10rem;
    padding-top: 10rem;
}
#rankings-title {
    color: var(--white);
    font-size: var(--h2);
    font-weight: var(--fw-semi);
    margin: 4rem 0 6rem;
}

@media screen and (max-width: 1440px) {
    #rankings {
        width: 80vw;
    }
    #rankings-title {
        margin: 4rem 0 3rem;
    }
}

@media screen and (max-width: 1024px) {
    #rankings {
        width: 85vw;
    }
    #rankings-title {
        font-size: var(--h3);
        margin: 2rem 0 3rem;
    }
}

@media screen and (max-width: 767px) {
    #rankings {
        padding: 0;
    }
}

@media screen and (max-width: 568px) {
    #rankings-title {
        font-size: var(--h4);
        margin: 2rem 0;
    }
}
</style>
