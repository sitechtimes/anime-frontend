<template>
	<div id="home">
		<HomeInfo />
	</div>
</template>

<script lang="ts">
import HomeInfo from "../components/homepage/HomeInfo.vue";

export default {
	name: "IndexPage",
	components: {
		TrendingBox,
	},
};
</script>
<style scoped></style>
