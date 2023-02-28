<template>
    <div class="tabs">
        <ul class="tabs-header">
            <li v-for="title in tabTitles" :key="title">
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

            return{
                tabTitles,
            }
        },
    }
</script>