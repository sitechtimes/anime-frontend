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
    justify-content: space-around;
    align-items: space-around;
    margin-bottom: 5rem;
    padding: 0;
    width: 7vw;
    height: 120%;
    top: -10%;
    z-index: 3;
    background-color: var(--secondary);
    margin-left: 4rem;
    position: absolute;
    box-shadow: 0 4px 8px 0 var(--tertiary);
    border-radius: 5px;
}
.tabs-header li {
    font-size: var(--h4);
    text-align: center;
    padding: 0.5rem 1rem;
    margin-bottom: 5rem;
    border-radius: 0.5rem;
}
@media screen and (max-width: 1285px) {
.tabs-header li {
    font-size: var(--h5);
}
}
@media screen and (max-width: 1025px) {
.tabs-header {
    width: 8vw;
}
.tabs-header li {
    margin-bottom: 2rem;
    font-size: var(--h6);
}
}
@media screen and (max-width: 915px) {
.tabs {
    height: 30vh;
    margin-top: 8rem;
}
.tabs-header {
    width: 9vw;
}
}
@media screen and (max-width: 825px) {
.tabs-header li {
    font-size: var(--h7);
}
}
</style>
