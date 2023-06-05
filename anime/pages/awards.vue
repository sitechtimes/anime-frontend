<template>
    <div id="awards">
        <Banner/>
        <AwardVoting />
    </div>
</template>

<script setup lang="ts">
import Banner from "../components/awardspage/Banner.vue";
import AwardVoting from "../components/awardspage/AwardVoting.vue";
import { ref, onMounted } from "vue";
import { useUserStore } from "~/stores/userStore";
import { useRouter } from "nuxt/app";
const router = useRouter()

const userStore = useUserStore();



onMounted(() => {
    if (userStore.isAuthenticated == false) {
        alert("You must be logged in to view this page")
        router.push("/login");
    }
})

// export default {
//     name: "awards",
//     components: {
//         Banner,
//         AwardVoting,
//     },
// };
</script>

<style scoped></style>