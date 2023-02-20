<template>
	<svg id="leftPageButton" viewBox="0 0 20 34" fill="none" xmlns="http://www.w3.org/2000/svg">
		<path
			fill-rule="evenodd"
			clip-rule="evenodd"
			d="M20 2.516 17.865.398a1.01 1.01 0 0 0-1.42 0L.401 16.314a.99.99 0 0 0 0 1.408l16.044 15.916a1.01 1.01 0 0 0 1.42 0L20 31.52 5.381 17.018l14.62-14.502Z"
		/>
	</svg>
</template>

<script lang="ts">
export default {
	name: "LeftPageButton",
};
</script>

<style scoped>
#leftPageButton {
	width: 2rem;
	height: 1.5rem;
}
#leftPageButton path {
	fill: var(--light-text);
}
#leftPageButton:hover > path {
	fill: var(--white);
}
</style>
