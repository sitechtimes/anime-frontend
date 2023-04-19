<template>
	<div class="home-body">
		<div class="allAnime-container">
			<div class="allAnime-header">
				<h2 class="allAnime-title">Filter</h2>
				<div>
					<div class="allAnime-filter">
						<div class="allAnime-filterBox">
							<p class="allAnime-filterText">Sort by</p>
							<select
								class="allAnime-filterSelect"
								v-model="genre"
								@change="selectPage(1)"
							>
								<option value="media_type">Fantasy</option>
								<option value="anime_name">Action</option>
								<option value="anime_name">Adventure</option>
								<option value="anime_name">Comedy</option>
								<option value="anime_name">Drama</option>
							</select>
						</div>
						<div class="allAnime-filterBox">
							<p class="allAnime-filterText">Season</p>
							<select
								class="allAnime-filterSelect"
								v-model="season"
								@change="selectPage(1)"
							>
								<option value="media_type">Spring</option>
								<option value="anime_name">Summer</option>
								<option value="anime_name">Fall</option>
								<option value="anime_name">Winter</option>
							</select>
						</div>
						<div class="allAnime-filterBox">
							<p class="allAnime-filterText">Year</p>
							<select
								class="allAnime-filterSelect"
								v-model="year"
								@change="selectPage(1)"
							>
								<option value="anime_name">2020</option>
								<option value="anime_name">2019</option>
								<option value="anime_name">2018</option>
								<option value="anime_name">2017</option>
								<option value="anime_name">2016</option>
							</select>
						</div>
						<div class="allAnime-filterBox">
							<p class="allAnime-filterText">Type</p>
							<select
								class="allAnime-filterSelect"
								v-model="type"
								@change="selectPage(1)"
							>
								<option value="media_type">Ongoing</option>
								<option value="anime_name">Completed</option>
							</select>
						</div>
						<div class="allAnime-filterBox">
							<p class="allAnime-filterText">Sort</p>
							<select
								class="allAnime-filterSelect"
								v-model="order"
								@change="selectPage(1)"
							>
								<option value="anime_name">Dafault</option>
								<option value="asc">Ascending</option>
								<option value="desc">Descending</option>
							</select>
						</div>
						<div>
							<p class="allAnime-filterBox"></p>
						</div>
					</div>
				</div>
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
			<div class="content-condition" v-if="loading">
				<AnimeCardLoading v-for="anime in loadingAnime" />
			</div>
			<div class="content-condition" v-else>
				<AnimeCard
					@saveAnimeID="saveClickedAnimeID(anime.mal_id)"
					v-for="anime in pageFilteredAnime"
					:id="anime.mal_id"
					:key="anime.mal_id"
					:episode="anime.episodes"
					:animeName="anime.anime_name"
					:imageUrl="anime.large_image_url"
					:mediaType="anime.media_type"
				/>
			</div>
			<div class="page-container-bot">
				<div class="page-number">
					<p class="page-text">Page</p>
					<form
						@submit.prevent="
							selectPage(userStore.pageNumber);
							toTop();
						"
					>
						<input
							class="page-input"
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
				<div class="page-buttonBox">
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
import { onMounted } from "vue";

const userStore = useUserStore();

const pageExistLeft = ref(false);
const pageExistRight = ref(true);
const pageFilteredAnime = ref([] as any);

const genre = ref("");
const year = ref("");
const type = ref("");
const order = ref("");
const season = ref("");


if (userStore.startPageIndex != 0) {
	pageExistLeft.value = true;
}

const loadingAnime = [...Array(14).keys()];
const loading = ref(true);

onMounted(() => {
	userStore.animeId = 0;
	userStore.startPageIndex = 0;
	userStore.endPageIndex = 35;
	userStore.pageNumber = 1;

	// userStore
	// 	.getAllAnime()
	// 	.then((data) => {
	// 		const allAnime = [] as any;

	// 		data.forEach((anime: any) => {
	// 			allAnime.push(anime);
	// 		});

	// 		userStore.allAnime = allAnime;

	// 		pageFilteredAnime.value = userStore.allAnime.slice(
	// 			userStore.startPageIndex,
	// 			userStore.endPageIndex
	// 		);
	// 		loading.value = false;
	// 	})
	// 	.catch((err) => {
	// 		console.log(err);
	// 	});

	const filterAnime = [] as any;

	userStore.filterAnime.forEach((anime: any) => {
		filterAnime.push(anime);
	});

	pageFilteredAnime.value = userStore.filterAnime.slice(
		userStore.startPageIndex,
		userStore.endPageIndex
	);
	loading.value = false;
});

function next() {
	if (userStore.endPageIndex < userStore.filterAnime.length) {
		userStore.startPageIndex += 35;
		userStore.endPageIndex += 35;
		userStore.pageNumber += 1;
		pageExistLeft.value = true;
		pageFilteredAnime.value = userStore.filterAnime.slice(
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
		pageFilteredAnime.value = userStore.filterAnime.slice(
			userStore.startPageIndex,
			userStore.endPageIndex
		);
	}
}

function saveClickedAnimeID(id: number) {
	userStore.storeAnimeId(id);
}

function selectPage(num: number) {
	userStore.startPageIndex = num * 35 - 35;
	userStore.endPageIndex = num * 35 + 1;

	pageFilteredAnime.value = userStore.allAnime.slice(
		userStore.startPageIndex,
		userStore.endPageIndex
	);
}

function toTop() {
	window.scrollTo({ top: 0, behavior: "auto" });
}
</script>

<script lang="ts">
import AnimeCard from "./homepage/AnimeCard.vue";
import TopCharts from "./homepage/TopCharts.vue";
import RightPageButton from "./RightPageButtonSvg.vue";
import LeftPageButton from "./LeftPageButtonSvg.vue";
import AnimeCardLoading from "./homepage/AnimeCardLoading.vue";

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
.allAnime-container {
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

.allAnime-filter {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	column-gap: 1rem;
}

.allAnime-filterText {
	font-size: var(--h6);
	font-weight: var(--fw-reg);
	color: var(--light-text);
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
.page-container-bot {
	justify-content: center;
	display: flex;
	align-items: center;
	column-gap: 1rem;
	margin-right: 1rem;
}
.svg-button {
	display: block;
}
</style>
