<template>
     <NuxtLink  :to="`/anime/` + malid">
    <div class="pf-anime-list">
        <h2>{{ date }}</h2>
        <img class="pf-anime-img" :src="`${img}`" alt="" />
        <h5 class="title">{{ title }}</h5>
        <h2>{{ awardName }}</h2>
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
.pf-anime-img {
    width: 35%;
}
</style>
