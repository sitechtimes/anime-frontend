<template>
<form class="form">
  <input v-model="text" placeholder="Search anime..." class="input">
  <div v-for="anime in searchResult" :key="anime.text" class="box">
    <div class="image-placeholder">insert img</div>
    <div class="info-column">
      <h1>{{anime.title}}</h1>
      <div class="info-row">
        <p class="rating">PG 13</p>
        <div>
          <!-- <p>O</p> -->
          <p>9.99</p>
        </div>
        <p>Oct 20, 1999</p>
      </div>
    </div>
  </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      animes: [
        {title: "One Punch Man"},
        {title: "Spy x Family"},
        {title: "Chainsaw Man"},
        {title: "Summertime Render"},
        ],
    }
  },
  computed: {
    searchResult() {
      if (this.text) {
        return this.animes.filter((item) => {
          return this.text.toLowerCase().split('').every(v => item.title.toLowerCase().includes(v))
        })
      }
    }
  }
}
</script>

<style scoped>
.form{
  color: rgb(219, 219, 219);
  margin: 5vw;
  width: 20vw;
}

.input {
  background: rgb(66, 66, 66);
  font-size: var(--h4);
  color: rgb(219, 219, 219);
  border: none;
  border-radius: 10px;
  outline: none;
  padding: 1rem 2rem;
  width: 100%;
}

.box {
  background: rgb(32, 19, 81);
  display: flex;
  flex-direction: row;
  padding: 1rem;
}

.image-placeholder {
  background: blue;
}

.info-column {
  margin-left: 1vw;
}

.info-row {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  font-size: (--small-text);
  gap: 1vw;
  /* margin: 10rem 0; */
}

.rating {
  width: 2.5vw;
  text-align: center;
  border: solid gray 0.15rem;
  border-radius: 5px;
}

</style>