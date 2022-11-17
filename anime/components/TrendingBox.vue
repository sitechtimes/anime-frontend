<template>
  <div class="box-container">
    <div class="header">
      <h2 class="header-title">Trending</h2>
      <div class="header-pages">
        <button class="page-button"><</button>
        <button class="page-button">></button>
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


.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  margin-left: 5vw;
  margin-right: 5vw;
}

.header-title {
  font-size: var(--h2);
  font-weight: var(--fw-bold);
  color: var(--white);
}

.box-container {
  background-color: var(--tertiary);
  border-radius: 1.5rem;
  padding-top: 4rem;
  padding-bottom: 4rem;
  margin-left: 10rem;
  margin-right: 10rem;
}

.content {
  display: flex;
  flex-wrap: wrap;
  row-gap: 1vw;
  column-gap: 4vw;
  justify-content: center;
}

.header-pages {
  height: 5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.page-button {
  background-color: transparent;
  border: none;
  font-size: 6rem;
  color: var(--white);
  cursor: pointer;
}
</style>
