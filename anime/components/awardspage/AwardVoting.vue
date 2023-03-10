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
  grid-template-columns: 15vw 15vw 15vw 15vw;
  column-gap: 5vw;
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
  height: 20vh;
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
}
</style>