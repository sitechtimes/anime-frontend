// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    plugins:[
        "~/plugins/auth.ts"
    ],
    dir: {
        // Rename `pages` directory to `routes`
        pages: 'routes'
      }
})
