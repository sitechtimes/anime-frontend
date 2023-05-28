<template>
     <NuxtLink  :to="`/anime/` + malid">
    <div class="pf-anime-list">
        <h1>{{ date }}</h1>
        <img class="pf-anime-img" :src="`${img}`" alt="" />
        <h5 class="title">{{ title }}</h5>
        <h1>{{ awardName }}</h1>
    </div>
</NuxtLink>
</template>

<script lang="ts">
export default {
    name: "VotedAnimeList",
    components: {},
    props: {
        img: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        awardName: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            // required: true
        },
        malid: {
            type: String,
            required: true
        },

    },
};
</script>
<style scoped>
.pf-anime-img {
    width: 35%;
}
</style>
