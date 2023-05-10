<template>
	<div id="searchBar">
		<div v-if="hideSearch" @click="enterSearchMobile" class="search-btn">
			<svg
				width="22"
				height="22"
				viewBox="0 0 22 22"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M16.99 9.392c0 4.713-3.692 8.535-8.246 8.535S.5 14.105.5 9.392C.499 4.678 4.19.857 8.744.857s8.245 3.821 8.245 8.535Zm-13.207 0c0 2.836 2.22 5.136 4.961 5.136 2.74 0 4.962-2.3 4.962-5.136 0-2.837-2.222-5.136-4.962-5.136-2.74 0-4.961 2.3-4.961 5.136Z"
					fill="#DBDBDB"
				/>
				<path
					d="M12.609 15.323a1.924 1.924 0 0 1 0-2.655 1.77 1.77 0 0 1 2.565 0l5.444 5.635a1.925 1.925 0 0 1 0 2.655 1.77 1.77 0 0 1-2.566 0l-5.443-5.635Z"
					fill="#DBDBDB"
				/>
			</svg>
		</div>
		<div v-else @click="exitSearchMobile" class="search-bar">
			<form @submit.prevent="goToSeachAnime()">
				<input
					v-model="text"
					placeholder="Search anime..."
					@keyup="searchAnime(text)"
					spellcheck="false"
					class="input"
					@focus="showAnime()"
					@focusout="clearSearch()"
				/>
				<div class="biggerBox" v-if="showAnimeResults">
					<p class="biggerBox-text">Anime</p>
					<SearchResultComp
						@saveAnimeID="saveClickedAnimeID(anime.mal_id)"
						@click="reload()"
						v-for="anime in animeResults.slice(0, 5)"
						:id="anime.mal_id"
						:key="anime.mal_id"
						:mal_id="anime.mal_id"
						:animeName="anime.anime_name"
						:imageUrl="anime.large_image_url"
						:episodes="anime.episodes"
					/>
				</div>
			</form>
		</div>
	</div>
</template>

<script setup lang="ts">
import { useUserStore } from "~~/stores/userStore";
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const userStore = useUserStore();
const showAnimeResults = ref(false);
const animeResults = ref([] as any);
const text = ref("");

function searchAnime(text: string) {
	const searchResult = [] as any;

	if (text.length > 0) {
		userStore.allAnime.filter((anime: any) => {
			const animeWords = anime.anime_name.toLowerCase().split(" ");
			if (text.slice(-1) == " ") {
				text = text.slice(0, -1);
			}
			const textResults = text.toLocaleLowerCase().split(" ");

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
							searchResult.push(anime);
						}
					}
				}
			}
		});
	}
	animeResults.value = searchResult;
	console.log(animeResults.value)
}

function saveClickedAnimeID(id: number) {
	userStore.storeAnimeId(id);
}

function reload() {
	if (route.name === "animeInfo") {
		window.location.reload();
	}
}

function showAnime() {
	showAnimeResults.value = true;
}

function clearSearch() {
	setTimeout(() => {
		showAnimeResults.value = false;
		text.value = "";
		animeResults.value = [];
	}, 200);
}

function goToSeachAnime() {
	userStore.filterAnime = animeResults.value;
	navigateTo("animeSearch");
	if (route.name === "animeSearch") {
		window.location.reload();
	}
	showAnimeResults.value = false;
}
</script>

<script lang="ts">
import SearchResultComp from "./SeachResult.vue";

export default {
	data: () => ({
		text: "",
		screenWidth: 0,
		hideSearch: false,
	}),
	components: {
		SearchResultComp,
	},
	methods: {
		enterSearchMobile() {
			this.hideSearch = false;
		},
		exitSearchMobile(e: any) {
			if (this.screenWidth <= 568 && e.target.className === "search-bar") {
				this.hideSearch = true;
			}
		},
	},
	mounted() {
		this.screenWidth = window.innerWidth;
		if (window.innerWidth <= 568) {
			this.hideSearch = true;
		} else {
			this.hideSearch = false;
		}
	},
};
</script>

<style scoped>
.search-bar {
	width: 25vw;
	color: rgb(219, 219, 219);
	transition-duration: 0;
	transition-delay: 1000ms;
}
.biggerBox {
	position: fixed;
	z-index: -1;
	width: 25vw;
	top: 50%;
	padding-top: 4rem;
	padding-bottom: 3rem;
	border-radius: 10px;
	background-color: rgb(52, 52, 52);
}
.biggerBox-text {
	font-size: var(--h7);
	color: var(--light-text);
	margin-bottom: 1rem;
	margin-left: 1rem;
}
.input {
	background: rgb(68, 68, 68);
	font-size: var(--h4);
	color: rgb(219, 219, 219);
	border: none;
	border-radius: 10px;
	outline: none;
	padding: 1rem 2rem;
	width: 100%;
}
.input:focus {
	background-color: rgb(52, 52, 52);
}

@media screen and (max-width: 1300px) {
	.box {
		padding: 0.75rem;
	}
	.title {
		font-size: var(--h5);
	}
	.info-row {
		font-size: var(--smallText);
	}
	.age-rating {
		width: 15%;
	}
}

@media screen and (max-width: 1024px) {
	.search-bar {
		width: 30vw;
	}
	.biggerBox {
		width: 30vw;
	}
}

@media screen and (max-width: 768px) {
	.search-bar {
		width: 35vw;
	}
	.biggerBox {
		width: 35vw;
	}
	.input {
		font-size: var(--h5);
	}
	.box {
		padding: 0.5rem;
		height: 10vh;
	}
	.age-rating {
		width: 20%;
	}
}

@media screen and (max-width: 568px) {
	.search-bar {
		background-color: var(--bg-primary);
		height: 100vh;
		width: 100vw;
		z-index: 5;
		display: flex;
		flex-direction: column;
		align-items: center;
		position: absolute;
		top: 0;
		left: 0;
	}
	.input,
	.biggerBox {
		width: 80vw;
		position: relative;
	}
	.input {
		margin-top: 5vh;
	}
	.info-column {
		margin-left: 2vw;
	}
	.age-rating {
		width: 10%;
	}
}

@media screen and (max-width: 425px) {
	.age-rating {
		width: 15%;
	}
	.info-column {
		margin-left: 3vw;
	}
}
</style>
