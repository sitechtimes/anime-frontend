<template>
    <div id="profile">
        <div class="profile-top">
            <img
                class="banner"
                src="https://i.pinimg.com/originals/e8/56/45/e856453f7f9b8c29bd73e51fc71813db.jpg"
                alt=""
            />
            <div class="profile-info">
                <img
                    class="profile-img"
                    src="https://th.bing.com/th/id/OIP.5Xv2gQmaNhcCJVB0E6zuwgHaEK?pid=ImgDet&rs=1"
                    alt="profile picture"
                />
                <div class="profile-userinfo">
                    <h3 class="profile-id">{{ firstName }} {{ lastName }}</h3>
                    <h3 class="profile-grade">{{ emailDOE }}</h3>

                    <!-- <p class="profile-grade">Senior Class of 2023</p> -->
                    <!-- <p class="profile-grade">Date Started: 01/19/2023</p> -->
                </div>
            </div>
        </div>
        <div class="profile-bottom">
            <ProfileTabsWrapper>
                <ProfileTab title="Watchlist" class="tab-container">
                    <div class="tab-header">
                        <h3 class="tab-title">Watchlist</h3>
                        <h3 class="tab-logo">Technime</h3>
                    </div>
                    <div class="tab-list">
                        <ProfileAnimeList
                            v-for="node in watchlist"
                            :key="node.node.anime.malId"
                            :img="node.node.anime.imageUrl"
                            :title="node.node.anime.animeName"
                            :malid="node.node.anime.malId"
                        />
                    </div>
                </ProfileTab>
                <ProfileTab title="Favorites" class="tab-container">
                    <div class="tab-header">
                        <h3 class="tab-title">Currently Watching</h3>
                        <h3 class="tab-logo">Technime</h3>
                    </div>
                    <div class="tab-list">
                        <ProfileAnimeList
                            v-for="node in currentlyAnimes"
                            :key="node.node.anime.malId"
                            :img="node.node.anime.imageUrl"
                            :title="node.node.anime.animeName"
                            :malid="node.node.anime.malId"
                        />
                    </div>
                </ProfileTab>
                <ProfileTab title="Rated" class="tab-container">
                    <div class="tab-header">
                        <h3 class="tab-title">Voted Animes/Characters</h3>
                        <h3 class="tab-logo">Technime</h3>
                    </div>
                    <div class="tab-list">
                        <ProfileVotedAnimeList
                            v-for="node in votedAnimes"
                            :key="node.node.anime.malId"
                            :img="node.node.anime.imageUrl"
                            :title="node.node.anime.animeName"
                            :awardName="node.node.award.awardName"
                            :date="node.node.award.date"
                            :malid="node.node.anime.malId"
                        />
                        <ProfileVotedAnimeList
                            v-for="node in votedCharacters"
                            :key="node.node.character.characterName"
                            :img="node.node.character.imageUrl"
                            :title="node.node.character.characterName"
                            :awardName="node.node.award.awardName"
                            :date="node.node.award.date"
                        />
                    </div>
                </ProfileTab>
            </ProfileTabsWrapper>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useUserStore } from "~~/stores/userStore";
import VotedAnimeList from "~~/components/profile/VotedAnimeList.vue";
import { ref, onMounted } from "vue" 

const userStore = useUserStore();

const firstName = userStore.first_name;
const Admin = userStore.admin_status;
const lastName = userStore.last_name;
const emailDOE = userStore.email;
const currentlyAnimes = ref([])
const watchlist = ref([])
const votedAnimes = ref([])
const votedCharacters = ref([])

console.log(userStore.isAdmin)
async function getUserProfile() {
    try {
        const endpoint = "https://anime-backend-cuv2.onrender.com/graphql/";
				const headers = {
					"content-type": "application/json",
					Authorization: `Bearer ${userStore.token}`,
				};

				const graphqlQuery = {
					query: `
query{
  userAnimeData(id:${userStore.userID}) {
    userAnime{
      edges {
        node{
          anime{
            animeName,
            imageUrl,
      malId
          },
          watchingStatus
          rating
        }
      },
      
    },
    userVotedCharacters{
      edges {
        node{
          award{
            awardName,

          },
          character {
            characterName,
            imageUrl
          }
        },
        
      },
      
    }
    ,
    userVotedAnimes{
      edges{
        node{
          award{
            awardName,

          }
            ,
          anime{
            animeName,
            imageUrl,
            malId
          }
        },
        
      },
      
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
				const userData = await response.json();


                watchlist.value = userData.data.userAnimeData.userAnime.edges.filter(node => 
                // console.log(node.node.watchingStatus)
                    node.node.watchingStatus == "WATCHLIST"
                )
                currentlyAnimes.value = userData.data.userAnimeData.userAnime.edges.filter(node => 
                // console.log(node.node.watchingStatus)
                    node.node.watchingStatus == "CURRENTLY_WATCHING"
                )

                votedAnimes.value = userData.data.userAnimeData.userVotedAnimes.edges
                votedCharacters.value = userData.data.userAnimeData.userVotedCharacters.edges
                console.log(currentlyAnimes.value, votedAnimes.value, votedCharacters.value)

    } catch (error) {
        alert(error)
    }
}


onMounted(() => {
    getUserProfile()
})


</script>

<style scoped>
#profile {
    width: 80vw;
    margin: auto;
    padding-top: 8rem;
    display: flex;
    flex-direction: column;
}
.profile-top {
    margin-top: 5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.banner {
    width: 100%;
    height: 25vh;
    object-fit: cover;
    object-position: bottom;
    border-radius: 1rem;
}
.profile-info {
    display: flex;
    margin-top: -4rem;
    width: 80%;
}
.profile-img {
    border-radius: 50%;
    width: 15rem;
    height: 15rem;
    object-fit: cover;
}
.profile-userinfo {
    color: var(--white);
    font-size: var(--h4);
    margin: 5rem 0 0 3rem;
}
.profile-id, .profile-grade {
    font-weight: var(--fw-reg);
}
.profile-bottom {
    margin: 7rem 0;
}
.tab-container {
    background: var(--tertiary);
    flex: 1;
    border-radius: 0 1rem 1rem 1rem;
    padding: 3rem 4rem;
    display: flex;
    flex-direction: column;
    height: 50rem;
}
.tab-header {
    display: flex;
    justify-content: space-between;
    font-size: var(--h3);
    color: var(--white);
}
.tab-logo {
    color: var(--secondary);
}
.tab-list {
    margin-top: 2rem;
    padding-right: 2rem;
    flex: 1;
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    column-gap: 2rem;
    row-gap: 3rem;
    overflow-y: scroll;
}

@media screen and (max-width: 1200px) {
    #profile {
        width: 85vw;
    }
    .banner {
        height: 20vh;
    }
    .tab-list {
        grid-template-columns: repeat(5, minmax(0, 1fr));
    }
}

@media screen and (max-width: 1024px) {
    .profile-userinfo {
        font-size: var(--h5);
    }
    .tab-container {
        flex: none;
    }
    .tab-header {
        font-size: var(--h4);
    }
}

@media screen and (max-width: 767px) {
    #profile {
        padding-top: 0;
    }
    .tab-list {
        grid-template-columns: repeat(4, minmax(0, 1fr));
    }
}
</style>