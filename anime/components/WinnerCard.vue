<template>
    <div class="winner-card">
                    <h2 class="award-name">{{ award }}</h2>
                    <img :src="img" :alt="`${winner} image`" class="img">
                    <h3 class="winner-name">{{ winner }}</h3>
                </div>
</template>

<script setup lang="ts">
defineProps<{
    award: string;
    winner: string;
    img: string;
}>()
</script>

<style scoped>

.winner-card{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40rem;
    height: 55rem;
    margin: 1rem;
    background: black;
    border-radius: 1rem;
    /* border: 1px solid black; */
    /* border-radius: 1rem; */
}

.award-name{
    font-size: 1.75rem;
    font-weight: bold;
    margin: 1rem;
    padding-top: 2rem;
    color: white;
}

.img{
    width: 286px;
    height: 434px;
    border-radius: 1rem;
}

.winner-name{
    font-size: 1.5rem;
    font-weight: bold;
    margin: 1rem;
    padding-bottom: 2rem;
    color: white;
}

</style>