<template>
    <div class="tabs">
        <ul class="tabs-header">
            <li
                v-for="title in tabTitles"
                :key="title"
                @click="selectedTitle = title"
            >
                {{ title }}
            </li>
        </ul>
        <slot />
    </div>
</template>
<script lang="ts">
import { ref, provide } from "vue";
export default {
    setup(props, { slots }) {
        const tabTitles = ref(slots.default().map((tab) => tab.props.title));
        const selectedTitle = ref(tabTitles.value[0]);
        provide("selectedTitle", selectedTitle);
        return {
            tabTitles,
            selectedTitle,
        };
    },
};
</script>
<style scoped>
.tabs {
    display: flex;
    height: 50vh;
    position: relative;
}
.tabs-header {
    display: flex;
    flex-direction: column;
    padding: 0;
    z-index: 1;
}
.tabs-header li {
    font-size: var(--h4);
    text-align: center;
    background-color: var(--secondary);
    border-radius: 0.5rem;
    padding: 1rem;
}
</style>
