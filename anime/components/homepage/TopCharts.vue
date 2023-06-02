<template>
    <div class="topChartsComp-container">
        <h2 class="topChartsComp-rank">{{ rank }}</h2>
        <NuxtLink class="topChartsComp-container-sub" :to="`/anime/` + malid">
        <img class="topChartsComp-image" :src="`${img}`" alt="" />
        <div class="topChartsComp-info">
            <h3 class="topChartsComp-title">{{ title }}</h3>
            <div class="topChartsComp-details">
                <div class="topChartsComp-episode">
                    <EpisodeSVG :episode="episode" />
                </div>
                <Icon class="eye" size="24" name="uil:eye" />
                <!-- <svg class="eye" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><path fill="currentColor" d="M247.31 124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57 61.26 162.88 48 128 48S61.43 61.26 36.34 86.35C17.51 105.18 9 124 8.69 124.76a8 8 0 0 0 0 6.5c.35.79 8.82 19.57 27.65 38.4C61.43 194.74 93.12 208 128 208s66.57-13.26 91.66-38.34c18.83-18.83 27.3-37.61 27.65-38.4a8 8 0 0 0 0-6.5ZM128 192c-30.78 0-57.67-11.19-79.93-33.25A133.47 133.47 0 0 1 25 128a133.33 133.33 0 0 1 23.07-30.75C70.33 75.19 97.22 64 128 64s57.67 11.19 79.93 33.25A133.46 133.46 0 0 1 231.05 128c-7.21 13.46-38.62 64-103.05 64Zm0-112a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48Zm0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32Z"/></svg> -->
                <h4 class="topChartsComp-votes">{{ votes }}</h4>
            </div>
        </div>
    </NuxtLink>
    </div>
</template>

<script setup lang="ts">
import EpisodeSVG from "../episodeSvg.vue";
import { Icon } from '#components'

defineProps({
  malid: Number,
  rank: Number,
  img: String,
  episode: String,
  votes: Number,
  title: String,
})

// export default {
//     name: "EpisodeCard",
//     components: {
//         EpisodeSVG,
//     },
//     props: {
//         malid: {
//             type: Number,
//             required: true
//         },
//         rank: {
//             type: Number,
//             required: true,
//         },
//         img: {
//             type: String,
//             required: true,
//         },
//         episode: {
//             type: Number,
//             required: true,
//         },
//         votes: {
//             type: Number,
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
.eye {
    /* height:4rem; */
    color: white;
}
.topChartsComp-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 7.7rem;
    background-color: var(--tertiary);
    margin-top: 1rem;
    border-radius: 0.75rem;
}

.topChartsComp-container-sub {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 7.7rem;
    background-color: var(--tertiary);
    width: 100%;
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
