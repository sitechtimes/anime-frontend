<template>
	<div id="animeInfo">
		<InfoComp
			:name="animeInfo.animeName"
			:episodes="animeInfo.episodes"
			:mediaType="animeInfo.mediaType"
			:status="animeInfo.status"
			:airedFrom="animeInfo.airedFrom"
			:airedTo="animeInfo.airedTo"
			:genres="animeInfo.animeGenre"
			:synopsis="animeInfo.summary"
			:imageUrl="animeInfo.imageUrl"
		/>
	</div>
</template>

<script setup lang="ts">
import { useUserStore } from "~~/stores/userStore";

const userStore = useUserStore();

const endpoint = "http://127.0.0.1:8000/graphql/";
const headers = {
	"content-type": "application/json",
	Authorization: `Bearer ${userStore.token}`,
};

const graphqlQuery = {
	query: `query {
				anime(id: "${userStore.animeId}") {
					malId
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

const animeInfo = {
	animeName: data.data.anime.animeName,
	episodes: String(data.data.anime.episodes),
	mediaType: data.data.anime.mediaType,
	imageUrl: data.data.anime.imageUrl,
	status: data.data.anime.status,
	airedFrom: data.data.anime.airedFrom,
	airedTo: data.data.anime.airedTo,
	summary: data.data.anime.summary,
	animeGenre: data.data.anime.animeGenre.edges.map(edge => {
		return edge.node.genre;
	}),
};
</script>

<script lang="ts">
import InfoComp from "../components/InfoComp.vue";

export default {
	name: "anime",
	components: {
		InfoComp,
	},
};
</script>

<style scoped></style>
