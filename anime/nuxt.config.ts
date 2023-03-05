// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	plugins: [
		"~/plugins/auth.ts",
		// "~/plugins/pinia.ts"
	],

	runtimeConfig: {
		public: {
			clientID: process.env.CLIENT_ID,
		},
	},
	// buildModules: [],
	dir: {
		// Rename `pages` directory to `routes`
		pages: "routes",
	},
	modules: [
		// ...
		"@pinia/nuxt",
		"@pinia-plugin-persistedstate/nuxt",
	],
});
