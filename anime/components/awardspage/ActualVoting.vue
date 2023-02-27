<template>
  <div id="actual-voting">
    <h1 class="award-name">Award Name</h1>
    <div class="nominee-container">
      <div v-for="r1 in r" class="nominee-box" @click="f">
        <img class="image-placeholder" src="https://cdn.myanimelist.net/images/characters/4/457933.jpg" alt="">
        <h1 class="anime-title">Anime Title {{r1}}</h1>
      </div>
    </div>
    <NuxtLink to="/awards">Back</NuxtLink>
    <button>Vote</button>
  </div>
</template>
  
<script lang="ts">
export default ({
  data: () => ({
    r: [1,2,3,4,5,6]
  }),
  methods: {
    f(e) {
      let click = e.target
      if (click.className == "nominee-box") {
        const boxes = Array.from(document.getElementsByClassName("nominee-box") as HTMLCollectionOf<HTMLElement>)
        boxes.forEach(box => {
          box.style.background = "#252525"
        });
        click.style.background = "var(--primary)"
      }
    }
  }
})
</script>
  
<style scoped>
#actual-voting {
  padding-top: 9vh;
  width: 70vw;
  margin: auto;
}
.award-name {
  color: var(--white);
  background: var(--secondary);
  font-size: var(--h1);
  text-align: center;
  margin-top: 7rem;
}
.nominee-container {
  margin-top: 5vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.nominee-box {
  padding: 0rem;
  width: 33vw;
  height: 15vh;
  color: white;
  display: flex;
  flex-direction: row;
  background: #252525;
  margin-bottom: 3rem;
  transition: 100ms;
}
.nominee-box:hover {
  outline: solid 4px var(--primary);
}
.image-placeholder {
  height: 100%;
  aspect-ratio: 3/4;
  object-fit: cover;
}
.anime-title {
  font-size: var(--h3);
  margin: 1rem 2rem;
}
</style>