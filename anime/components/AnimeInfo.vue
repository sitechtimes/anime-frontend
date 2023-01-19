<template>
  <div id="anime-info">
    <div class="column-1">
      <img class="image-placeholder" src="https://cdn.myanimelist.net/images/characters/4/457933.jpg" alt="">
      <div class="quick-info">
        <p class="stats">Episodes: N/A</p>
        <p class="stats">Episodes: N/A</p>
        <p class="stats">Episodes: N/A</p>
        <p class="stats">Episodes: N/A</p>
        <p class="stats">Episodes: N/A</p>
      </div>
    </div>
    <div class="column-2">
      <div class="info-block">
        <h1>Anime Name</h1>
        <div class="star-rating">
          <starSVG class="star"/>
          <p>10.00</p>
        </div>
        <div>
          <button class="btn">Heart</button>
          <button class="btn">Add to Watchlist</button>
          <button class="btn">Rate</button>
        </div>
      </div>      
      <div class="info-block">
        <h2>Synopsis</h2>
        <div class="divider"></div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae esse ex molestias dignissimos quos reiciendis voluptatem. Accusamus autem laboriosam, adipisci ipsam fuga soluta architecto illo repellat dolor, vel assumenda asperiores.</p>
      </div>
      <div class="info-block">
        <h2>Characters</h2>
        <div class="divider"></div>
        <div class="character-container">
          <div class="character">
            <img class="character-img" src="https://cdn.myanimelist.net/images/characters/4/457933.jpg" alt="">
            <p class="character-name">Name</p>
          </div>
          <div class="character">
            <img class="character-img" src="https://cdn.myanimelist.net/images/characters/4/457933.jpg" alt="">
            <p class="character-name">Name</p>
          </div>
        </div>
      </div>
      <div class="info-block">
        <h2>Rating Distribution</h2>
        <div class="divider"></div>
        <p>Insert D3 Bar Graph Here</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import starSVG from '../components/starSVG.vue'
export default {
  components:{
    starSVG
  }
}
</script>

<style scoped>
#anime-info {
  color: white;
  padding-top: 13vh;
  display: flex;
  justify-content: center;
  margin: auto;
}
.column-1 {
  width: 15vw;
}
.image-placeholder {
  height: 30vh;
  width: 100%;
  object-fit: cover;
}
.quick-info {
  background: red;
  height: 50vh;
  margin-top: 2vh;
  padding: 0.5rem 1rem;
  font-size: var(--h5);
}
.column-2 {
  width: 53vw;
  font-size: var(--h5);
  margin-left: 2rem;
}
.info-block {
  margin-bottom: 2rem;
}
.star-rating {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: var(--h4);
  margin-bottom: 1rem;
}
.star {
  height: 1.5rem;
}
.btn {
  background-color: lightpink;
  font-size: var(--h5);
  padding: 0.5rem 1rem;
  margin-right: 1rem;
}
.divider {
  height: 0.2rem;
  background-color: white;
}
.character-container {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  margin: 1rem 0;
}
.character {
  width: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}
.character-img {
  height: 10rem;
  object-fit: cover;
}
.character-name {
  background-color: blue;
  text-align: center;
}
</style>