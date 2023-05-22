import vue3GoogleLogin from "vue3-google-login"

// dotenv.config()
// const runtimeConfig = useRuntimeConfig()

export default defineNuxtPlugin(nuxtApp =>  {
    const config = useRuntimeConfig()
    const ID = config.public.clientID
    // console.log(config.public.clientID)

    nuxtApp.vueApp.use(vue3GoogleLogin, {
        // clientId: process.env.CLIENT_ID
        clientId: ID
    })
})

