import vue3GoogleLogin from "vue3-google-login"

export default defineNuxtPlugin(nuxtApp =>  {
    nuxtApp.vueApp.use(vue3GoogleLogin, {
        clientId: "533107689780-kmlp9v2avfkpqiqm424b6f324vhlt1uu.apps.googleusercontent.com"
    })
})

