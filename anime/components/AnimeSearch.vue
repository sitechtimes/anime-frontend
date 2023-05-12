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
								v-model="media_genre"
								@change="selectPage(1)"
							>
								<option value="Fantasy">Fantasy</option>
								<option value="Action">Action</option>
								<option value="Adventure">Adventure</option>
								<option value="Comedy">Comedy</option>
								<option value="Drama">Drama</option>
								<option value="Supernatural">Supernatural</option>
								<option value="Suspense">Suspense</option>
								<option value="Romance">Romance</option>
								<option value="Award Winning">Award Winning</option>
								<option value="Horror">Horror</option>
								<option value="Sci-Fi">Sci-Fi</option>
								<option value="Ecchi">Ecchi</option>
								<option value="Mystery">Mystery</option>
								<option value="Sports">Sports</option>
								<option value="Avant Garde">Avant Garde</option>
								<option value="Gourmet">Gourmet</option>
								<option value="Slice of Life">Slice of Life</option>
							</select>
						</div>
						<div class="allAnime-filterBox">
							<p class="allAnime-filterText">Season</p>
							<select
								class="allAnime-filterSelect"
								v-model="media_season"
								@change="selectPage(1)"
							>
								<option value="Spring">Spring</option>
								<option value="Summer">Summer</option>
								<option value="Fall">Fall</option>
								<option value="Winter">Winter</option>
							</select>
						</div>
						<div class="allAnime-filterBox">
							<p class="allAnime-filterText">Year</p>
							<select
								class="allAnime-filterSelect"
								v-model="media_year"
								@change="selectPage(1)"
							>
								<option value="2023">2023</option>
								<option value="2022">2022</option>
								<option value="2021">2021</option>
								<option value="2020">2020</option>
								<option value="2019">2019</option>
								<option value="2018">2018</option>
								<option value="2017">2017</option>
								<option value="2016">2016</option>
								<option value="2015">2015</option>
								<option value="2014">2014</option>
								<option value="2013">2013</option>
								<option value="2012">2012</option>
								<option value="2011">2011</option>
								<option value="2010">2010</option>
								<option value="2009">2009</option>
								<option value="2008">2008</option>
								<option value="2007">2007</option>
								<option value="2006">2006</option>
								<option value="2005">2005</option>
								<option value="2004">2004</option>
								<option value="2003">2003</option>
								<option value="2002">2002</option>
								<option value="2001">2001</option>
								<option value="2000">2000</option>
							</select>
						</div>
						<div class="allAnime-filterBox">
							<p class="allAnime-filterText">Type</p>
							<select
								class="allAnime-filterSelect"
								v-model="media_status"
								@change="selectPage(1)"
							>
								<option value="Ongoing">Ongoing</option>
								<option value="Completed">Completed</option>
							</select>
						</div>
						<div class="allAnime-filterBox">
							<p class="allAnime-filterText">Sort</p>
							<select
								class="allAnime-filterSelect"
								v-model="media_sort"
								@change="selectPage(1)"
							>
								<option value="Dafault">Dafault</option>
								<option value="Ascending">Ascending</option>
								<option value="Descending">Descending</option>
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
					:mal_id="anime.mal_id"
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
import { animeRest } from "~~/types/anime";
import AnimeCard from "./homepage/AnimeCard.vue";
import TopCharts from "./homepage/TopCharts.vue";
import RightPageButton from "./RightPageButtonSvg.vue";
import LeftPageButton from "./LeftPageButtonSvg.vue";
import AnimeCardLoading from "./homepage/AnimeCardLoading.vue";

const userStore = useUserStore();

const pageExistLeft = ref<boolean>(false);
const pageExistRight = ref<boolean>(true);
const pageFilteredAnime = ref([] as animeRest[]);

const media_genre = ref("");
const media_year = ref("");
const media_season = ref("");
const media_status = ref("");
const media_sort = ref("");

if (userStore.startPageIndex != 0) {
	pageExistLeft.value = true;
}

const loadingAnime: number[] = [...Array(14).keys()];
const loading = ref<boolean>(true);

onMounted(() => {
	userStore.animeId = 0;
	userStore.startPageIndex = 0;
	userStore.endPageIndex = 35;
	userStore.pageNumber = 1;

	const filterAnime = [] as animeRest[];

	userStore.filterAnime.forEach((anime: any) => {
		filterAnime.push(anime);
	});

	pageFilteredAnime.value = userStore.filterAnime.slice(
		userStore.startPageIndex,
		userStore.endPageIndex
	);
	loading.value = false;
});

function next(): void {
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

function previous(): void {
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

function saveClickedAnimeID(id: number): void {
	userStore.storeAnimeId(id);
}

function filter(): void {
	
}

function selectPage(num: number): void {
	userStore.startPageIndex = num * 35 - 35;
	userStore.endPageIndex = num * 35 + 1;

	const newFilterAnime = [] as animeRest[];

	userStore.filterAnime.forEach((anime: animeRest) => {
		const animeGenre = [] as string[];
		let hasGenre = false;

		anime.anime_genre.forEach((genre: { genre: string }) => {
			animeGenre.push(genre.genre);
		});
		animeGenre.forEach((genre: string) => {
			if (genre == media_genre.value) {
				hasGenre = true;
			}
		});

		const animeSeason = anime.season.split(" ")[0];
		const animeYear = anime.season.split(" ")[1];
		const animeStatus = anime.status;
		if (
			animeSeason == media_season.value &&
			animeYear == media_year.value &&
			animeStatus == media_status.value &&
			hasGenre
		) {
			if (!newFilterAnime.includes(anime)) {
				newFilterAnime.push(anime);
			}
		}
	});

	pageFilteredAnime.value = newFilterAnime.slice(
		userStore.startPageIndex,
		userStore.endPageIndex
	);
}

function toTop(): void {
	window.scrollTo({ top: 0, behavior: "auto" });
}
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
