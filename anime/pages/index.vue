<template>
    <div id="home">
        <span class="underNav"></span>
        <HomepageCarousel />
        <HomepageHomePage />
    </div>
</template>

<script setup lang="ts"></script>
<style scoped>
/* undernavigation  */
.underNav {
    height: 45vh;
    display: block;
}

@media screen and (max-width: 767px) {
    .underNav {
        height: 35vh;
    }
}
</style>
