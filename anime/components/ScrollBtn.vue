<template>

    <div class="scrollup-btn">
        <a href="#" class="up__btn">
            <img class="up-arrow" src="../assets/media/carrot up.png" alt="carrot svg">
        </a>
    </div>
  
</template>

<script lang="ts">
export default {
    name: 'ScrollUp',
    props: {
        msg: String
    },
    methods: {
        // scrollUp() {
        //     document.querySelector("html").style.scrollBehavior = "smooth";
        //         setTimeout(() => {
        //     document.querySelector("html").style.scrollBehavior = "unset";
        //     }, 1000);
        // },
    }
}
</script>

<style scoped>
.up__btn {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    right: 3rem;
    bottom: 3rem;
    width: 5rem;
    height: 5rem;
    border-radius: 10%;
    color: var(--white);
    background-color: var(--primary);
    box-shadow: 0 2px 4px var(--tertiary);
    transition: 250ms;
}
.up__btn:hover{
    background-color: var(--secondary);
}
.up-arrow {
    width:3rem;
    height: auto;
}
@media screen and (min-width: 568px) {
    .up__btn:hover {
        background-color: var(--secondary);
        box-shadow: 0 2px 4px var(--dark-text);
    }
}
@media screen and (max-width: 567px) {
    .up__btn {
        right: 2rem;
        bottom: 2rem;
        width: 3rem;
        height: 3rem;
        color: var(--primary);
    }
    .up-arrow {
        width: 2rem;
    }
}
</style>