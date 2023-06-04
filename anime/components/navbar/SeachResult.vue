<template>
	<NuxtLink :to="`/anime/` + mal_id" class="box" @click="$emit('saveAnimeID')">
		<img class="image-placeholder" :src="`${imageUrl}`" alt="" />
		<div class="info-column">
			<h3 class="title">{{ animeName }}</h3>
			<div class="info-row">
				<EpisodeSVG :episode="episodes" />
			</div>
		</div>
	</NuxtLink>
</template>

<script lang="ts">
import EpisodeSVG from "../EpisodeSvg.vue";
export default {
	name: "SearchResultComp",
	components: {
		EpisodeSVG,
	},
	props: {
		imageUrl: {
			type: String,
			required: true,
		},
		animeName: {
			type: String,
			required: true,
		},
		episodes: {
			required: true,
		},
		mal_id: {
			type: Number
		}
	},
};
</script>

<style scoped>
.box {
	background-color: rgb(52, 52, 52);
	display: flex;
	flex-direction: row;
	align-items: center;
	cursor: pointer;
	height: 8rem;
}
.box:nth-child(even) {
	background-color: rgb(39, 39, 39);
}
.box:hover {
	background-color: rgb(112, 53, 53);
	transition: 0ms;
}
.box:active {
	background-color: rgb(112, 53, 53);
	transition: 0ms;
}
.box:not(hover) {
	background-color: rgb(68, 68, 68);
	transition: 0ms;
}
.image-placeholder {
	height: 90%;
	aspect-ratio: 3/4;
	object-fit: cover;
	margin: 0.5rem;
}
.info-column {
	margin-left: 1vw;
	width: 75%;
	display: flex;
	flex-direction: column;
	gap: 0.5vh;
	height: 100%;
}
.title {
	font-size: var(--h5);
	font-weight: var(--reg);
	white-space: nowrap;
	overflow: hidden;
	display: block;
	text-overflow: ellipsis;
	margin-top: 0.5rem;
}
.info-row {
	display: flex;
	flex-direction: row;
	align-items: center;
	font-size: var(--h7);
	gap: 2rem;
}
.star-rating {
	display: flex;
	align-items: center;
}
.star {
	height: 1rem;
	width: 1rem;
	margin-right: 0.5rem;
}
</style>
