<template>
  <div id="banner">
    <span class="underNav"></span>
    <div class="banner-flex">
      <div class="banner-bg">
        <div class="banner-text">
            <h2 class="trending-text">#trending</h2>
            <h1 class="title-banner">vote for your <br>faves anytime</h1>
            <p class="voting-description">Mission Statement and more writing yeah</p>
            <!-- <img src="" alt="Anya"> -->
        </div>
    </div>
    <div class="banner-season">
      <h2 class="season-text">Anime of the Season</h2>
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
.banner-flex{
  width:80%;
  height:45%;
  background-color: red;
  display:flex;
  justify-content: space-around;
  align-items: center;
  margin:0 auto;
}
.banner-bg{
    background-color: var(--primary);
    width:55%;
    height:100%;
    border-radius: 25px;
    display: flex;
    align-items: center;
    color:var(--white);
}
.banner-season{
    background-color: var(--tertiary);
    width:35%;
    height:100%;
    border-radius: 25px;
    display: flex;
    align-items: center;
    color:var(--white);
}

.banner-text{
  width:55%;
  height:90%;
  margin-left:10%;
  display:flex;
  justify-content: center;
  flex-direction: column;
  background-color: var(--secondary);
  border-radius: 25px;
}
.title-banner,
.trending-text,
.voting-description{
  margin-left: 5%;
}
.title-banner{
  font-size: var(--h2);
  font-weight: var(--fw-bold);
  text-transform: uppercase;
}
.trending-text{
  font-size: var(--h4);
  letter-spacing: 1.3rem;
  text-transform: uppercase;
  font-weight: var(--fw-light);
}
.voting-description{
  font-size: var(--h5);
  font-weight: var(--fw-reg);
}
.underNav{
  width:100vw;
  height:15rem;
  display:block;
}
</style>