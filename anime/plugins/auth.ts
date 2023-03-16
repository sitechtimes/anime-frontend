import vue3GoogleLogin from "vue3-google-login"

// dotenv.config()
// const runtimeConfig = useRuntimeConfig()

export default defineNuxtPlugin(nuxtApp =>  {
    const config = useRuntimeConfig()
    const ID = "533107689780-kmlp9v2avfkpqiqm424b6f324vhlt1uu.apps.googleusercontent.com"

    nuxtApp.vueApp.use(vue3GoogleLogin, {
        // clientId: process.env.CLIENT_ID
        clientId: ID
    })
})

