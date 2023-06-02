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
const animePerPage = ref<number>(12);
const totalPage = ref<number>(0);
const pageFilteredAnime = ref([] as animeRest[]);
const startPageIndex = ref<number>(0);
const endPageIndex = ref<number>(12);
const sortedAnimeTop = ref([]);
// const pageExistLeft = reffalse

onMounted(() => {
	getTopChart()
	
	userStore.animeId = 0;
	userStore.pageNumber = 1;

	userStore
		.getAllAnime()
		.then((data) => {
			const airingAnimeArr = [] as animeRest[];

			data!.filter(function (anime: animeRest) {
				if (anime.status == "Currently Airing") {
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
	  console.log(sortedAnimeTop.value)
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
		);}}
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
	pageFilteredAnime.value = userStore.filterAnime.slice(startPageIndex.value, endPageIndex.value);
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
