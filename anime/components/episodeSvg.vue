<template>
	<svg width="50" height="20" viewBox="0 0 46 14" xmlns="http://www.w3.org/2000/svg">
		<path
			d="M0 1C0 0.447715 0.447715 0 1 0H44.6975C45.3548 0 45.8333 0.623321 45.6635 1.25833L42.4886 13.1313C42.3717 13.5688 41.9754 13.873 41.5226 13.873H1C0.447717 13.873 0 13.4253 0 12.873V1Z"
			fill="var(--secondary)"
		/>
		<text id="ep" x="6" y="10.5" v-if="episode">{{ episode }}</text>
		<text id="ep" x="6" y="10.5" v-if="!episode">N/A</text>
	</svg>
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
#ep {
	width: 1.5rem;
	font-size: var(--h7);
	font-weight: var(--fw-reg);
	fill: var(--white);
}
</style>
