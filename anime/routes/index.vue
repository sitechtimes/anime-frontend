<template>
	<div id="home">
		<TrendingBox />
	</div>
</template>

<script lang="ts">
import TrendingBox from "../components/homepage/HomePage.vue";

export default {
	name: "IndexPage",
	components: {
		TrendingBox,
	},
};
</script>
<style scoped></style>
