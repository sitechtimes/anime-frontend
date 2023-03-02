<template>
  <div id="profile">
    <span class="underNav"></span>
    <div class="profile-top">
        <div class="banner"><img class="banner" src="https://i.pinimg.com/originals/e8/56/45/e856453f7f9b8c29bd73e51fc71813db.jpg" alt="">
    </div>
    <div class="profile-info">
        <img class="profile-img" src="https://th.bing.com/th/id/OIP.5Xv2gQmaNhcCJVB0E6zuwgHaEK?pid=ImgDet&rs=1" alt="profile picture">
        <div class="profile-name">
            <h3 class="profile-id">Alpha-Red</h3>
            <p class="profile-grade">Senior Class of 2023</p>
            <p class="profile-grade">Date Started: 01/19/2023</p>
        </div>
    </div>
</div>
    <div class="tabs-class">
        <TabsWrapper>
            <Tab title="Tab 1">Tab 1 ahhhh</Tab>
            <Tab title="Tab 2">Tab 2</Tab>
        </TabsWrapper>
    </div>
  </div>
</template>

<script lang="ts">
    import Tab from '../components/profile/Tab.vue'
    import TabsWrapper from '../components/profile/TabsWrapper.vue'
    // import Tabs from '../components/profile/Tabs.vue'
export default {
    components: {
      Tab,
      TabsWrapper
    //   Tabs
    },
    data: ()=> ({
    currentAnimes: [
      {animeID:"01", title: "One Punch Man", stars: 8.50, releaseDate: "Oct 5, 2015", genre:"Adventure"},
      {animeID:'02',title: "Spy x Family", stars: 9.99, releaseDate: "Apr 9, 2022", genre:"Comedy"},
      {animeID:'03',title: "Chainsaw Man", stars: 8.24, releaseDate: "Oct 11, 2022", genre:"Graphic"},
      {animeID:'04',title: "Blue Lock", stars: 8.24, releaseDate: "Oct 11, 2022", genre:"Sports"},
      ],
  }),
}
</script>

<style scoped>
.profile-top,
.profile-middle,
.profile-bottom{
    width: 100%;
    height:100%;
    display: flex;
    justify-content: center;
    color: var(--white);
}
.profile-middle .current-anime,
.profile-middle .profile-stats,
.profile-bottom .favorite-anime,
.profile-bottom .favorite-genre{
    background-color:var(--tertiary);
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.banner{
    object-fit: cover;
    object-position: bottom;
    width:80vw;
    height: 25vh;
    position: absolute;
    margin: 0 auto;
    border-radius: 1rem;
}
.profile-grade{
    color:rgb(219, 219, 219);
    font-size: var(--h5);
    font-weight: var(--fw-light);
}
.profile-info{
    display: flex;
    width:40vw;
    height:10rem;
    margin-top:20rem;
    margin-right: 25vw;
    position: relative;
}
.profile-img{
    width:15rem;
    height: 15rem;
    border-radius: 50%;
    object-fit: cover;
}
.profile-name{
    color: var(--white);
    font-size: var(--h4);
    font-weight: var(--fw-bold);
    margin-top: 5rem;
    margin-left: 2vw;
}
.current-anime{
    width:35%;
    height:30vh;
    margin-right:5%;
    margin-top:8vh;
    border-radius:1rem;
}
.anime-info-labels{
    display: flex;
    justify-content: center;
}
.profile-stats{
    width:25%;
    height:30vh;
    margin-top:8vh;
    border-radius:1rem;
}
.favorite-anime{
    width:40%;
    height:30vh;
    margin-right:5%;
    margin-top:5vh;
    border-radius:1rem;

}
.labels{
    color: rgb(219, 219, 219);
}
.rank{
    width: 20%;
}
.title{
    width:45%;
}
.genre{
    width: 20%;
}
.favorite-genre{
    width:20%;
    height:30vh;
    margin-top:5vh;
    border-radius:1rem;
}
.middle-title{
    margin-bottom:2.5%;
    margin-left:5%;
    font-size: var(--h4);
}

/* overall best anime (gray section) */
.bestAnime{
  display: flex;
  flex-direction: row;
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
.underNav{
    width:100vw;
    height:12vh;
    display: block;
}
</style>