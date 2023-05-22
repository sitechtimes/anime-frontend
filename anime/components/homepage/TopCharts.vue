<template>
    <div class="topChartsComp-container">
        <div class="topChartsComp-rank">{{ rank }}</div>
        <img class="topChartsComp-image" :src="`${img}`" alt="" />
        <div class="topChartsComp-info">
            <h3 class="topChartsComp-title">{{ title }}</h3>
            <div class="topChartsComp-details">
                <div class="topChartsComp-episode">
                    <EpisodeSVG :episode="episode" />
                </div>
                <h4 class="topChartsComp-votes">{{ votes }}</h4>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
		rank: Number,
		img: String,
		episode: Number,
        votes: Number,
        title:String,
});
</script>


<style scoped>
.topChartsComp-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 7.7rem;
    background-color: var(--tertiary);
    margin-top: 1rem;
    border-radius: 0.75rem;
}
.topChartsComp-rank {
    display: flex;
    font-family: "LIBRARY 3 AM", sans-serif;
    justify-content: center;
    align-items: center;
    width: 4.5rem;
    height: 100%;
    background-color: var(--secondary);
    color: var(--white);
    font-size: var(--h3);
    font-weight: var(--fw-reg);
    border-radius: 0.75rem 0 0 0.75rem;
}
.topChartsComp-image {
    height: 100%;
    aspect-ratio: 225/350;
}
.topChartsComp-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 55%;
    padding-left: 1rem;
}
.topChartsComp-title {
    display: block;
    white-space: nowrap;
    width: 100%;
    color: var(--light-text);
    font-size: var(--h5);
    font-weight: var(--fw-reg);
    text-overflow: ellipsis;
    overflow: hidden;
}
.topChartsComp-details {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
}
.topChartsComp-episode {
    color: var(--white);
    font-size: var(--h6);
    font-weight: var(--fw-reg);
    padding: 0.5rem;
}
.topChartsComp-votes {
    color: var(--light-text);
    font-size: var(--h6);
    font-weight: var(--fw-reg);
    padding-left: 1rem;
}
</style>
