<template>
<div v-if="hideSearch" @click="enterSearchMobile" class="search-btn"><svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.9893 9.3918C16.9893 14.1054 13.2978 17.9265 8.74414 17.9265C4.19047 17.9265 0.498989 14.1054 0.498989 9.3918C0.498989 4.67824 4.19047 0.857147 8.74414 0.857147C13.2978 0.857147 16.9893 4.67824 16.9893 9.3918ZM3.78251 9.3918C3.78251 12.2282 6.00391 14.5276 8.74414 14.5276C11.4844 14.5276 13.7058 12.2282 13.7058 9.3918C13.7058 6.55535 11.4844 4.25596 8.74414 4.25596C6.00391 4.25596 3.78251 6.55535 3.78251 9.3918Z" fill="#DBDBDB"/>
<path d="M12.6089 15.3234C11.9005 14.5902 11.9005 13.4013 12.6089 12.6681C13.3172 11.9348 14.4658 11.9348 15.1742 12.6681L20.6177 18.3027C21.3261 19.036 21.3261 20.2248 20.6177 20.9581C19.9093 21.6914 18.7608 21.6914 18.0524 20.9581L12.6089 15.3234Z" fill="#DBDBDB"/>
</svg>
</div>
<form v-else class="form">
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
      screenWidth: null,
      hideSearch: null,
      animes: [
        {title: "One Punch Man", ageRating: "PG-13", stars: 8.50, releaseDate: "Oct 5, 2015"},
        {title: "Spy x Family", ageRating: "G", stars: 9.99, releaseDate: "Apr 9, 2022"},
        {title: "Chainsaw Man", ageRating: "PG-13", stars: 8.24, releaseDate: "Oct 11, 2022"},
        {title: "Summertime Render", ageRating: "PG-13", stars: 9.61, releaseDate: "Apr 15, 2022"},
        {title: "Is It Wrong To Try To Pick Up Girls In A Dungeon?", ageRating: "E", stars: 7.69, releaseDate: "Apr 4, 2015"},
        {title: "I Spent Hours of my Life Doing Spiral Abyss and all I got was an Extra 50 Primogems", ageRating: "E", stars: 9.89, releaseDate: "June 9, 2022"},
        {title: "Some Mid Isekai Anime", ageRating: "G", stars: 2.56, releaseDate: "Aug 19, 2021"},
        {title: "I went on a Field Trip Where I Touched Grass For the First Time in Years", ageRating: "PG-13", stars: 7.86, releaseDate: "Jan 17, 2012"},
        {title: "The Pi in the Sky", ageRating: "G", stars: 9.90, releaseDate: "Mar 14, 1592"},
        {title: "Genshin Impact The Anime", ageRating: "R", stars: 9.27, releaseDate: "TBA"},
        ],
    }
  },
  methods: {
    enterSearchMobile() {
      this.hideSearch = false
    },
    exitSearchMobile() {
      this.hideSearch = true
    }
  },
  computed: {
    searchResult() {
      if (this.text) {
        return this.animes.filter((anime) => {
          return this.text.toLowerCase().split().every(search => anime.title.toLowerCase().includes(search))
        }).slice(0,5)
      }
    }
  },
  mounted() {
    this.screenWidth = window.innerWidth
    if (window.innerWidth <= 568) {
      this.hideSearch = true
    } else {
      this.hideSearch = false
    }
  }
}
</script>

<style scoped>
.form{
  color: rgb(219, 219, 219);
  width: 30vw;
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
  background-color: rgb(52, 52, 52);
}

.box {
  background-color: rgb(36, 36, 36);
  display: flex;
  flex-direction: row;
  padding: 1rem;
  height: 8vh;
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
  font-size: 1rem;
  gap: 2rem;
}

.age-rating {
  text-align: center;
  border: solid gray 0.15rem;
  border-radius: 5px;
  font-size: var(--smallText);
  width: 10%;
}

.star-rating {
  display: flex;
  align-items: center;
}

.star {
  background-color: yellow;
  margin-right: 0.5rem;
  height: 1.5vh;
  aspect-ratio: 1/1;
  clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}

@media screen and (max-width: 1300px) {
  .box {
    padding: 0.75rem;
  }
  .title {
    font-size: var(--h5);
  }
  .info-row {
    font-size: 1rem;
  }
    .age-rating {
    font-size: var(--smallText);
    width: 15%;
  }
}

@media screen and (max-width: 1024px) {
  .form {
    width: 30vw;
  }
  .info-row {
    font-size: var(--smallText);
  }
}

@media screen and (max-width: 768px) {
  .form {
    width: 35vw;
  }
  .input {
    font-size: var(--h5);
  }
  .title {
    font-size: 1.4rem;
  }
  .age-rating {
    font-size: 0.7rem;
    border: solid gray 0.1rem;
    width: 20%;
  }
}

@media screen and (max-width: 568px) {
  .form {
    background-color: var(--bg-primary);
    background-color: red;
    height: 100vh;
    width: 100vw;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .input, .box {
    width: 80vw;
  }
  .input {
    margin-top: 5vh;
  }
  .info-column {
    margin-left: 2vw;
  }
  .age-rating {
    width: 10%;
  }
}

@media screen and (max-width: 425px) {
  .age-rating {
    width: 15%;
  }
  .info-column {
    margin-left: 3vw;
  }
}

</style>