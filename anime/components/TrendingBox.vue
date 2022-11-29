<template>
  <div class="trending_top">
    <div class="box-container">
      <div class="header">
        <h2 class="header-title">Trending</h2>
        <div class="header-pages">
          <button class="page-button">
            <svg
              width="15"
              height="25"
              viewBox="0 0 20 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.0001 2.51566L17.865 0.397673C17.4729 0.00871778 16.8372 0.00871849 16.4452 0.397674L0.401007 16.3137C0.00891876 16.7027 0.00892067 17.3333 0.401007 17.7222L16.4452 33.6383C16.8372 34.0272 17.4729 34.0272 17.865 33.6383L20.0001 31.5203L5.38101 17.018L20.0001 2.51566Z"
                fill="#D9D9D9"
              />
            </svg>
          </button>
          <button class="page-button">
            <svg
              width="15"
              height="25"
              viewBox="0 0 20 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.11144e-05 31.2102L2.1327 33.3093C2.52631 33.6967 3.16448 33.6967 3.55809 33.3093L19.5987 17.5212C19.9923 17.1338 19.9924 16.5056 19.5987 16.1182L3.55809 0.330086C3.16448 -0.0573273 2.52632 -0.0573273 2.1327 0.330086L6.10352e-05 2.42916L14.6208 16.8197L6.11144e-05 31.2102Z"
                fill="#D9D9D9"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="content">
        <AnimeCard
          v-for="anime in posts"
          :key="anime.id"
          :img="anime.img"
          :episode="anime.episode"
          :format="anime.format"
          :title="anime.title"
        />
      </div>
    </div>
    <div class="top_charts">
      <div>
        <div class="header">
          <h2 class="header-title">Top Charts</h2>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import AnimeCard from './AnimeCard.vue'

export default {
  name: 'TrendingBox',
  components: {
    AnimeCard,
  },
  data() {
    return {
      posts: [
        {
          id: 1,
          img: 'https://cdn.myanimelist.net/images/anime/5/87048.jpg',
          episode: 12,
          format: 'TV',
          title: 'Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen',
        },
        {
          id: 2,
          img: 'https://cdn.myanimelist.net/images/anime/5/87048.jpg',
          episode: 12,
          format: 'TV',
          title: 'Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen',
        },
        {
          id: 3,
          img: 'https://cdn.myanimelist.net/images/anime/5/87048.jpg',
          episode: 12,
          format: 'TV',
          title: 'Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen',
        },
        {
          id: 4,
          img: 'https://cdn.myanimelist.net/images/anime/5/87048.jpg',
          episode: 12,
          format: 'TV',
          title: 'Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen',
        },
        {
          id: 5,
          img: 'https://cdn.myanimelist.net/images/anime/5/87048.jpg',
          episode: 12,
          format: 'TV',
          title: 'Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen',
        },
        {
          id: 6,
          img: 'https://cdn.myanimelist.net/images/anime/5/87048.jpg',
          episode: 12,
          format: 'TV',
          title: 'Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen',
        },
        {
          id: 7,
          img: 'https://cdn.myanimelist.net/images/anime/5/87048.jpg',
          episode: 12,
          format: 'TV',
          title: 'Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen',
        },
        {
          id: 8,
          img: 'https://cdn.myanimelist.net/images/anime/5/87048.jpg',
          episode: 12,
          format: 'TV',
          title: 'Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen',
        },
        {
          id: 9,
          img: 'https://cdn.myanimelist.net/images/anime/5/87048.jpg',
          episode: 12,
          format: 'TV',
          title: 'Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen',
        },
        {
          id: 10,
          img: 'https://cdn.myanimelist.net/images/anime/5/87048.jpg',
          episode: 12,
          format: 'TV',
          title: 'Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen',
        },
        {
          id: 11,
          img: 'https://cdn.myanimelist.net/images/anime/5/87048.jpg',
          episode: 12,
          format: 'TV',
          title: 'Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen',
        },
        {
          id: 12,
          img: 'https://cdn.myanimelist.net/images/anime/5/87048.jpg',
          episode: 12,
          format: 'TV',
          title: 'Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen',
        },
      ],
    }
  },
}
</script>

<style scoped>
.trending_top {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  border-radius: 10px;
  column-gap: 9rem;
  margin-top: 50rem;
  margin-bottom: 50rem;
}

.top_charts {
  background-color: var(--secondary);
  border-radius: 1.5rem;
  width: 25vw;
  margin-right: 10rem;
  margin-top: 10rem;
}

.box-container {
  background-color: var(--tertiary);
  border-radius: 1.5rem;
  padding-top: 2rem;
  padding-bottom: 4rem;
  width: 75vw;
  margin-left: 10rem;
  margin-top: 10rem;
}

.header {
  height: 8rem;
  display: flex;
  justify-content: space-between;
  margin-left: 4vw;
  margin-right: 3vw;
  align-items: center;
}

.header-title {
  font-size: var(--h3);
  font-weight: var(--fw-bold);
  color: var(--white);
}

.content {
  display: flex;
  flex-wrap: wrap;
  column-gap: 2rem;
  justify-content: center;
  padding: 2rem;
  row-gap: 2rem;
  column-gap: 3rem;
}

.header-pages {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  column-gap: 1rem;
}

.page-button {
  background-color: transparent;
  border: none;
  color: var(--white);
  cursor: pointer;
}
</style>
