<template>
    <div id="awards">
      <div class="seasonal">
        <div v-if="displayAwards" class="award-container">
          <div v-for="(award, index) in awards" :key="award.category" @click="showNominees" class="award-box">
            <h1>{{award.category}}</h1>
            <p class="hide">{{index}}</p>
          </div>
        </div>
        <div v-else>
          <h1 v-for="award in awards[index].category" :key="award.string" class="award-name">{{award}}</h1>
          <div class="nominee-container">
            <h1 v-for="award in awards[index].nominees" :key="award.title" class="nominee-box">{{award.title}}</h1>
          </div>
          <div>
            <button @click="back">Back</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  export default ({
    name: 'awards',
    components:{
  
    },
    data: () => ({
      awards: [
        {category: "A", nominees: [{title: "A1"}, {title: "A2"}, {title: "A3"}]},
        {category: "B", nominees: [{title: "B1"}, {title: "B2"}, {title: "B3"}]},
        {category: "C", nominees: [{title: "C1"}, {title: "C2"}, {title: "C3"}]},
        {category: "D", nominees: [{title: "D1"}, {title: "D2"}, {title: "D3"}]},
        {category: "E", nominees: [{title: "E1"}, {title: "E2"}, {title: "E3"}]},
        {category: "F", nominees: [{title: "F1"}, {title: "F2"}, {title: "F3"}]},
        {category: "G", nominees: [{title: "G1"}, {title: "G2"}, {title: "G3"}]},
        {category: "H", nominees: [{title: "H1"}, {title: "H2"}, {title: "H3"}]},
      ],
      index: 0,
      displayAwards: true,
    }),
    methods: {
      showNominees(selected) {
        this.index = selected.target.lastElementChild.innerHTML
        this.displayAwards = false
      },
      back() {
        this.displayAwards = true
      }
    },
  })
  </script>
  <style scoped>
  #awards {
    padding-top: 9vh;
  }
  .seasonal {
    width: 80vw;
    display: flex;
    flex-direction: column;
    margin: auto;
  }
  .award-container {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 6rem 8rem;
  }
  .award-box {
    background: red;
    color: white;
    height: 15vh;
    width: 15vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .nominee-container {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }
  .nominee-box {
    color: white;
    background: blue;
    font-size: var(--h4);
    text-align: center;
    padding: 1rem;
    margin-bottom: 2vh;
    width: 20vw;
    height: 20vh;
  }
  .hide {
    display: none;
  }
  </style>