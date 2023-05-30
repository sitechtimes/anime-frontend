<template>
    <div class="outer-div">
        <button @click="userStore.updateAnime" class="m">Update Anime</button>
        <button @click="userStore.getWinner" class="m">Find Winner</button>
    </div>
</template>

<script setup lang="ts">
import { useUserStore } from "~~/stores/userStore";
const userStore = useUserStore();
</script>

<style scoped>

.outer-div {
    display: flex ;
    justify-content: center;
    align-items: center;
 height: 100vh;
 width: 100vw;
}

.m {
    margin: 2rem;
}

</style>