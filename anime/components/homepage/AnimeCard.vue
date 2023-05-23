<template>
    <NuxtLink to="/animeInfo">
        <div class="card-container" @click="$emit('saveAnimeID')">
            <div class="card-cover">
                <img
                    class="card-image"
                    :src="`${imageUrl}`"
                    alt=""
                    format="webp"
                />
                <div class="card-info">
                    <EpisodeSVG :episode="episode" />
                    <p class="card-media">{{ mediaType }}</p>
                </div>
            </div>
            <h5 class="card-title">{{ animeName }}</h5>
        </div>
    </NuxtLink>
</template>

<script setup lang="ts">
const animeName = ref(props.animeName);
const props = defineProps({
    imageUrl: String,
    episode: Number,
    mediaType: {
        required: true,
    },
    animeName: String,
});
// rewrite slice code for cutting anime titles after character count exceeds 28
</script>

<style scoped>
.card-container {
    display: flex;
    flex-direction: column;
    width: 11vw;
}
.card-cover {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    border-radius: 0.5rem;
    overflow: hidden;
}
.card-cover:not(hover) > img {
    opacity: 100%;
    transition: 0.3s;
}
.card-cover:hover > img {
    opacity: 25%;
    transition: 0.3s;
}
.card-image {
    border-radius: 0.5rem 0.5rem 0 0;
    width: 100%;
    object-fit: cover;
    aspect-ratio: 225/350;
}
.card-info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: var(--bg-secondary);
    padding: 0.2rem;
    padding-left: 0.6rem;
    padding-right: 0.75rem;
    border-radius: 0 0 0.5rem 0.5rem;
}
.card-title {
    width: 100%;
    color: var(--light-text);
    font-size: var(--h5);
    font-weight: var(--fw-light);
    padding-top: 0.5rem;
    white-space: wrap;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
.card-title:hover {
    color: var(--primary);
    transition: 0.4s;
}
.card-title:not(hover) {
    color: var(--light-text);
    transition: 0.4s;
}
.card-media {
    color: var(--light-text);
    font-size: var(--h6);
    font-weight: var(--fw-reg);
}
</style>
