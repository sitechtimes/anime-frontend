<template>
  <div id="award-voting">
    <div class="award-container">
      <NuxtLink to="/vote" v-for="award in awards" :key="award.category">
        <div class="award-box">
          <img src="https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg" alt="" class="img">
          <h1 class="award-name">{{award.category}}</h1>
          <div class="fake-vote-btn">Vote</div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
  
<script lang="ts">
export default ({
  data: () => ({
    awards: [
      {category: "Best Anime"},
      {category: "Best Character Design"},
      {category: "Best Animation"},
      {category: "Best New Series"},
      {category: "Best Continuing Series"},
      {category: "Best Opening Sequence"},
      {category: "Best Ending Sequence"},
      {category: "Best Main Character"},
      {category: "Best Supporting Character"},
      {category: "Best Action"},
      {category: "Best Comedy"},
      {category: "Best Drama"},
      {category: "Best Fantasy"},
      {category: "Best Romance"},
      {category: "Best Anime Song"},
    ],
  }),
})
</script>
  
<style scoped>
#award-voting {
  margin: auto;
  width: 75vw;
  margin-bottom: 30vh;
}
.award-container {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  column-gap: 6rem;
  row-gap: 6rem;
}
.award-box {
  color: var(--white);
  display: flex;
  flex-direction: column;
  border-radius: 10px;
}
.award-box:hover {
  outline: solid 5px var(--primary);
  background: var(--primary);
}
.img {
  height: 20rem;
  border-radius: 10px;
  object-fit: cover;
}
.award-name {
  text-align: center;
  font-size: var(--h4);
}
.fake-vote-btn {
  background: var(--primary);
  border-radius: 20px;
  font-size: var(--h5);
  text-align: center;
  width: 10rem;
  z-index: 1;
  align-self: flex-end;
  position: absolute;
  margin: 0.5rem 0.5rem 0 0;
}

@media screen and (max-width: 1440px) {
  .award-container {
    row-gap: 4rem;
  }
  .img {
    height: 15rem;
  }
}
</style>