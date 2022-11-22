<template>
  <div class="card-container">
    <img class="anime-img" :src="`${img}`" alt="" />

    <div class="container-bar">
        <svg
          width="50"
          height="16"
          viewBox="0 0 46 14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M0 1C0 0.447715 0.447715 0 1 0H44.6975C45.3548 0 45.8333 0.623321 45.6635 1.25833L42.4886 13.1313C42.3717 13.5688 41.9754 13.873 41.5226 13.873H1C0.447717 13.873 0 13.4253 0 12.873V1Z"
            fill="#FF645A"
          />
           <text x="5" y="10.5" fill="white" class="ep">{{ episode }}</text>
        </svg>
      <p id="format">{{ format }}</p>
    </div>
    <h5 class="title">{{ title }}</h5>
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
  align-items: center;
  background-color: var(--bg-primary);
  padding: 0.5rem;
  border-radius: 0 0 0.5rem 0.5rem;
}

.title {
  width: 100%;
  color: var(--white);
  font-size: var(--h5);
}

.ep {
  width: 1.5rem;
  font-size: var(--h6);
  color: var(--white);
}

#format {
  color: #f5f5f5;
  font-size: var(--h6);
  padding: 0.2rem 0.5rem;
}
</style>
