<template>
	<div id="episode-box">
		<p id="episode-text" v-if="episode">{{ episode }}</p>
		<p id="episode-text" v-else>N/A</p>
	</div>
</template>

<script lang="ts">
export default {
	name: "EpisodeSVG",
	props: {
		episode: {
			required: true,
		},
	},
};
</script>

<style scoped>
#episode-box {
	background-color: var(--secondary);
	width: 5rem;
	height: 2rem;
	clip-path: polygon(0 0, 100% 0, 75% 100%, 0% 100%);
	padding-left: 0.6rem;
}
#episode-text {
	font-size: var(--h7);
	height: 100%;
}

@media screen and (max-width: 767px) {
	#episode-box {
		height: 1.5rem;
		width: 3.5rem;
	}
	#episode-text {
		font-size: var(--smallText);
	}
}
</style>
