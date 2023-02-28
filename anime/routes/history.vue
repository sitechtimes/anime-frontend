<template>
  <div>
    <h2>Starlink Launches</h2>
    <button @click="api">click</button>

  </div>
</template>

<style lang="scss" scoped>
button{
  margin: 20rem;
}
</style>

<script lang="ts" setup>
import axios from 'axios';

const query = `

  launches {
    id
    launch_year
    mission_name
  }

`
const api = ()=>{
  console.log('button')
  axios({
  url:'https://api.myanimelist.net/v2',
  method:'get',
  headers:{
    'Content-Type':'application/json',
  },
  data:{
    query:query
  }
}).then((res)=>{
  console.log(res.data)
})}
</script>
