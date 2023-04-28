<template>
  <div id="actual-voting">
    <h1 class="award-name">{{ awardName }}</h1>
    <div class="nominee-container">
      <div v-for="anime in animes" :key="anime" class="nominee-box" @click="select">
        <img class="image-placeholder" src="https://cdn.myanimelist.net/images/characters/4/457933.jpg" alt="">
        <h1 class="anime-title">{{anime.node.animeName}}</h1>
      </div>
    </div>
    <div class="btn-container">
      <NuxtLink to="/awards"><button class="btn">Back</button></NuxtLink>
      <button class="btn" @click="vote" id="vote-btn">Vote</button>
    </div>
    <div id="popup">
      <div class="popup-content">
        <span class="popup-close" @click="close">&times</span>
        <div class="popup-msg">
          <h1>You voted already.</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useUserStore } from '~~/stores/userStore'
export default ({
  data: () => ({
    r: [1,2,3,4,5,6],
    selected: false,
    // voted: true,
    animes: [],
    nominee: ""

  }),
  setup() {
    const userStore = useUserStore()

    return {
      userStore
    }
  },
  props: {
    awardName: {
      type: String
    }
  },
  mounted() {
    console.log(this.awardName)
    if (this.awardName?.includes("Character")) {
      console.log("character award")
    } else {
      console.log("anime award")
      this.getAnimes()

    }
  },
  methods: {
    async getAnimes() {
      try {
        const endpoint = "http://127.0.0.1:8000/graphql/";
				const headers = {
					"content-type": "application/json",
					Authorization: `Bearer ${this.userStore.token}`,
				};

				const graphqlQuery = {
					query: `{
					  allAnime {
    edges{
      node{
        animeName
      }
    }
  }
							}`,
					variables: {},
				};

				const options = {
					method: "POST",
					headers: headers,
					body: JSON.stringify(graphqlQuery),
				};

				const response = await fetch(endpoint, options);
				const animeData = await response.json();
        const animeArray = animeData.data.allAnime.edges.splice(1,6)
        this.animes = animeArray
        console.log(this.animes[0])
      } catch (error) {
        console.log(error)
      }
    },
    select(nominee) {
      this.selected = true
      let click = nominee.target
      // console.log(click.outerText)
      this.nominee = click.outerText
      
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
        const msg = document.getElementById("popup")
        msg.style.display = "flex"
      } else if (this.selected === true) {
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
        console.log(this.nominee)
        this.voteMutation()
      }
    },
    async voteMutation() {
      try {
        const endpoint = "http://127.0.0.1:8000/graphql/";
				const headers = {
					"Content-Type": "application/json",
					Authorization: `Bearer ${this.userStore.token}`,
				};

				const graphqlQuery = {
					query: `mutation{
   addAnimeVote(userData: {userId: "${this.userStore.userID}"}, animeData: {animeName: "${this.nominee}"}, awardName: "${this.awardName}") {
       animeAward{
           voteCount,
           anime{
               animeName
           },
           allUsers{
               edges{
                   node{
                       user{
                           username
                       }
                   }
               }
           }


       }
   }
}`,
					variables: {},
				};

				const options = {
					method: "POST",
					headers: headers,
					body: JSON.stringify(graphqlQuery),
				};

				const response = await fetch(endpoint, options);
				const voteData = await response.json();

        console.log(voteData)
      } catch (error) {
        console.log(error)
      }
    },
    close() {
      const msg = document.getElementById("popup")
      msg.style.display = "none"
    }
  }
})
</script>
  
<style scoped>
#actual-voting {
  padding-top: 9vh;
  width: 70vw;
  margin: auto;
  margin-bottom: 10vh;
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
#popup {
  background: rgb(0,0,0,0.6);
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: none;
}
.popup-content {
  background: var(--primary);
  flex-direction: column;
  align-items: flex-end;
  height: 20rem;
  width: 40rem;
  display: flex;
  margin: auto;
}
.popup-close {
  font-size: var(--h2);
  margin-right: 1rem;
}
.popup-msg {
  width: 100%;
  text-align: center;
}

@media screen and (max-width: 1024px) {
  .award-name {
    margin-top: 5rem;
    font-size: var(--h2);
  }
  .nominee-box {
    height: 10rem;
  }
  .anime-title {
    font-size: var(--h4);
  }
  .btn-container {
    width: 30vw;
  }
  .btn {
    width: 12vw;
    font-size: var(--h4);
  }
}

@media screen and (max-width: 768px) {
  .nominee-box {
    width: 100%;
  }
  .btn-container {
    width: 40vw;
  }
  .btn {
    width: 15vw;
  }
}

@media screen and (max-width: 425px) {
  #actual-voting {
    padding-top: 0;
    width: 80vw;
  }
  .nominee-box {
    height: 8rem;
  }
  .btn-container {
    width: 80%;
  }
  .btn {
    width: 30vw;
  }
  .popup-content {
    width: 30rem;
  }
}
</style>