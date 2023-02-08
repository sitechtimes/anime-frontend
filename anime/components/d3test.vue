<template>
	<div>
		<svg id="rating-chart"></svg>
		<h1>{{ test }}</h1>
	</div>
</template>

<script lang="ts">
import * as d3 from "d3";

d3.select("#rating-chart")



export default {
	name: "d3test",
	data() {
		return {
			data: categorybrand,
			test,
		};
	},
};
</script>

<style scoped>
	h1 {
		color: rgb(255, 255, 255);
	}
</style>