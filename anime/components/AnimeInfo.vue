<template>
  <div id="anime-info">
    <div class="column-1">
      <img src="https://cdn.myanimelist.net/images/characters/4/457933.jpg" alt="">
      <h1 class="g">fhihfohwf</h1>
    </div>
    <div class="column-2">
      <h1>Anime Name</h1>
      <h1>Synopsis</h1>
      <div>divider</div>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae esse ex molestias dignissimos quos reiciendis voluptatem. Accusamus autem laboriosam, adipisci ipsam fuga soluta architecto illo repellat dolor, vel assumenda asperiores.</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {

}
</script>

<style scoped>
#anime-info {
    color: white;
    padding-top: 9vh;
    display: flex;
}
.g {
  background: red;
  height: 40vh;
}
.column-2 {
  font-size: var(--h4);
}
</style>