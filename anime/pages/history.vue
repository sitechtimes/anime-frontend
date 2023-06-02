<template>
    <section class="winners">
		<div class="header">
			<h1>Past Winners</h1>
        </div>  
		<div class="filter-form">
			<form>
				<label for="year">Year</label>
				<select name="year" id="year" v-model="yearFilter">
					<option value="2023">2023</option>
					<option value="2022">2022</option>
					<option value="2021">2021</option>
					<option value="2020">2020</option>

				</select>
			</form>
			<form>
				<label for="season">Season</label>
				<select name="season" id="season" v-model="seasonFilter">
					<option value="Winter">Winter</option>
					<option value="Spring">Spring</option>
					<option value="Summer">Summer</option>
					<option value="Fall">Fall</option>
				</select>
			</form>
		</div>
            <div class="gallery">
                <WinnerCard
                 v-for="winner in filteredAnimeWinners" 
                :key="winner.id"
                :winner="winner.winner.anime.animeName" 
                :img="winner.winner.anime.imageUrl"
                :award="winner.winner.award.awardName"
                
                />
                <WinnerCard
                 v-for="winner in filteredCharacterWinners" 
                :key="winner.id"
                :winner="winner.characterWinner.character.characterName" 
                :img="winner.characterWinner.character.imageUrl"
                :award="winner.characterWinner.award.awardName"
                />
                 
            </div>

    </section>
</template>

<script setup lang="ts">
import { useUserStore } from "~~/stores/userStore";

const userStore = useUserStore();
const seasonAnimeWinners = ref([]);
const seasonCharacterWinners = ref([]);
const historyAnimeWinners = ref([]);
const historyCharacterWinners = ref([]);
const season = ref("");
const today = new Date()
const year = ref(today.getFullYear())
const monthNumber = today.getMonth() + 1
const yearFilter = ref("2023")
const seasonFilter = ref("Winter")
const filteredAnimeWinners = ref([])
const filteredCharacterWinners = ref([])


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

				// const winners = allAnimeWinners.concat(allCharacterWinners);

				// const today = new Date()
				// const year = today.getFullYear()
				// const monthNumber = today.getMonth() + 1
				// let season = ""

				switch (monthNumber) {
					case 1:
					case 2:
					case 3:
						season.value = "Winter"
						break;
					case 4:
					case 5:
					case 6:
						season.value = "Spring"
						// console.log("Spring")
						break;
					case 7:
					case 8:
					case 9:
						season.value = "Summer"
						break;
					case 10:
					case 11:
					case 12:
						season.value = "Fall"
						break;
					default:
						alert("There is no month")
				}

				historyAnimeWinners.value = allAnimeWinners.filter((winner) => 
					 winner.season !== season.value || winner.year !== year.value
				);

				historyCharacterWinners.value = allCharacterWinners.filter((winner) => 
                winner.season !== season.value || winner.year !== year.value
				);
				
				// console.log(historyAnimeWinners.value, historyCharacterWinners.value);
			} catch (error) {
				alert(error);
			}
		}

	watch(yearFilter, (newYear) => {
		// console.log(Number(newYear), seasonFilter.value)
		filteredAnimeWinners.value = historyAnimeWinners.value.filter((winner) => 
			winner.year === Number(newYear) && winner.season === seasonFilter.value
			// console.log(winner.year, winner.season)
		);
		filteredCharacterWinners.value = historyCharacterWinners.value.filter((winner) => 
			winner.year === Number(newYear) && winner.season === seasonFilter.value
		);
		// console.log(filteredAnimeWinners.value, filteredCharacterWinners.value, historyAnimeWinners.value)
	})

	watch(seasonFilter, (newSeason) => {
		// console.log(Number(yearFilter.value), newSeason)
		filteredAnimeWinners.value = historyAnimeWinners.value.filter((winner) => 
			winner.year === Number(yearFilter.value) && winner.season === newSeason
			// console.log(winner.year, winner.season)
		);
		filteredCharacterWinners.value = historyCharacterWinners.value.filter((winner) => 
			winner.year === Number(yearFilter.value) && winner.season === newSeason
		);
		// console.log(filteredAnimeWinners.value, filteredCharacterWinners.value, historyAnimeWinners.value)
	}
	)
onMounted(() => {
    getAllWinners()
})


</script>

<style scoped>

.winners{
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100%;
}

.header{
	color: var(--primary);
	margin-top: 10rem;
    font-size: 3rem;
}

.gallery{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-top: 5rem;
}

.past {
    margin: 5rem;
    font-size: 1.3rem;
}
.past-btn {
    background: var(--primary);
    padding: 1rem 2rem;
    border-radius: 1.5rem;
}


</style>