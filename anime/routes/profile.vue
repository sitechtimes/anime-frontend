<template>
  <div id="profile">
    <span class="underNav"></span>
    <div class="profile-top">
        <div class="banner">
    </div>
    <div class="profile-info">
        <img class="profile-img" src="https://cdn.animenewsnetwork.com/hotlink/thumbnails/max700x700/cms/news.2/147637/001_size8.jpg" alt="profile picture">
        <div class="profile-name">
            <h2 class="profile-id">Alpha-Red</h2>
            <p class="profile-grade">Senior</p>
            <p class="profile-grade">Date Started: 01/19/2023</p>
        </div>
    </div>
</div>
<div class="profile-middle">
    <div class="current-anime">
        <h2 class="middle-title">My Current Animes</h2>
    </div>
    <div class="profile-stats"></div>
</div>
<div class="profile-bottom">
    <div class="favorite-anime">
        <h2 class="middle-title">My Favorite Animes</h2>
    </div>
    <div class="favorite-genre">
        <h2 class="middle-title">My Favorite Genres</h2>
    </div>
</div>
  </div>
</template>

<script lang="ts">
export default {

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
}

.banner{
    background-color: blue;
    width:80vw;
    height: 25vh;
    position: absolute;
    margin: 0 auto;
    border-radius: 1rem;
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
    background-color: red;
}
.profile-stats{
    width:25%;
    height:30vh;
    margin-top:8vh;
    border-radius:1rem;
    background-color: blue;
}
.favorite-anime{
    width:40%;
    height:30vh;
    margin-right:5%;
    margin-top:5vh;
    border-radius:1rem;
    background-color: purple;
}
.favorite-genre{
    width:20%;
    height:30vh;
    margin-top:5vh;
    border-radius:1rem;
    background-color: green;
}
.underNav{
    width:100vw;
    height:12vh;
    display: block;
}
</style>