<template>
  <div id="history">
    <div class="year-history">
    <h1 class="title-history"> History for #### </h1>
    <h3 class="history-arrow down-arrow"> &#8595; </h3>
    <h3 class="history-arrow up-arrow"> &#8593; </h3>
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
  padding-top: 9vh;
}
.anime-img {
  width: 35%;
  height: 50%;
}
.up-arrow {
  display: none;
}
/* .down-arrow {
  display: inline-block;
} */
.anime-title {
  font-size: var(--h3);
}
.year-history {
  color: var(--white);
  white-space: nowrap;
}
.user-history {
  width: 96%;
  margin: 2%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
}
.history-arrow {
  font-size: var(--h3);
}
.anime-history {
  display: flex;
  margin-left: 1%;
  margin-right: 1%;
  align-items: center;
  flex-direction: column;
}
.title-history {
  text-align: center;
  font-size: var(--h1);
}
</style>