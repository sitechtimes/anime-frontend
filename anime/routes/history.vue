<template>
 <div id="history">
  <button>TEST</button>
 </div>
</template>

<script setup>
import axios from "axios";

const endpoint = "http://127.0.0.1:8000/graphql/";
const headers = {
 "content-type": "application/json",
 Authorization:
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc1NDY4MDg1LCJpYXQiOjE2NzU0NjA4ODUsImp0aSI6ImZlYTk0Y2QyMzk4ZTRmYTA4MWUzZDEwZjJlYWIwYzUwIiwidXNlcl9pZCI6Mn0.p9Yg2j6LbQkfwmPb60bFLIh5kDR2c3bcB9Mp30eXGok",
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
