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
						<button class="page-button" v-on:click="previous">
							<LeftPageButtonSvg :pageExist="pageExistLeft" />
						</button>
						<button class="page-button" v-on:click="next">
							<RightPageButtonSvg :pageExist="pageExistRight" />
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
				<button class="button-clear" @click="clearFilter">Clear All Filter</button>
			</div>
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
							previous();
							toTop();
						"
					>
						<LeftPageButtonSvg :pageExist="pageExistLeft" />
					</button>
					<button
						class="page-button"
						v-on:click="
							next();
							toTop();
						"
					>
						<RightPageButtonSvg :pageExist="pageExistRight" />
					</button>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { useUserStore } from "~~/stores/userStore";
import { ref } from "vue";
import { onMounted } from "vue";
import { animeRest } from "~~/types/anime";

const userStore = useUserStore();

const text = ref<string>("");

const genres = ref([] as string[]);
const years = ref([] as string[]);
const sorts = ref([] as string[]);
const seasons = ref([] as string[]);
const statuses = ref([] as string[]);
const types = ref([] as string[]);

const animeResults = ref([] as animeRest[]);

const pageExistLeft = ref<boolean>(false);
const pageExistRight = ref<boolean>(true);
const pageFilteredAnime = ref([] as animeRest[]);

const media_genre = ref<string>("");
const media_year = ref<string>("");
const media_season = ref<string>("");
const media_status = ref<string>("");
const media_type = ref<string>("");
const media_sort = ref<string>("");

if (userStore.startPageIndex == 0) {
	pageExistLeft.value = false;
}

const loadingAnime: number[] = [...Array(14).keys()];
const loading = ref<boolean>(true);

genres.value = [
	"Action",
	"Adventure",
	"Comedy",
	"Supernatural",
	"Suspense",
	"Drama",
	"Fantasy",
	"Horror",
	"Romance",
	"Sci-Fi",
	"Ecchi",
	"Mystery",
	"Sports",
	"Award Winning",
	"Avant Garde",
	"Gourmet",
	"Slice of Life",
];

for (let i = 2021; i >= 1990; i--) {
	years.value.push(i.toString());
}

sorts.value = ["Release Date", "Name A-Z", "Number of Episodes", "Highest Rated"];
seasons.value = ["Winter", "Spring", "Summer", "Fall"];
statuses.value = ["Currently Airing", "Finished Airing"];
types.value = ["TV", "Movie", "OVA", "ONA", "Special"];

onMounted(() => {
	userStore.animeId = 0;
	userStore.startPageIndex = 0;
	userStore.endPageIndex = 35;
	userStore.pageNumber = 1;

	const filterAnime = [] as animeRest[];

	userStore.filterAnime.forEach((anime: animeRest) => {
		filterAnime.push(<animeRest>anime);
	});

	pageFilteredAnime.value = userStore.filterAnime.slice(
		userStore.startPageIndex,
		userStore.endPageIndex
	);
	loading.value = false;

	text.value = userStore.search;
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
						const animeWordsSlice = animeWords
							.slice(i, animeWords.length)
							.join("")
							.replace(/[^a-zA-Z ]/, "")
							.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/, "");

						const textResultsSlice = textResults
							.join("")
							.replace(/[^a-zA-Z ]/, "")
							.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/, "");

						if (animeWordsSlice.startsWith(textResultsSlice)) {
							searchResult.push(<animeRest>anime);
						}
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
		newFilterAnime.sort((a: animeRest, b: animeRest) => {
			if (a.season == null) {
				a.season = "0 0";
			}
			if (b.season == null) {
				b.season = "0 0";
			}
			const aSeason = a.season.split(" ")[0];
			const aYear = a.season.split(" ")[1];
			const bSeason = b.season.split(" ")[0];
			const bYear = b.season.split(" ")[1];

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
		newFilterAnime.sort((a: animeRest, b: animeRest) => {
			a.anime_name = a.anime_name;
			b.anime_name = b.anime_name;
			if (a.anime_name < b.anime_name) {
				return -1;
			} else if (a.anime_name > b.anime_name) {
				return 1;
			} else {
				return 0;
			}
		});
	}

	if (media_sort.value == "Number of Episodes") {
		newFilterAnime.sort((a: animeRest, b: animeRest) => {
			if (a.episodes == b.episodes) {
				return 0;
			} else if (a.episodes > b.episodes) {
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
	return newFilterAnime;
}

function clearFilter() {
	media_season.value = "";
	media_year.value = "";
	media_status.value = "";
	media_type.value = "";
	media_genre.value = "";
	media_sort.value = "";
	text.value = "";
	animeResults.value = [];

	pageFilteredAnime.value = userStore.allAnime.slice(
		userStore.startPageIndex,
		userStore.endPageIndex
	);
}

function goToSeachAnime() {
	userStore.filterAnime = animeResults.value;
	userStore.filterAnime = filter();
	pageFilteredAnime.value = userStore.filterAnime.slice(
		userStore.startPageIndex,
		userStore.endPageIndex
	);
}

function selectPage(num: number): void {
	userStore.startPageIndex = num * 35 - 35;
	userStore.endPageIndex = num * 35 + 1;

	const filterAnimeArr = filter();
	userStore.filterAnime = filterAnimeArr;

	pageFilteredAnime.value = filterAnimeArr.slice(
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
