<template>
  <div id="actual-voting">
    <h1 class="award-name">Award Name</h1>
    <div class="nominee-container">
      <div v-for="r1 in r" class="nominee-box" @click="select">
        <img class="image-placeholder" src="https://cdn.myanimelist.net/images/characters/4/457933.jpg" alt="">
        <h1 class="anime-title">Anime Title {{r1}}</h1>
      </div>
    </div>
    <div class="btn-container">
      <NuxtLink to="/awards"><button class="btn">Back</button></NuxtLink>
      <button class="btn" @click="vote" id="vote-btn">Vote</button>
    </div>
    <div class="popup">
      <span class="popup-close">&times</span>
      <div class="popup-content">
        <h1>You voted already.</h1>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default ({
  data: () => ({
    r: [1,2,3,4,5,6],
    selected: false,
    voted: true,
  }),
  methods: {
    select(nominee) {
      this.selected = true
      let click = nominee.target
      const boxes = Array.from(document.getElementsByClassName("nominee-box") as HTMLCollectionOf<HTMLElement>)
        boxes.forEach(box => {
          box.style.background = "#252525"
        });
      if (click.className == "nominee-box") {
        click.style.background = "var(--primary)"
      } else {
        click.parentElement.style.background = "var(--primary)"
      }
    },
    vote() {
      if (this.voted === true) {
        console.log("gfyi")
      }
      else if (this.selected === true) {
        const vote = document.getElementById("vote-btn")
        vote.style.background = "var(--primary)"
        vote.innerHTML = "Voted"
        vote.style.opacity = "50%"
        const boxes = Array.from(document.getElementsByClassName("nominee-box") as HTMLCollectionOf<HTMLElement>)
        boxes.forEach(box => {
          box.style.pointerEvents = "none"
          if (box.style.background == "rgb(37, 37, 37)") {
            box.style.opacity = "50%"
          }
        });
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
  color: var(--white);
}
.award-name {
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
  height: 12vh;
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
.btn-container {
  display: flex;
  justify-content: space-between;
  width: 20vw;
  margin: auto;
}
.btn {
  color: var(--white);
  font-size: var(--h3);
  background: none;
  border: 0.3rem solid var(--primary);
  border-radius: 0;
  width: 8vw;
  padding: 0.5rem 0;
  transition: 300ms;
}
.btn:hover {
  background: var(--primary);
}
.popup {
  background: var(--primary);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 20vh;
  width: 20vw;
  display: none;
}
.popup-close {
  font-size: var(--h2);
  margin-right: 1rem;
}
.popup-content {
  width: 100%;
  text-align: center;
}
</style>