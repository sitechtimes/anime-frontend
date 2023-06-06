<template>
  <div id="actual-voting">
    <h3 class="award-name">{{ awardName }}</h3>
    <!-- <SearchBar/> -->
    <form>
      <input
        v-model="text"
        placeholder="Search nominee..."
        spellcheck="false"
        class="input"
        @keyup="searchAnime(text)"
      />
    </form>

    <div v-if="isAnime" class="nominee-container">
      <div
        v-if="animeSearching"
        v-for="anime in animes"
        :key="anime.id"
        ref="nomineeBox"
        class="nominee-box"
        @click="select"
      >
        <img class="image-placeholder" :src="anime.node.imageUrl" alt="" />
        <h5 class="anime-title">{{ anime.node.animeName }}</h5>
      </div>
      <div
        v-else
        v-for="anime in filteredAnime"
        :key="anime"
        ref="nomineeBox"
        class="nominee-box"
        @click="select"
      >
        <img class="image-placeholder" :src="anime.image_url" alt="" />
        <h1 class="anime-title">{{ anime.anime_name }}</h1>
      </div>
    </div>

    <div v-if="isCharacter" class="nominee-container">
      <div
        v-if="characterSearching"
        v-for="character in characters"
        :key="character.id"
        ref="nomineeBox"
        class="nominee-box"
        @click="select"
      >
        <img class="image-placeholder" :src="character.imageUrl" alt="" />
        <h1 class="anime-title">{{ character.characterName }}</h1>
      </div>
      <div
        v-else
        v-for="character in filteredCharacters"
        :key="character"
        ref="nomineeBox"
        class="nominee-box"
        @click="select"
      >
        <img class="image-placeholder" :src="character.imageUrl" alt="" />
        <h5 class="anime-title">{{ character.characterName }}</h5>
      </div>
    </div>
    <div class="btn-container">
      <NuxtLink to="/awards"><button class="btn">Back</button></NuxtLink>
      <button class="btn" @click="voteMutation" id="vote-btn">Vote</button>
    </div>
    <!-- <div class="popup" ref="popup">
      <div class="popup-content">
        <span class="popup-close" @click="close">&times</span>
        <div class="popup-msg">
          <h1>You voted already.</h1>
        </div>
      </div>
    </div> -->
  </div>
</template>



<script setup lang="ts">
import SearchBar from "../navbar/SearchBar.vue";
import { useUserStore } from "~~/stores/userStore";
import { ref, onMounted } from "vue";

let selected = ref(false);
let animeSearching = ref(true);
let characterSearching = ref(true);
let animes = ref([] as any);
let characters = ref([] as any);
let allCharacters = ref([] as any);
let nominee = ref("");
let error = ref("");
let isCharacter = ref(false);
let isAnime = ref(false);
let text = ref("");
let filteredAnime = ref([] as any);
let filteredCharacters = ref([] as any);
const nomineeBox = ref(null);

const userStore = useUserStore();

const props = defineProps({
  awardName: String,
});

function searchAnime(text: String) {
  if (isAnime.value) {
    animeSearching.value = false;
    filteredAnime.value = userStore.allAnime.filter((anime) =>
      anime.anime_name.toLowerCase().includes(text.toLowerCase())
    );
    filteredAnime.value = filteredAnime.value.slice(0,10)
  } else if (isCharacter.value) {
    characterSearching.value = false;
    const addCharactersArray = allCharacters.value.concat(characters.value);

    filteredCharacters.value = addCharactersArray.filter((character) =>
      character.characterName.toLowerCase().includes(text.toLowerCase())
    );
    filteredCharacters.value = filteredCharacters.value.slice(0, 10)
  }
}

async function getAnimes() {
  try {
    const endpoint = "https://anime-backend-cuv2.onrender.com/graphql/";
    const headers = {
      "content-type": "application/json",
      Authorization: `Bearer ${userStore.token}`,
    };
    const graphqlQuery = {
      query: `{
					  allAnime {
    edges{
      node{
        animeName,
        imageUrl
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
    const animeArray = animeData.data.allAnime.edges.splice(1, 6);
    animes.value = animeArray;
  } catch (error) {
    alert(error);
  }
}

async function getCharacters() {
  try {
    const endpoint = "https://anime-backend-cuv2.onrender.com/graphql/";
    const headers = {
      "content-type": "application/json",
      Authorization: `Bearer ${userStore.token}`,
    };
    const graphqlQuery = {
      query: ` {
  allCharacters{
    characterName,
    imageUrl
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
    const characterData = await response.json();

    allCharacters.value = characterData.data.allCharacters;
    const characterArray = characterData.data.allCharacters.splice(1, 6);

    characters.value = characterArray;
  } catch (error) {
    alert(error);
  }
}

function select(anime: String) {
  selected.value = true;
  let click = anime.target;
  nominee.value = click.outerText;

  nomineeBox.value.forEach((box) => {
    box.style.background = "#252525";
  });
  if (click.className == "nominee-box") {
    click.style.background = "var(--primary)";
  } else {
    click.parentElement.style.background = "var(--primary)";
  }
}

async function voteMutation() {
  if (isAnime.value) {
    try {
      const endpoint = "https://anime-backend-cuv2.onrender.com/graphql/";
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userStore.token}`,
      };
      const graphqlQuery = {
        query: `mutation{
addAnimeVote(userData: {userId: "${userStore.userID}"}, animeData: {animeName: "${nominee.value}"}, awardName: "${props.awardName}") {
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


      if (voteData.data.addAnimeVote == null) {
        return alert(voteData.errors[0].message)
      } else {
        alert("You have voted")
      }
    } catch (error) {
      alert(error);
    }
  } else if (isCharacter.value) {
    try {
      const endpoint = "https://anime-backend-cuv2.onrender.com/graphql/";
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userStore.token}`,
      };
      const graphqlQuery = {
        query: `mutation{
addCharacterVote(userData: {userId: "${userStore.userID}"}, characterName:"${nominee.value}", awardName: "${props.awardName}") {
characterAward {
award {
awardName
},
voteCount,

}
},


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

      // if (!voteData.errors) {
      //   return alert("You have voted")
      // } else {
      //   return alert(voteData.errors[0].message);
      // }
      if (voteData.data.addCharacterVote == null) {
        return alert(voteData.errors[0].message)
      } else {
        alert("You have voted")
      }

    } catch (error) {
      // if (error == "")
      // if (error != "user already voted for this award" || error != "Anime matching query does not exist." || error != "TypeError: voteData.errors is undefined") {
      //   alert("You have voted")
      // }
      // console.log(error)
      alert(error);
    }
  }
}

// function vote() {
//   voteMutation();

  // if (this.voted === true) {
  //   const msg = document.getElementById("popup")
  //   msg.style.display = "flex"
  // } else if (this.selected === true) {
  //   this.voteMutation()
  //   const vote = document.getElementById("vote-btn")
  //   vote.style.background = "var(--primary)"
  //   vote.innerHTML = "Voted"
  //   vote.style.opacity = "50%"

  //   const boxes = Array.from(document.getElementsByClassName("nominee-box") as HTMLCollectionOf<HTMLElement>)
  //   boxes.forEach(box => {
  //     box.style.pointerEvents = "none"
  //     if (box.style.background == "rgb(37, 37, 37)") {
  //       box.style.opacity = "50%"
  //     }
  //   });

  // }
// }

// function close() {
//   const msg = document.getElementById("popup");
//   msg!.style.display = "none";
// }

onMounted(() => {
  if (props.awardName?.includes("Character")) {
    isCharacter.value = true;
    isAnime.value = false;
    getCharacters();
  } else {
    isCharacter.value = false;
    isAnime.value = true;

    getAnimes();
  }
});
</script>
<!-- 
<script lang="ts">
import { useUserStore } from '~~/stores/userStore'
export default ({
  data: () => ({
    r: [1,2,3,4,5,6],
    selected: false,
    // voted: true,
    animes: [],
    characters: [],
    nominee: "",
    error: "",
    isCharacter: false,
    isAnime: false

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

    if (this.awardName?.includes("Character")) {

      this.isCharacter = true
      this.isAnime = false
      this.getCharacters()
    } else {

      this.isCharacter = false
      this.isAnime = true
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

      } catch (error) {

      }
    },
    async getCharacters() {
      try {
        const endpoint = "http://127.0.0.1:8000/graphql/";
				const headers = {
					"content-type": "application/json",
					Authorization: `Bearer ${this.userStore.token}`,
				};

				const graphqlQuery = {
					query: ` {
  allCharacters{
    edges{
      node{
        characterName
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
				const characterData = await response.json();
        const characterArray = characterData.data.allCharacters.edges.splice(1,6)
        this.characters = characterArray

      } catch (error) {

      }
    },
    select(nominee) {
      this.selected = true
      let click = nominee.target

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
        const msg = this.$refs.popup
        msg.style.display = "flex"
      } else if (this.selected === true) {
        this.voteMutation()
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
    },
    async voteMutation() {
      if (this.isAnime){
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

        if (voteData.errors[0].message) {
          return alert(voteData.errors[0].message)
         
        }
      } catch (error) {

      }
      } else if(this.isCharacter) {
        try {
        const endpoint = "http://127.0.0.1:8000/graphql/";
				const headers = {
					"Content-Type": "application/json",
					Authorization: `Bearer ${this.userStore.token}`,
				};

				const graphqlQuery = {
					query: `mutation{
   addCharacterVote(userData: {userId: "${this.userStore.userID}"}, characterName:"${this.nominee}", awardName: "${this.awardName}") {
	characterAward {
    award {
      awardName
    },
    voteCount,
    
  }
  },
    
    
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
        
        if (voteData.errors[0].message) {
          return alert(voteData.errors[0].message)
         
        }
      } catch (error) {

      }
      }
     
    },
    close() {
      const msg = document.getElementById("popup")
      msg!.style.display = "none"
    }
  },
  mounted() {
    console.log(this.$refs.nominees)
  }
})
</script> -->
  
<style scoped>
#actual-voting {
  padding-top: 9vh;
  width: 75vw;
  margin: auto;
  margin-bottom: 10rem;
  color: var(--white);
}
.award-name {
  background: var(--secondary);
  font-size: var(--h1);
  text-align: center;
  margin-top: 7rem;
  border-radius: 5rem;
}
.input {
  color: var(--search-text);
  font-size: var(--h4);
  background-color: var(--search-bg);
  border-radius: 1rem;
  border: none;
  outline: none;
  padding: 1rem 2rem;
  margin: 3rem 0 4rem;
  width: 40%;
}
.nominee-container {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 3rem;
}
.nominee-box {
  height: 12rem;
  display: flex;
  flex-direction: row;
  background: var(--bg-secondary);
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
  height: fit-content;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
	-webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.btn-container {
  margin-top: 5rem;
  width: 100%;
  display: flex;
  justify-content: center;
  column-gap: 5rem;
}
.btn {
  color: var(--white);
  font-size: var(--h3);
  font-weight: var(--fw-reg);
  background: none;
  border: 0.3rem solid var(--primary);
  border-radius: 1rem;
  padding: 0.5rem 4rem;
  transition: 300ms;
}
.btn:hover {
  background: var(--primary);
}

/* #popup {
  background: rgb(0, 0, 0, 0.6);
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
} */

/* .search-bar {
  margin-top: 2rem;
} */

@media screen and (max-width: 1440px) {
  #actual-voting {
    width: 80vw;
  }
  .award-name {
    font-size: var(--h2);
  }
  .nominee-box {
    height: 10rem;
  }
  .anime-title, .btn {
    font-size: var(--h4);
  }
}

@media screen and (max-width: 1024px) {
  .input {
    margin: 2rem 0 3rem;
    padding: 0.5rem 1rem;
    font-size: var(--h5);
  }
  .nominee-container {
    gap: 2rem;
  }
  .btn-container {
    margin-top: 2rem;
  }
}

@media screen and (max-width: 767px) {
  #actual-voting {
    padding-top: 5vh;
  }
  .award-name {
    font-size: var(--h3);
    margin-top: 0;
  }
  .input {
    width: 100%;
  }
  .nominee-container {
    grid-template-columns: repeat(1, minmax(0, 1fr));    
  }
  .nominee-box {
    height: 8rem;
  }
  .anime-title, .btn {
    font-size: var(--h5);
  }
}

@media screen and (max-width: 375px) {
  .btn-container {
    column-gap: 0;
    justify-content: space-between;
  }
  .btn {
    padding: 0.5rem 3.5rem;
  }
}
</style>