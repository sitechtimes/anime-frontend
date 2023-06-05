<template>
    <div class="rankingCard">
        <p class="rc-rank" :id="`rank${rank}`">{{ rank }}</p>
        <div class="rc-info">
            <p class="rc-title">{{ title }}</p>
            <div class="rc-sub">
                <p v-for="studio in studios" :key="studio.id" class="rc-studio">
                    {{ studio.studio }}
                </p>
                <div class="rc-stars">
                    <starSVG />
                    <p class="rc-stars-num">{{ stars }}</p>
                </div>
            </div>
        </div>
        <div class="rc-img">
            <img :src="`${img}`" alt="" />
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    rank: Number,
    img: String,
    episode: Number,
    votes: Number,
    title: String,
    studio: String,
    stars: Number,
});
</script>

<style>
.rankingCard {
    display: flex;
    background-color: var(--primary);
    margin-bottom: 3rem;
    height: 14rem;
    column-gap: 2rem;
}
.rc-rank {
    font-family: var(--second-font);
    font-size: var(--h1);
    color: var(--white);
    background-color: var(--bg-rank);
    height: 100%;
    width: 8rem;
    margin-left: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
}
#rank1 {
    color: var(--rank1);
}
#rank2 {
    color: var(--rank2);
}
#rank3 {
    color: var(--rank3);
}
.rc-info {
    display: flex;
    flex-direction: column;
    flex: 1;
}
.rc-title {
    font-size: var(--h3);
    color: var(--white);
    font-weight: var(--fw-med);
    margin-top: 1rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
}
.rc-sub {
    display: flex;
    align-items: center;
    justify-content: space-between;
    column-gap: 1rem;
}
.rc-studio {
    font-size: var(--h5);
    color: var(--white);
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
}
.rc-stars {
    display: flex;
    align-items: center;
    column-gap: 0.25rem;
    margin-right: 1rem;
}
.rc-stars-num {
    font-size: var(--h5);
    color: var(--white);
}
.rc-img {
    height: 100%;
    width: 45%;
    object-fit: cover;
}

@media screen and (max-width: 1200px) {
    .rankingCard {
        height: 12rem;
    }
    .rc-studio,
    .rc-stars-num {
        font-size: var(--h6);
    }
    .star {
        height: 1.5rem;
    }
}

@media screen and (max-width: 1024px) {
    .rankingCard {
        height: 10rem;
    }
    .rc-rank {
        font-size: var(--h2);
        width: 6rem;
    }
    .rc-title {
        font-size: var(--h4);
    }
    .rc-studio,
    .rc-stars-num {
        font-size: var(--h7);
    }
    .star {
        height: 1.2rem;
    }
}

@media screen and (max-width: 767px) {
    .rankingCard {
        height: 8rem;
        column-gap: 1rem;
        margin-bottom: 2rem;
    }
    .rc-rank {
        font-size: var(--h3);
        width: 5rem;
        margin-left: 1rem;
    }
    .rc-title {
        font-size: var(--h5);
    }
    .rc-studio,
    .rc-stars-num {
        font-size: var(--h8);
    }
    .rc-stars {
        margin: 0;
        column-gap: 0;
    }
    .rc-img {
        width: 40%;
    }
}

@media screen and (max-width: 568px) {
    .rc-rank {
        font-size: var(--h4);
        width: 4rem;
    }
    .rc-img {
        width: 30%;
    }
}

@media screen and (max-width: 425px) {
    .rankingCard {
        height: 7rem;
    }
    .rc-studio,
    .rc-stars-num {
        font-size: var(--smallText);
    }
    .star {
        height: 1rem;
        margin-right: -0.3rem;
    }
    .rc-img {
        width: 20%;
    }
}
</style>
