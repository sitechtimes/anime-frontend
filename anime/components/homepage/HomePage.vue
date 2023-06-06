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
						<button class="page-button" v-on:click="pagenation(0)">
							<LeftPageButtonSvg :pageExist="pageLeftIndicator" />
						</button>
						<button class="page-button" v-on:click="pagenation(1)">
							<RightPageButtonSvg :pageExist="pageRightIndicator" />
						</button>
					</div>
				</div>
			</div>
			<div class="airing-content" v-if="loading">
				<homepageAnimeCardLoading
					v-for="anime in loadingAnimeHome"
					:id="anime"
					:key="anime"
				/>
			</div>
			<div class="airing-content" v-else>
				<homepageAnimeCard
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
			<homepageTopCharts
				v-for="(charts, index) in sortedAnimeTop"
				:key="charts.id"
				:malid="charts.malId"
				:img="charts.imageUrl"
				:episode="charts.episodes"
				:votes="charts.currentlyWatching"
				:title="charts.animeName"
				:rank="index + 1"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import { animeRest } from "~~/types/anime";
import { useUserStore } from "~~/stores/userStore";

const userStore = useUserStore();

const pageLeftIndicator = ref<boolean>(false);
const pageRightIndicator = ref<boolean>(true);
const airingAnime = ref<animeRest[]>();
const loading = ref<boolean>(true);
const loadingAnimeHome: number[] = [...Array(12).keys()];
const animePerPage = ref<number>(11);
const totalPage = ref<number>(0);
const pageFilteredAnime = ref([] as animeRest[]);
const startPageIndex = ref<number>(0);
const endPageIndex = ref<number>(12);
const sortedAnimeTop = ref([]);
// const pageExistLeft = reffalse

onMounted(() => {
	getTopChart();

	userStore.animeId = 0;
	userStore.pageNumber = 1;

	userStore
		.getAllAnime()
		.then((data) => {
			const airingAnimeArr = [] as animeRest[];

			data!.filter(function (anime: animeRest) {
				if (anime.status == "Finished Airing") {
					airingAnimeArr.push(anime);
				}
			});

			userStore.airingAnime = airingAnimeArr;

			airingAnime.value = userStore.airingAnime.slice(
				startPageIndex.value,
				endPageIndex.value
			);
			calculateTotalPage();

			loading.value = false;
		})
		.catch((err) => {
			alert(err);
		});
});

async function getTopChart() {
	const endpoint = "http://127.0.0.1:8000/graphql/";
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

	sortedAnimeTop.value = queryData.data.sortedCurrentlyWatching;
	console.log(sortedAnimeTop.value);
}

function calculateTotalPage() {
	totalPage.value = Math.ceil(userStore.airingAnime.length / animePerPage.value);
}

function pageExistIndicator() {
	if (userStore.pageNumber == 1) {
		pageLeftIndicator.value = false;
	} else {
		pageLeftIndicator.value = true;
	}
	if (userStore.pageNumber == totalPage.value) {
		pageRightIndicator.value = false;
	} else {
		pageRightIndicator.value = true;
	}
}

function pagenation(direction: number) {
	if (direction == 0) {
		if (userStore.pageNumber != 1) {
			pageLeftIndicator.value = true;
			pageRightIndicator.value = true;
			startPageIndex.value -= animePerPage.value;
			endPageIndex.value -= animePerPage.value;
			userStore.pageNumber -= 1;
		}
	} else if (direction == 1) {
		if (userStore.pageNumber != totalPage.value) {
			pageLeftIndicator.value = true;
			pageRightIndicator.value = true;
			startPageIndex.value += animePerPage.value;
			endPageIndex.value += animePerPage.value;
			userStore.pageNumber += 1;
		}
	}
	pageExistIndicator();
	airingAnime.value = userStore.airingAnime.slice(startPageIndex.value, endPageIndex.value);
}

function saveClickedAnimeID(id: number): void {
	userStore.storeAnimeId(id);
}

function selectPage(num: number): void {
	startPageIndex.value = num * animePerPage.value - animePerPage.value;
	endPageIndex.value = num * animePerPage.value + 1;
	airingAnime.value = userStore.airingAnime.slice(startPageIndex.value, endPageIndex.value);
}
</script>

<style scoped>
.home-body {
	display: flex;
	flex-direction: row;
	margin: 5rem auto 10rem;
	width: 95vw;
	column-gap: 3rem;
}
.airing-container {
	flex: 1;
	display: flex;
	flex-direction: column;
}
.airing-header {
	display: flex;
	align-items: baseline;
	justify-content: space-between;
}
.airing-title {
	font-size: var(--h3);
	font-weight: var(--fw-semi-bold);
	color: var(--light-text);
}
.page-container {
	display: flex;
	align-items: center;
	justify-content: center;
	column-gap: 1rem;
	margin: auto 0;
}
.page-number {
	display: flex;
	column-gap: 0.8rem;
}
.page-text {
	font-size: var(--h5);
	color: var(--light-text);
}
.page-input {
	width: 7rem;
	font-size: var(--h5);
	color: var(--light-text);
	background-color: var(--bg-secondary);
	border: none;
	border-radius: 0.5rem;
	padding: 0.5rem 1rem;
	text-align: center;
	outline: none;
}
.page-input::-webkit-outer-spin-button,
.page-input::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
}
.page-buttonBox {
	display: flex;
	justify-content: center;
	align-items: center;
	column-gap: 1rem;
}
.page-button {
	background: none;
	padding: 0;
	cursor: pointer;
}
.airing-content {
	display: grid;
	grid-template-columns: repeat(6, minmax(0, 1fr));
	row-gap: 2rem;
	column-gap: 2rem;
	margin-top: 2rem;
}
.topCharts-container {
	display: flex;
	flex-direction: column;
	width: 35rem;
}
.topCharts-title {
	font-size: var(--h3);
	font-family: var(--second-font);
	font-weight: var(--fw-semi-bold);
	color: var(--light-text);
	background-color: var(--tertiary);
	padding: 1rem 2rem;
	border-radius: 1rem;
}

@media screen and (max-width: 1440px) {
	.home-body {
		flex-direction: column;
		width: 90vw;
	}
}

@media screen and (max-width: 1024px) {
	.airing-content {
		grid-template-columns: repeat(5, minmax(0, 1fr));
	}
}

@media screen and (max-width: 767px) {
	.airing-title {
		font-size: var(--h4);
	}
	.page-text, .page-input {
		font-size: var(--h7);
	}
	.page-input {
		width: 5rem;
	}
	.page-buttonBox {
		column-gap: 0;
	}
	.airing-content {
		grid-template-columns: repeat(4, minmax(0, 1fr));
	}
}

@media screen and (max-width: 568px) {
	.airing-content {
		grid-template-columns: repeat(3, minmax(0, 1fr));		
	}
}

@media screen and (max-width: 425px) {
	.airing-content {
		column-gap: 1rem;
		row-gap: 1rem;
	}
}

@media screen and (max-width: 375px) {
	.airing-title {
		font-size: var(--h6);
	}
}
</style>
