<template>
<form class="form">
  <input v-model="text" placeholder="Search anime..." class="input">
  <div v-for="anime in searchResult" :key="anime.text" class="box">
    <img class="image-placeholder" src="https://cdn.myanimelist.net/images/characters/4/457933.jpg" alt="">
    <div class="info-column">
      <h1 class="title">{{anime.title}}</h1>
      <div class="info-row">
        <p class="age-rating">{{anime.ageRating}}</p>
        <div class="star-rating">
          <div class="star"></div>
          <p>{{anime.stars}}</p>
        </div>
        <p>{{anime.releaseDate}}</p>
      </div>
    </div>
  </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      animes: [
        {title: "One Punch Man", ageRating: "PG-13", stars: 8.50, releaseDate: "Oct 5, 2015"},
        {title: "Spy x Family", ageRating: "G", stars: 9.99, releaseDate: "April 9, 2022"},
        {title: "Chainsaw Man", ageRating: "PG-13", stars: 8.24, releaseDate: "Oct 20, 1999"},
        {title: "Summertime Render", ageRating: "PG-13", stars: 9.61, releaseDate: "Oct 20, 1999"},
        {title: "Is It Wrong To Try To Pick Up Girls In A Dungeon?", ageRating: "E", stars: 7.69, releaseDate: "Oct 20, 1999"},
        ],
    }
  },
  computed: {
    searchResult() {
      if (this.text) {
        return this.animes.filter((anime) => {
          return this.text.toLowerCase().split().every(search => anime.title.toLowerCase().includes(search))
        })
      }
    }
  }
}
</script>

<style scoped>
.form{
  color: rgb(219, 219, 219);
  margin: 5vw;
  width: 25vw;
}

.input {
  background: rgb(66, 66, 66);
  font-size: var(--h4);
  color: rgb(219, 219, 219);
  border: none;
  border-radius: 10px;
  outline: none;
  padding: 1rem 2rem;
  width: 100%;
}

.input:focus {
  background-color: rgb(33, 33, 33);
}

.box {
  background-color: rgb(39, 39, 39);
  display: flex;
  flex-direction: row;
  padding: 1rem;
  height: 10vh;
}

.box:nth-child(even) {
  background-color: rgb(62, 62, 62);
}

.image-placeholder {
  height: 100%;
  aspect-ratio: 3/4;
  object-fit: cover;
}

.info-column {
  margin-left: 1vw;
  width: 75%;
  display: flex;
  flex-direction: column;
  gap: 0.5vh;
}

.title {
  font-size: var(--h4);
  white-space: nowrap;
  overflow: hidden;
  display: block;
  text-overflow: ellipsis;
}

.info-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: var(--h5);
  gap: 1vw;
}

.age-rating {
  width: 15%;
  text-align: center;
  border: solid gray 0.15rem;
  border-radius: 5px;
  font-size: 1rem;
}

.star-rating {
  display: flex;
  align-items: center;
}

.star {
  background-color: yellow;
  height: 1vh;
  aspect-ratio: 1/1;
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}

</style>