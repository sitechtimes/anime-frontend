<template>
    <div id="awards">
      <div class="seasonal">
        <div class="award-container">
          <div v-for="award in awards" :key="award.category" @click="showNominees" class="award-box">
            <h1>{{award.category}}</h1>
          </div>
        </div>
        <div v-for="award in awards" :key="award.category" class="nominee-container">
          <div v-for="s in award.nominees" :key="s.title" class="nominee-box">{{s.title}}</div>
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
        // {category: "C"},
        // {category: "D"},
        // {category: "E"},
        // {category: "F"},
        // {category: "G"},
        // {category: "H"},
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