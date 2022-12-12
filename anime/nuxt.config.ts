// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    plugins:[
        "~/plugins/auth.ts",
        "~/plugins/pinia.ts"
    ],
    dir: {
        // Rename `pages` directory to `routes`
        pages: 'routes'
      },
      modules: [
        // ...
        // '@pinia-plugin-persistedstate/nuxt',
        // '@pinia/nuxt',
      ],
})
