<template>
<form class="form">
  <input v-model="text" placeholder="Search anime..." class="input">
  <div v-for="anime in animes" :key="anime.text" class="box">
    <div class="image-placeholder">insert img here</div>
    <div class="info-column">
      <h1>The title</h1>
      <div class="info-row">
        <p>PG 13</p>
        <p>O 9.99</p>
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
        {title: "hfofhaf"},
        ],
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
  background: red;
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
  font-size: (--small-text);
}

</style>