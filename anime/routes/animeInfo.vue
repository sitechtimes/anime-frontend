<template>
	<div id="animeInfo">
		<!-- <InfoComp
			:name="animeInfo.animeName"
			:episodes="animeInfo.episodes"
			:mediaType="animeInfo.mediaType"
			:status="animeInfo.status"
			:aired="animeInfo.aired"
			:genres="animeInfo.animeGenre"
			:synopsis="animeInfo.summary"
			:imageUrl="animeInfo.imageUrl"
			:studio="animeInfo.studio"
		/> -->
	</div>
</template>

<script setup lang="ts">
import { useUserStore } from "~~/stores/userStore";

const userStore = useUserStore();

onMounted(() => {
	userStore.getOneAnime().then(data => {
		userStore.animeInfo = data;
		console.log(userStore.animeInfo);
	});
});

// function aired(airTimeStart, airTimeEnd) {
// 	if (airTimeEnd == null) return airTimeStart;
// 	else {
// 		function changeMonth(dMonth) {
// 			if (dMonth == "01") return "Jan";
// 			if (dMonth == "02") return "Feb";
// 			if (dMonth == "03") return "Mar";
// 			if (dMonth == "04") return "Apr";
// 			if (dMonth == "05") return "May";
// 			if (dMonth == "06") return "Jun";
// 			if (dMonth == "07") return "Jul";
// 			if (dMonth == "08") return "Aug";
// 			if (dMonth == "09") return "Sep";
// 			if (dMonth == "10") return "Oct";
// 			if (dMonth == "11") return "Nov";
// 			if (dMonth == "12") return "Dec";
// 		}
// 		function changeDay(dDay) {
// 			if (dDay == "01") return "1";
// 			if (dDay == "02") return "2";
// 			if (dDay == "03") return "3";
// 			if (dDay == "04") return "4";
// 			if (dDay == "05") return "5";
// 			if (dDay == "06") return "6";
// 			if (dDay == "07") return "7";
// 			if (dDay == "08") return "8";
// 			if (dDay == "09") return "9";
// 			else return dDay;
// 		}
// 		function dat(date) {
// 			const dateArr = date.split("-");
// 			const month = changeMonth(dateArr[1]);
// 			const day = changeDay(dateArr[2]);
// 			return month + " " + day + ", " + dateArr[0];
// 		}
// 		return dat(airTimeStart) + " to " + dat(airTimeEnd);
// 	}
// }

// const airedData = aired(userStore.animeInfo.airedFrom, userStore.animeInfo.airedTo);

// const animeInfo = {
// 	animeName: userStore.animeInfo.animeName,
// 	episodes: String(userStore.animeInfo.episodes),
// 	mediaType: userStore.animeInfo.mediaType,
// 	imageUrl: userStore.animeInfo.largeImageUrl,
// 	status: userStore.animeInfo.status,
// 	aired: airedData,
// 	summary: userStore.animeInfo.summary,
// 	studio: userStore.animeInfo.animeStudio,
// 	animeGenre: userStore.animeInfo.animeGenre,
// };
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
