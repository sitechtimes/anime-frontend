import vue3GoogleLogin from "vue3-google-login"
import dotenv from "dotenv"
// dotenv.config()

export default defineNuxtPlugin(nuxtApp =>  {
    nuxtApp.vueApp.use(vue3GoogleLogin, {
        // clientId: process.env.CLIENT_ID
        clientId: "533107689780-kmlp9v2avfkpqiqm424b6f324vhlt1uu.apps.googleusercontent.com"
    })
})

