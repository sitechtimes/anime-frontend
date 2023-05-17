<template>
    <div class="award-anime-display">
        <div class="picture-column">
            <h2 class="rank-number" :id="`rank${rank}`">{{ rank }}</h2>
            <img class="anime-pfp" :src="`${img}`" alt="" />
        </div>
        <div class="info-column">
            <h3 class="animeTitle">{{ title }}</h3>
            <div class="star-rating">
                <starSVG class="star" />
                <p>{{ stars.toFixed(2) }}</p>
            </div>
        </div>
        <span class="genre-text">
            <p>{{ genre }}</p>
        </span>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        rank: {
            type: Number,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        genre: {
            type: String,
            required: true,
        },
        stars: {
            type: Number,
            required: true,
        },
        img: {
            type: String,
            required: true,
        },
    },
};
</script>
<style scoped>
.award-anime-display {
    display: flex;
    margin-bottom: 1rem;
}

.bestAnime {
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    column-gap: 1rem;
}
.picture-column {
    display: flex;
    align-items: center;
    column-gap: 1rem;
}
.anime-pfp {
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
    object-fit: cover;
}
.info-column {
    width: 50%;
    gap: 0;
    margin: 0;
}
.animeTitle {
    font-size: var(--h4);
    overflow: hidden;
    white-space: nowrap;
    display: block;
    text-overflow: ellipsis;
}
.star-rating {
    font-size: var(--h7);
    margin-top: -1rem;
    display: flex;
}
.star {
    height: 100%;
    margin-right: 0.5rem;
}

.genre-text {
    background-color: var(--primary);
    color: var(--white);
    height: 40%;
    width: 20%;
    text-align: center;
    padding: 0.1rem;
    border-radius: 1rem;
    font-size: var(--h8);
}
@media screen and (max-width: 1440px) {
    .banner-image {
        height: 70%;
    }
    .title-banner {
        font-size: var(--h3);
    }
    .trending-text {
        font-size: var(--h5);
    }
    .voting-description {
        font-size: var(--h6);
    }
    .anime-season {
        padding: 2rem;
    }
    .anime-pfp {
        height: 4rem;
        width: 4rem;
    }
    .animeTitle {
        font-size: var(--h5);
    }
    .star-rating {
        font-size: var(--h8);
        margin-top: -0.5rem;
    }
}

@media screen and (max-width: 1200px) {
    .banner-season {
        width: 40%;
    }
    .season-text {
        font-size: var(--h4);
        margin-bottom: 1rem;
    }
    .genre-text {
        font-size: var(--smallText);
    }
}

@media screen and (max-width: 1024px) {
    .anime-pfp {
        height: 3rem;
        width: 3rem;
    }
    .title-banner {
        font-size: var(--h4);
    }
}

@media screen and (max-width: 915px) {
    .banner-image {
        display: none;
    }

    .banner-season {
        width: 50%;
    }
    .animeTitle {
        font-size: var(--h6);
    }
}

@media screen and (max-width: 767px) {
    #award-anime-display {
        padding-top: 0;
    }
    .banner-season {
        width: 80%;
    }
    br {
        display: none;
    }
}

@media screen and (max-width: 425px) {
    .banner-season {
        width: 100%;
    }
}
</style>
