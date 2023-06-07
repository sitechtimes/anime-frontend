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
    display: flex;
    flex-direction: column;
}
.pf-anime-img {
    object-fit: cover;
    height: 23rem;
    border-radius: 1rem;
}
.title {
    text-align: center;
    width: 100%;
    font-size: var(--h6);
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
	-webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
}
</style>
