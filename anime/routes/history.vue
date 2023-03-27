<template>
  <div id="history">
    <div class="yearly-history">
    <div v-if="Show1">
     <h1 class="title-history"> History of #### </h1>
     <button class="history-arrow" v-on:click="ShoworHide1"> &#11167; </button>
     <div class="user-history">
       <div class="anime-history" v-for="anime in animes" :key="anime.title">
       <img class="anime-img" :src="anime.img" :alt="anime.alt"/>
       <h3 class="anime-title"> {{ anime.title }} </h3>
       </div>
    </div>
    </div>
    <div v-else>
      <h1 class="title-history"> History of #### </h1>
      <button class="history-arrow" v-on:click="ShoworHide1"> &#11165; </button>
    </div>
    </div>
    <div class="yearly-history">
    <div v-if="Show2">
     <h1 class="title-history"> History of #### </h1>
     <button class="history-arrow" v-on:click="ShoworHide2"> &#11167; </button>
     <div class="user-history">
       <div class="anime-history" v-for="anime in animes" :key="anime.title">
       <img class="anime-img" :src="anime.img" :alt="anime.alt"/>
       <h3 class="anime-title"> {{ anime.title }} </h3>
       </div>
    </div>
    </div>
    <div v-else>
      <h1 class="title-history"> History of #### </h1>
      <button class="history-arrow" v-on:click="ShoworHide2"> &#11165; </button>
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
  methods: {
    ShoworHide1 () {
      if (this.Show1 === false) {
        this.Show1 = true;
      } else {
        this.Show1 = false;
      }
    },
    ShoworHide2 () {
      if (this.Show2 === false) {
        this.Show2 = true;
      } else {
        this.Show2 = false;
      }
    },
  },
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
</style>