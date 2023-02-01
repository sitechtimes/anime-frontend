<template>
	<div>
		<svg id="bar-chart"></svg>
		<h1>{{ test }}</h1>
	</div>
</template>

<script lang="ts">
import * as d3 from "d3";

import { categorybrand } from "@/assets/categorybrand.json";
//const test = Object.values(categorybrand);


d3.select("#bar-chart")



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