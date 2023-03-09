<template>
	<div class="home-body">
		<div class="allAnime-box">
			<div class="allAnime-header">
				<h2 class="allAnime-title">Currently Airing</h2>
				<div class="allAnime-pages">
					<div class="allAnimePageNumberBox">
						<p class="allAnimePageNumber">Page</p>
						<div>
							<form @submit.prevent="selectPage(userStore.pageNumber)">
								<input
									class="allAnimePageNumberVar"
									type="number"
									v-model="userStore.pageNumber"
									min="1"
									max="999"
									@change="selectPage(userStore.pageNumber)"
								/>
							</form>
						</div>
					</div>
					<div class="allAnimePageButtonBox">
						<button class="page-button" v-on:click="previous">
							<LeftPageButton :pageExist="pageExistLeft" />
						</button>
						<button class="page-button" v-on:click="next">
							<RightPageButton :pageExist="pageExistRight" />
						</button>
					</div>
				</div>
			</div>
			<div class="allAnime-content">
				<AnimeCard
					@saveAnimeID="saveClickedAnimeID(anime.mal_id)"
					v-for="anime in userStore.pageFilteredAnime"
					:id="anime.mal_id"
					:key="anime.mal_id"
					:episode="anime.episodes"
					:animeName="anime.anime_name"
					:imageUrl="anime.large_image_url"
					:mediaType="anime.media_type"
				/>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useUserStore } from "~~/stores/userStore";
import { ref } from "vue";

const userStore = useUserStore();

const pageExistLeft = ref(false);
const pageExistRight = ref(true);

if (userStore.startPageIndex != 0) {
	pageExistLeft.value = true;
}

onMounted(() => {
	userStore.animeInfo = null;
	userStore.animeId = null;

	userStore.startPageIndex = 0;
	userStore.endPageIndex = 12;
	userStore.pageNumber = 1;

	userStore
		.getAllAnime()
		.then(data => {
			const allAnime = [];

			data.forEach(anime => {
				allAnime.push(anime);
			});

			userStore.allAnime = allAnime;

			userStore.pagePopularAnime = userStore.allAnime.slice(
				userStore.startPageIndex,
				userStore.endPageIndex
			);
			console.log(userStore.pagePopularAnime);
		})
		.catch(err => {
			console.log(err);
		});
});

function next() {
	if (userStore.endPageIndex < userStore.allAnime.length) {
		userStore.startPageIndex += 11;
		userStore.endPageIndex += 11;
		userStore.pageNumber += 1;
		pageExistLeft.value = true;
		userStore.pageFilteredAnime = userStore.allAnime.slice(
			userStore.startPageIndex,
			userStore.endPageIndex
		);
	} else {
		pageExistRight.value = false;
	}
}

function previous() {
	if (userStore.pageNumber == 1) {
		pageExistLeft.value = false;
		pageExistRight.value = true;
	} else {
		userStore.startPageIndex -= 11;
		userStore.endPageIndex -= 11;
		userStore.pageNumber -= 1;
		pageExistRight.value = true;
		userStore.pageFilteredAnime = userStore.allAnime.slice(
			userStore.startPageIndex,
			userStore.endPageIndex
		);
	}
}

function saveClickedAnimeID(id) {
	userStore.storeAnimeId(id);
}

function selectPage(num) {
	userStore.startPageIndex = num * 11 - 11;
	userStore.endPageIndex = num * 11 + 1;

	userStore.pageFilteredAnime = userStore.allAnime.slice(
		userStore.startPageIndex,
		userStore.endPageIndex
	);
}
</script>

<script lang="ts">
import AnimeCard from "./AnimeCard.vue";
import TopCharts from "./TopCharts.vue";
import RightPageButton from "../RightPageButtonSvg.vue";
import LeftPageButton from "../LeftPageButtonSvg.vue";

export default {
	name: "allAnime",
	components: {
		AnimeCard,
		TopCharts,
		RightPageButton,
		LeftPageButton,
	},
};
</script>

<style>
.home-body {
	display: flex;
	flex-direction: row;
	width: 100%;
	border-radius: 10px;
	column-gap: 2rem;
	align-items: flex-start;
	background-size: cover;
}
.allAnime-box {
	background-color: var(--bg-primary);
	border-radius: 1.5rem;
	display: flex;
	flex-direction: column;
	height: 100%;
	margin-right: 2rem;
	margin-top: 10rem;
	width: 20vw;
}
.allAnime-header {
	align-items: center;
	display: flex;
	height: 6rem;
	justify-content: space-between;
	margin-bottom: 0.5rem;
}
.allAnime-title {
	font-size: var(--h3);
	font-weight: var(--fw-semi-bold);
	color: var(--light-text);
	height: 6rem;
	padding: 0;
}
.allAnime-title {
	font-size: var(--h3);
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
.allAnime-content {
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	row-gap: 4rem;
	column-gap: 1.8%;
}
.allAnime-pages {
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
.trendingPageNumber {
	font-size: var(--h5);
	font-weight: var(--fw-semi-bold);
	color: var(--light-text);
}

.allAnimePageNumberVar::-webkit-outer-spin-button,
.allAnimePageNumberVar::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
}
.trendingPageNumberVar {
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
.allAnimePageNumberVar:focus {
	outline: none;
}
.allAnimePageNumberBox {
	display: flex;
	justify-content: center;
	align-items: center;
	column-gap: 0.8rem;
}
.allAnimePageButtonBox {
	background-color: transparent;
	display: flex;
	justify-content: center;
	align-items: center;
	column-gap: 1rem;
}
.svg-button {
	display: block;
}
</style>
