<template>
  <div id="history">
    <div class="year-history">
    <h1 class="title-history"> History for #### </h1>
    <button v-if="Show" class="history-arrow" @click="Hidden"> &#11167; </button>
    <button v-else class="history-arrow" @click="Reveal"> &#11165; </button>
    <div v-if="Show" class="user-history">
    <div class="anime-history">
    <img class="anime-img" src="https://th.bing.com/th/id/OIP.VVki1-MBUqwb4NXk-55pMgAAAA?pid=ImgDet&rs=1" alt="TBD"/>
    <h3 class="anime-title"> Title of Anime </h3>
    </div>
    <div class="anime-history">
    <img class="anime-img" src="https://th.bing.com/th/id/OIP.VVki1-MBUqwb4NXk-55pMgAAAA?pid=ImgDet&rs=1" alt="TBD"/>
    <h3 class="anime-title"> Title of Anime </h3>
    </div>
    <div class="anime-history">
    <img class="anime-img" src="https://th.bing.com/th/id/OIP.VVki1-MBUqwb4NXk-55pMgAAAA?pid=ImgDet&rs=1" alt="TBD"/>
    <h3 class="anime-title"> Title of Anime </h3>
    </div>
    <div class="anime-history">
    <img class="anime-img" src="https://th.bing.com/th/id/OIP.VVki1-MBUqwb4NXk-55pMgAAAA?pid=ImgDet&rs=1" alt="TBD"/>
    <h3 class="anime-title"> Title of Anime </h3>
    </div>
    </div>
    </div>
    <div class="year-history">
    <h1 class="title-history"> History for #### </h1>
    <button v-if="Show" class="history-arrow"> &#11167; </button>
    <button v-else class="history-arrow"> &#11165; </button>
    <div v-if="Show" class="user-history">
    <div class="anime-history">
    <img class="anime-img" src="https://th.bing.com/th/id/OIP.VVki1-MBUqwb4NXk-55pMgAAAA?pid=ImgDet&rs=1" alt="TBD"/>
    <h3 class="anime-title"> Title of Anime </h3>
    </div>
    <div class="anime-history">
    <img class="anime-img" src="https://th.bing.com/th/id/OIP.VVki1-MBUqwb4NXk-55pMgAAAA?pid=ImgDet&rs=1" alt="TBD"/>
    <h3 class="anime-title"> Title of Anime </h3>
    </div>
    <div class="anime-history">
    <img class="anime-img" src="https://th.bing.com/th/id/OIP.VVki1-MBUqwb4NXk-55pMgAAAA?pid=ImgDet&rs=1" alt="TBD"/>
    <h3 class="anime-title"> Title of Anime </h3>
    </div>
    <div class="anime-history">
    <img class="anime-img" src="https://th.bing.com/th/id/OIP.VVki1-MBUqwb4NXk-55pMgAAAA?pid=ImgDet&rs=1" alt="TBD"/>
    <h3 class="anime-title"> Title of Anime </h3>
    </div>
    </div>
    </div>
  </div>
</template>

<script lang="ts">
export default ({
  name: 'history',
  data: ()=> ({
      Show: true,
  }),
  components:{},
  methods: {
    Reveal () {},
    Hidden () {},
  },
})
</script>

<style>
#history {
  padding-top: 10vh;
}
.anime-img {
  width: 35%;
  height: 55%;
}
.anime-title {
  font-size: var(--h4);
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
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
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
