<template>
    <div id="award-voting">
        <div class="award-box">
            <img :src="`${img}`" alt="" class="img" />
            <h1 class="award-name">{{ award }}</h1>
            <div class="fake-vote-btn"><p>Vote</p></div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    props: {
        award: {
            type: String,
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
.award-box {
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    transition: 100ms ease-in;
}
.award-box:hover {
    outline: solid 5px var(--primary);
    background: var(--primary);
    transform: translate(0, -8px);
}
.img {
    height: 20rem;
    border-radius: 10px;
    object-fit: cover;
}
.award-name {
    text-align: center;
    font-size: var(--h4);
    white-space: nowrap;
    overflow: hidden;
    display: block;
    text-overflow: ellipsis;
}
.fake-vote-btn {
    background: var(--secondary);
    border-radius: 20px;
    font-size: var(--h5);
    text-align: center;
    width: 10rem;
    z-index: 1;
    align-self: flex-end;
    position: absolute;
    margin: 1rem 0.5rem 0 0;
}

@media screen and (max-width: 1440px) {
    .award-container {
        row-gap: 4rem;
    }
    .img {
        height: 15rem;
    }
    .fake-vote-btn {
        width: 6rem;
        font-size: var(--h6);
    }
}

@media screen and (max-width: 1200px) {
    .award-container {
        column-gap: 3rem;
        row-gap: 3rem;
    }
    .award-name {
        font-size: var(--h5);
    }
    .img {
        height: 12rem;
    }
    .fake-vote-btn {
        width: 6rem;
        font-size: var(--h7);
        margin: 0.5rem 0.5rem 0 0;
    }
}

@media screen and (max-width: 915px) {
    .text-head {
        font-size: var(--h3);
    }
    .text-tab {
        font-size: var(--h4);
        margin-right: 2rem;
    }
    .award-container {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }
}

@media screen and (max-width: 768px) {
    .award-container {
        grid-template-columns: repeat(2, minmax(0, 1fr));
        column-gap: 3rem;
    }
}

@media screen and (max-width: 568px) {
    #award-voting {
        width: 80vw;
    }
    .text-head {
        font-size: var(--h4);
    }
    .text-tab {
        font-size: var(--h6);
    }
    .award-container {
        width: 90%;
        margin: auto;
    }
    .award-name {
        font-size: var(--h6);
    }
    .img {
        height: 13rem;
    }
}

@media screen and (max-width: 425px) {
    .img {
        height: 16rem;
    }
    .text-head {
        font-size: var(--h4);
    }
    .text-tab {
        margin-right: 1.5rem;
        font-size: var(--h6);
    }
}
</style>
