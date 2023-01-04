<template>
    <div id="awards">
      <div class="seasonal">
        <div class="award-container">
          <div v-for="award in awards" :key="award.category" class="award-box">
            <h1>{{award.category}}</h1>
          </div>
        </div>
        <div class="nominee-container">
          <div class="nominee-box">
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
      ]
    })
  })
  </script>
  <style>
  #awards {
    padding-top: 9vh;
  }
  .award-container {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    gap: 10rem 15rem;
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
  .nominee-box {
    color: white;
  }
  </style>