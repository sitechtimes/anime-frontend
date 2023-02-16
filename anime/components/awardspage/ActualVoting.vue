<template>
  <div id="actual-voting">
    <h1 class="award-name">Award Name</h1>
    <div class="nominee-container">
      <div class="nominee-box">
        <img class="image-placeholder" src="https://cdn.myanimelist.net/images/characters/4/457933.jpg" alt="">
        <h1>Anime Title</h1>
      </div>
    </div>
    <NuxtLink to="/awards">Back</NuxtLink>
  </div>
</template>
  
<script>
export default ({
  
})
</script>
  
<style>
#actual-voting {
  padding-top: 9vh;
  background: blue;
  width: 75vw;
  margin: auto;
}
.award-name {
  color: var(--white);
  background: var(--secondary);
  font-size: var(--h1);
  text-align: center;
  margin-top: 3rem;
}
</style>