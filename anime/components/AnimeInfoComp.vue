<template>
	<div id="anime-info">
		<div class="column-1">
			<img class="image-placeholder" :src="`$animeCoverUrl`" alt="" />
			<div class="quick-info">
				<p>Episodes: animeEpisodes</p>
			</div>
		</div>
		<div class="column-2">
			<div class="info-block">
				<h1>animeTitle</h1>
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
				<p class="w">animeSynopsis</p>
			</div>
			<div class="info-block">
				<h2>Rating Distribution</h2>
				<div class="divider"></div>
				<p>Insert D3 Bar Graph Here</p>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import starSVG from "../components/starSVG.vue";

export default {
	components: {
		starSVG,
	},
	data: () => ({
		addList: false,
	}),
	methods: {
		add() {
			this.addList = !this.addList;
			console.log(this.addList);
			const hi = document.getElementById("watch");
			if (this.addList == true) {
				hi.innerHTML = "Added to Watchlist";
				hi.style.background = "rgb(255, 120, 140)";
				hi.style.filter = "opacity(80%)";
			} else {
				hi.innerHTML = "Add to watchlist";
				hi.style.background = "lightpink";
				hi.style.filter = "none";
			}
		},
	},
};
</script>

<style scoped>
#anime-info {
	color: white;
	padding-top: 13vh;
	display: flex;
	justify-content: center;
	margin: auto;
}
.column-1 {
	width: 11vw;
	position: sticky;
	align-self: flex-start;
	top: 5vh;
}
.image-placeholder {
	height: 30vh;
	width: 100%;
	object-fit: cover;
}
.quick-info {
	background: red;
	height: 50vh;
	margin-top: 2vh;
	padding: 0.5rem 1rem;
	font-size: var(--h5);
}
.column-2 {
	width: 53vw;
	font-size: var(--h4);
	margin-left: 2rem;
}
.info-block {
	margin-bottom: 2rem;
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
