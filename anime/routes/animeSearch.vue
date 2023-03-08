<template>
	<div id="animeSearch">
		<searchAnimeComp />
	</div>
</template>

<script lang="ts">
import searchAnimeComp from "@/components/homepage/SearchAnimeComp.vue";

export default {
	name: "animeSearch",
	components: {
		searchAnimeComp,
	},
};
</script>
<style scoped></style>
