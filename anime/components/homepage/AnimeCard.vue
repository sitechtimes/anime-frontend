<template>
	<div class="card-container">
		<img class="anime-img" :src="`${imageUrl}`" alt="" />
		<div class="container-bar">
			<EpisodeSVG :episode="episode" />
			<p id="format">{{ mediaType }}</p>
		</div>
		<h5 class="title">{{ animeName }}</h5>
	</div>
</template>

<script lang="ts">
import EpisodeSVG from "../episodeSvg.vue";

export default {
	name: "AnimeCard",
	components: {
		EpisodeSVG,
	},
	props: {
		imageUrl: {
			type: String,
			required: true,
		},
		episodes: {
			type: Number,
			required: true,
		},
		mediaType: {
			type: String,
			required: true,
		},
		animeName: {
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
