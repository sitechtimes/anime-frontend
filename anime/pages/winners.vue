<template>
    <section class="winners">
		<div class="header">
			<h1>{{ season }} {{ year }} Winners!</h1>
        </div>  
            <div class="gallery">
                <WinnerCard
                 v-for="winner in seasonAnimeWinners" 
                :key="winner.id"
                :winner="winner.winner.anime.animeName" 
                :img="winner.winner.anime.imageUrl"
                :award="winner.winner.award.awardName"
                
                />
                <WinnerCard
                 v-for="winner in seasonCharacterWinners" 
                :key="winner.id"
                :winner="winner.characterWinner.character.characterName" 
                :img="winner.characterWinner.character.imageUrl"
                :award="winner.characterWinner.award.awardName"
                />
                 
            </div>
		<div class="past">
            <NuxtLink to="/history" class="past-btn">Past Winners</NuxtLink>
        </div>

    </section>
</template>

<script setup lang="ts">
import { useUserStore } from "~~/stores/userStore";
import { useRouter } from "nuxt/app";

const router = useRouter()
const userStore = useUserStore();
const seasonAnimeWinners = ref([]);
const seasonCharacterWinners = ref([]);
const history = ref([]);
const season = ref("");
const today = new Date()
const year = ref(today.getFullYear())
const monthNumber = today.getMonth() + 1


async function getAllWinners() {
			try {
				const endpoint = "https://anime-backend-cuv2.onrender.com/graphql/";
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

				seasonAnimeWinners.value = allAnimeWinners.filter((winner) => 
					 winner.season === season.value && winner.year === year.value
				);

				seasonCharacterWinners.value = allCharacterWinners.filter((winner) => 
                winner.season === season.value && winner.year === year.value
				);
				
				// console.log(seasonAnimeWinners.value, seasonCharacterWinners.value);
			} catch (error) {
				alert(error);
			}
		}

onMounted(() => {
	if (userStore.isAuthenticated === false) {
		alert("You must be logged in to view this page");
		router.push("/login");
	}
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