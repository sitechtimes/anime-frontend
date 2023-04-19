<template>
  <div id="award-voting">
    <div class="text-box">
      <h1 class="text-head">#Vote Here in the Boxes Below</h1>
      <div class="text-sub">
        <h2 class="text-tab">Seasonal</h2>
        <h2 class="text-tab">Year</h2>
        <NuxtLink to="/history"><h2 class="text-tab">Past Winners</h2></NuxtLink>
      </div>
    </div>
    <div class="award-container">
      <NuxtLink to="/vote" v-for="award in awards" :key="award">
        <div class="award-box">
          <img src="https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg" alt="" class="img">
          <h1 class="award-name">{{award}}</h1>
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
      "Best Anime",
      "Best Character Design",
      "Best Animation",
      "Best New Series",
      "Best Continuing Series",
      "Best Opening Sequence",
      "Best Ending Sequence",
      "Best Main Character",
      "Best Supporting Character",
      "Best Action",
      "Best Comedy",
      "Best Drama",
      "Best Fantasy",
      "Best Romance",
      "Best Anime Song",
    ],
  }),
})
</script>
  
<style scoped>
#award-voting {
  margin: auto;
  width: 75vw;
  margin-bottom: 30vh;
  color: var(--white);
}
.text-box {
  margin-bottom: 4rem;
}
.text-head {
  font-size: var(--h2);
}
.text-sub {
  font-size: var(--h6);
  display: flex;
}
.text-tab {
  margin-right: 3rem;
  transition: 200ms ease-in-out;
  font-weight: var(--fw-light);
}
.text-tab:hover {
  color: var(--primary);
  text-decoration: underline;
}
.award-container {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  column-gap: 6rem;
  row-gap: 6rem;
}
.award-box {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  transition: 100ms ease-in;
}
.award-box:hover {
  outline: solid 5px var(--primary);
  background: var(--primary);
  transform: translate(0, -8px);
}
.img {
  height: 20rem;
  border-radius: 10px;
  object-fit: cover;
}
.award-name {
  text-align: center;
  font-size: var(--h4);
  white-space: nowrap;
  overflow: hidden;
  display: block;
  text-overflow: ellipsis;
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
  margin: 1rem 0.5rem 0 0;
}

@media screen and (max-width: 1440px) {
  .award-container {
    row-gap: 4rem;
  }
  .img {
    height: 15rem;
  }
  .fake-vote-btn {
    width: 6rem;
    font-size: var(--h6);
  }
}

@media screen and (max-width: 1200px) {
  .award-container {
    column-gap: 3rem;
    row-gap: 3rem;
  }
  .award-name {
    font-size: var(--h5);
  }
  .img {
    height: 12rem;
  }
  .fake-vote-btn {
    width: 6rem;
    font-size: var(--h7);
    margin: 0.5rem 0.5rem 0 0;
  }
}

@media screen and (max-width: 915px) {
  .award-container {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}

@media screen and (max-width: 768px) {
  .award-container {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 6rem;
  }
}

@media screen and (max-width: 568px) {
  .award-container {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
}

@media screen and (max-width: 425px) {
  #award-voting {
    width: 70vw;
  }
  .img {
    height: 16rem;
  }
  .award-name {
    font-size: var(--h4);
  }
  .fake-vote-btn {
    font-size: var(--h5);
    width: 10rem;
  }
}
</style>