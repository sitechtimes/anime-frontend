<template>
    <NuxtLink  :to="`/anime/` + malid">
        <div class="pf-anime-list">
            <img class="pf-anime-img" :src="`${img}`" :alt="`${title} image`" />
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
    border-radius: 1rem;
    aspect-ratio: 225/350;
}
.title {
    font-size: var(--h5);
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
	-webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
}
.pf-anime-list:hover > .pf-anime-img {
	opacity: 50%;
}
.pf-anime-list:hover > .title {
	color: var(--primary);
}

@media screen and (max-width: 1200px) {
    .title {
        font-size: var(--h6);
    }
}

@media screen and (max-width: 767px) {
    .title {
        font-size: var(--h8);
    }
}
</style>
