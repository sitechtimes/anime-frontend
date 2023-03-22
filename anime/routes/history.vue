<template>
  <div id="history">
    <div class="yearly-history">
    <div v-if="Show">
     <h1 class="title-history"> History of #### </h1>
     <button class="history-arrow" v-on:click="ShoworHide"> &#11167; </button>
     <div class="user-history">
       <div class="anime-history" v-for="anime in animes" :key="anime.title">
       <img class="anime-img" :src="anime.img" :alt="anime.alt"/>
       <h3 class="anime-title"> {{ anime.title }} </h3>
       </div>
    </div>
    </div>
    <div v-else>
      <h1 class="title-history"> History of #### </h1>
      <button class="history-arrow" v-on:click="ShoworHide"> &#11165; </button>
    </div>
    </div>
    <div class="yearly-history">
    <div v-if="Show">
     <h1 class="title-history"> History of #### </h1>
     <button class="history-arrow" v-on:click="ShoworHide"> &#11167; </button>
     <div class="user-history">
       <div class="anime-history" v-for="anime in animes" :key="anime.title">
       <img class="anime-img" :src="anime.img" :alt="anime.alt"/>
       <h3 class="anime-title"> {{ anime.title }} </h3>
       </div>
    </div>
    </div>
    <div v-else>
      <h1 class="title-history"> History of #### </h1>
      <button class="history-arrow" v-on:click="ShoworHide"> &#11165; </button>
    </div>
    </div>
  </div>
</template>

<script lang="ts">
export default ({
  name: 'history',
  data: ()=> ({
      Show: true,
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
          title: "Title of Animeeeeeeeeeeeeeeeeeeeeeeeee",
          alt: "Image of Anime",
          img: `https://th.bing.com/th/id/OIP.VVki1-MBUqwb4NXk-55pMgAAAA?pid=ImgDet&rs=1`,
        },
      ],
  }),
  components:{},
  methods: {
    ShoworHide: function () {
      if (this.Show === false) {
        this.Show = true;
      } else {
        this.Show = false;e
      }
    },
  },
})
</script>

<style>
#history {
  height: 100%;
  padding-top: 12vh;
  padding-bottom: 55vh;
  background-color: black;
}
.anime-img {
  width: 52%;
  height: 78%;
}
.anime-title {
  left: 6rem;
  padding: 1%;
  bottom: 1rem;
  max-width: 45%;
  max-height: 17%;
  text-overflow: ellipsis;
  text-align: left;
  position: absolute;
  font-size: var(--h5);
  background-color: #0A2854;
  box-shadow: 0.3rem 0.5rem #000000;
}
.user-history {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
.anime-history {
  width: 18%;
  height: 15%;
  padding: 0%;
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  margin: 1% 0.5% 1% 0.5%;
}
.title-history {
  margin-left: 30%;
  text-align: center;
  font-size: var(--h1);
  display: inline-block;
}
.yearly-history {
  width: 96%;
  padding: 0.5%;
  align-items: center;
  color: var(--white);
  white-space: nowrap;
  margin: 1% 2% 1.5% 2%;
  background-color: rgb(15, 78, 171, 0.34);
  /* background-color: rgb(36, 36, 36); */
}
.history-arrow {
  margin-top: 0%;
  margin-left: 5%;
  color: var(--white);
  font-size: var(--h2);
  display: inline-block;
  background-color: unset; 
}
</style>