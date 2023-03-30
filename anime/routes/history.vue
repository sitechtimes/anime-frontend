<template>
  <div id="history">
    <div class="yearly-history">
    <div v-if="Show1">
     <h1 class="title-history"> History of #### </h1>
     <button class="history-arrow" v-on:click="Show1 = !Show1"> &#11167; </button>
     <div class="user-history">
       <div class="anime-history" v-for="anime in animes" :key="anime.title">
       <img class="anime-img" :src="anime.img" :alt="anime.alt"/>
       <h3 class="anime-title"> {{ anime.title }} </h3>
       </div>
    </div>
    </div>
    <div v-else>
      <h1 class="title-history"> History of #### </h1>
      <button class="history-arrow" v-on:click="Show1 = !Show1"> &#11165; </button>
    </div>
    </div>
    <div class="yearly-history">
    <div v-if="Show2">
     <h1 class="title-history"> History of #### </h1>
     <button class="history-arrow" v-on:click="Show2 = !Show2"> &#11167; </button>
     <div class="user-history">
       <div class="anime-history" v-for="anime in animes" :key="anime.title">
       <img class="anime-img" :src="anime.img" :alt="anime.alt"/>
       <h3 class="anime-title"> {{ anime.title }} </h3>
       </div>
    </div>
    </div>
    <div v-else>
      <h1 class="title-history"> History of #### </h1>
      <button class="history-arrow" v-on:click="Show2 = !Show2"> &#11165; </button>
    </div>
    </div>
  </div>
</template>

<script lang="ts">
export default ({
  name: 'history',
  data: ()=> ({
      Show1: true,
      Show2: true,
      animes: [
        {
          title: "Title of Anime",
          alt: "Image of Anime",
          img: `https://th.bing.com/th/id/OIP.VVki1-MBUqwb4NXk-55pMgAAAA?pid=ImgDet&rs=1`,
        },
        {
          title: "Title of Anime",
          alt: "Image of Anime",
          img: `https://th.bing.com/th/id/OIP.VVki1-MBUqwb4NXk-55pMgAAAA?pid=ImgDet&rs=1`,
        },
        {
          title: "Title of Anime",
          alt: "Image of Anime",
          img: `https://th.bing.com/th/id/OIP.VVki1-MBUqwb4NXk-55pMgAAAA?pid=ImgDet&rs=1`,
        },
        {
          title: "Title of Anime",
          alt: "Image of Anime",
          img: `https://th.bing.com/th/id/OIP.VVki1-MBUqwb4NXk-55pMgAAAA?pid=ImgDet&rs=1`,
        },
        {
          title: "Title of Anime",
          alt: "Image of Anime",
          img: `https://th.bing.com/th/id/OIP.VVki1-MBUqwb4NXk-55pMgAAAA?pid=ImgDet&rs=1`,
        },
        {
          title: "Title of Anime",
          alt: "Image of Anime",
          img: `https://th.bing.com/th/id/OIP.VVki1-MBUqwb4NXk-55pMgAAAA?pid=ImgDet&rs=1`,
        },
        {
          title: "Title of Anime",
          alt: "Image of Anime",
          img: `https://th.bing.com/th/id/OIP.VVki1-MBUqwb4NXk-55pMgAAAA?pid=ImgDet&rs=1`,
        },
        {
          title: "SSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS",
          alt: "Image of Anime",
          img: `https://th.bing.com/th/id/OIP.VVki1-MBUqwb4NXk-55pMgAAAA?pid=ImgDet&rs=1`,
        },
        {
          title: "Kimetsu no Yaiba",
          alt: "Image of Anime",
          img: `https://wallpapercave.com/wp/wp4445507.jpg`,
        },
        {
          title: "Burning Kabaddi",
          alt: "Image of Anime",
          img: `https://th.bing.com/th/id/OIP.frbPaUGvaphnnZ8AWM-T8gHaKf?pid=ImgDet&rs=1`,
        },
      ],
  }),
  components:{},
  methods: {},
})
</script>

<style>
#history {
  padding-top: 12rem;
  padding-bottom: 65rem;
  background-color: black;
}
.anime-img {
  width: 17rem;
  height: 22rem;
  object-fit: cover;
}
.anime-title {
  bottom: 1rem;
  left: 5.85rem;
  padding: 1.5%;
  max-width: 46%;
  max-height: 20%;
  overflow: hidden;
  text-align: left;
  position: absolute;
  font-size: var(--h6);
  background-color: #0A2854;
  box-shadow: 0.39rem 0.65rem #000000;
}
.user-history {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
.history-arrow {
  margin-top: 0%;
  margin-left: 4%;
  color: var(--white);
  font-size: var(--h2);
  display: inline-block;
  background-color: unset; 
}
.anime-history {
  width: 18%;
  height: 15%;
  padding: 0%;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  margin: 1.5% 0.5% 1.5% 0.5%;
}
.title-history {
  margin-left: 34%;
  text-align: center;
  font-size: var(--h1);
  display: inline-block;
}
.yearly-history {
  width: 96%;
  padding: 0.75%;
  align-items: center;
  color: var(--white);
  white-space: nowrap;
  margin: 1% 2% 1.5% 2%;
  background-color: rgb(15, 78, 171, 0.34);
}
@media screen and (max-width: 1285px) {
.anime-img {
  width: 15rem;
  height: 20rem;
}
.anime-title {
  left: 0.2rem;
  max-width: 50%;
}
}
@media screen and (max-width: 1025px) {
.anime-img {
  width: 12rem;
  height: 17rem;
}
.anime-title {
  left: 0.1rem;
  font-size: var(--h7);
}
.title-history {
  font-size: var(--h2);
}
.history-arrow {
  font-size: var(--h3);
}
}
@media screen and (max-width: 915px) {
#history {
  padding-top: 14rem;
}
.anime-img {
  width: 26rem;
  height: 30rem;
}
.anime-title {
  left: -8rem;
  max-width: 18rem;
  font-size: var(--h4);
  box-shadow: 0.55rem 0.8rem #000000;
}
.user-history {
  align-items: center;
  flex-direction: column;
}
.title-history {
  font-size: var(--h1);
  margin-left: 17%;
}
.history-arrow {
  font-size: var(--h2);
}
}
@media screen and (max-width: 825px) {
.anime-title {
  left: -11rem;
  box-shadow: 0.75rem 0.84rem #000000;
}
}
@media screen and (max-width: 770px) {
.anime-title {
  padding: 2%;
  left: -10rem;
  max-width: 20rem;
  box-shadow: 0.65rem 0.85rem #000000;
}
}
@media screen and (max-width: 550px) {
#history {
  padding-top: 5rem;
}
.anime-img {
  width: 15rem;
  height: 18rem;
}
.anime-title {
  left: -5rem;
  max-width: 11rem;
  font-size: var(--h6);
  box-shadow: 0.65rem 0.6rem #000000;
}
.anime-history {
  margin-bottom: 3%;
}
.title-history {
  margin-left: 15%;
  font-size: var(--h2);
}
.history-arrow {
  margin-left: 3%;
  font-size: var(--h3);
}
}
@media screen and (max-width: 425px) {
.anime-img {
  width: 14rem;
  height: 17rem;
}
.anime-title {
  box-shadow: 0.5rem 0.6rem #000000;
}
.title-history {
  font-size: var(--h3);
}
.yearly-history {
  width: 96.6%;
  margin: 1.7%;
}
.history-arrow {
  font-size: var(--h4);
}
}
@media screen and (max-width: 380px) {
.yearly-history {
  width: 96%;
  margin: 2%;
  margin-bottom: 2%;
}
}
@media screen and (max-width: 365px) {
.anime-title {
  box-shadow: 0.45rem 0.55rem #000000;
}
.yearly-history {
  width: 96%;
  margin: 2%;
  margin-bottom: 3%;
}
}
@media screen and (max-width: 285px) {
#history {
  padding-top: 2rem;
}
.anime-img {
  width: 13rem;
  height: 16rem;
}
.anime-title {
  left: -7rem;
}
.title-history {
  font-size: var(--h4);
}
.yearly-history {
  width: 95%;
  margin: 2.5%;
}
.history-arrow {
  margin-left: -2%;
  font-size: var(--h5);
}
}
</style>
