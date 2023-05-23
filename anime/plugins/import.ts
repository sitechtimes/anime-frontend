import Vue from 'vue'
import animeCard from '~components/hompage/AnimeCard.vue'
import { LeftPageButtonSvg } from '~~/.nuxt/components'
import { RightPageButtonSvg } from '~~/.nuxt/components'
    
const components = { animeCard, ... }
   
Object.entries(components).forEach(([name, component]) => {
    Vue.component(name, component)
})