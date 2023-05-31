<template>
    <div id="anime-info-mobile">
        <div class="row-1"></div>
        <div class="row-2">
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
</style>