<template>
	<NuxtLink to="/animeInfo">
		<div class="animeCardComp-container" @click="$emit('saveAnimeID')">
			<div class="animeCardComp-cover">
				<img class="animeCardComp-image" :src="`${imageUrl}`" alt="" />
				<div class="animeCardComp-info">
					<EpisodeSVG :episode="episode" />
					<p class="animeCardComp-media">{{ mediaType }}</p>
				</div>
			</div>
			<h5 class="animeCardComp-title">{{ animeName }}</h5>
		</div>
	</NuxtLink>
</template>

<script lang="ts">
import EpisodeSVG from "../EpisodeSvg.vue";

export default {
	name: "AnimeCardComp",
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
.animeCardComp-container {
	display: flex;
	flex-direction: column;
	width: 11vw;
}
.animeCardComp-cover {
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	width: 100%;
	border-radius: 0.5rem;
	overflow: hidden;
}
.animeCardComp-cover:not(hover) > img {
	opacity: 100%;
	transition: 0.3s;
}
.animeCardComp-cover:hover > img {
	opacity: 25%;
	transition: 0.3s;
}
.animeCardComp-img {
	border-radius: 0.5rem 0.5rem 0 0;
	width: 100%;
	object-fit: cover;
	aspect-ratio: 225/350;
}
.animeCardComp-info {
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
.animeCardComp-title {
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
.animeCardComp-title:hover {
	color: var(--primary);
	transition: 0.4s;
}
.animeCardComp-title:not(hover) {
	color: var(--light-text);
	transition: 0.4s;
}
.animeCardComp-media {
	color: var(--light-text);
	font-size: var(--h6);
	font-weight: var(--fw-reg);
}
</style>
