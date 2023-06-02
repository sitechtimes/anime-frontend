<template>
	<section class="home-body">
		<div class="allAnime-container">
			<div class="allAnime-header">
				<h2 class="allAnime-title">Filter</h2>
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
			<div class="allAnime-filter">
				<form class="input-Box" @submit.prevent="selectPage(1)">
					<input
						v-model="text"
						placeholder="Search anime..."
						spellcheck="false"
						class="input"
					/>
				</form>
				<div class="allAnime-filterBox">
					<select
						class="allAnime-filterSelect"
						v-model="media_genre"
						@change="selectPage(1)"
					>
						<option value="" disabled selected>Select Genre</option>
						<option v-for="genre in genres" :value="genre">{{ genre }}</option>
					</select>
				</div>
				<div class="allAnime-filterBox">
					<select
						class="allAnime-filterSelect"
						v-model="media_season"
						@change="selectPage(1)"
					>
						<option value="" disabled selected>Select Season</option>
						<option v-for="season in seasons" :value="season">{{ season }}</option>
					</select>
				</div>
				<div class="allAnime-filterBox">
					<select
						class="allAnime-filterSelect"
						v-model="media_year"
						@change="selectPage(1)"
					>
						<option value="" disabled selected>Select Year</option>
						<option v-for="year in years" :value="year">{{ year }}</option>
					</select>
				</div>
				<div class="allAnime-filterBox">
					<select
						class="allAnime-filterSelect"
						v-model="media_type"
						@change="selectPage(1)"
					>
						<option value="" disabled selected>Select Type</option>
						<option v-for="mtype in types" :value="mtype">{{ mtype }}</option>
					</select>
				</div>
				<div class="allAnime-filterBox">
					<select
						class="allAnime-filterSelect"
						v-model="media_status"
						@change="selectPage(1)"
					>
						<option value="" disabled selected>Select Status</option>
						<option v-for="status in statuses" :value="status">{{ status }}</option>
					</select>
				</div>
				<div class="allAnime-filterBox">
					<select
						class="allAnime-filterSelect"
						v-model="media_sort"
						@change="selectPage(1)"
					>
						<option value="" disabled selected>Select Sort</option>
						<option v-for="sort in sorts" :value="sort">{{ sort }}</option>
					</select>
				</div>
				<button class="button-clear" @click="clearAllFilter">Clear All Filter</button>
			</div>
			<div></div>
			<div class="content-condition" v-if="loading">
				<homepageAnimeCardLoading v-for="anime in loadingAnime" />
			</div>
			<div class="content-condition" v-else>
				<homepageAnimeCard
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
							pagenation(0);
							toTop();
						"
					>
						<LeftPageButtonSvg :pageExist="pageLeftIndicator" />
					</button>
					<button
						class="page-button"
						v-on:click="
							pagenation(1);
							toTop();
						"
					>
						<RightPageButtonSvg :pageExist="pageRightIndicator" />
					</button>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { useUserStore } from "~~/stores/userStore";
import { animeRest } from "~~/types/anime";

const userStore = useUserStore();

const text = ref<string>("");

const genres = ref<string[]>([]);
const years = ref<string[]>([]);
const sorts = ref<string[]>([]);
const seasons = ref<string[]>([]);
const statuses = ref<string[]>([]);
const types = ref<string[]>([]);

const animeResults = ref<animeRest[]>([]);

const pageLeftIndicator = ref<boolean>(false);
const pageRightIndicator = ref<boolean>(true);
const pageFilteredAnime = ref<animeRest[]>([]);
const animePerPage = ref<number>(35);
const totalPage = ref<number>(0);
const startPageIndex = ref<number>(0);
const endPageIndex = ref<number>(animePerPage.value);

const media_genre = ref<string>("");
const media_year = ref<string>("");
const media_season = ref<string>("");
const media_status = ref<string>("");
const media_type = ref<string>("");
const media_sort = ref<string>("");

const loadingAnime: number[] = [...Array(animePerPage.value).keys()];
const loading = ref<boolean>(true);

for (let i = 2021; i >= 1990; i--) {
	years.value.push(i.toString());
}

sorts.value = ["Release Date", "Name A-Z", "Number of Episodes", "Highest Rated"];
seasons.value = ["Winter", "Spring", "Summer", "Fall"];
statuses.value = ["Currently Airing", "Finished Airing"];
types.value = ["TV", "Movie", "OVA", "ONA", "Special"];

onMounted(() => {
	userStore.animeId = 0;
	endPageIndex.value = animePerPage.value;
	userStore.pageNumber = 1;

	const filterAnime = [] as animeRest[];

	userStore.filterAnime.forEach((anime: animeRest) => {
		filterAnime.push(<animeRest>anime);
	});
	calculateTotalPage();
	pageFilteredAnime.value = userStore.filterAnime.slice(startPageIndex.value, endPageIndex.value);
	loading.value = false;

	text.value = userStore.search;

	userStore.getAllGenre().then((genreArr) => {
		genreArr!.forEach((genre: { genre: string }) => {
			genres.value.push(genre.genre);
		});
	});
});

function calculateTotalPage() {
	totalPage.value = Math.ceil(userStore.filterAnime.length / animePerPage.value);
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

function saveClickedAnimeID(id: number) {
	userStore.storeAnimeId(id);
}

function filter(): animeRest[] {
	const newFilterAnime = [] as animeRest[];
	const searchResult = [] as animeRest[];
	userStore.search = text.value;

	if (text.value.length > 0) {
		userStore.allAnime.filter((anime: animeRest) => {
			const animeWords = anime.anime_name.toLowerCase().split(" ");
			if (text.value.slice(-1) == " ") {
				text.value = text.value.slice(0, -1);
			}
			const textResults = text.value.toLocaleLowerCase().split(" ");

			for (let i = 0; i < animeWords.length; i++) {
				if (animeWords[i].startsWith(textResults[0])) {
					if (textResults.length == 1) {
						searchResult.push(anime);
					} else {
						textResults.forEach((word: string) => {
							if (animeWords[i + 1] != undefined) {
								if (animeWords[i + 1].startsWith(word)) {
									searchResult.push(anime);
								}
							}
						});
					}
				}
			}
		});
	} else {
		searchResult.push(...userStore.allAnime);
	}

	searchResult.forEach((anime: animeRest) => {
		const animeGenre = [] as string[];
		const hasGenre = ref<boolean>(false);

		const animeSeason = ref<string>("");
		const animeYear = ref<string>("");
		const animeStatus = anime.status;
		const animeType = anime.media_type;

		if (anime.season != null) {
			animeSeason.value = anime.season.split(" ")[0];
			animeYear.value = anime.season.split(" ")[1];
		}

		anime.anime_genre.forEach((genre: { genre: string }) => {
			animeGenre.push(genre.genre);
		});

		animeGenre.forEach((genre: string) => {
			if (genre == media_genre.value) {
				if (!newFilterAnime.includes(anime)) {
					hasGenre.value = true;
				}
			}
		});

		if (
			(animeSeason.value == media_season.value || media_season.value == "") &&
			(animeYear.value == media_year.value || media_year.value == "") &&
			(animeStatus == media_status.value || media_status.value == "") &&
			(animeType == media_type.value || media_type.value == "") &&
			(hasGenre.value || media_genre.value == "")
		) {
			if (!newFilterAnime.includes(anime)) {
				newFilterAnime.push(anime);
			}
		}
	});

	if (media_sort.value == "Release Date") {
		newFilterAnime.sort((anime1: animeRest, anime2: animeRest) => {
			if (anime1.season == null) {
				anime1.season = "0 0";
			}
			if (anime2.season == null) {
				anime2.season = "0 0";
			}
			const aSeason = anime1.season.split(" ")[0];
			const aYear = anime1.season.split(" ")[1];
			const bSeason = anime2.season.split(" ")[0];
			const bYear = anime2.season.split(" ")[1];

			if (aYear == bYear) {
				if (aSeason == bSeason) {
					return 0;
				} else if (aSeason > bSeason) {
					return -1;
				} else {
					return 1;
				}
			} else if (aYear > bYear) {
				return -1;
			} else {
				return 1;
			}
		});
	}

	if (media_sort.value == "Name A-Z") {
		newFilterAnime.sort((media1: animeRest, media2: animeRest) => {
			media1.anime_name = media1.anime_name;
			media2.anime_name = media2.anime_name;
			if (media1.anime_name < media2.anime_name) {
				return -1;
			} else if (media1.anime_name > media2.anime_name) {
				return 1;
			} else {
				return 0;
			}
		});
	}

	if (media_sort.value == "Number of Episodes") {
		newFilterAnime.sort((media1: animeRest, media2: animeRest) => {
			if (media1.episodes == media2.episodes) {
				return 0;
			} else if (media1.episodes > media2.episodes) {
				return -1;
			} else {
				return 1;
			}
		});
	}

	if (media_sort.value == "Highest Rated") {
		newFilterAnime.sort((a: animeRest, b: animeRest) => {
			if (a.avg_rating == b.avg_rating) {
				return 0;
			} else if (a.avg_rating > b.avg_rating) {
				return -1;
			} else {
				return 1;
			}
		});
	}
	calculateTotalPage();
	return newFilterAnime;
}

function clearAllFilter() {
	media_season.value = "";
	media_year.value = "";
	media_status.value = "";
	media_type.value = "";
	media_genre.value = "";
	media_sort.value = "";
	text.value = "";
	animeResults.value = [];
	userStore.animeId = 0;
	startPageIndex.value = 0;
	endPageIndex.value = animePerPage.value;
	userStore.pageNumber = 1;

	calculateTotalPage();

	pageFilteredAnime.value = userStore.allAnime.slice(startPageIndex.value, endPageIndex.value);
}

function selectPage(num: number) {
	startPageIndex.value = num * animePerPage.value - animePerPage.value + 1;
	endPageIndex.value = num * animePerPage.value + 1;

	const filterAnimeArr = filter();
	userStore.filterAnime = filterAnimeArr;

	pageFilteredAnime.value = filterAnimeArr.slice(startPageIndex.value, endPageIndex.value);
}

function toTop() {
	window.scrollTo({ top: 0, behavior: "auto" });
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

.input-Box {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	column-gap: 1rem;
	margin-right: 2rem;
	width: 30rem;
}
.input {
	background-color: var(--bg-secondary);
	border-radius: 0.75rem;
	border: none;
	color: var(--light-text);
	font-size: var(--h5);
	font-weight: var(--fw-regular);
	padding: 0.5rem 1rem;
	width: 100%;
}
.input:focus {
	outline: none;
}
.allAnime-filter {
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
	column-gap: 1rem;
	margin-right: 2rem;
	width: 100%;
	height: 8rem;
	margin-bottom: 2rem;
}

.allAnime-filter .allAnime-filterSelect {
	background-color: var(--bg-secondary);
	border-radius: 0.75rem;
	border: none;
	color: var(--light-text);
	font-size: var(--h5);
	font-weight: var(--fw-regular);
	padding: 0.5rem 1rem;
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

.button-clear {
	width: 15rem;
	background-color: var(--bg-secondary);
	border-radius: 0.75rem;
	border: none;
	color: var(--light-text);
	font-size: var(--h5);
	font-weight: var(--fw-regular);
	padding: 0.5rem 1rem;
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
