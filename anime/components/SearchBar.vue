<template>
<form class="form">
  <input v-model="text" placeholder="Search anime..." class="input">
  <p v-for="anime in animes" :key="anime.text" class="box">{{anime.title}}</p>
  </form>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      animes: [
        {title: "hfofhaf"},
        {title: "hehehehe"},
        {title: "fjsaifFD"},
        {title: "fiehiewh"},
        {title: "eheheheh"},
        {title: "jioojfqe"},
        {title: "jdfiowqh"},
        ],
    }
  }
}
</script>

<style scoped>
.form{
  color: rgb(219, 219, 219);
  margin: 0;
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

</style>