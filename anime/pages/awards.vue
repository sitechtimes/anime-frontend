<template>
    <div id="awards">
        <Banner
        :rank="1"
        :title="'Attack on Titan'"
        :genre="'Action, Drama, Fantasy'"
        :stars=4.5
        :img="'https://cdn.myanimelist.net/images/anime/10/47347.jpg'"
        />
        <AwardVoting />
    </div>
</template>

<script lang="ts">
import Banner from "../components/awardspage/Banner.vue";
import AwardVoting from "../components/awardspage/AwardVoting.vue";

export default {
    name: "awards",
    components: {
        Banner,
        AwardVoting,
    },
};
</script>

<style scoped></style>