<template>
	<NuxtLink to="/animeInfo">
		<div class="animeCard-container" @click="$emit('saveAnimeID')">
			<div class="animeCard-cover">
				<img class="animeCard-image" :src="`${imageUrl}`" alt="" />
				<div class="animeCard-bar">
					<EpisodeSVG :episode="episode" />
					<p class="animeCard-media">{{ mediaType }}</p>
				</div>
			</div>
			<h5 class="animeCard-title">{{ animeName }}</h5>
		</div>
	</NuxtLink>
</template>

<script lang="ts">
import EpisodeSVG from "../EpisodeSvg.vue";

export default {
	name: "animeCard",
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
.animeCard-container {
	display: flex;
	flex-direction: column;
	width: 11vw;
}
.animeCard-cover {
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	width: 100%;
	border-radius: 0.5rem;
	overflow: hidden;
}
.animeCard-cover:not(hover) > img {
	opacity: 100%;
	transition: 0.3s;
}
.animeCard-cover:hover > img {
	opacity: 25%;
	transition: 0.3s;
}
.animeCard-img {
	border-radius: 0.5rem 0.5rem 0 0;
	width: 100%;
	object-fit: cover;
	aspect-ratio: 225/350;
}
.animeCard-bar {
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
.animeCard-title {
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
.animeCard-title:hover {
	color: var(--primary);
	transition: 0.4s;
}
.animeCard-title:not(hover) {
	color: var(--light-text);
	transition: 0.4s;
}
.animeCard-media {
	color: var(--light-text);
	font-size: var(--h6);
	font-weight: var(--fw-reg);
}
</style>
