<template>
	<div id="animeInfo">
		<InfoComp
			:name="animeInfo.animeName"
			:episodes="animeInfo.episodes"
			:mediaType="animeInfo.mediaType"
			:status="animeInfo.status"
			:aired="animeInfo.aired"
			:genres="animeInfo.animeGenre"
			:synopsis="animeInfo.summary"
			:imageUrl="animeInfo.imageUrl"
		/>
	</div>
</template>

<script setup lang="ts">
import { useUserStore } from "~~/stores/userStore";

const userStore = useUserStore();

const endpoint = "http://127.0.0.1:8000/anime/";
const headers = {
	"content-type": "application/json",
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

function aired(airTimeStart, airTimeEnd) {
	if (airTimeEnd == null) return airTimeStart;
	else {
		function changeMonth(dMonth) {
			if (dMonth == "01") return "Jan";
			if (dMonth == "02") return "Feb";
			if (dMonth == "03") return "Mar";
			if (dMonth == "04") return "Apr";
			if (dMonth == "05") return "May";
			if (dMonth == "06") return "Jun";
			if (dMonth == "07") return "Jul";
			if (dMonth == "08") return "Aug";
			if (dMonth == "09") return "Sep";
			if (dMonth == "10") return "Oct";
			if (dMonth == "11") return "Nov";
			if (dMonth == "12") return "Dec";
		}
		function changeDay(dDay) {
			if (dDay == "01") return "1";
			if (dDay == "02") return "2";
			if (dDay == "03") return "3";
			if (dDay == "04") return "4";
			if (dDay == "05") return "5";
			if (dDay == "06") return "6";
			if (dDay == "07") return "7";
			if (dDay == "08") return "8";
			if (dDay == "09") return "9";
			else return dDay;
		}
		function dat(date) {
			const dateArr = date.split("-");
			const month = changeMonth(dateArr[1]);
			const day = changeDay(dateArr[2]);
			return month + " " + day + ", " + dateArr[0];
		}
		return dat(airTimeStart) + " to " + dat(airTimeEnd);
	}
}

const airedData = aired(data.data.anime.airedFrom, data.data.anime.airedTo);

const animeInfo = {
	animeName: data.data.anime.animeName,
	episodes: String(data.data.anime.episodes),
	mediaType: data.data.anime.mediaType,
	imageUrl: data.data.anime.imageUrl,
	status: data.data.anime.status,
	aired: airedData,
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
