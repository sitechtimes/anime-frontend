<template>
	<div>
		<div class="allAnime-header">
			<h2 class="allAnime-title">Currently Airing</h2>
			<div class="allAnime-pages">
				<div class="allAnimePageNumberBox">
					<p class="allAnimePageNumber">Page</p>
					<div>
						<!-- <p class="allAnimePageNumberVar">{{ userStore.pageNumber }}</p> -->
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
		<div class="trending-content">
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
</template>

<script setup>
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

	if (userStore.currentAnime != null) {
		userStore.pageFilteredAnime = userStore.allAnime.slice(
			userStore.startPageIndex,
			userStore.endPageIndex
		);
	} else {
		userStore.startPageIndex = 0;
		userStore.endPageIndex = 12;
		userStore.pageNumber = 1;

		userStore
			.getAllAnime()
			.then(data => {
				userStore.allAnime = data;

				userStore.pageFilteredAnime = userStore.allAnime.slice(
					userStore.startPageIndex,
					userStore.endPageIndex
				);
			})
			.catch(err => {
				console.log(err);
			});
	}
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
