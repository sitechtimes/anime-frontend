<template>
  <div class="box-container">
    <div class="header">
      <h2></h2>
      <div class="header-pages">
        <button></button>
        <button></button>
      </div>
    </div>
    <div class="content">
      <AnimeCard
        v-for="anime in posts"
        :key="anime.id"
        :img="anime.img"
        :ep="anime.episode"
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
.box-container {
  background-color: chocolate;
  border-radius: 1.5rem;
  padding-top: 5rem;
  padding-bottom: 2.5rem;
}

.content {
  display: flex;
  flex-wrap: wrap;
  row-gap: 1vw;
  column-gap: 4vw;
  justify-content: center;
}

.header-pages {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
</style>
