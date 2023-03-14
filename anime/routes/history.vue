<template>
  <div id="history">
    <div class="year-history">
    <h1 class="title-history"> History for #### </h1>
    <h3 class="history-arrow up-arrow"> &#11165; </h3>
    <h3 class="history-arrow down-arrow"> &#11167; </h3>
    <div class="user-history">
    <div class="anime-history">
    <img class="anime-img" src="https://th.bing.com/th/id/OIP.VVki1-MBUqwb4NXk-55pMgAAAA?pid=ImgDet&rs=1" alt="Anime"/>
    <h3 class="anime-title"> Title of Anime </h3>
    </div>
    <div class="anime-history">
    <img class="anime-img" src="https://th.bing.com/th/id/OIP.VVki1-MBUqwb4NXk-55pMgAAAA?pid=ImgDet&rs=1" alt="Anime"/>
    <h3 class="anime-title"> Title of Anime </h3>
    </div>
    <div class="anime-history">
    <img class="anime-img" src="https://th.bing.com/th/id/OIP.VVki1-MBUqwb4NXk-55pMgAAAA?pid=ImgDet&rs=1" alt="Anime"/>
    <h3 class="anime-title"> Title of Anime </h3>
    </div>
    <div class="anime-history">
    <img class="anime-img" src="https://th.bing.com/th/id/OIP.VVki1-MBUqwb4NXk-55pMgAAAA?pid=ImgDet&rs=1" alt="Anime"/>
    <h3 class="anime-title"> Title of Anime </h3>
    </div>
    </div>
    </div>
  </div>
</template>

<script lang="ts">
export default ({
  name: 'history',
  data: ()=> ({}),
  components:{}
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
.up-arrow {
  display: none;
}
.down-arrow {
  /* display: none; */
  display: inline-block;
}
.anime-title {
  font-size: var(--h3);
}
.year-history {
  width: 96%;
  height: 25%;
  margin-left: 2%;
  margin-right: 2%;
  align-items: center;
  color: var(--white);
  white-space: nowrap;
}
.user-history {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
.history-arrow {
  margin-left: 15%;
  font-size: var(--h2);
  justify-self: center;
}
.anime-history {
  display: flex;
  margin-top: 1%;
  margin-left: 1%;
  margin-right: 1%;
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