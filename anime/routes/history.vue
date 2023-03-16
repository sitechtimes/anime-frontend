<template>
  <div id="history">
    <div class="year-history">
    <div v-if="Show">
     <h1 class="title-history"> History for #### </h1>
     <button class="history-arrow" v-on:click="ShoworHide"> &#11167; </button>
     <div class="user-history">
       <div class="anime-history" v-for="anime in animes" :key="anime.title">
       <img class="anime-img" :src="anime.img" :alt="anime.alt"/>
       <h3 class="anime-title"> {{ anime.title}} </h3>
       </div>
    </div>
    </div>
    <div v-else>
      <h1 class="title-history"> History for #### </h1>
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
  padding-top: 10vh;
}
.anime-img {
  width: 45%;
  height: 55%;
}
.anime-title {
  font-size: var(--h3);
}
.year-history {
  width: 96%;
  margin-left: 2%;
  margin-right: 2%;
  margin-bottom: 1.5%;
  align-items: center;
  color: var(--white);
  white-space: nowrap;
  background-color: rgb(37, 37, 37);
}
.user-history {
  padding: 2%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-items: center;
}
.history-arrow {
  margin-top: 0%;
  margin-left: 7%;
  color: var(--white);
  font-size: var(--h2);
  justify-self: center;
  display: inline-block;
  background-color: unset; 
}
.anime-history {
  margin: 0.5%;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.title-history {
  margin-left: 30%;
  text-align: center;
  font-size: var(--h1);
  display: inline-block;
}
</style>
