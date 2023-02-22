<template>
	<div id="animeinfo">
		<AnimeInfo />
	</div>
</template>

<script setup lang="ts">
import { useUserStore } from "~~/stores/userStore";
import { ref } from "vue";

const userStore = useUserStore();

const endpoint = "http://127.0.0.1:8000/graphql/";
const headers = {
	"content-type": "application/json",
	Authorization: `Bearer ${userStore.token}`,
};

const graphqlQuery = {
	query: `query {
				  allAnime {
					edges {
					  node {
						id
						animeName
						episodes
						mediaType
						imageUrl
					  }
					}
				  }
				},
			  `,
	variables: {},
};

const options = {
	method: "POST",
	headers: headers,
	body: JSON.stringify(graphqlQuery),
};

const response = await fetch(endpoint, options);
const data = await response.json();

const trendingAnime = [];

const myJSON = JSON.stringify(
	data.data.allAnime.edges.forEach(anime => {
		trendingAnime.push(anime.node);
	})
);

//console.log(trendingAnime);
console.log(userStore.animeId);
</script>

<script lang="ts">
import AnimeInfo from "../components/animeInfoComp.vue";
import { useUserStore } from "~~/stores/userStore";

export default {
	name: "anime",
	components: {
		AnimeInfo,
	},
};
</script>

<style></style>
