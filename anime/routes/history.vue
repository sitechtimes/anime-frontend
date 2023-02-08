<template>
 <div id="history">
  <button>TEST</button>
 </div>
</template>

<script setup>
import { useUserStore } from '~~/stores/userStore';

const userStore = useUserStore()

console.log(userStore.token)

const endpoint = "http://127.0.0.1:8000/graphql/";
const headers = {
 "content-type": "application/json",
 Authorization:
  `Bearer ${userStore.token}`
};
const graphqlQuery = {
 query: `query {
   allAnime{
   edges{
     node{
         id,
       animeName,
       episodes,
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
const data = await response.json();
const myJSON = JSON.stringify(data);
console.log(myJSON);

</script>
<style>
button {
 margin: 30rem;
}
</style>
