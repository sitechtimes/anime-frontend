<template>
  <div class="card-container">
    <img class="anime-img" :src="`${img}`" alt="" />

    <div class="container-bar">
      <p id="ep">{{ episode }}</p>
      <p id="format">{{ format }}</p>
    </div>
    <p class="title">{{ title }}</p>
  </div>
</template>

<script>
export default {
  name: 'AnimeCard',
  props: {
    img: {
      type: String,
      required: true,
    },
    episode: {
      type: Number,
      required: true,
    },
    format: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>
.card-container {
  display: flex;
  flex-direction: column;
  width: 10vw;
}

.anime-img {
  border-radius: 0.5rem 0.5rem 0 0;
}

img {
  width: 100%;
}

.container-bar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: black;
  padding: 0.5rem;
  border-radius: 0 0 0.5rem 0.5rem;
}

.title {
  width: 100%;
  color: white;
}

#ep {
  background-color: var(--primary);
  font-size: 0.8rem;
  color: var(--white);
  padding: 0.2rem 0.5rem;
}

#format {
  color: #f5f5f5;
  font-size: 0.8rem;
  padding: 0.2rem 0.5rem;
}
</style>
