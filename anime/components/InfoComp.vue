<template>
  <div id="anime-info">
    <div class="column-1">
      <img class="animeImage" :src="`${imageUrl}`" alt="Anime Cover" />
      <div class="quick-info">
        <div>
          <h4 class="info-head">Information</h4>
          <div class="divider"></div>
        </div>
        <p>Type: {{ mediaType }}</p>
        <p>Episodes: {{ episodes }}</p>
        <p>Status: {{ status }}</p>
        <p>Aired: {{ aired }}</p>
        <div class="quick-info-sub">
          <p>Studio:</p>
          <div v-for="studio in studios" :key="studio">
            <p>{{ studio.node.studio }}</p>
          </div>
        </div>
        <div class="quick-info-sub">
          <p>Genres:</p>
          <div v-for="genre in genres" :key="genre">
            <p>{{ genre.node.genre }},</p>
          </div>
        </div>
      </div>
    </div>
    <div class="column-2">
      <div class="info-block">
        <p class="anime-name">{{ animeName }}</p>
        <div class="star-rating">
          <starSVG class="star" />
          <p>{{ avgRating }}</p>
        </div>
        <div>
          <select id="doughtnut-graph" class="select" v-model="watchStatus">
            <option value="NOT_WATCHING" selected>Not Watching</option>
            <option value="CURRENTLY_WATCHING">
              Currently Watching
            </option>
            <option value="WATCHLIST">Watchlist</option>
            <option value="FINISHED_ANIME">Finished Anime</option>
          </select>

          <select id="rating-form" class="select" v-model="rating">
            <!-- <option v-if="change" value="" disabled selected>{{ userAnime.rating }}</option> -->
            <option v-if="change" value="0" disabled selected>
              {{ userAnime.rating }}
            </option>
            <option v-else value="0" disabled selected>Rate</option>
            <option value="10">10</option>
            <option value="9">9</option>
            <option value="8">8</option>
            <option value="7">7</option>
            <option value="6">6</option>
            <option value="5">5</option>
            <option value="4">4</option>
            <option value="3">3</option>
            <option value="2">2</option>
            <option value="1">1</option>
          
          </select>
        </div>
      </div>
      <div class="info-block">
        <h2>Synopsis</h2>
        <div class="divider"></div>
        <p class="synopsis">{{ synopsis }}</p>
        <button class="show" ref="showBtn" @click="showMore">Show More</button>
      </div>
      <div class="info-block">
        <h2>Characters</h2>
        <div class="divider"></div>
        <div class="character-container">
          <div
            v-for="character in characters"
            :key="character.node.characterName"
            class="character"
          >
            <img class="character-img" :src="character.node.imageUrl" alt="" />
            <p class="character-name">{{ character.node.characterName }}</p>
          </div>
        </div>
        <div class="divider"></div>
      </div>
      <div class="info-block">
        <h2>Rating Distribution</h2>
        <div class="divider"></div>
        <LineChart
          v-if="loaded"
          :chartData="chartData"
          :chartOptions="chartOptions"
        />
      </div>
      
    </div>
  </div>
</template>

<script lang="ts" setup>
import starSVG from "../components/starSVG.vue";
import LineChart from "../components/LineChart.vue";
import { useUserStore } from "~~/stores/userStore";
import { ref, onMounted, watch, onUpdated } from "vue"

let addList = ref(false)
let watchStatus = ref("NOT_WATCHING")
let rating = ref(0)
let change = ref(false)
let userAnime = ref(null)
let ratingOne = ref([])
let allRatings = ref([])
let chartRatings = ref([])
let loaded = ref(false)
const showAll = ref(false)
const showBtn = ref("Show More")

const userStore = useUserStore()

let chartData = ref(
  {
      labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
      datasets: [
        {
          label: "Rating Distribution",
          //random data
          // data: Array.from({ length: 10 }, () => Math.floor(Math.random() * 100)),
          data: [],
          fill: "start",
          borderColor: "rgb(75, 192, 192)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
          pointStyle: false,
        },
      ],
    }
)


const chartOptions = ref(
  {
      scales: {
        y: {
          type: "linear",
          min: 0,
          beginAtZero: true,
          drawticks: false,
          grid: {
            display: false,
          },
          display: false,
          grace: "5%",
        },
        x: {
          grid: {
            display: false,
          },
          font: {
            size: 30,
          },
        },
      },
      plugins: {
        legend: false,
        title: {
          display: true,
          text: "Rating Distribution",
          padding: {
            top: 10,
            bottom: 30,
          },
          font: {
            size: 20,
          },
        },
      },
      interaction: {
        mode: "point",
        intersect: false,
      },
      elements: {
        line: {
          cubicInterpolationMode: "monotone",
        },
      },
    },
  
)

const props = defineProps({
  imageUrl: String, 
  mediaType: String,
  episodes: Number,
    status: String,
    aired: String,
    studios: Array,
    genres: Array,
    animeName: String,
    synopsis: String,
    characters: Array,
    mal_id: String,
    avgRating: Number,
})

async function getUserProfile() {
      const endpoint = "http://127.0.0.1:8000/graphql/";
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userStore.token}`,
      };
      const graphqlQuery = {
        query: `{
  userAnimeData(id:${userStore.userID}) {

   userAnime{
    edges{
      node{
        anime{
          animeName,
		  malId
        },
        rating,
        watchingStatus
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
      const mutationData = await response.json();


      mutationData.data.userAnimeData.userAnime.edges.forEach((element) => {


        if (element.node.anime.malId == props.mal_id) {
          userAnime.value = element.node;
        }
      });
      // const userAnime = mutationData.data.userAnimeData.userAnime.edges.filter(node => {
      // 	node.node.anime.animeName === "Your Lie in April"
      // })


      if (userAnime.value.watchingStatus != "NOT_WATCHING") {
        watchStatus.value = userAnime.value.watchingStatus
      }
      if (userAnime.value.rating > 0) {
        change.value = true;
      } else {
        change.value = false;
      }

    }

    async function getAllRatings() {
      const endpoint = "http://127.0.0.1:8000/graphql/";
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userStore.token}`,
      };
      const graphqlQuery = {
        query: `{
  specificUserAnime(id:${props.mal_id}){
    rating
    # watchingStatus
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
      const ratingData = await response.json();


      // const test = ratingData.data.specificUserAnime.filter(object =>
      // 	object.rating == 6
      // )


      for (let i = 1; i <= 10; i++) {

        allRatings.value.push([]);
        allRatings.value[i - 1] = ratingData.data.specificUserAnime.filter(
          (object) => object.rating == i
        ).length;
      }



	  chartData.value.datasets[0].data = allRatings.value

	  loaded.value = true
	

    }

    watch(watchStatus, (newValue) => {
      changeWatchStatus()
    })

    watch(rating, (newValue) => {
      changeRating()
    })
    async function changeWatchStatus() {

      const endpoint = "http://127.0.0.1:8000/graphql/";
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userStore.token}`,
      };
      const graphqlQuery = {
        query: `mutation{
						userAnimeMutation(animeData:{animeId:"${props.mal_id}"}, userData:{userId:"${userStore.userID}"}, userAnimeData:{watchStatus: "${watchStatus.value}"}){
    user{
      user{
        username
      }
    },
    userAnime{
      anime{
        animeName
      },
      rating,
      watchingStatus
    },
    anime{
      animeName,
      avgRating
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
      const mutationData = await response.json();




    }
    


    async function changeRating() {

      const endpoint = "http://127.0.0.1:8000/graphql/";
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userStore.token}`,
      };
      const graphqlQuery = {
        query: `mutation{
						userAnimeMutation(animeData:{animeId:"${props.mal_id}"}, userData:{userId:"${userStore.userID}"}, userAnimeData:{rating:${rating.value}}){
    user{
      user{
        username
      }
    },
    userAnime{
      anime{
        animeName
      },
      rating,
      watchingStatus
    },
    anime{
      animeName,
      avgRating
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
      const mutationData = await response.json();

      window.location.reload();
    }
  

    onMounted(() => {
      getUserProfile();
    getAllRatings();
})

function showMore() {
  // showAll.value = !showAll.value
  // if (showAll.value === false) {
  //   console.log("synopsis partially shown")
  //   console.log(showBtn.value)
  // } else if (showAll.value === true) {
  //   console.log("synopsis fully shown")
  // }
}
</script>

<style scoped>
#anime-info {
  color: var(--white);
  padding-top: 13vh;
  display: flex;
  justify-content: center;
  margin: auto;
}
.column-1 {
  width: 15vw;
  position: sticky;
  align-self: flex-start;
  top: 5vh;
}
.animeImage {
  width: 100%;
  object-fit: cover;
}
.quick-info {
  background: var(--bg-secondary);
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 1.5rem;
  width: 100%;
  margin-top: 2vh;
  padding: 0.5rem 1rem;
  font-size: var(--h5);
  padding: 2rem;
  padding-bottom: 4rem;
}
.quick-info p {
  font-size: var(--h6);
}
.quick-info-sub {
  display: flex;
  flex-wrap: wrap;
  column-gap: 0.5rem;
}
.column-2 {
  width: 53vw;
  font-size: var(--h4);
  margin-left: 2rem;
}
.info-block {
  margin-bottom: 5rem;
  display: flex;
  flex-direction: column;
}
.info-block h1 {
  font-size: 3.5rem;
  font-weight: var(--fw-med);
  margin-bottom: 1rem;
}
.info-block h2 {
  font-size: var(--h3);
  font-weight: var(--fw-med);
  margin-bottom: 0.5rem;
}
.anime-name {
	font-size: var(--h2);
	font-weight: var(--fw-med);
}
.star-rating {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: var(--h4);
  margin-bottom: 1rem;
}
.star {
  height: 1.5rem;
}
.synopsis {
  font-size: var(--h5);
  font-weight: var(--fw-light);
  line-height: 3.5rem;
  word-spacing: 0.2rem;
}
.select {
  border-radius: 15px;
  background-color: var(--info-select);
  font-size: var(--h5);
  padding: 0.3rem 1rem;
  margin-right: 2rem;
  outline: none;
}
.show {
	background: none;
	color: var(--primary);
	padding: 0;
	font-size: var(--h5);
	transition: 0ms;
	align-self: flex-end;
	display: none;
}
.divider {
  height: 0.2rem;
  background-color: var(--white);
}
.character-container {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  margin: 1rem 0;
  overflow-x: auto;
  white-space: nowrap;
}
.character-container::-webkit-scrollbar {
  height: 10px;
}
.character {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 1.5rem;
}
.character-img {
  height: 10rem;
  width: 9rem;
  object-fit: cover;
}
.character-name {
  background-color: #b10064;;
  text-align: center;
  font-size: var(--h5);
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 1rem;
  width: 9rem;
}
@media screen and (max-width: 1440px) {
	.column-1 {
		width: 23rem;
	}
	.column-2 {
		margin-left: 4rem;
	}
  .info-block {
    margin-bottom: 3rem;
  }
	.synopsis {
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 5;
		-webkit-box-orient: vertical;
	}
	.show {
		display: block;
	}
}

@media screen and (max-width: 1200px) {
	.synopsis, .show {
		font-size: var(--h6);
	}
	.character {
		width: 9rem;
	}
	.character-img {
		height: 8rem;
	}
	.character-name {
		font-size: var(--h7);
	}
}

@media screen and (max-width: 1024px) {
	.column-1 {
		width: 21rem;
	}
	.quick-info {
		font-size: var(--h8);
	}
	.info-head {
		font-size: var(--h6);
	}
	.anime-name {
		font-size: var(--h3);
	}
	.info-block h2 {
		font-size: var(--h4);
	}
	.select {
		font-size: var(--h6);
	}
}

@media screen and (max-width: 915px) {
  #anime-info {
    display: none;
  }
}
</style>
