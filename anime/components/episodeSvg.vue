<template>
	<div id="episode-box">
		<p id="episode-text" v-if="episode">{{ episode }}</p>
		<p id="episode-text" v-if="!episode">N/A</p>
		<svg
			id="epBox"
			width="1rem"
			height="2rem"
			viewBox="0 0 10 20"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M0 0h8.5a1.5 1.5 90 0 1 1.4 1.9L5 19a1.5 1.5 90 0 1-1.5 1H.1Z" />
		</svg>
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
	display: flex;
	flex-direction: row;
	align-items: center;
}
#episode-text {
	line-height: 2rem;
	color: var(--off-white);
	font-size: var(--h7);
	font-weight: var(--fw-reg);
	background-color: var(--secondary);
	padding-left: 0.6rem;
	border-radius: 0.2rem 0 0 0.2rem;
}
#epBox {
	font-size: var(--h7);
	font-weight: var(--fw-med);
	fill: var(--white);
}
#epBox path {
	fill: var(--secondary);
}
</style>
