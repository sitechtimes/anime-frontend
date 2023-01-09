<template>
	<div id="rankings">
		<span class="underNav"></span>
		<h2 id="rankings-title">Top Anime of the Month</h2>
		<div class="monthly-ranking-box">
			<RankingCard
				v-for="anime in topAnimeRank"
				:key="anime.id"
				:rank="anime.rank"
				:title="anime.title"
				:studio="anime.studio"
				:stars="anime.stars"
				:img="anime.img"
			/>
		</div>
		<div class="monthly-ranking-graph">
			<d3test />
		</div>
	</div>
</template>

<script lang="ts">
import RankingCard from "@/components/homepage/RankingCard.vue";
import d3test from "@/components/d3test.vue";

export default {
	name: "ranking",
	components: {
		RankingCard,
	},
	data() {
		return {
			topAnimeRank: [
				{
					id: 1,
					rank: 1,
					title: "One Piece",
					studio: "Toei Animation",
					stars: 7.91,
					img: "https://sportshub.cbsistatic.com/i/2021/03/18/fc9eba90-ae7a-4e45-bef9-037145add04d/one-piece-wano-arc-1232360.jpg",
				},
				{
					id: 2,
					rank: 2,
					title: "One Piece",
					studio: "Toei Animation",
					stars: 7.91,
					img: "https://sportshub.cbsistatic.com/i/2021/03/18/fc9eba90-ae7a-4e45-bef9-037145add04d/one-piece-wano-arc-1232360.jpg",
				},
				{
					id: 3,
					rank: 3,
					title: "One Piece",
					studio: "Toei Animation",
					stars: 7.91,
					img: "https://sportshub.cbsistatic.com/i/2021/03/18/fc9eba90-ae7a-4e45-bef9-037145add04d/one-piece-wano-arc-1232360.jpg",
				},
				{
					id: 4,
					rank: 4,
					title: "One Piece",
					studio: "Toei Animation",
					stars: 7.91,
					img: "https://sportshub.cbsistatic.com/i/2021/03/18/fc9eba90-ae7a-4e45-bef9-037145add04d/one-piece-wano-arc-1232360.jpg",
				},
				{
					id: 5,
					rank: 5,
					title: "One Piece",
					studio: "Toei Animation",
					stars: 7.91,
					img: "https://sportshub.cbsistatic.com/i/2021/03/18/fc9eba90-ae7a-4e45-bef9-037145add04d/one-piece-wano-arc-1232360.jpg",
				},
				{
					id: 6,
					rank: 6,
					title: "One Piece",
					studio: "Toei Animation",
					stars: 7.91,
					img: "https://sportshub.cbsistatic.com/i/2021/03/18/fc9eba90-ae7a-4e45-bef9-037145add04d/one-piece-wano-arc-1232360.jpg",
				},
				{
					id: 7,
					rank: 7,
					title: "One Piece",
					studio: "Toei Animation",
					stars: 7.91,
					img: "https://sportshub.cbsistatic.com/i/2021/03/18/fc9eba90-ae7a-4e45-bef9-037145add04d/one-piece-wano-arc-1232360.jpg",
				},
				{
					id: 8,
					rank: 8,
					title: "One Piece",
					studio: "Toei Animation",
					stars: 7.91,
					img: "https://sportshub.cbsistatic.com/i/2021/03/18/fc9eba90-ae7a-4e45-bef9-037145add04d/one-piece-wano-arc-1232360.jpg",
				},
				{
					id: 9,
					rank: 9,
					title: "One Piece",
					studio: "Toei Animation",
					stars: 7.91,
					img: "https://sportshub.cbsistatic.com/i/2021/03/18/fc9eba90-ae7a-4e45-bef9-037145add04d/one-piece-wano-arc-1232360.jpg",
				},
				{
					id: 10,
					rank: 10,
					title: "One Piece",
					studio: "Toei Animation",
					stars: 7.91,
					img: "https://sportshub.cbsistatic.com/i/2021/03/18/fc9eba90-ae7a-4e45-bef9-037145add04d/one-piece-wano-arc-1232360.jpg",
				},
			],
		};
	},
};
</script>

<style scoped>
.underNav {
	width: 100%;
	height: 10rem;
	display: block;
}
#rankings-title {
	color: #fff;
	font-size: var(--h2);
	font-weight: var(--fw-semi);
	margin-top: 4rem;
	margin-bottom: 6rem;
	margin-left: 14.5%;
}
</style>
