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
                    <h4 class="topChartsComp-votes">{{ votes }}</h4>
                </div>
            </div>
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
import EpisodeSVG from "../EpisodeSvg.vue";
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
.topChartsComp-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 7.5rem;
    background-color: var(--tertiary);
    margin-top: 1rem;
    border-radius: 1rem;
}
.topChartsComp-rank {
    font-family: var(--second-font);
    font-size: var(--h3);
    font-weight: var(--fw-reg);
    color: var(--white);
    background-color: var(--secondary);
    border-radius: 1rem 0 0 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4.5rem;
    height: 100%;
}
.topChartsComp-container-sub {
    height: 100%;
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.topChartsComp-image {
    height: 100%;
    aspect-ratio: 225/350;
}
.topChartsComp-info {
    height: 100%;
    margin: 0 3rem 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
}
.topChartsComp-title {
    color: var(--light-text);
    font-size: var(--h5);
    font-weight: var(--fw-reg);
	overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
	-webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
}
.topChartsComp-details {
    display: flex;
    flex-direction: row;
    align-items: center;
}
.topChartsComp-episode {
    margin-right: 1.5rem;
}
.eye {
    color: var(--white);
}
.topChartsComp-votes {
    color: var(--light-text);
    font-size: var(--h6);
    font-weight: var(--fw-reg);
    margin-left: 0.5rem;
}

@media screen and (max-width: 1440px) {
    .topChartsComp-container {
        height: 7rem;
    }
}

@media screen and (max-width: 1200px) {
}
</style>
