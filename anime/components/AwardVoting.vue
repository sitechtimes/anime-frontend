<template>
    <div id="award-voting">
      <div class="seasonal">
        <div v-if="displayAwards" class="award-container">
          <div v-for="(award, index) in awards" :key="award.category" @click="showNominees" class="award-box">
            <h1>{{award.category}}</h1>
            <p class="hide">{{index}}</p>
          </div>
        </div>
        <div v-else class="voting">
          <h1 id="award-name">Award Name</h1>
          <div class="nominee-container">
            <div v-for="award in awards[index].nominees" :key="award.title" class="nominee-box">
              <img class="image-placeholder" src="https://cdn.myanimelist.net/images/characters/4/457933.jpg" alt="">
              <h3>{{award.title}}</h3>
            </div>
          </div>
          <div class="btn-container">
            <div v-if="selecting">
              <button @click="vote" class="btn">Vote</button>
              <button @click="back" class="btn">Back</button>
            </div>
            <div v-else>
              <button class="btn">Confirm</button>
              <button @click="cancel" class="btn">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  export default ({
    name: 'award-voting',
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
      displayAwards: true,
      selecting: true,
    }),
    methods: {
      showNominees(selected) {
        this.index = selected.target.lastElementChild.innerHTML
        this.displayAwards = false
      },
      back() {
        this.displayAwards = true
      },
      vote() {
        this.selecting = false
        // make this actually work
      },
      cancel() {
        this.selecting = true
      }
    },
    updated() {
      if (this.displayAwards === false) {
        const awardName = document.getElementById('award-name')
        awardName.innerHTML = this.awards[this.index].category
      }
    }
  })
  </script>
  <style scoped>
  #award-voting {
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
    background: var(--primary);
    color: var(--white);
    height: 15vh;
    width: 15vw;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .voting {
    display: flex;
    flex-direction: column;
    gap: 3rem;
  }
  #award-name {
    color: var(--white);
    background: var(--secondary);
    font-size: var(--h1);
    text-align: center;
    margin-top: 3rem;
  }
  .nominee-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5rem;
  }
  .nominee-box {
    color: var(--white);
    background: var(--primary);
    font-size: var(--h4);
    padding: 2rem;
    width: 15vw;
    height: 40vh;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }
  .award-box:hover, .nominee-box:hover {
    background: #b4372e;
    /* find better color */
  }
  .nominee-box:active {
    background: black;
    /* find way to focus on div */
  }
  .image-placeholder {
  height: 70%;
  aspect-ratio: 3/4;
  object-fit: cover;
  }
  .btn-container {
    display: flex;
    justify-content: center;
  }
  .btn {
    margin: 0 2rem;
  }
  .hide {
    display: none;
  }
</style>