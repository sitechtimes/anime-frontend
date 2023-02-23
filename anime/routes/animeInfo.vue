<template>
	<div id="animeinfo">
		<AnimeInfo />
	</div>
</template>

<script setup lang="ts">
import { useUserStore } from "~~/stores/userStore";
import { ref } from "vue";

const userStore = useUserStore();
console.log(userStore.animeId);

const endpoint = "http://127.0.0.1:8000/graphql/";
const headers = {
	"content-type": "application/json",
	Authorization: `Bearer ${userStore.token}`,
};

const graphqlQuery = {
	query: `query {
				anime(id: "QW5pbWVOb2RlOjE4MA==") {
					animeName
					episodes
					mediaType
					imageUrl
					status
					airedFrom
					airedTo
					summary
					animeGenre {
						edges {
							node {
							genre
							}
						}
					}
				}
			}`,
	variables: {},
};

const options = {
	method: "POST",
	headers: headers,
	body: JSON.stringify(graphqlQuery),
};

const response = await fetch(endpoint, options);
const data = await response.json();

const myJSON = JSON.stringify(data.data.anime);

console.log(myJSON);
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
