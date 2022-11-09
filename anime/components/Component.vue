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

<script>
import AnimeCard from './AnimeCard.vue'

export default {
  components: {
    AnimeCard,
  },
}
</script>

<style scoped>
.container {
  color: var(--primary);
}
</style>
