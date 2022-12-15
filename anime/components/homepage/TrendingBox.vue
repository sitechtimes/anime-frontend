<template>
	<div class="home-body">
		<div class="trending-box">
			<div class="trending-header">
				<h2 class="trending-title">Trending</h2>
				<div class="trending-pages">
					<button class="page-button">
						<LeftPageButton />
					</button>
					<button class="page-button">
						<RightPageButton />
					</button>
				</div>
			</div>
			<div class="trending-content">
				<AnimeCard
					v-for="anime in posts"
					:key="anime.id"
					:img="anime.img"
					:episode="anime.episode"
					:format="anime.format"
					:title="anime.title"
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

<script lang="ts">
import AnimeCard from "./AnimeCard.vue";
import TopCharts from "./TopCharts.vue";
import RightPageButton from "../RightPageButtonSvg.vue";
import LeftPageButton from "../LeftPageButtonSvg.vue";

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
					episode: 12,
					votes: 100,
					title: "One Piece",
					rank: 1,
				},
				{
					id: 2,
					img: "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg",
					episode: 12,
					votes: 100,
					title: "One Piece",
					rank: 2,
				},
				{
					id: 3,
					img: "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg",
					episode: 12,
					votes: 100,
					title: "One Piece",
					rank: 3,
				},
				{
					id: 4,
					img: "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg",
					episode: 12,
					votes: 100,
					title: "One Piece",
					rank: 4,
				},
				{
					id: 5,
					img: "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg",
					episode: 12,
					votes: 100,
					title: "One Piece",
					rank: 5,
				},
				{
					id: 6,
					img: "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg",
					episode: 12,
					votes: 100,
					title: "One Piece",
					rank: 6,
				},
				{
					id: 7,
					img: "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg",
					episode: 12,
					votes: 100,
					title: "One Piece",
					rank: 7,
				},
			],
			posts: [
				{
					id: 1,
					img: "https://cdn.myanimelist.net/images/anime/5/87048.jpg",
					episode: 12,
					format: "TV",
					title: "Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen",
				},
				{
					id: 2,
					img: "https://cdn.myanimelist.net/images/anime/5/87048.jpg",
					episode: 12,
					format: "TV",
					title: "Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen",
				},
				{
					id: 3,
					img: "https://cdn.myanimelist.net/images/anime/5/87048.jpg",
					episode: 12,
					format: "TV",
					title: "Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen",
				},
				{
					id: 4,
					img: "https://cdn.myanimelist.net/images/anime/5/87048.jpg",
					episode: 12,
					format: "TV",
					title: "Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen",
				},
				{
					id: 5,
					img: "https://cdn.myanimelist.net/images/anime/5/87048.jpg",
					episode: 12,
					format: "TV",
					title: "Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen",
				},
				{
					id: 6,
					img: "https://cdn.myanimelist.net/images/anime/5/87048.jpg",
					episode: 12,
					format: "TV",
					title: "Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen",
				},
				{
					id: 7,
					img: "https://cdn.myanimelist.net/images/anime/5/87048.jpg",
					episode: 12,
					format: "TV",
					title: "Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen",
				},
				{
					id: 8,
					img: "https://cdn.myanimelist.net/images/anime/5/87048.jpg",
					episode: 12,
					format: "TV",
					title: "Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen",
				},
				{
					id: 9,
					img: "https://cdn.myanimelist.net/images/anime/5/87048.jpg",
					episode: 12,
					format: "TV",
					title: "Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen",
				},
				{
					id: 10,
					img: "https://cdn.myanimelist.net/images/anime/5/87048.jpg",
					episode: 12,
					format: "TV",
					title: "Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen",
				},
				{
					id: 11,
					img: "https://cdn.myanimelist.net/images/anime/5/87048.jpg",
					episode: 12,
					format: "TV",
					title: "Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen",
				},
				{
					id: 12,
					img: "https://cdn.myanimelist.net/images/anime/5/87048.jpg",
					episode: 12,
					format: "TV",
					title: "Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen",
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
	column-gap: 9rem;
	align-items: flex-start;
	background-size: cover;
}
.top-box {
	background-color: var(--tertiary);
	border-radius: 1.5rem;
	width: 25vw;
	margin-right: 10rem;
	margin-top: 10rem;
	height: 100%;
	display: flex;
	flex-direction: column;
	padding-top: 2rem;
}
.trending-box {
	background-color: var(--tertiary);
	border-radius: 1.5rem;
	padding-top: 2rem;
	padding-bottom: 2rem;
	width: 75vw;
	margin-left: 10rem;
	margin-top: 10rem;
}
.trending-header {
	height: 6rem;
	display: flex;
	justify-content: space-between;
	margin-left: 4vw;
	margin-right: 3.5vw;
	align-items: center;
}
.trending-title {
	font-size: var(--h3);
	font-weight: var(--fw-bold);
	color: var(--white);
	height: 6rem;
}
.top-title {
	font-size: var(--h3);
	font-weight: var(--fw-bold);
	color: var(--white);
	height: 6rem;
	margin-left: 4rem;
}
.trending-content {
	display: flex;
	flex-wrap: wrap;
	column-gap: 2rem;
	justify-content: center;
	padding: 2rem;
	row-gap: 2rem;
	column-gap: 3rem;
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
	justify-content: center;
	color: var(--white);
	cursor: pointer;
	display: flex;
	justify-content: center;
}
.svg-button {
	display: block;
	margin: auto;
}
</style>
