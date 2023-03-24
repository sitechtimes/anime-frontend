<template>
	<div id="anime-info">
		<div class="column-1">
			<img class="animeImage" :src="`${imageUrl}`" alt="Anime Cover" />
			<div class="quick-info">
				<div>
					<h4>Information</h4>
					<div class="divider"></div>
				</div>
				<p>Type: {{ mediaType }}</p>
				<p>Episodes: {{ episodes }}</p>
				<p>Status: {{ status }}</p>
				<p>Aired: {{ aired }}</p>
				<p>Studio: {{ studio }}</p>
				<div class="quick-info-genre">
					<p>Genres:</p>
					<div v-for="(genre, index) in genres">
						<p>{{ genre }},</p>
						<!-- <p v-if="index == genres.length - 1">{{ genre }}</p> -->
					</div>
				</div>
			</div>
		</div>
		<div class="column-2">
			<div class="info-block">
				<h1>{{ name }}</h1>
				<div class="star-rating">
					<starSVG class="star" />
					<p>10.00</p>
				</div>
				<div>
					<button class="btn">Heart</button>
					<button class="btn" id="watch" @click="add">Add to Watchlist</button>
					<button class="btn">Rate</button>
				</div>
			</div>
			<div class="info-block">
				<h2>Synopsis</h2>
				<div class="divider"></div>
				<p class="w">{{ synopsis }}</p>
			</div>
			<div class="info-block">
				<h2>Characters</h2>
				<div class="divider"></div>
				<div class="character-container">
					<div v-for="character in characters" :key="character.name" class="character">
						<img
							class="character-img"
							src="https://cdn.myanimelist.net/images/characters/4/457933.jpg"
							alt=""
						/>
						<p class="character-name">{{ character.name }}</p>
					</div>
				</div>
				<div class="divider"></div>
				<div class="info-block">
					<h2>Rating Distribution</h2>
					<div class="divider"></div>
					<p>Insert D3 Bar Graph Here</p>
					<LineChart :chartData="chartData" :chartOptions="chartOptions" />
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import starSVG from "../components/starSVG.vue";
import LineChart from "../components/LineChart.vue";

export default {
	name: "AnimeInfo",
	components: {
		starSVG,
		LineChart,
	},
	props: {
		imageUrl: String,
		mediaType: String,
		episodes: Number,
		status: String,
		aired: String,
		studio: String,
		genres: Array,
		name: String,
		synopsis: String,
	},
	data: () => ({
		addList: false,
		characters: [
			{ name: "Alpha Red1" },
			{ name: "Alpha Red the Most Alpha of Reds" },
			{ name: "Alpha Red2" },
			{ name: "Alpha Red3" },
			{ name: "Alpha Red4" },
			{ name: "Alpha Red5" },
			{ name: "Al-fuh-red" },
			{ name: "Alfredo" },
		],
		chartData: {
			labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
			datasets: [
				{
					label: "Rating Distribution",
					data: [5, 7, 5, 6, 3, 3, 4, 2, 2, 3],
					fill: "start",
					borderColor: "rgb(75, 192, 192)",
					backgroundColor: "rgba(75, 192, 192, 0.2)",
					tension: 0.5,
					pointStyle: false,
				},
			],
		},
		chartOptions: {},
	}),
	methods: {
		add() {
			this.addList = !this.addList;
			console.log(this.addList);
			const hi = document.getElementById("watch");
			if (this.addList == true) {
				hi!.innerHTML = "Added to Watchlist";
				hi!.style.background = "rgb(255, 120, 140)";
				hi!.style.filter = "opacity(80%)";
			} else {
				hi!.innerHTML = "Add to watchlist";
				hi!.style.background = "lightpink";
				hi!.style.filter = "none";
			}
		},
	},
};
</script>

<style scoped>
#anime-info {
	color: rgb(255, 255, 255);
	padding-top: 13vh;
	display: flex;
	justify-content: center;
	margin: auto;
}
.column-1 {
	width: 15vw;
	position: sticky;
	align-self: flex-start;
	top: 5vh;
}
.animeImage {
	width: 15vw;
	object-fit: cover;
}
.quick-info {
	background: var(--bg-secondary);
	display: flex;
	flex-direction: column;
	justify-content: center;
	row-gap: 1.5rem;
	width: 15vw;
	margin-top: 2vh;
	padding: 0.5rem 1rem;
	font-size: var(--h5);
	padding: 2rem;
	padding-bottom: 4rem;
}
.quick-info p {
	font-size: var(--h6);
}
.quick-info-genre {
	display: flex;
	flex-wrap: wrap;
	column-gap: 0.5rem;
}
.column-2 {
	width: 53vw;
	font-size: var(--h4);
	margin-left: 2rem;
}
.info-block {
	margin-bottom: 5rem;
}
.info-block h1 {
	font-size: 3.5rem;
	font-weight: var(--fw-med);
	margin-bottom: 1rem;
}
.info-block h2 {
	font-size: var(--h3);
	font-weight: var(--fw-med);
	margin-bottom: 1rem;
}
.star-rating {
	display: flex;
	align-items: center;
	gap: 0.5rem;
	font-size: var(--h4);
	margin-bottom: 1rem;
}
.star {
	height: 1.5rem;
}
.w {
	font-size: var(--h5);
	font-weight: var(--fw-light);
	line-height: 3.5rem;
	word-spacing: 0.2rem;
	color: white;
}
.btn {
	background-color: lightpink;
	font-size: var(--h5);
	padding: 0.5rem 1rem;
	margin-right: 1rem;
	transition: 200ms all;
}
.btn:hover {
	background-color: rgb(255, 120, 140);
}
#watch {
	width: 15rem;
}
.divider {
	height: 0.2rem;
	background-color: white;
}
.character-container {
	display: flex;
	flex-direction: row;
	gap: 2rem;
	margin: 1rem 0;
	overflow-x: auto;
	white-space: nowrap;
}
.character-container::-webkit-scrollbar {
	height: 10px;
}
.character {
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	margin-bottom: 1.5rem;
}
.character-img {
	height: 10rem;
	width: 9rem;
	object-fit: cover;
}
.character-name {
	background-color: blue;
	text-align: center;
	font-size: var(--h5);
	overflow: hidden;
	text-overflow: ellipsis;
	padding: 0 1rem;
	width: 9rem;
}
</style>
