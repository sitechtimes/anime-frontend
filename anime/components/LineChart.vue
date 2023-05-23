<template>
    <Line class="lineChart" :data="chartData" :options="chartOptions" />
</template>

<script setup lang="ts">
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
    LineController,
} from "chart.js";

ChartJS.register(
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement,
    LinearScale,
    CategoryScale,
    Filler,
    LineController
);

const props = defineProps({
    chartData: {
        required: true,
        type: Object,
    },
    chartOptions: {
        type: Object,
        default: () => {},
    },
});
</script>

<style scoped>
.lineChart {
    height: 10rem;
}
</style>
