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

definePageMeta({
  middleware: ["auth"]
  // or middleware: 'auth'
})

const router = useRouter()

const userStore = useUserStore();





// export default {
//     name: "awards",
//     components: {
//         Banner,
//         AwardVoting,
//     },
// };
</script>

<style scoped></style>