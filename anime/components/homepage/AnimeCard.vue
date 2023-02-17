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
		episode: {
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
	computed: {
		trimTitle() {
			if (this.animeName.length <= 28) {
				return this.animeName;
			}
			return this.animeName.slice(0, 28) + "...";
		},
	},
};
</script>

<style scoped>
.card-container {
	display: flex;
	flex-direction: column;
	width: 10.5vw;
	margin-bottom: 2rem;
}
.card-container:hover {
	transform: translateY(-0.5rem);
	transition: 0.3s;
}
.card-container:hover > img {
	opacity: 30%;
	transition: 0.3s;
}
.card-container:not(hover) > img {
	opacity: 100%;
	transition: 0.5s;
}
.anime-img {
	border-radius: 0.5rem 0.5rem 0 0;
}
img {
	width: 100%;
	object-fit: cover;
	aspect-ratio: 225/350;
}
.container-bar {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background-color: var(--bg-primary);
	padding: 0.2rem;
	padding-left: 0.5rem;
	padding-right: 0.75rem;
	border-radius: 0 0 0.5rem 0.5rem;
}
.title {
	width: 100%;
	color: var(--light-text);
	font-size: var(--h5);
	font-weight: var(--fw-light);
	padding-top: 0.5rem;
	white-space: wrap;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	overflow: hidden;
}
#format {
	color: var(--light-text);
	font-size: var(--h6);
	font-weight: var(--fw-reg);
}
</style>
