<template>
	<div>
		<InfoComp 
			:animeName="animeInfoData.animeName"
			:episodes="animeInfoData.episodes"
			:mediaType="animeInfoData.mediaType"
			:status="animeInfoData.status"
			:aired="aired(animeInfoData.airedFrom, animeInfoData!.airedTo)"
			:genres="animeInfoData.animeGenre"
			:synopsis="animeInfoData.summary"
			:imageUrl="animeInfoData.largeImageUrl"
			:studio="animeInfoData.animeStudio"
		/>
	</div>
</template>

<script setup lang="ts">
import { useUserStore } from "~~/stores/userStore";
import { ref } from "vue";
import { animeGraphql } from "~~/types/anime";
import InfoComp from "../components/InfoComp.vue";

const userStore = useUserStore();
const animeInfoData = ref();

onMounted(() => {
	userStore.getOneAnime().then((data) => {
		// data = JSON.parse(JSON.stringify(data));

		animeInfoData.value = data;

	});
});

function aired(airTimeStart: string, airTimeEnd: string): string {
	function changeMonth(dMonth: string): string {
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
		else return "Dec";
	}
	function changeDay(dDay: string): string {
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
	function dat(date: string): string {
		const dateArr = date.split("-");
		const month = changeMonth(dateArr[1]);
		const day = changeDay(dateArr[2]);
		return month + " " + day + ", " + dateArr[0];
	}
	if (airTimeEnd == null) {

		return airTimeStart;
	} else {
		return dat(airTimeStart) + " to " + dat(airTimeEnd);
	}
}
</script>
