<template>
	<div class="card-container">
		<img class="anime-img" :src="`${img}`" alt="" />
		<div class="container-bar">
			<EpisodeCard :episode="episode" />
			<p id="format">{{ format }}</p>
		</div>
		<h5 class="title">{{ title }}</h5>
	</div>
</template>

<script lang="ts">
import EpisodeCard from "../episodeSvg.vue";
export default {
	name: "AnimeCard",
	components: {
		EpisodeCard,
	},
	props: {
		img: {
			type: String,
			required: true,
		},
		episode: {
			type: Number,
			required: true,
		},
		format: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
	},
};
</script>

<style scoped>
.card-container {
	display: flex;
	flex-direction: column;
	width: 8vw;
}
.anime-img {
	border-radius: 0.5rem 0.5rem 0 0;
}
img {
	width: 100%;
}
.container-bar {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background-color: var(--bg-primary);
	padding: 0.15rem;
	padding-left: 0.5rem;
	border-radius: 0 0 0.5rem 0.5rem;
}
.title {
	width: 100%;
	color: var(--white);
	font-size: var(--h6);
	font-weight: var(--fw-reg);
	padding: 0.5rem;
}
#ep {
	width: 1.5rem;
	font-size: var(--h7);
	color: var(--white);
	font-weight: var(--fw-reg);
}
#format {
	color: #f5f5f5;
	font-size: var(--h7);
	padding: 0.2rem 0.5rem;
	font-weight: var(--fw-reg);
}
</style>
