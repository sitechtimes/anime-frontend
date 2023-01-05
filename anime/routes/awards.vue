<template>
    <div id="awards">
      <div class="seasonal">
        <div class="award-container">
          <div v-for="award in awards" :key="award.category" @click="showNominees" class="award-box">
            <h1>{{award.category}}</h1>
          </div>
        </div>
        <div class="nominee-container">
          <!-- <div v-for="n in nominees" :key="n.text" class="nominee-box">
            <h1>{{n.animes}}</h1>
          </div> -->
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
        {category: "A"},
        {category: "B"},
        {category: "C"},
        {category: "D"},
        {category: "E"},
        {category: "F"},
        {category: "G"},
        {category: "H"},
      ],
      nominees: [
        {animes: ["A1", "A2", "A3"]},
        {animes: [{title: "B1"}, {title: "B2"}, {title: "B3"}]},
        {animes: [{title: "C1"}, {title: "C2"}, {title: "C3"}]},
        {animes: [{title: "D1"}, {title: "D2"}, {title: "D3"}]},
        {animes: [{title: "E1"}, {title: "E2"}, {title: "E3"}]},
        {animes: [{title: "F1"}, {title: "F2"}, {title: "F3"}]},
        {animes: [{title: "G1"}, {title: "G2"}, {title: "G3"}]},
        {animes: [{title: "H1"}, {title: "H2"}, {title: "H3"}]},
      ]
    }),
    methods: {
      showNominees() {
        console.log(this.awards)
      }
    },
  })
  </script>
  <style>
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
    flex-direction: column;
    align-items: center;
  }
  .nominee-box {
    color: white;
    background: blue;
    text-align: center;
    padding: 1rem;
    margin-bottom: 2vh;
    width: 50%;
  }
  </style>