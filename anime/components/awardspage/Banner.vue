<template>
  <div id="banner">
    <span class="underNav"></span>
    <div class="banner-flex">
      <div class="banner-bg">
        <div class="banner-text">
            <h2 class="trending-text">#trending</h2>
            <h1 class="title-banner">vote for your <br>faves anytime</h1>
            <p class="voting-description">Mission Statement and more writing yeah</p>
        </div>
        <img src="@/assets/media/award-anya.png" alt="Anya falling with icecream" class="banner-image">
    </div>
    <div class="banner-season">
      
     <ul class="anime-list">
      <h2 class="season-text">Anime of the Season</h2>
      <li v-for="anime in animes" :key="anime.animeID" class="bestAnime">
         <div class="picture-column">
          <h2 class="rank-number">{{ anime.animeID }}</h2>
          <img class="anime-pfp" src="https://cdn.myanimelist.net/images/characters/4/457933.jpg" alt="">
         </div>
          <div class="info-column">
            <h1 class="animeTitle">{{anime.title}}</h1>
              <div class="star-rating">
                <starSVG />
                <p>{{anime.stars.toFixed(2)}}</p>
              </div>
            </div>
            <span class="genre-text">{{anime.genre}}</span>
          </li>

     </ul>

    </div>
  </div>
  </div>
</template>

<script>
import starSVG from "@/components/starSVG.vue";
export default {
  components: {
		starSVG
	},
  data: ()=> ({
    animes: [
      {animeID:"01", title: "One Punch Man", stars: 8.50, releaseDate: "Oct 5, 2015", genre:"Adventure"},
      {animeID:'02',title: "Spy x Family", stars: 9.99, releaseDate: "Apr 9, 2022", genre:"Comedy"},
      {animeID:'03',title: "Chainsaw Man", stars: 8.24, releaseDate: "Oct 11, 2022", genre:"Graphic"},
      {animeID:'04',title: "Summertime Render", stars: 9.61, releaseDate: "Apr 15, 2022", genre:"School Life"},
      {animeID:'05',title: "Is It Wrong To Try To Pick Up Girls In A Dungeon?", stars: 7.69, releaseDate: "Apr 4, 2015", genre:"Fantasy"},
      ],
  }),
}
</script>

<style scoped>
#banner{
  width:100vw;
  height:100vh;
}
.banner-flex{
  width:80%;
  height:45%;
  display:flex;
  justify-content: space-around;
  align-items: center;
  margin:0 auto;
}
.banner-bg{
    background-color: var(--primary);
    width:50%;
    height:100%;
    border-radius: 25px;
    display: flex;
    align-items: center;
    color:var(--white);
}
/* top anime section */
.banner-season{
    background-color: var(--tertiary);
    width:35%;
    height:100%;
    border-radius: 25px;
    margin: 0 auto;
    color:var(--white);
}
.anime-pfp{
  border-radius: 50%;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  -o-border-radius: 50%;
  width:5rem;
  height:5rem;
  margin-left:1rem;
}
.season-text{
  font-size: var(--h3);
  margin:2.7vw 0 0 0 ;
  text-align:center;
}
.animeTitle{
  font-size: var(--h4);
  overflow: hidden;
  white-space: nowrap;
  display: block;
  text-overflow: ellipsis;
}
.genre-text{
  background-color: var(--primary);
  width:20%;
  height: 35%;
  display: flex;
  justify-content: center;
  border-radius: 1rem;
  margin-top: 1vw;
  overflow: hidden;
}
.info-column{
  width:45%;
}
.picture-column{
  width:22%;
  display: flex;
  align-items: center;
  justify-content: center;
}
/* flex for primary section */
.banner-text{
  width:55%;
  height:90%;
  margin-left:5%;
  line-height: 1.4;
  display:flex;
  justify-content: start;
  flex-direction: column;
  background-color: var(--secondary);
  border-radius: 25px;
  position: relative;
}
/* anya */
.banner-image{
  width:20%;
  margin-left:20%;
  position:absolute;
}
/* primary color section */
.title-banner,
.trending-text,
.voting-description{
  margin-left: 5%; 
}
/* "vote for faves" */
.title-banner{
  font-size: var(--h2);
  font-weight: var(--fw-bold);
  text-transform: uppercase;
  margin-top:5%;
}
/* words trending */
.trending-text{
  font-size: var(--h4);
  margin-top:15%;
  letter-spacing: 1rem;
  text-transform: uppercase;
  font-weight: var(--fw-light);
}
/* small text to describe process */
.voting-description{
  font-size: var(--h5);
  font-weight: var(--fw-reg);
  margin-top:4%;
}
/* rating to make it aligned and flex row */
.star-rating{
  display: flex;
  align-items: center;
}
/* smaller than best anime not including title */
.anime-list{
  display: flex;
  flex-direction: column;
}
/* overall best anime (gray section) */
.bestAnime{
  display: flex;
  flex-direction: row;
}
/* undernavigation  */
.underNav{
  width:100vw;
  height:15rem;
  display:block;
}
</style>