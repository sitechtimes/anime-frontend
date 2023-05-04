<template>
    <div v-if="tbd">
     <h1 class="title-history"> History of {{ historyyear }} </h1>
     <button class="history-arrow" @click="tbd"> &#11167; </button>
       <div class="user-history">
         <div class="anime-history">
          <img class="anime-img" :src="`${ animeimg }`" :alt="anime"/>
          <h3 class="anime-title"> {{ animetitle }} </h3>
         </div>
       </div>
    </div>
    <div v-else>
      <h1 class="title-history"> History of {{ historyyear }} </h1>
      <button class="history-arrow" @click="tbd"> &#11165; </button>
    </div>
</template>

<script lang="ts">
export default {
	name: "YearlyHistory",
	props: {
        animeimg: {
            type: String,
            required: true,
        },
        animetitle: {
            type: String,
            required: true,
        },
        historyyear: {
            type: String,
            required: true,
        },
    },
}
</script>