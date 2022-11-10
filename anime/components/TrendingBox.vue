<template>
  <div class="container">
    <div class="header">
      <h2></h2>
      <div class="header-pages">
        <button></button>
        <button></button>
      </div>
    </div>
    <div class="content">
      <AnimeCard
        v-for="anime in trending"
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
      trending: [
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
      ],
    }
  },
}
</script>

<style scoped>
.content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
