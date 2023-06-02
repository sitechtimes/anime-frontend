<template>
    <NuxtLink  :to="`/anime/` + malid">
        <div class="pf-anime-list">
        <img class="pf-anime-img" :src="`${img}`" alt="" />
        <h5 class="title">{{ title }}</h5>
    </div>
    </NuxtLink>
    
</template>

<script setup lang="ts">

defineProps({
    malid: String,
    img: String,
    title: String,
})

// export default {
//     name: "AnimeList",

    
//     components: {},
//     props: {
//         malid: {
//             type: String,
//             required: true
//         },
//         img: {
//             type: String,
//             required: true,
//         },
//         title: {
//             type: String,
//             required: true,
//         },
//     },
// };
</script>
<style scoped>
.pf-anime-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background: red; */
}
.pf-anime-img {
    object-fit: cover;
    height: 17rem;
    width: 100%;
}
.title {
    text-align: center;
    width: 100%;
    overflow: hiddens;
}
</style>
