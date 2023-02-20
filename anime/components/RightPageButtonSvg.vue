<template>
	<svg id="rightPageButton" viewBox="0 0 20 34" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="m0 31.21 2.133 2.1a1.02 1.02 0 0 0 1.425 0l16.04-15.789a.981.981 0 0 0 0-1.403L3.559.33a1.02 1.02 0 0 0-1.425 0L0 2.43l14.62 14.39L0 31.21Z"
		/>
	</svg>
</template>

<script lang="ts">
export default {
	name: "RightPageButton",
};
</script>

<style scoped>
#rightPageButton {
	width: 2rem;
	height: 1.5rem;
}
#rightPageButton path {
	fill: var(--light-text);
}
#rightPageButton:hover > path {
	fill: var(--white);
}
</style>
