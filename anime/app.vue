<template>
    <div>
        <Head>
            <Title>Technime</Title>
            <Meta name="Technime" content="Rate your favorite animes!" />
            <Meta name="Technime" content="Rate your favorite animes!" />
        </Head>
        <NuxtLayout>
            <NuxtPage class="animation" />
        </NuxtLayout>
    </div>
</template>

<!-- <script lang="ts">
import { useUserStore } from "./stores/userStore";
export default {
    setup() {
        const userStore = useUserStore();
        return {
            userStore,
        };
    },
    beforeCreate() {
        this.userStore.checkCookie();
    },
    // methods: {
    //   onBeforeMount() {
    //     this.userStore.checkCookie()
    //   }
    // },
    // mounted() {
    //   this.userStore.getToken
    //   console.log(this.userStore.getToken, this.userStore.getUser)
    // }
};
</script> -->
<style>
.animation {
    animation: fadeIn 750ms linear forwards;
}
</style>
