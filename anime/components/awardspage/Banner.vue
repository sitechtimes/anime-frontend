<template>
  <div id="banner">
    <span class="underNav"></span>
    <div class="banner-flex">
      <div class="banner-bg">
        <div class="banner-text">
            <h2 class="trending-text">#trending</h2>
            <h1 class="title-banner">vote for your faves anytime</h1>
            <p class="voting-description">Mission Statement and more writing yeah</p>
            <!-- <img src="" alt="Anya"> -->
        </div>
    </div>
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#banner{
  width:100vw;
  height:100vh;
}
.banner-bg{
    background-color: var(--primary);
    width:40%;
    height:55%;
    border-radius: 25px;
    display: flex;
    align-items: center;
    color:var(--white);
}
.banner-flex{
  width:80%;
  height:45%;
  display:flex;
  justify-content: center;
  align-items: center;
}
.banner-text{
  width:55%;
  height:90%;
  margin-left:10%;
  display:flex;
  justify-content: space-around;
  flex-direction: column;
  background-color: var(--secondary);
  border-radius: 25px;
}
.underNav{
  width:100vw;
  height:10rem;
  display:block;
}
</style>