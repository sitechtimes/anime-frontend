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
      <h2 class="season-text">Anime of the Season</h2>
     <ul class="anime-list">
      <li v-for="anime in animes" :key="anime.animeID" class="bestAnime">
          <img class="anime-pfp" src="https://cdn.myanimelist.net/images/characters/4/457933.jpg" alt="">
          <div class="info-column">
            <h1 class="title">{{anime.title}}</h1>
              <div class="star-rating">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" class="star" xmlns="http://www.w3.org/2000/svg">
                <path d="M14.0946 1.60341C14.6868 -0.25269 17.3132 -0.252693 17.9054 1.60341L20.2772 9.03723C20.5418 9.86642 21.3122 10.4293 22.1826 10.4293H29.9343C31.8629 10.4293 32.6743 12.89 31.1239 14.0371L24.7903 18.7232C24.1021 19.2324 23.8143 20.1232 24.0745 20.9389L26.4789 28.4746C27.0689 30.3237 24.9442 31.8447 23.384 30.6903L17.1896 26.1072C16.4827 25.5842 15.5173 25.5842 14.8104 26.1072L8.61604 30.6903C7.0558 31.8447 4.93115 30.3237 5.5211 28.4746L7.92546 20.9389C8.1857 20.1232 7.89791 19.2324 7.20966 18.7232L0.87612 14.0371C-0.674271 12.89 0.137065 10.4293 2.06569 10.4293H9.81743C10.6878 10.4293 11.4582 9.86642 11.7228 9.03723L14.0946 1.60341Z" fill="#FFEB34"/>
                </svg>
                <p>{{anime.stars.toFixed(2)}}</p>
              </div>
              <p>{{anime.genre}}</p>
            </div>
          </li>

     </ul>

    </div>
  </div>
  </div>
</template>

<script>
export default {
  data: ()=> ({
    animes: [
      {animeID:1, title: "One Punch Man", stars: 8.50, releaseDate: "Oct 5, 2015"},
      {animeID:2,title: "Spy x Family", stars: 9.99, releaseDate: "Apr 9, 2022"},
      {animeID:3,title: "Chainsaw Man", stars: 8.24, releaseDate: "Oct 11, 2022"},
      {animeID:4,title: "Summertime Render", stars: 9.61, releaseDate: "Apr 15, 2022"},
      {animeID:5,title: "Is It Wrong To Try To Pick Up Girls In A Dungeon?", stars: 7.69, releaseDate: "Apr 4, 2015"},
      ],
  }),
}
</script>

<style>
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
.banner-season{
    background-color: var(--tertiary);
    width:35%;
    height:100%;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color:var(--white);
}
.anime-pfp{
  border-radius: 50%;
-moz-border-radius: 50%;
-webkit-border-radius: 50%;
-o-border-radius: 50%;
width:5rem;
height:5rem;
}
.season-text{
  font-size: var(--h3);
  margin:0 auto;
}
.title{
  font-size: var(--h5);
}
svg{
  width:1rem;
}
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
.banner-image{
  width:20%;
  margin-left:20%;
  position:absolute;
}
.title-banner,
.trending-text,
.voting-description{
  margin-left: 5%; 
}
.title-banner{
  font-size: var(--h2);
  font-weight: var(--fw-bold);
  text-transform: uppercase;
  margin-top:5%;
}
.trending-text{
  font-size: var(--h4);
  margin-top:15%;
  letter-spacing: 1rem;
  text-transform: uppercase;
  font-weight: var(--fw-light);
}
.voting-description{
  font-size: var(--h5);
  font-weight: var(--fw-reg);
  margin-top:4%;
}
.anime-list{
  display: flex;
  flex-direction: column;
}
.bestAnime{
  display: flex;
  flex-direction: row;
}
.underNav{
  width:100vw;
  height:15rem;
  display:block;
}
</style>