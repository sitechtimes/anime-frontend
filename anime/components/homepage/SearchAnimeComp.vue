<template>
	<div class="home-body">
		<div class="allAnime-box">
			<div class="allAnime-header">
				<h2 class="allAnime-title">Filter</h2>
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
				<div class="content-condition" v-if="loading">
					<AnimeCardLoading v-for="anime in loadingAnime" />
				</div>
				<div class="content-condition" v-else>
					<AnimeCard
						@saveAnimeID="saveClickedAnimeID(anime.mal_id)"
						v-for="anime in userStore.pageAllAnime"
						:id="anime.mal_id"
						:key="anime.mal_id"
						:episode="anime.episodes"
						:animeName="anime.anime_name"
						:imageUrl="anime.large_image_url"
						:mediaType="anime.media_type"
					/>
				</div>
			</div>
			<div class="allAnime-pagesBot">
				<div class="allAnimePageNumberBox">
					<p class="allAnimePageNumber">Page</p>
					<div>
						<form
							@submit.prevent="
								selectPage(userStore.pageNumber);
								toTop();
							"
						>
							<input
								class="allAnimePageNumberVar"
								type="number"
								v-model="userStore.pageNumber"
								min="1"
								max="999"
								@change="
									selectPage(userStore.pageNumber);
									toTop();
								"
							/>
						</form>
					</div>
				</div>
				<div class="allAnimePageButtonBox">
					<button
						class="page-button"
						v-on:click="
							previous();
							toTop();
						"
					>
						<LeftPageButton :pageExist="pageExistLeft" />
					</button>
					<button
						class="page-button"
						v-on:click="
							next();
							toTop();
						"
					>
						<RightPageButton :pageExist="pageExistRight" />
					</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useUserStore } from "~~/stores/userStore";
import { ref } from "vue";
import { beforeMount, onMounted } from "vue";

const userStore = useUserStore();

const pageExistLeft = ref(false);
const pageExistRight = ref(true);

if (userStore.startPageIndex != 0) {
	pageExistLeft.value = true;
}

const loadingAnime = [...Array(14).keys()];
const loading = ref(true);

onMounted(() => {
	userStore.animeInfo = null;
	userStore.animeId = null;

	userStore.startPageIndex = 0;
	userStore.endPageIndex = 35;
	userStore.pageNumber = 1;

	userStore
		.getAllAnime()
		.then(data => {
			const allAnime = [];

			data.forEach(anime => {
				allAnime.push(anime);
			});

			userStore.allAnime = allAnime;

			userStore.pageAllAnime = userStore.allAnime.slice(
				userStore.startPageIndex,
				userStore.endPageIndex
			);
			loading.value = false;
		})
		.catch(err => {
			console.log(err);
		});
});

function next() {
	if (userStore.endPageIndex < userStore.allAnime.length) {
		userStore.startPageIndex += 35;
		userStore.endPageIndex += 35;
		userStore.pageNumber += 1;
		pageExistLeft.value = true;
		userStore.pageAllAnime = userStore.allAnime.slice(
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
		userStore.startPageIndex -= 35;
		userStore.endPageIndex -= 35;
		userStore.pageNumber -= 1;
		pageExistRight.value = true;
		userStore.pageAllAnime = userStore.allAnime.slice(
			userStore.startPageIndex,
			userStore.endPageIndex
		);
	}
}

function saveClickedAnimeID(id) {
	userStore.storeAnimeId(id);
}

function selectPage(num) {
	userStore.startPageIndex = num * 35 - 35;
	userStore.endPageIndex = num * 35 + 1;

	userStore.pageFilteredAnime = userStore.allAnime.slice(
		userStore.startPageIndex,
		userStore.endPageIndex
	);
}

function toTop() {
	window.scrollTo({ top: 0, behavior: "auto" });
}
</script>

<script lang="ts">
import { useUserStore } from "~~/stores/userStore";
import AnimeCard from "./AnimeCard.vue";
import TopCharts from "./TopCharts.vue";
import RightPageButton from "../RightPageButtonSvg.vue";
import LeftPageButton from "../LeftPageButtonSvg.vue";
import AnimeCardLoading from "./AnimeCardLoading.vue";

export default {
	name: "allAnime",
	components: {
		AnimeCard,
		TopCharts,
		RightPageButton,
		LeftPageButton,
		AnimeCardLoading,
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
	justify-content: center;
	background-size: cover;
}
.allAnime-box {
	background-color: var(--bg-primary);
	border-radius: 1.5rem;
	display: flex;
	flex-direction: column;
	height: 100%;
	margin-right: 2rem;
	margin-left: 2rem;
	margin-top: 10rem;
	margin-bottom: 10rem;
	width: 90vw;
}
.allAnime-header {
	align-items: center;
	display: flex;
	height: 6rem;
	justify-content: space-between;
	margin-top: 2rem;
	margin-bottom: 2rem;
}
.allAnime-title {
	font-size: var(--h3);
	font-weight: var(--fw-semi-bold);
	color: var(--light-text);
	height: 7rem;
	width: 100%;
	display: flex;
	align-items: center;
	border-radius: 0.75rem;
	margin-bottom: 0.5rem;
}
.content-condition {
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	row-gap: 4rem;
	margin-bottom: 5rem;
	column-gap: 2.3%;
}
.allAnime-content {
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	row-gap: 4rem;
	margin-bottom: 5rem;
	column-gap: 2.3%;
}
.allAnime-pages {
	justify-content: flex-end;
	display: flex;
	align-items: center;
	column-gap: 1rem;
	margin-right: 1rem;
}
.allAnime-pagesBot {
	justify-content: center;
	display: flex;
	align-items: center;
	column-gap: 1rem;
	margin-right: 1rem;
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
.allAnimePageNumber {
	font-size: var(--h5);
	font-weight: var(--fw-semi-bold);
	color: var(--light-text);
}

.allAnimePageNumberVar::-webkit-outer-spin-button,
.allAnimePageNumberVar::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
}
.allAnimePageNumberVar {
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
