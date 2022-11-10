<template>
  <div class="container">
    <img :src="`${img}`" alt="" />
    <div class="container-bar">
      <p id="ep">{{ episode }}</p>
      <p id="format">{{ format }}</p>
    </div>
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
export default {
  name: 'AnimeCard',
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  height: 100%;
}

img {
  height: 15rem;
  width: 10rem;
}

.container-bar {
  display: flex;
  flex-direction: column;
}

#ep {
  background-color: #f5f5f5;
  border-radius: 0.5rem;
  font-size: 0.8rem;
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
