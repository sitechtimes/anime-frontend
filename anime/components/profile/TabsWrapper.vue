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
        display: flex;
        height:50vh;
    }
    .tabs-header{
        display:flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: space-around;
        margin-bottom: 5rem;
        padding: 0; 
        width:7vw;
        height:51%;
        background-color: var(--secondary);
        margin-left: 4rem;
        position: absolute;
        box-shadow: 0 4px 8px 0 var(--bg-primary);
    }
    .tabs-header li{
        font-size: var(--h4);
        text-align: center;
        padding: .5rem 1rem;
        margin-bottom:5rem;
        border-radius: .5rem;
    }
</style>