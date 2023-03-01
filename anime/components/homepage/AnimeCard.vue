<template>
	<NuxtLink to="/animeInfo">
		<div class="card-container" @click="$emit('saveAnimeID')">
			<div class="card-cover">
				<img class="anime-img" :src="`${imageUrl}`" alt="" />
				<div class="container-bar">
					<EpisodeSVG :episode="episode" />
					<p id="format">{{ mediaType }}</p>
				</div>
			</div>
			<h5 class="title">{{ animeName }}</h5>
		</div>
	</NuxtLink>
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
	width: 11vw;
}
.card-cover {
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	width: 100%;
	border-radius: 0.5rem;
	overflow: hidden;
}
.card-cover:not(hover) > img {
	opacity: 100%;
	transition: 0.3s;
}
.card-cover:hover > img {
	opacity: 25%;
	transition: 0.3s;
}
.anime-img {
	border-radius: 0.5rem 0.5rem 0 0;
}
.anime-img {
	width: 100%;
	object-fit: cover;
	aspect-ratio: 225/350;
}
.container-bar {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background-color: var(--bg-secondary);
	padding: 0.2rem;
	padding-left: 0.6rem;
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
.title:hover {
	color: var(--primary);
	transition: 0.4s;
}
.title:not(hover) {
	color: var(--light-text);
	transition: 0.4s;
}
#format {
	color: var(--light-text);
	font-size: var(--h6);
	font-weight: var(--fw-reg);
}
</style>
