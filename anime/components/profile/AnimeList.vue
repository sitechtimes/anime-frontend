<template>
    <div class="pf-anime-list">
        <img class="pf-anime-img" :src="`${img}`" alt="" />
        <h5 class="title">{{ title }}</h5>
    </div>
</template>

<script lang="ts">
export default {
    name: "AnimeList",
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
    },
};
</script>
<style scoped>
.pf-anime-img {
    width: 35%;
}
</style>
