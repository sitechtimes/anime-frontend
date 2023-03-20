<template>
  <div id="history">
    <div class="year-history">
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
    <div class="year-history">
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
      ],
  }),
  components:{},
  methods: {
    ShoworHide: function () {
      if (this.Show === false) {
        this.Show = true;
      } else {
        this.Show = false;
      }
    },
  },
})
</script>

<style>
#history {
  padding-top: 12vh;
}
.anime-img {
  width: 50%;
  height: 67%;
}
.anime-title {
  text-align: left;
  font-size: var(--h3);
}
.user-history {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
}
.year-history {
  width: 96%;
  margin-top: 1%;
  margin-left: 2%;
  margin-right: 2%;
  margin-bottom: 1.5%;
  align-items: center;
  color: var(--white);
  white-space: nowrap;
  background-color: rgb(36, 36, 36);
}
.anime-history {
  width: 20%;
  margin: 0.2%;
  display: flex;
  overflow: hidden;
  align-items: center;
  flex-direction: column;
}
.title-history {
  margin-left: 30%;
  text-align: center;
  font-size: var(--h1);
  display: inline-block;
}
.history-arrow {
  margin-top: 0%;
  margin-left: 8%;
  color: var(--white);
  font-size: var(--h2);
  justify-self: center;
  display: inline-block;
  background-color: unset; 
}
</style>