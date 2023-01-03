<template>
    <div id="awards">
      <div class="seasonal">
        <div v-for="award in awards" :key="award.category" class="award-box">
          <h1>{{award.category}}</h1>
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
        {category: "C"},
        {category: "C"},
        {category: "C"},
      ]
    })
  })
  </script>
  <style>
  #awards {
    padding-top: 9vh;
  }
  .seasonal {
    display: flex;
  }
  .award-box {
    background: red;
    color: white;
    height: 10vh;
    width: 10vw;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>