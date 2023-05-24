<template>
	<div class="home-body">
		<div class="airing-container">
			<div class="airing-header">
				<h2 class="airing-title">Currently Airing</h2>
				<div class="page-container">
					<div class="page-number">
						<p class="page-text">Page</p>
						<form @submit.prevent="selectPage(userStore.pageNumber)">
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
							<LeftPageButton :pageExist="pageExistLeft" />
						</button>
						<button class="page-button" v-on:click="next">
							<RightPageButton :pageExist="pageExistRight" />
						</button>
					</div>
				</div>
			</div>
			<div class="airing-content" v-if="loading">
				<AnimeCardLoading v-for="anime in loadingAnimeHome" :id="anime" :key="anime"/>
			</div>
			<div class="airing-content" v-else>
				<AnimeCard
					@saveAnimeID="saveClickedAnimeID(anime.mal_id)"
					v-for="anime in airingAnime"
					:id="anime.mal_id"
					:key="anime.mal_id"
					:mal_id="anime.mal_id"
					:episode="anime.episodes"
					:animeName="anime.anime_name"
					:imageUrl="anime.large_image_url"
					:mediaType="anime.media_type"
				/>
			</div>
		</div>
		<div class="topCharts-container">
			<h2 class="topCharts-title">Top Charts</h2>
			<TopCharts
				v-for="charts in sortedAnimeTop"
				:key="charts.id"
				:img="charts.imageUrl"
				:episode="charts.episodes"
				:votes="charts.currentlyWatching"
				:title="charts.animeName"
				:rank="sortedAnimeTop.indexOf(charts) + 1"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import AnimeCard from "./AnimeCard.vue";
import TopCharts from "./TopCharts.vue";
import RightPageButton from "../RightPageButtonSvg.vue";
import LeftPageButton from "../LeftPageButtonSvg.vue";
import AnimeCardLoading from "./AnimeCardLoading.vue";
import { animeRest } from "~~/types/anime";
import { useUserStore } from "~~/stores/userStore";
import { ref } from "vue";

const userStore = useUserStore();

const pageExistLeft = ref<boolean>(false);
const pageExistRight = ref<boolean>(true);
const airingAnime = ref<animeRest[]>();
const loading = ref<boolean>(true);
const loadingAnimeHome: number[] = [...Array(12).keys()];
let sortedAnimeTop = ref([] as any)

if (userStore.startPageIndex != 0) {
	pageExistLeft.value = true;
}



onMounted(() => {
	getTopChart()
	
	userStore.animeId = 0;
	userStore.startPageIndex = 0;
	userStore.endPageIndex = 12;
	userStore.pageNumber = 1;

	userStore
		.getAllAnime()
		.then((data) => {
			const airingAnimeArr = [] as animeRest[];

			data!.filter(function (anime: animeRest): void {
				if (anime.status == "Currently Airing") {
					airingAnimeArr.push(anime);
				}
			});

			userStore.airingAnime = airingAnimeArr;

			airingAnime.value = userStore.airingAnime.slice(
				userStore.startPageIndex,
				userStore.endPageIndex
			);

			loading.value = false;
		})
		.catch((err) => {
			alert(err)
		});
});


async function getTopChart() {
	const endpoint = "https://anime-backend-cuv2.onrender.com/graphql/";
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userStore.token}`,
      };
      const graphqlQuery = {
        query: `{
  sortedCurrentlyWatching{
    animeName,
    currentlyWatching,
    imageUrl,
    episodes,
	malId
  }
}`,
        variables: {},
      };
      const options = {
        method: "POST",
        headers: headers,
        body: JSON.stringify(graphqlQuery),
      };
      const response = await fetch(endpoint, options);
      const queryData = await response.json();

	  sortedAnimeTop.value = queryData.data.sortedCurrentlyWatching
}

function next(): void {
	if (userStore.endPageIndex < userStore.airingAnime.length) {
		userStore.startPageIndex += 11;
		userStore.endPageIndex += 11;
		userStore.pageNumber += 1;
		pageExistLeft.value = true;
		airingAnime.value = userStore.airingAnime.slice(
			userStore.startPageIndex,
			userStore.endPageIndex
		);
	} else {
		pageExistRight.value = false;
	}
}

function previous(): void {
	if (userStore.pageNumber == 1) {
		pageExistLeft.value = false;
		pageExistRight.value = true;
	} else {
		userStore.startPageIndex -= 11;
		userStore.endPageIndex -= 11;
		userStore.pageNumber -= 1;
		pageExistRight.value = true;
		airingAnime.value = userStore.airingAnime.slice(
			userStore.startPageIndex,
			userStore.endPageIndex
		);
	}
}

function saveClickedAnimeID(id: number): void {
	userStore.storeAnimeId(id);
}

function selectPage(num: number): void {
	userStore.startPageIndex = num * 11 - 11;
	userStore.endPageIndex = num * 11 + 1;
	airingAnime.value = userStore.airingAnime.slice(
		userStore.startPageIndex,
		userStore.endPageIndex
	);
}
</script>

<script lang="ts">
export default {
	data() {
		return {
			top: [
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
			],
		};
	},
};
</script>

<style scoped>
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

input[type=number] {
  -moz-appearance: textfield;
}
</style>
