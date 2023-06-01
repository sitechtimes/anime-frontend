<template>
    <section class="winners">

    </section>
</template>

<style scoped></style>

<script setup lang="ts">
import { useUserStore } from "~~/stores/userStore";

const userStore = useUserStore();
const seasonWinners = ref([]);
const history = ref([]);


async function getAllWinners() {
			try {
				const endpoint = "http://127.0.0.1:8000/graphql/";
				const headers = {
					"content-type": "application/json",
					Authorization: `Bearer ${userStore.token}`,
				};

				const graphqlQuery = {
					query: `{
	allAnimeWinners{
    winner{
      award{
        awardName
      },
      anime{
        animeName,
        imageUrl
      }
    },
    season,
    year,

  },
  allCharacterWinners{
    characterWinner {
      award{
        awardName
      },
      character{
        characterName,
        imageUrl
      }
    },
    season,
    year
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
				const winnerData = await response.json();
				
				const allAnimeWinners = winnerData.data.allAnimeWinners;
				const allCharacterWinners = winnerData.data.allCharacterWinners;

				const winners = allAnimeWinners.concat(allCharacterWinners);

				const today = new Date()
				const year = today.getFullYear()
				const monthNumber = today.getMonth() + 1
				let season = ""

				switch (monthNumber) {
					case 1:
					case 2:
					case 3:
						season = "Winter"
						break;
					case 4:
					case 5:
					case 6:
						season = "Spring"
						console.log("Spring")
						break;
					case 7:
					case 8:
					case 9:
						season = "Summer"
						break;
					case 10:
					case 11:
					case 12:
						season = "Fall"
						break;
					default:
						alert("There is no month")
				}

				seasonWinners.value = winners.filter((winner) => 
					 winner.season === season && winner.year === year
				);

				history.value = winners.filter((winner) => 
					winner.season != season || winner.year != year
				);
				
				console.log(history.value);
			} catch (error) {
				console.log(error);
			}
		}

onMounted(() => {
    getAllWinners()
})


</script>
