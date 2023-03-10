<template>
  <div id="award-voting">
    <div class="award-container">
      <NuxtLink to="/vote" v-for="award in awards" :key="award.category">
        <div class="award-box">
          <img src="https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg" alt="" class="img">
          <h1 class="award-name">{{award.category}}</h1>
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
  width: 80vw;
  margin-bottom: 30vh;
}
.award-container {
  display: grid;
  grid-template-columns: auto auto auto auto;
  row-gap: 6rem;
}
.award-box {
  color: var(--white);
  display: flex;
  flex-direction: column;
  width: 15vw;
  border-radius: 10px;
}
.img {
  height: 20vh;
  border-radius: 10px;
  object-fit: cover;
}
.award-box:hover {
  outline: solid 4px var(--primary);
  background: var(--primary);

}
.award-name {
  text-align: center;
  font-size: var(--h4);
}
</style>