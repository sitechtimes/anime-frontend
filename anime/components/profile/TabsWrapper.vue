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
    margin-top: 0rem;
}
.tabs-header {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: space-around;
    margin-bottom: 5rem;
    padding: 0;
    width: 7vw;
    height: 62vh;
    top: -10%;
    z-index: 3;
    background-color: var(--secondary);
    margin-left: 4rem;
    position: absolute;
    box-shadow: 0 4px 8px 0 var(--tertiary);
    border-radius: 5px;
}
.tabs-header li {
    width: 7vw;
    word-break: break-all;
    font-size: var(--h4);
    text-align: center;
    padding: 0.5rem 1rem;
    margin-bottom: 5rem;
    border-radius: 0.5rem;
}
@media screen and (max-width: 2565px) {
.tabs-header {
    height: 60vh;
}
.tabs-header li {
    font-size: var(--h3);
}
}
@media screen and (max-width: 2130px) {
.tabs-header li {
    font-size: var(--h4);
}
}
@media screen and (max-width: 1575px) {
.tabs-header li {
    font-size: var(--h5);
}   
}
@media screen and (max-width: 1285px) {
.tabs-header li {
    font-size: var(--h6);
}
}
@media screen and (max-width: 1025px) {
.tabs {
    height: 55vh;
}
.tabs-header {
    width: 9vw;
    height: 67vh;
}
.tabs-header li {
    width: 9vw;
    margin-bottom: 2rem;
}
}
@media screen and (max-width: 915px) {
.tabs {
    height: 30vh;
    margin-top: 8rem;
}
.tabs-header {
    width: 10vw;
    height: 35vh;
}
.tabs-header li {
    width: 10vw;
}
}
@media screen and (max-width: 900px) {
.tabs {
    height: 40vh;
}
.tabs-header {
    height: 49vh;
}
}
@media screen and (max-width: 870px) {
.tabs-header {
    height: 47vh;
}
}
@media screen and (max-width: 825px) {
.tabs {
    height: 33vh;
}
.tabs-header {
    width: 9.5vw;
    height: 39vh;
}
.tabs-header li {
    width: 9vw;
    font-size: var(--h7);
}
}
@media screen and (max-width: 780px) {
.tabs {
    height: 36vh;
}
.tabs-header {
    width: 9vw;
    height: 44vh;
}
}
@media screen and (max-width: 680px) {
.tabs {
    height: 30vh;
}
.tabs-header {
    height: 36vh;
}
}
@media screen and (max-width: 550px) {
.tabs {
    margin-top: 0rem;
}
.tabs-header {
    width: 11vw;
}
.tabs-header li {
    width: 11vw;
    font-size: var(--smallText);
}
}
@media screen and (max-width: 460px) {
.tabs {
    height: 28vh;
}
.tabs-header {
    width: 13vw;
    margin-left: 3rem;
}
.tabs-header li {
    width: 13vw;
}
}
@media screen and (max-width: 420px) {
.tabs {
    height: 22vh;
}
.tabs-header {
    height: 27vh;
    margin-left: 2rem;
}
}
@media screen and (max-width: 400px) {
.tabs-header {
    width: 11vw;
    height: 28vh;
    padding-top: 0.5rem;
}
.tabs-header li {
    width: 11vw;
}
}
@media screen and (max-width: 380px) {
.tabs-header {
    width: 10vw;
    height: 26vh;
}
.tabs-header li {
    width: 10vw;
    padding: 0.5rem;
    font-size: 0.65rem;
}
}
@media screen and (max-width: 285px) {
.tabs {
    margin-top: 0rem;
}
.tabs-header li {
    font-size: 0.6rem;
}
}
</style>
