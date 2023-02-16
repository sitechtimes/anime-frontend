<template>
  <div id="award-voting">
    <div class="award-container">
      <NuxtLink to="/vote" @click="showNominees" v-for="(award, index) in awards" :key="award.category" class="award-box">
        <h1>{{award.category}}</h1>
        <p class="hide">{{index}}</p>
      </NuxtLink>
    </div>
  </div>
</template>
  
<script lang="ts">
export default ({
  data: () => ({
    awards: [
      {category: "Best Anime", nominees: [{title: "A1"}, {title: "A2"}, {title: "A3"}, {title: "A4"}]},
      {category: "B", nominees: [{title: "B1"}, {title: "B2"}, {title: "B3"}]},
      {category: "C", nominees: [{title: "C1"}, {title: "C2"}, {title: "C3"}]},
      {category: "D", nominees: [{title: "D1"}, {title: "D2"}, {title: "D3"}]},
      {category: "E", nominees: [{title: "E1"}, {title: "E2"}, {title: "E3"}]},
      {category: "F", nominees: [{title: "F1"}, {title: "F2"}, {title: "F3"}]},
      {category: "G", nominees: [{title: "G1"}, {title: "G2"}, {title: "G3"}]},
      {category: "H", nominees: [{title: "H1"}, {title: "H2"}, {title: "H3"}]},
    ],
    index: 0,
  }),
  methods: {
    showNominees(selected) {
      this.index = selected.target.lastElementChild.innerHTML
      let f = this.awards[this.index]
      console.log(f)
    }
  }
})
</script>
  
<style scoped>
#award-voting {
  margin: auto;
  width: 80vw;
  margin-bottom: 30vh;
}
.award-container {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 6rem 8rem;
}
.award-box {
  background: var(--primary);
  color: var(--white);
  height: 15vh;
  width: 15vw;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0s;
}
.award-box:hover {
  background: #b4372e;
}
.hide {
  display: none;
}
</style>