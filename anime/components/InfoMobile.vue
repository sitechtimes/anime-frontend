<template>
    <div id="anime-info-mobile">
      <underNav/>
      <div class="row-1">
        <img class="animeImage" :src="`${imageUrl}`" alt="Anime Cover" />
        <div class="animeInfo">
          <h4 class="anime-name">{{ animeName }}</h4>
          <div class="star-rating">
            <starSVG class="star" />
            <p>{{ avgRating }}</p>
          </div>
          <div class="dropdowns-row">
            <select id="doughtnut-graph" class="dropdown" v-model="watchStatus">
              <option value="NOT_WATCHING" selected>Not Watching</option>
              <option value="CURRENTLY_WATCHING">
                Currently Watching
              </option>
              <option value="WATCHLIST">Watchlist</option>
              <option value="FINISHED_ANIME">Finished Anime</option>
            </select>

            <select id="rating-form" class="dropdown" v-model="rating">
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

          <div class="quick-info">
            <h4 class="info-head">Information</h4>
            <div class="divider"></div>
            <div class="quick-info-grid">
              <p>Type: {{ mediaType }}</p>
              <p>Episodes: {{ episodes }}</p>
              <p class="hide-425px">Status: {{ status }}</p>
              <p class="hide-425px">Aired: {{ aired }}</p>
            </div>
            <button class="more-info-btn" @click="showInfo">More Info</button>
          </div>

        </div>
      </div>

      <div class="popup" v-if="moreInfoShown">
        <div class="more-info">
              <h4 class="more-info-name">{{ animeName }}</h4>
              <h4 class="more-info-head">Information</h4>
              <div class="divider"></div>
              <div class="more-info-grid">
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
              <button class="show" @click="hideInfo">Close</button>
            </div>
          </div>

      <div class="info-block">
        <h2>Synopsis</h2>
        <div class="divider"></div>
        <p class="synopsis" :class="active ? 'active' : 'non-active'">{{ synopsis }}</p>
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
            <img class="character-img" :src="character.node.imageUrl" :alt="`${character.node.characterName} image`" />
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
const showFullSynop = ref(false)
const showBtn = ref("")
const active = ref(false)
const moreInfoShown = ref(false)

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
  showFullSynop.value = !showFullSynop.value
  active.value = !active.value
  if (showFullSynop.value === false) {
    showBtn.value.textContent = "Show More"
  } else if (showFullSynop.value === true) {
    showBtn.value.textContent = "Hide"
  }
}

function showInfo() {
  moreInfoShown.value = true
}

function hideInfo() {
  moreInfoShown.value = false
}
</script>

<style scoped>
#anime-info-mobile {
  display: none;
  color: var(--white);
  padding-top: 3rem;
  margin: auto;
  width: 80vw;
}
.row-1 {
  display: flex;
  flex-direction: row;
  margin-bottom: 3rem;
}
.animeImage {
  width: 20rem;
  object-fit: cover;
}
.animeInfo {
  margin-left: 3rem;
  flex-grow: 1;
}
.anime-name {
	font-size: var(--h3);
	font-weight: var(--fw-med);
	overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
	-webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
.star-rating {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: var(--h4);
}
.star {
  height: 1.5rem;
}
.dropdowns-row {
  margin: 1rem 0 2rem;
}
.dropdown {
  border-radius: 15px;
  background-color: var(--info-select);
  font-size: var(--h6);
  padding: 0.3rem 1rem;
  margin-right: 2rem;
  outline: none;
}
.quick-info {
  background: var(--bg-secondary);
  padding: 1rem 2rem;
  font-size: var(--h6);
  display: flex;
  flex-direction: column;
}
.info-head {
  font-size: var(--h5);
}
.quick-info-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  row-gap: 0.5rem;
  column-gap: 3rem;
  padding: 1rem 0 1.5rem;
}
.quick-info-sub {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 0.3rem;
}
.more-info-btn {
  background: none;
	color: var(--primary);
	padding: 0;
	font-size: var(--h6);
	transition: 0ms;
	align-self: flex-end;
}
.popup {
  background: var(--popup-shadow);
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.more-info {
  width: 80vw;
  padding: 2rem 3rem;
  font-size: var(--h5);
  background: var(--bg-secondary);
  display: flex;
  flex-direction: column;
}
.more-info-name {
  font-size: var(--h3);
  margin-bottom: 2rem;
}
.more-info-head {
  font-size: var(--h4);
}
.more-info-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  row-gap: 0.5rem;
  column-gap: 3rem;
  padding: 1rem 0 1.5rem;
}
.info-block {
  margin-bottom: 3rem;
  display: flex;
  flex-direction: column;
}
.info-block h2 {
  font-size: var(--h4);
  font-weight: var(--fw-med);
  margin-bottom: 0.5rem;
}
.divider {
  height: 0.2rem;
  background-color: var(--white);
}
.synopsis {
  font-size: var(--h6);
  font-weight: var(--fw-light);
  line-height: 3.5rem;
  word-spacing: 0.2rem;
  overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-box-orient: vertical;
}
.active {
  -webkit-line-clamp: none;
}
.non-active {
  -webkit-line-clamp: 5;
}
.show {
	background: none;
	color: var(--primary);
	padding: 0;
	font-size: var(--h6);
	transition: 0ms;
	align-self: flex-end;
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
  height: 5px;
}
.character {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 1.5rem;
  width: 9rem;
}
.character-img {
  height: 8rem;
  width: 9rem;
  object-fit: cover;
}
.character-name {
  background-color: var(--info-character);
  text-align: center;
  font-size: var(--h7);
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 1rem;
}

@media screen and (max-width: 915px) {
  #anime-info-mobile {
    display: block;
  }
}

@media screen and (max-width: 767px) {
  #anime-info-mobile {
    padding-top: 3rem;
  }
  .animeImage {
    width: 15rem;
  }
  .info-head {
    font-size: var(--h6);
  }
  .quick-info-grid {
    font-size: var(--h8);
    column-gap: 1rem;
    padding: 1rem 0;
  }
  .more-info-btn {
    font-size: var(--h7);
  }
  .more-info-grid {
    font-size: var(--h6);
  }
}

@media screen and (max-width: 568px) {
  .animeImage {
    width: 11rem;
  }
  .animeInfo {
    margin-left: 2rem;
  }
  .anime-name {
    font-size: var(--h4);
  }
  .star-rating {
    font-size: var(--h7);
    gap: 0;
    margin: -0.6rem 0;
  }
  .star {
    height: 1rem;
  }
  .dropdowns-row {
    margin: 1rem 0;
  }
  .dropdown {
    font-size: var(--h8);
    padding: 0.1rem 0.3rem;
    margin-right: 1rem;
  }
  .quick-info {
    padding: 0.5rem 1rem;
  }
  .info-head, .more-info-btn{
    font-size: var(--h8);
  }
  .quick-info-grid {
    font-size: var(--smallText);
  }
  .more-info {
    padding: 2rem;
  }
  .more-info-name {
    font-size: var(--h4);
  }
  .more-info-head {
    font-size: var(--h5);
  }
  .more-info-grid {
    font-size: var(--h8);
    column-gap: 2rem;
  }
  .info-block h2 {
    font-size: var(--h5);
  }
  .synopsis {
    font-size: var(--h7);
    line-height: 3rem;
  }
  .character-container::-webkit-scrollbar {
  height: 5px;
  }
  .character-container {
    gap: 1rem;
  }
  .character {
    width: 6rem;
  }
  .character-img {
    height: 6rem;
    width: 6rem;
  }
  .character-name {
    font-size: var(--h8);
  }
}

@media screen and (max-width: 425px) {
  #anime-info-mobile {
    width: 87vw;
  }
  .animeInfo {
    margin-left: 1rem;
  }
  .dropdown {
    padding: 0.1rem;
    margin-right: 0.5rem;
  }
  .quick-info-grid {
    column-gap: 0.5rem;
    padding: 0.7rem 0;
  }
  .hide-425px {
    display: none;
  }
  .more-info-btn {
    font-size: var(--h8);
  }
  .more-info-name {
    font-size: var(--h5);
  }
  .more-info-head {
    font-size: var(--h6);
  }
  .more-info-grid {
    font-size: var(--smallText);
  }
  .show {
    font-size: var(--h7);
  }
}

@media screen and (max-width: 375px) {
  .animeImage {
    width: 10rem;
  }
}
</style>