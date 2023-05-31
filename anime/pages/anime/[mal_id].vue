<template>
    <div>
       <InfoComp
       :animeName="animeName"
       :imageUrl="imageURL"
       :episodes="episodes"
       :status="status"
       :aired="aired"
       :mediaType="mediaType"
       :synopsis="synopsis"
       :studios="studios"
       :genres="genres"
       :characters="characters"
       :mal_id="mal_id"
       :avgRating="rating"
       class="info-comp"
       />
       <InfoMobile
       :animeName="animeName"
       :imageUrl="imageURL"
       :episodes="episodes"
       :status="status"
       :aired="aired"
       :mediaType="mediaType"
       :synopsis="synopsis"
       :studios="studios"
       :genres="genres"
       :characters="characters"
       :mal_id="mal_id"
       :avgRating="rating"
       class="info-mobile"
       />
    </div>
</template>

<script lang="ts" setup>
import InfoComp from '../../components/InfoComp.vue';
import { useUserStore } from '~~/stores/userStore'
import { onMounted, ref } from 'vue';


  const route = useRoute()
  let mal_id = route.params.mal_id

  
  const userStore = useUserStore()

  let imageURL = ref("")
  let mediaType = ref("")
  let episodes = ref(0)
  let status = ref("")
  let aired = ref("")
  let studios = ref([])
  let genres = ref([])
  let animeName = ref("")
  let synopsis = ref("")
  let characters = ref([])
  let rating = ref(0)

async function getAnime() {
  try {
        const endpoint = "http://127.0.0.1:8000/graphql/";
				const headers = {
					"content-type": "application/json",
					Authorization: `Bearer ${userStore.token}`,
				};
				const graphqlQuery = {
					query: ` {
 allAnime(malId: ${mal_id}){
  edges{
    node{
      animeName,
      avgRating,
      imageUrl,
      mediaType,
      episodes,
      status,
      summary,
      animeCharacters{
          edges{
            node{
              characterName,
              imageUrl
            }
          }
        },
      animeStudio{
        edges{
          node{
            studio
          }
        }
      }
      airedFrom,
      animeGenre{
        edges{
          node{
            genre
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
				const animeDataNode = await response.json();
        const animeData = animeDataNode.data.allAnime.edges[0].node

        
        imageURL.value = animeData.imageUrl
        mediaType.value = animeData.mediaType
        episodes.value = animeData.episodes
        status.value = animeData.status
        aired.value = animeData.airedFrom
        animeName.value = animeData.animeName
        synopsis.value = animeData.summary
        genres.value = animeData.animeGenre.edges
        studios.value = animeData.animeStudio.edges
        characters.value = animeData.animeCharacters.edges
        rating.value = Number(animeData.avgRating)
        




      } catch (error) {
        alert(error)
      }
}

onMounted(() => {
  getAnime()

})
</script>

<style scoped>
.info-mobile {
  display: none;
}

@media screen and (max-width: 915px) {
  .info-comp {
    display: none;
  }
  .info-mobile {
    display: block;
  }
}
</style>