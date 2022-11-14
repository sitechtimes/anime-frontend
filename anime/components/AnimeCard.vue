<template>
  <div class="container">
    <img :src="`${img}`" alt="" />
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
.container {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 20%;
}

img {
  width: 100%;
}

.container-bar {
  display: flex;
  flex-direction: row;
}

.title p {
  background-color: #f5f5f5;
  width: 100%;
}

#ep {
  background-color: #f5f5f5;
  border-radius: 0.5rem;
  font-size: 0.8rem;
  color: #000;
  padding: 0.2rem 0.5rem;
}

#format {
  background-color: #f5f5f5;
  border-radius: 0.5rem;
  color: #000;
  font-size: 0.8rem;
  padding: 0.2rem 0.5rem;
}
</style>
