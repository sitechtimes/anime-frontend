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
		<div v-else class="search-bar">
			<div @click="exitSearchMobile" class="x">&times;</div>
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
					<NavbarSearchResult
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
import { ref, onMounted } from "vue";
import { animeRest } from "~~/types/anime";


const route = useRoute();
const userStore = useUserStore();
const showAnimeResults = ref<boolean>(false);
const animeResults = ref<animeRest[]>([]);
const text = ref<string>("");
const hideSearch = ref(false);

function searchAnime(text: string) {
	
	const searchResult = [] as animeRest[];

	userStore.search = text;

	if (text.length > 0) {
		userStore.allAnime.filter((anime: animeRest) => {
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
	}
	animeResults.value = searchResult;
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
	if (text.value != "") {
		userStore.filterAnime = animeResults.value;
		navigateTo("animeSearch");
		if (route.name === "animeSearch") {
			window.location.reload();
		}
		showAnimeResults.value = false;
	}
}

function enterSearchMobile() {
    hideSearch.value = false;
}

function exitSearchMobile() {
    hideSearch.value = true;
}

onMounted(() => {
    if (window.innerWidth <= 568) {
            hideSearch.value = true;
        } else {
            hideSearch.value = false;
        }
})
</script>

<style scoped>
.search-bar {
	width: 25vw;
	color: var(--search-text);
	transition-duration: 0;
	transition-delay: 1000ms;
}
.x {
    display: none;
    font-size: var(--h3);
    align-self: flex-end;
    margin-right: 1rem;
}

.biggerBox {
	position: fixed;
	z-index: 5;
	width: 25vw;
	padding-top: 1rem;
	padding-bottom: 3rem;
	border-radius: 10px;
	background-color: var(--bg-secondary);
}
.biggerBox-text {
	font-size: var(--h7);
	color: var(--light-text);
	margin-bottom: 1rem;
	margin-left: 1rem;
}
.input {
	background: var(--search-bg);
	font-size: var(--h4);
	color: var(--search-text);
	border: none;
	border-radius: 10px;
	outline: none;
	padding: 1rem 2rem;
	width: 100%;
}

@media screen and (max-width: 1024px) {
	.search-bar, .biggerBox {
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
	.x {
		display: block;
	}
	.input,
	.biggerBox {
		width: 80vw;
	}
	.biggerBox {
		margin-top: 3rem;
	}
}
</style>
