``<template>
	<div>
		<InfoComp
			:animeName="animeInfoData.animeName"
			:episodes="animeInfoData.episodes"
			:mediaType="animeInfoData.mediaType"
			:status="animeInfoData.status"
			:aired="time"
			:genres="animeInfoData.animeGenre"
			:synopsis="animeInfoData.summary"
			:imageUrl="animeInfoData.largeImageUrl"
			:studio="animeInfoData.animeStudio"
		/>
	</div>
</template>

<script setup lang="ts">
import { useUserStore } from "~~/stores/userStore";
import InfoComp from "../components/InfoComp.vue";

const userStore = useUserStore();
const animeInfoData = ref();

onMounted(() => {
	userStore.getOneAnime().then((data) => {
		animeInfoData.value = data;
	});
});

const time = ref<string>("");

time.value = aired(animeInfoData.value.airTimeStart, animeInfoData.value.airTimeEnd);
console.log(time.value);

function aired(airTimeStart: string, airTimeEnd: string): string {
	function changeMonth(month: string) {
		switch (month) {
			case "01":
				return "January";
			case "02":
				return "February";
			case "03":
				return "March";
			case "04":
				return "April";
			case "05":
				return "May";
			case "06":
				return "June";
			case "07":
				return "July";
			case "08":
				return "August";
			case "09":
				return "September";
			case "10":
				return "October";
			case "11":
				return "November";
			case "12":
				return "December";
		}
	}
	function changeDay(day: string): string {
		if (day[0] == "0") {
			return day[1];
		} else {
			return day;
		}
	}
	function animeDate(date: string): string {
		const dateArr = date.split("-");
		const month = changeMonth(dateArr[1]);
		const day = changeDay(dateArr[2]);
		return month + " " + day + ", " + dateArr[0];
	}
	if (airTimeEnd == null) {
		return animeDate(airTimeStart);
	} else {
		const time = animeDate(airTimeStart) + " to " + animeDate(airTimeEnd);
		return time;
	}
}
</script>
