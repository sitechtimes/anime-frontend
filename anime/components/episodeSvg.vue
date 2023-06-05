<template>
    <div id="episode-box">
        <p id="episode-text" v-if="episode">{{ episode }}</p>
        <p id="episode-text" v-else>N/A</p>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    episode: {
        required: true;
    };
}>();
</script>

<style scoped>
#episode-box {
    background-color: var(--secondary);
    width: 4rem;
    height: 2rem;
    text-align: center;
    border-radius: 0.5rem;
}
#episode-text {
    font-size: var(--h7);
    height: 100%;
}

@media screen and (max-width: 767px) {
    #episode-box {
        height: 1.5rem;
        width: 3rem;
    }
    #episode-text {
        font-size: var(--smallText);
    }
}
</style>
