<template>
	<Line class="lineChart" :data="chartData" :options="chartOptions" />
</template>

<script>
import { Line } from "vue-chartjs";
import {
	Chart as ChartJS,
	Title,
	Tooltip,
	Legend,
	PointElement,
	LineElement,
	LinearScale,
	CategoryScale,
	Filler,
} from "chart.js";

ChartJS.register(
	Title,
	Tooltip,
	Legend,
	PointElement,
	LineElement,
	LinearScale,
	CategoryScale,
	Filler
);

export default {
	name: "LineChart",
	components: {
		Line,
	},
	props: {
		chartData: {
			required: true,
			type: Object,
		},
		chartOptions: {
			type: Object,
			default: () => {},
		},
	},
};
</script>

<style>
.lineChart {
	height: 25rem;
}
</style>
