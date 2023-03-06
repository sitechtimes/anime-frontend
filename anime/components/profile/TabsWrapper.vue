<template>
    <div class="tabs">
        <ul class="tabs-header">
            <li v-for="title in tabTitles" :key="title" @click="selectedTitle = title">
                {{ title }}
            </li>
        </ul>
        <slot/>
    </div>
</template>
<script lang="ts">
import { ref, provide } from 'vue'
    export default {
        setup (props, {slots}){
            const tabTitles = ref(slots.default().map((tab)=> tab.props.title))
            const selectedTitle = ref(tabTitles.value[0])
            provide('selectedTitle', selectedTitle)
            return{
                tabTitles,
                selectedTitle
            }
        },
        
    }
</script>
<style scoped>
    .tabs{
        width:70vw;
    }
    .tabs-header{
        display:flex;
        flex-direction: column;
        margin-bottom: 5rem;
        padding: 0;
        width: 20%;
    }
    .tabs-header li{
        font-size: var(--h2);
        text-align: center;
        padding: .5rem 1rem;
        margin-bottom:5rem;
        background-color: #525151;
        border-radius: .5rem;
    }
</style>