<template>
	<div class="home-body">
		<div class="trending-box">
			<div class="trending-header">
				<h2 class="trending-title">Currently Airing</h2>
				<div class="trending-pages">
					<div class="trendingPageNumberBox">
						<p class="trendingPageNumber">Page</p>
						<div>
							<!-- <p class="trendingPageNumberVar">{{ userStore.pageNumber }}</p> -->
							<form @submit.prevent="selectPage(userStore.pageNumber)">
								<input
									class="trendingPageNumberVar"
									type="number"
									v-model="userStore.pageNumber"
									min="1"
									max="999"
									@change="selectPage(userStore.pageNumber)"
								/>
							</form>
						</div>
					</div>
					<div class="trendingPageButtonBox">
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
					v-for="anime in userStore.pagePopularAnime"
					:id="anime.mal_id"
					:key="anime.mal_id"
					:episode="anime.episodes"
					:animeName="anime.anime_name"
					:imageUrl="anime.large_image_url"
					:mediaType="anime.media_type"
				/>
			</div>
		</div>
		<div class="top-box">
			<h2 class="top-title">Top Charts</h2>
			<TopCharts
				v-for="charts in top"
				:key="charts.id"
				:img="charts.img"
				:episode="charts.episode"
				:votes="charts.votes"
				:title="charts.title"
				:rank="charts.rank"
			/>
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

	if (userStore.allAnime != null) {
		userStore.pagePopularAnime = userStore.allAnime.slice(
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
				const refineData = data.filter(function (anime) {
					delete anime.small_image_url;
					delete anime.image_url;
					delete anime.trailer_youtube_url;
					delete anime.aired_from;
					delete anime.aired_to;
					delete anime.summary;
					delete anime.anime_studio;
					delete anime.anime_genre;
					delete anime.number_rating;

					return true;
				});

				const airingAnime = [];

				refineData.filter(function (anime) {
					if (anime.status == "Currently Airing") {
						airingAnime.push(anime);
					}
				});

				userStore.allAnime = airingAnime;

				userStore.pagePopularAnime = userStore.allAnime.slice(
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
		userStore.pagePopularAnime = userStore.allAnime.slice(
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
		userStore.pagePopularAnime = userStore.allAnime.slice(
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

	userStore.pagePopularAnime = userStore.allAnime.slice(
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
import { useUserStore } from "~~/stores/userStore";

export default {
	name: "TrendingBox",
	components: {
		AnimeCard,
		TopCharts,
		RightPageButton,
		LeftPageButton,
	},
	data() {
		return {
			top: [
				{
					id: 1,
					img: "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg",
					episode: 126,
					votes: 100,
					title: "One Piecesd dflkjasdfk ldkflksdjkldfalsdknflasnflds",
					rank: 1,
				},
				{
					id: 2,
					img: "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg",
					episode: 1252,
					votes: 100,
					title: "One Piecesd dflkjasdfk ldkflksdjkldfalsdknflasnflds",
					rank: 2,
				},
				{
					id: 3,
					img: "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg",
					episode: 129,
					votes: 100,
					title: "nsdlfnsflksdnflknslfsdlnfldsnfls",
					rank: 3,
				},
				{
					id: 4,
					img: "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg",
					episode: 125,
					votes: 100,
					title: "One Piece",
					rank: 4,
				},
				{
					id: 5,
					img: "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg",
					episode: 121,
					votes: 100,
					title: "One Piece",
					rank: 5,
				},
				{
					id: 6,
					img: "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg",
					episode: 123,
					votes: 100,
					title: "One Piece",
					rank: 6,
				},
				{
					id: 7,
					img: "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg",
					episode: 123,
					votes: 100,
					title: "One Piece",
					rank: 7,
				},
				{
					id: 8,
					img: "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg",
					episode: 120,
					votes: 100,
					title: "One Piece",
					rank: 8,
				},
				{
					id: 9,
					img: "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg",
					episode: 121,
					votes: 100,
					title: "One Piece",
					rank: 9,
				},
			],
		};
	},
};
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
}
.top-box {
	background-color: var(--bg-primary);
	border-radius: 1.5rem;
	display: flex;
	flex-direction: column;
	height: 100%;
	margin-right: 2rem;
	margin-top: 10rem;
	width: 20vw;
}
.trending-box {
	background-color: var(--bg-primary);
	border-radius: 1.5rem;
	margin-bottom: 3rem;
	margin-left: 2rem;
	margin-top: 10rem;
	padding: 1.5rem 3rem 3rem;
	width: 100vw;
}
.trending-header {
	align-items: center;
	display: flex;
	height: 6rem;
	justify-content: space-between;
	margin-bottom: 0.5rem;
}
.trending-title {
	font-size: var(--h3);
	font-weight: var(--fw-semi-bold);
	color: var(--light-text);
	height: 6rem;
	padding: 0;
}
.top-title {
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
.trending-content {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	row-gap: 4rem;
	column-gap: 1%;
}
.trending-pages {
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

.trendingPageNumberVar::-webkit-outer-spin-button,
.trendingPageNumberVar::-webkit-inner-spin-button {
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
.trendingPageNumberVar:focus {
	outline: none;
}
.trendingPageNumberBox {
	display: flex;
	justify-content: center;
	align-items: center;
	column-gap: 0.8rem;
}
.trendingPageButtonBox {
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
