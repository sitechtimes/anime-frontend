<template>
  <div id="anime-info">
    <div class="column-1">
      <img class="animeImage" :src="`${imageUrl}`" alt="Anime Cover" />
      <div class="quick-info">
        <div>
          <h4>Information</h4>
          <div class="divider"></div>
        </div>
        <p>Type: {{ mediaType }}</p>
        <p>Episodes: {{ episodes }}</p>
        <p>Status: {{ status }}</p>
        <p>Aired: {{ aired }}</p>
        <div class="quick-info-sub">
          <p>Studio:</p>
          <div v-for="studio in studios" :key="studio">
            <p>Studio: {{ studio.node.studio }}</p>
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
        <p>{{ animeName }}</p>
        <div class="star-rating">
          <starSVG class="star" />
          <p>{{ avgRating }}</p>
        </div>
        <div>
          <button class="btn">Heart</button>
          <button class="btn" id="watch" @click="add">Add to Watchlist</button>
          <select id="doughtnut-graph" v-model="watchStatus">
            <option value="NOT_WATCHING">Not Watching</option>
            <option value="CURRENTLY_WATCHING" selected>
              Currently Watching
            </option>
            <option value="WATCHLIST">Watchlist</option>
            <option value="FINISHED_ANIME">Finished Anime</option>
          </select>

          <select id="rating-form" v-model="rating">
            <!-- <option v-if="change" value="" disabled selected>{{ userAnime.rating }}</option> -->
            <option v-if="change" value="0" disabled selected>
              {{ userAnime.rating }}
            </option>
            <option v-else value="0" disabled selected>Select</option>
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
          <!-- <button class="btn">Rate</button> -->
        </div>
      </div>
      <div class="info-block">
        <h2>Synopsis</h2>
        <div class="divider"></div>
        <p class="w">{{ synopsis }}</p>
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
  </div>
</template>

<script lang="ts">
import starSVG from "../components/starSVG.vue";
import LineChart from "../components/LineChart.vue";
import { useUserStore } from "~~/stores/userStore";

export default {
  name: "AnimeInfo",
  components: {
    starSVG,
    LineChart,
  },
  props: {
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
  },
  setup() {
    const userStore = useUserStore();

    return {
      userStore,
    };
  },
  data: () => ({
    addList: false,
    watchStatus: "",
    rating: 0,
    change: false,
    userAnime: null,
    ratingOne: [],
    allRatings: [],
	chartRatings:[],
    loaded: false,
    // characters: [
    // 	{ name: "Alpha Red1" },
    // 	{ name: "Alpha Red the Most Alpha of Reds" },
    // 	{ name: "Alpha Red2" },
    // 	{ name: "Alpha Red3" },
    // 	{ name: "Alpha Red4" },
    // 	{ name: "Alpha Red5" },
    // 	{ name: "Al-fuh-red" },
    // 	{ name: "Alfredo" },
    // ],
    chartData: {
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
    },
    chartOptions: {
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
  }),
  watch: {
    watchStatus(newValue, oldValue) {
      console.log(this.watchStatus);
    },
    async rating(value) {
      console.log(this.rating);
      const endpoint = "http://127.0.0.1:8000/graphql/";
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.userStore.token}`,
      };
      const graphqlQuery = {
        query: `mutation{
						userAnimeMutation(animeData:{animeId:"${this.mal_id}"}, userData:{userId:"${this.userStore.userID}"}, userAnimeData:{rating:${this.rating}}){
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
      console.log(mutationData);
      window.location.reload();
    },
  },
  mounted() {
    this.getUserProfile();
    this.getAllRatings();
  },
  methods: {
    async getUserProfile() {
      const endpoint = "http://127.0.0.1:8000/graphql/";
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.userStore.token}`,
      };
      const graphqlQuery = {
        query: `{
  userAnimeData(id:${this.userStore.userID}) {

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

      console.log(mutationData.data.userAnimeData.userAnime.edges);
      mutationData.data.userAnimeData.userAnime.edges.forEach((element) => {
        // console.log(element.node.anime.animeName)
        if (element.node.anime.malId == this.mal_id) {
          this.userAnime = element.node;
        }
      });
      // const userAnime = mutationData.data.userAnimeData.userAnime.edges.filter(node => {
      // 	node.node.anime.animeName === "Your Lie in April"
      // })
      console.log(this.userAnime.rating);

      if (this.userAnime.rating > 0) {
        this.change = true;
      } else {
        this.change = false;
      }
      console.log(this.change);
    },
    async getAllRatings() {
      const endpoint = "http://127.0.0.1:8000/graphql/";
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.userStore.token}`,
      };
      const graphqlQuery = {
        query: `{
  specificUserAnime(id:${this.mal_id}){
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
      console.log(ratingData.data.specificUserAnime);

      // const test = ratingData.data.specificUserAnime.filter(object =>
      // 	object.rating == 6
      // )

      // console.log(test)
      for (let i = 1; i <= 10; i++) {
        console.log(i);
        this.allRatings.push([]);
        this.allRatings[i - 1] = ratingData.data.specificUserAnime.filter(
          (object) => object.rating == i
        ).length;
      }

      console.log(this.allRatings);

	  this.chartData.datasets[0].data = this.allRatings

	  this.loaded = true
	
	  console.log(this.chartData.datasets[0].data)
    },

    test() {
      console.log(this.watchStatus);
    },

    add() {
      this.addList = !this.addList;
      console.log(this.addList);
      const hi = document.getElementById("watch");
      if (this.addList == true) {
        hi!.innerHTML = "Added to Watchlist";
        hi!.style.background = "rgb(255, 120, 140)";
        hi!.style.filter = "opacity(80%)";
      } else {
        hi!.innerHTML = "Add to watchlist";
        hi!.style.background = "lightpink";
        hi!.style.filter = "none";
      }
    },
  },
};
</script>

<style scoped>
#anime-info {
  color: rgb(255, 255, 255);
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
  width: 15vw;
  object-fit: cover;
}
.quick-info {
  background: var(--bg-secondary);
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 1.5rem;
  width: 15vw;
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
}
.info-block h1 {
  font-size: 3.5rem;
  font-weight: var(--fw-med);
  margin-bottom: 1rem;
}
.info-block h2 {
  font-size: var(--h3);
  font-weight: var(--fw-med);
  margin-bottom: 1rem;
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
.w {
  font-size: var(--h5);
  font-weight: var(--fw-light);
  line-height: 3.5rem;
  word-spacing: 0.2rem;
  color: white;
}
.btn {
  background-color: lightpink;
  font-size: var(--h5);
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  transition: 200ms all;
}
.btn:hover {
  background-color: rgb(255, 120, 140);
}
#watch {
  width: 18rem;
}
.divider {
  height: 0.2rem;
  background-color: white;
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
  background-color: blue;
  text-align: center;
  font-size: var(--h5);
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 1rem;
  width: 9rem;
}
</style>
