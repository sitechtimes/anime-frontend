<template>
  <div id="profile">
    <span class="underNav"></span>
    <div class="top">
        <div class="banner">
    </div>
    <div class="profile-info">
        <div class="profile-img">
        </div>
        <div class="profile-name"></div>
    </div>
</div>
  </div>
</template>

<script lang="ts">
export default {

}
</script>

<style scoped>
.top{
    display: flex;
    justify-content: center;
}
.banner{
    background-color: blue;
    width:80vw;
    height: 25vh;
    position: absolute;
    margin: 0 auto;
}
.profile-info{
    right:30%;
}
.profile-img{
    background-color: red;
    width:15rem;
    height: 15rem;
    margin-top:20rem;
    border-radius: 50%;
    position: relative;
}
.underNav{
    width:100vw;
    height:12vh;
    display: block;
}
</style>