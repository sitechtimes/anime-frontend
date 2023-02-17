<template>
  <div id="actual-voting">
    <h1 class="award-name">Award Name</h1>
    <div class="nominee-container">
      <div v-for="r1 in r" class="nominee-box">
        <img class="image-placeholder" src="https://cdn.myanimelist.net/images/characters/4/457933.jpg" alt="">
        <h1 class="anime-title">Anime Title {{r1}}</h1>
      </div>
    </div>
    <NuxtLink to="/awards">Back</NuxtLink>
    <button>Vote</button>
  </div>
</template>
  
<script lang="ts">
export default ({
  data: () => ({
    r: [1,2,3,4,5,6]
  })
})
</script>
  
<style scoped>
#actual-voting {
  padding-top: 9vh;
  width: 70vw;
  margin: auto;
}
.award-name {
  color: var(--white);
  background: var(--secondary);
  font-size: var(--h1);
  text-align: center;
  margin-top: 3rem;
}
.nominee-container {
  margin-top: 5vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.nominee-box {
  padding: 1rem;
  width: 33vw;
  height: 15vh;
  color: white;
  display: flex;
  flex-direction: row;
  outline: solid 2px gray;
  background: var(--tertiary);
  margin-bottom: 3rem;
}
.nominee-box:hover {
  background: red;
}
.image-placeholder {
  height: 100%;
  aspect-ratio: 3/4;
  object-fit: cover;
}
.anime-title {
  font-size: var(--h3);
  margin-left: 1rem;
}
</style>