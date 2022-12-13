import { createPinia } from "pinia"
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

export default defineNuxtPlugin(nuxtApp =>  {
    const pinia = createPinia()
    pinia.use(piniaPluginPersistedstate)
    // nuxtApp.$pinia.use(piniaPluginPersistedstate)    
    // pinia.use((context) => {
    //     const storeId = context.store.$id

    //     console.log(storeId)

    //     const serializer = {
    //         serialize: JSON.stringify,
    //         desserialize: JSON.parse
    //     }

    //     // const fromStorage = serializer.desserialize(window.localStorage.getItem(storeId))

    //     context.store.$subscribe((mutation, state) => {
    //         window.localStorage.setItem(storeId, serializer.serialize(state))
    //     })
    // })

    nuxtApp.vueApp.use(pinia)
})