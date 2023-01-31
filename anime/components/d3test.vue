<template>
	<div>
		<svg id="bar-chart"></svg>
		<h1>{{ test }}</h1>
	</div>
</template>

<script lang="ts">
import * as d3 from "d3";

import { categorybrand } from "@/assets/categorybrand.json";
const json = '{"result":true, "count":42}';
const obj = JSON.parse(json);
const test = obj.count;

export default {
	name: "d3test",
	data() {
		return {
			data: categorybrand,
		};
	},
};
</script>
