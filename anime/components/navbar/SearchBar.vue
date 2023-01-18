<template>
  <div id="searchBar">
    <div v-if="hideSearch" @click="enterSearchMobile" class="search-btn">
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16.9893 9.3918C16.9893 14.1054 13.2978 17.9265 8.74414 17.9265C4.19047 17.9265 0.498989 14.1054 0.498989 9.3918C0.498989 4.67824 4.19047 0.857147 8.74414 0.857147C13.2978 0.857147 16.9893 4.67824 16.9893 9.3918ZM3.78251 9.3918C3.78251 12.2282 6.00391 14.5276 8.74414 14.5276C11.4844 14.5276 13.7058 12.2282 13.7058 9.3918C13.7058 6.55535 11.4844 4.25596 8.74414 4.25596C6.00391 4.25596 3.78251 6.55535 3.78251 9.3918Z" fill="#DBDBDB"/>
      <path d="M12.6089 15.3234C11.9005 14.5902 11.9005 13.4013 12.6089 12.6681C13.3172 11.9348 14.4658 11.9348 15.1742 12.6681L20.6177 18.3027C21.3261 19.036 21.3261 20.2248 20.6177 20.9581C19.9093 21.6914 18.7608 21.6914 18.0524 20.9581L12.6089 15.3234Z" fill="#DBDBDB"/>
      </svg>
    </div>
    <div v-else @click="exitSearchMobile" class="search-bar">
      <form>
        <input v-model="text" @focus="searchActive" @focusout="searchInactive" placeholder="Search anime..." spellcheck="false" class="input">
      </form>
      <div v-show="showAnime" class="biggerBox">
        <div v-for="anime in searchResult" :key="anime.title" class="box">
          <img class="image-placeholder" src="https://cdn.myanimelist.net/images/characters/4/457933.jpg" alt="">
          <div class="info-column">
            <h1 class="title">{{anime.title}}</h1>
            <div class="info-row">
              <p class="age-rating">{{anime.ageRating}}</p>
              <div class="star-rating">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" class="star" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.0946 1.60341C14.6868 -0.25269 17.3132 -0.252693 17.9054 1.60341L20.2772 9.03723C20.5418 9.86642 21.3122 10.4293 22.1826 10.4293H29.9343C31.8629 10.4293 32.6743 12.89 31.1239 14.0371L24.7903 18.7232C24.1021 19.2324 23.8143 20.1232 24.0745 20.9389L26.4789 28.4746C27.0689 30.3237 24.9442 31.8447 23.384 30.6903L17.1896 26.1072C16.4827 25.5842 15.5173 25.5842 14.8104 26.1072L8.61604 30.6903C7.0558 31.8447 4.93115 30.3237 5.5211 28.4746L7.92546 20.9389C8.1857 20.1232 7.89791 19.2324 7.20966 18.7232L0.87612 14.0371C-0.674271 12.89 0.137065 10.4293 2.06569 10.4293H9.81743C10.6878 10.4293 11.4582 9.86642 11.7228 9.03723L14.0946 1.60341Z" fill="#FFEB34"/>
                </svg>
                <p>{{anime.stars.toFixed(2)}}</p>
              </div>
              <p>{{anime.releaseDate}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
    
<script lang="ts">
export default ({
  data: () => ({
    text: "",
    screenWidth: 0,
    hideSearch: false,
    showAnime: false,
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
  }),
  methods: {
    enterSearchMobile() {
      this.hideSearch = false
    },
    exitSearchMobile(e) {
      if (this.screenWidth <=568 && e.target.className === "search-bar") {
        this.hideSearch = true
      }
    },
    searchActive() {
      this.showAnime = true
    },
    searchInactive() {
      this.showAnime = false
    },
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
  },
})
</script>
    
<style scoped>
.search-bar{
  width:25vw;
  color: rgb(219, 219, 219);
}
.biggerBox{
  position:fixed;
  width: 25vw;
}

.input {
  background: rgb(68, 68, 68);
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
  background-color: rgb(68, 68, 68);
  display: flex;
  flex-direction: row;
  padding: 1rem;
  height: 9vh;
}
.box:nth-child(even) {
  background-color: rgb(39, 39, 39);
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
  font-size: var(--h7);
  gap: 2rem;
}
.age-rating {
  text-align: center;
  border: solid gray 0.1rem;
  border-radius: 5px;
  font-size: var(--smallText);
  width: 10%;
}
.star-rating {
  display: flex;
  align-items: center;
}
.star {
  height: 1rem;
  width: 1rem;
  margin-right: 0.5rem;
}

@media screen and (max-width: 1300px) {
  .box {
    padding: 0.75rem;
  }
  .title {
    font-size: var(--h5);
  }
  .info-row {
    font-size: var(--smallText);
  }
  .age-rating {
    width: 15%;
  }
}

@media screen and (max-width: 1024px) {
  .search-bar {
    width: 30vw;
  }
  .biggerBox {
    width: 30vw
  }
}

@media screen and (max-width: 768px) {
  .search-bar {
    width: 35vw;
  }
  .biggerBox {
    width: 35vw
  }
  .input {
    font-size: var(--h5);
  }
  .box {
    padding: 0.5rem;
    height: 10vh;
  }
  .age-rating {
    width: 20%;
  }
}

@media screen and (max-width: 568px) {
  .search-bar {
    background-color: var(--bg-primary);
    height: 100vh;
    width: 100vw;
    z-index: 5;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
  }
  .input, .biggerBox {
    width: 80vw;
    position: relative;
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