<template>
     <NuxtLink  :to="`/anime/` + malid">
    <div class="pf-anime-list">
        <h2>{{ date }}</h2>
        <img class="pf-anime-img" :src="`${img}`" alt="" />
        <h5 class="title">{{ title }}</h5>
        <h2 class="award-name">{{ awardName }}</h2>
    </div>
</NuxtLink>
</template>

<script setup lang="ts">
defineProps({
    img : String,
    title: String,
    awardName: String,
    malid: String,
})

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
    font-size: var(--h7);
    font-weight: var(--fw-light);
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
	-webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
}
.award-name {
    font-size: var(--h5);
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
	-webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
}

@media screen and (max-width: 1200px) {
    .award-name {
        font-size: var(--h6);
    }
}

@media screen and (max-width: 767px) {
    .title {
        font-size: var(--smallText);
    }
    .award-name {
        font-size: var(--h8);
    }
}
</style>
