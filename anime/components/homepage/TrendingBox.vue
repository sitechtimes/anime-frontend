<template>
	<div class="home-body">
		<div class="trending-box">
			<div class="trending-header">
				<h2 class="trending-title">Trending</h2>
				<div class="trending-pages">
					<button class="page-button" v-on:click="previous">
						<LeftPageButton />
					</button>
					<button class="page-button" v-on:click="next">
						<RightPageButton />
					</button>
				</div>
			</div>
			<div class="trending-content">
				<AnimeCard
					ref="trendingAnime"
					v-for="anime in trendingAnime"
					:key="anime.id"
					:episode="anime.episodes"
					:animeName="anime.animeName"
					:imageUrl="anime.imageUrl"
					:mediaType="anime.mediaType"
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

const endpoint = "http://127.0.0.1:8000/graphql/";
const headers = {
	"content-type": "application/json",
	Authorization: `Bearer ${userStore.token}`,
};

const variable = ref({ offset: 24 });

function next() {
	variable.value.offset += 12;
	console.log(variable.value.offset);
}

function previous() {
	variable.value.offset -= 12;
	console.log(variable.value.offset);
}

const graphqlQuery = {
	query: `query($offset: Int!) {
			  allAnime(first: 12, offset: $offset) {
			    edges {
				  node {
					id
					animeName
					episodes
					mediaType
					imageUrl
				  }
				}
			  }
			},
		  `,
	variables: variable.value,
};

const options = {
	method: "POST",
	headers: headers,
	body: JSON.stringify(graphqlQuery),
};

const response = await fetch(endpoint, options);
const data = await response.json();

const trendingAnime = [];

const myJSON = JSON.stringify(
	data.data.allAnime.edges.forEach(anime => {
		trendingAnime.push(anime.node);
	})
);
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
					episode: 12,
					votes: 100,
					title: "One Piecesd dflkjasdfk ldkflksdjkldfalsdknflasnflds",
					rank: 1,
				},
				{
					id: 2,
					img: "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg",
					episode: 12,
					votes: 100,
					title: "One Piecesd dflkjasdfk ldkflksdjkldfalsdknflasnflds",
					rank: 2,
				},
				{
					id: 3,
					img: "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg",
					episode: 12,
					votes: 100,
					title: "nsdlfnsflksdnflknslfsdlnfldsnfls",
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
				{
					id: 8,
					img: "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg",
					episode: 12,
					votes: 100,
					title: "One Piece",
					rank: 8,
				},
				{
					id: 9,
					img: "https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg",
					episode: 12,
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
	padding-top: 20rem;
	display: flex;
	flex-direction: row;
	width: 100%;
	border-radius: 10px;
	column-gap: 2rem;
	align-items: flex-start;
	background-size: cover;
}
.top-box {
	background-color: var(--bg-tertiary);
	border-radius: 1.5rem;
	margin-right: 2rem;
	margin-top: 10rem;
	height: 100%;
	display: flex;
	width: 20vw;
	flex-direction: column;
}
.trending-box {
	background-color: var(--tertiary);
	border-radius: 1.5rem;
	padding: 3rem;
	width: 100vw;
	padding-top: 1.5rem;
	margin-left: 2rem;
	margin-top: 10rem;
	margin-bottom: 3rem;
}
.trending-header {
	height: 6rem;
	display: flex;
	justify-content: space-between;
	margin-bottom: 0.5rem;
	align-items: center;
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
	row-gap: 2rem;
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
	margin-left: 1rem;
	padding-right: 0;
	color: var(--white);
	cursor: pointer;
	display: flex;
	justify-content: center;
}
.svg-button {
	display: block;
}
</style>
