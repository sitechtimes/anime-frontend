<template>
	<NuxtLink :to="`/anime/` + mal_id" class="box" @click="$emit('saveAnimeID')">
		<img class="image-placeholder" :src="`${imageUrl}`" :alt="`${animeName} image`" />
		<div class="info-column">
			<h3 class="title">{{ animeName }}</h3>
			<div class="info-row">
				<p v-if="episodes">{{ episodes }}</p>
				<p v-else>N/A</p>
				<!-- <EpisodeSVG :episode="episodes" /> -->
			</div>
		</div>
	</NuxtLink>
</template>

<script lang="ts">
export default {
	name: "SearchResultComp",
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
			type: Number,
		},
	},
};
</script>

<style scoped>
.box {
	background-color: var(--bg-secondary);
	display: flex;
	flex-direction: row;
	align-items: center;
	cursor: pointer;
	height: 8rem;
}
.box:nth-child(even) {
	background-color: var(--search-dark);
}
.box:hover {
	background-color: var(--search-hover);
}
.image-placeholder {
	height: 90%;
	aspect-ratio: 3/4;
	object-fit: cover;
	margin: 0.5rem;
}
.info-column {
	display: flex;
	flex-direction: column;
	height: 90%;
	flex: 1;
	margin: 0.5rem 2rem 0.5rem 0.5rem;
}
.title {
	font-size: var(--h5);
	font-weight: var(--reg);
	overflow: hidden;
	display: block;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 1;
	-webkit-box-orient: vertical;
}
.info-row {
	font-size: var(--h8);
	background-color: var(--secondary);
	border-radius: 0.5rem;
	margin-top: 0.5rem;
	text-align: center;
	width: 3rem;
}
</style>
