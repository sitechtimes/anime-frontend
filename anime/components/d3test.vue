<template>
	<div>
		<h2>Vue.js and D3 Line Chart</h2>
		<svg id="d3chart"></svg>
	</div>
</template>
<script lang="ts">
import * as d3 from "d3";
import categorybrands from "@/assets/category-brands.csv";

data = categorybrands;

const svg = d3.create("#d3chart").attr("viewBox", [0, 0, width, height]);

const updateBars = bars(svg);
const updateAxis = axis(svg);
const updateLabels = labels(svg);
const updateTicker = ticker(svg);

yield svg.node();

for (const keyframe of keyframes) {
	const transition = svg.transition().duration(duration).ease(d3.easeLinear);

	// Extract the top bar’s value.
	x.domain([0, keyframe[1][0].value]);

	updateAxis(keyframe, transition);
	updateBars(keyframe, transition);
	updateLabels(keyframe, transition);
	updateTicker(keyframe, transition);

	invalidation.then(() => svg.interrupt());
	await transition.end();
}

duration = 250;

d3.group(data, d => d.name);

n = 12;

names = new Set(data.map(d => d.name));

datevalues = Array.from(
	d3.rollup(
		data,
		([d]) => d.value,
		d => +d.date,
		d => d.name
	)
)
	.map(([date, data]) => [new Date(date), data])
	.sort(([a], [b]) => d3.ascending(a, b));

function rank(value) {
	const data = Array.from(names, name => ({ name, value: value(name) }));
	data.sort((a, b) => d3.descending(a.value, b.value));
	for (let i = 0; i < data.length; ++i) data[i].rank = Math.min(n, i);
	return data;
}

rank(name => datevalues[0][1].get(name));

export default {
	name: "d3test",
};
</script>
