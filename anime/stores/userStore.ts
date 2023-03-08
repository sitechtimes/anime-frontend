import { defineStore } from "pinia";
import axios from "axios";
import { createPersistedState } from "pinia-plugin-persistedstate";
import { googleLogout } from "vue3-google-login";
import { useRouter } from "nuxt/app";
import { createPinia } from "pinia";
// const router = useRouter()

export const useUserStore = defineStore("user", {
	state: () => ({
		allAnime: null,
		currentAnime: null,
		animeInfo: null,
		startPageIndex: 0,
		endPageIndex: 12,
		pageNumber: 1,
		animeId: null,
		username: null,
		first_name: null,
		last_name: null,
		email: null,
		redirect: false,
		userData: null,
		token: null,
		isAuthenticated: false,
		// userData: JSON.parse(localStorage.getItem("user")),
		// token: JSON.parse(localStorage.getItem("token"))
	}),
	persist: [
		{
			storage: persistedState.sessionStorage,
		},
	],
	getters: {
		// getToken() {
		//     const token = localStorage.getItem("token")
		//     console.log(token)
		//     return token
		// },
		// getUser() {
		//     const user = localStorage.getItem("user")
		//     return user
		// }
	},
	actions: {
		storeAnimeId(id: any) {
			this.animeId = id;
		},
		async getAllAnime() {
			try {
				const endpoint = "http://127.0.0.1:8000/anime/";
				const headers = {
					"content-type": "application/json",
					Authorization: `Bearer ${this.token}`,
				};

				const options = {
					method: "GET",
					headers: headers,
				};

				const response = await fetch(endpoint, options);
				const data = await response.json();

				return data;
			} catch (error) {
				console.log(error);
			}
		},
		async getOneAnime() {
			try {
				const endpoint = "http://127.0.0.1:8000/graphql/";
				const headers = {
					"content-type": "application/json",
					Authorization: `Bearer ${this.token}`,
				};

				const graphqlQuery = {
					query: `{
								allAnime(malId: ${this.animeId}) {
									edges {
										node {
											malId
											animeName
											episodes
											mediaType
											status
											summary
											largeImageUrl
											numberRating
											airedTo
											airedFrom
											animeGenre {
												edges {
													node {
														genre
													}
												}
											}
											animeStudio {
												edges {
													node {
														studio
													}
												}
											}
											animeAwards {
												edges {
													node {
														awardName
														date
													}
												}
											}
										}
									}
								}
							}`,
					variables: {},
				};

				const options = {
					method: "POST",
					headers: headers,
					body: JSON.stringify(graphqlQuery),
				};

				const response = await fetch(endpoint, options);
				const animeData = await response.json();

				const refinedAnimeData = animeData.data.allAnime.edges[0].node;

				refinedAnimeData.animeGenre = refinedAnimeData.animeGenre.edges.map((edge: any) => {
					return edge.node.genre;
				});

				refinedAnimeData.animeStudio = refinedAnimeData.animeStudio.edges[0].node.studio;

				refinedAnimeData.animeAwards = refinedAnimeData.animeAwards.edges.map(
					(edge: any) => {
						return edge.node.id;
					}
				);

				return refinedAnimeData;
			} catch (error) {
				console.log(error);
			}
		},
		async login(res: any) {
			//console.log(res.code);
			try {
				axios
					.post("http://localhost:8000/social-login/google/", {
						code: res.code,
					})
					.then(res => {
						//console.log(res.data);
						this.token = res.data.access_token;
						// localStorage.setItem('token', JSON.stringify(this.token))
						axios
							.get("http://127.0.0.1:8000/auth/user/", {
								headers: { Authorization: `Bearer ${res.data.access_token}` },
							})
							.then(res => {
								//console.log(res.data);
								//console.log(this.token);
								let index = res.data.email.indexOf("@");
								//console.log(res.data.email.slice(index + 1));
								//console.log(index);

								let account = res.data.email.slice(index + 1);
								//console.log(account);
								//add teacher later
								if (account != ("nycstudents.net" || "schools.nyc.gov")) {
									this.token = null;
									return alert(
										"Need to login with your school account (i.e. nycstudents.net)"
									);
								}

								// localStorage.setItem("user", res.data.first_name)
								// this.userData = localStorage.getItem("user")
								// this.user = res.data.first_name
								this.username = res.data.username;
								// this.userData = res.data;
								this.first_name = res.data.first_name;
								this.last_name = res.data.last_name;
								this.email = res.data.email;
								this.isAuthenticated = true;
								this.redirect = true;
								return navigateTo("/");
								// router.push({ path: "/"})
							});
					});
			} catch (error) {
				console.log(error);
				// const response = error.response?.data;
				// if (
				//   response?.non_field_errors &&
				//   Array.isArray(response?.non_field_errors) &&
				//   response?.non_field_errors.length === 1
				// ) {
				//   return `/auth/login?error=${encodeURIComponent(
				//     response?.non_field_errors[0]
				//   )}`;
				// }

				// return false;
			}
		},
		async checkCookie() {
			try {
				// let user = useCookie("user")
				//console.log(this.token);
				const res = await axios
					.get("http://127.0.0.1:8000/auth/user/", {
						headers: { Authorization: `Bearer ${this.token}` },
					})
					.then(res => {});
				// console.log((await res).status)
			} catch (error) {
				if (!this.token) {
					return;
				} else if ((error = "AxiosError: Request failed with status code 401")) {
					// console.log("erfref")
					alert("Your session has expired. Please login again!");
					this.logout();
					return navigateTo("/login");

					//add router.push
				}
			}
		},
		logout() {
			try {
				// let user = useCookie('user')
				// user = null
				// localStorage.removeItem("token");
				// location.reload();
				this.username = null;
				// this.userData = res.data;
				this.first_name = null;
				this.last_name = null;
				this.email = null;
				this.isAuthenticated = false;
				this.token = null;
				// googleLogout();
			} catch (error) {
				console.error(error);
			}
		},
		// logout() {
		//     this.userData = null;
		//     this.token = null;
		//     localStorage.removeItem("user");
		//     localStorage.removeItem("token");
		//     location.reload();
		//     this.isAuthenticated = false;
		//     gapi.auth2.
		//   },
	},

	// persist: {
	//     storage: persistedState.cookiesWithOptions({
	//       sameSite: 'strict',
	//     }),
	//   },
});
