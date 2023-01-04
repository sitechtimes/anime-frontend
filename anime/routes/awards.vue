<template>
    <div id="awards">
      <div class="seasonal">
        <div class="award-container">
          <div v-for="award in awards" :key="award.category" @click="showNominees" class="award-box">
            <h1>{{award.category}}</h1>
          </div>
        </div>
        <div class="nominee-container">
          <div v-for="award in awards" :key="award.category" class="nominee-box">
            <h1>hduehd</h1>
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
        {category: "A", animes: [{title: "1"}, {title: "1"}, {title: "1"}]},
        {category: "B"},
        {category: "C"},
        {category: "D"},
        {category: "E"},
        {category: "F"},
        {category: "G"},
        {category: "H"},
      ],
    }),
    methods: {
      showNominees() {
        console.log("f")
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