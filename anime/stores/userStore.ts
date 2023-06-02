import { defineStore } from "pinia";
import axios from "axios";
import { createPersistedState } from "pinia-plugin-persistedstate";
import { googleLogout } from "vue3-google-login";
import { useRouter } from "nuxt/app";
import { createPinia } from "pinia";
import { animeRest, animeGraphql, animeGenre } from "~/types/anime";
// const router = useRouter()

export const useUserStore = defineStore("user", {
	state: () => ({
		allAnime: [] as any,
		currentAnime: [] as any,
		filterAnime: [] as any,
		allAwards: [] as any,
		// allAnime: [] as animeRest[],
		airingAnime: [] as animeRest[],
		// filterAnime: [] as animeRest[],
		search: "",
		startPageIndex: 0,
		endPageIndex: 12,
		pageNumber: 1,
		animeId: 0,
		username: null,
		first_name: null,
		last_name: null,
		email: null,
		userID: null,
		redirect: false,
		userData: null,
		token: null,
		isAuthenticated: false,
		isAdmin: false,
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

		//     return token
		// },
		// getUser() {
		//     const user = localStorage.getItem("user")
		//     return user
		// }
	},
	actions: {
		storeAnimeId(id: number) {
			this.animeId = id;
		},
		async getAllGenre() {
			try {
				const endpoint = "http://127.0.0.1:8000/genres";
				const headers = {
					"Content-Type": "application/json",
				};

				const options = {
					method: "GET",
					headers: headers,
				};

				const response = await fetch(endpoint, options);
				const data: animeGenre[] = await response.json();

				return data;
			} catch (error) {
				console.log(error);
			}
		},
		async getAllAnime() {
			try {
				const endpoint = "http://127.0.0.1:8000/anime/";
				const headers = {
					"Content-Type": "application/json",
				};

				const options = {
					method: "GET",
					headers: headers,
				};

				const response = await fetch(endpoint, options);
				const data: animeRest[] = await response.json();

				this.allAnime = data;

				return data;
			} catch (error) {
				alert(error)
			}
		},

		async updateAnime() {
			try {
				const endpoint = "http://127.0.0.1:8000/updateAnime/";
				const headers = {
					"Content-Type": "application/json",
					"Accept-encoding": "gzip", //does not work
				};

				const options = {
					method: "GET",
					headers: headers,
				};

				const response = await fetch(endpoint, options);
				// const data: animeRest[] = await response.json();

			} catch (error) {
				alert(error)
			}
		},

		async getAllAwards() {
			try {
				const endpoint = "http://127.0.0.1:8000/graphql/";
				const headers = {
					"content-type": "application/json",
					Authorization: `Bearer ${this.token}`,
				};

				const graphqlQuery = {
					query: `{
						allAwards{
							edges{
							  node{
								awardName
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
				const awardData = await response.json();


				

				
				awardData.data.allAwards.edges.forEach(node => {

					const awardName = node.node.awardName
					if (this.allAwards.includes(awardName)) {

						
					} else {
						this.allAwards.push(node.node.awardName)
					}
					
				});
				// this.allAwards = []

				// return this.allAwards
				// const refinedAnimeData = animeData.data.allAnime.edges[0].node;

				// refinedAnimeData.animeGenre = refinedAnimeData.animeGenre.edges.map((edge: any) => {
				// 	return edge.node.genre;
				// });

				// refinedAnimeData.animeStudio = refinedAnimeData.animeStudio.edges[0].node.studio;

				// refinedAnimeData.animeAwards = refinedAnimeData.animeAwards.edges.map(
				// 	(edge: any) => {
				// 		return edge.node.id;
				// 	}
				// );

				// return refinedAnimeData;
			} catch (error) {
				alert("You need to be logged in")
				return navigateTo("/login")
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
											numRated
											avgRating
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
				const data = await response.json();

				const dataRes = data.data.allAnime.edges[0].node;

				dataRes.animeGenre = dataRes.animeGenre.edges.map((edge: any) => {
					return edge.node.genre;
				});

				dataRes.animeStudio = dataRes.animeStudio.edges.map((edge: any) => {
					return edge.node.studio;
				});

				dataRes.animeAwards = dataRes.animeAwards.edges.map((edge: any) => {
					return edge.node.id;
				});

				const animeData = dataRes;



				return animeData;
			} catch (error) {
				alert(error)
			}
		},
		async getAdmin() {
			try {
				const endpoint = "http://127.0.0.1:8000/graphql/";
				const headers = {
					"content-type": "application/json",
					Authorization: `Bearer ${this.token}`,
				};

				const graphqlQuery = {
					query: `
query{
  userAnimeData(id:${this.userID}) {
    admin
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
				const userData = await response.json();
				// console.log(userData.data.userAnimeData.admin)
				this.isAdmin = userData.data.userAnimeData.admin
				// console.log(this.isAdmin)
			} catch (error) {
				alert(error)
			}
		},


		async getWinner() {
			try {
				const endpoint = "http://127.0.0.1:8000/graphql/";
				const headers = {
					"content-type": "application/json",
					Authorization: `Bearer ${this.token}`,
				};

				const graphqlQuery = {
					query: `
					mutation{
						winner{
						  characterAwards {
							characterWinner{
							  character{
								characterName
							  },
							  award{
								awardName,
							  },
							  voteCount,
							
							},
							  season,
							year
						  }
						  ,
						 animeAwards{
						   winner{
							 anime{
							   animeName
							 },
							 award{
								 awardName,
							 },
							   voteCount,
							
						  },
						  season,
						  year
						 }
						}
						 }
						`,
					variables: {},
				};

				const options = {
					method: "POST",
					headers: headers,
					body: JSON.stringify(graphqlQuery),
				};

				const response = await fetch(endpoint, options);
				const winnerData = await response.json();
				// console.log(winnerData)

				// const today = new Date()
				// const year = today.getFullYear()
				// const monthNumber = today.getMonth() + 1
				// let season = ""

				// switch (monthNumber) {
				// 	case 1 || 2 || 3:
				// 		season = "Winter"
				// 		break;
				// 	case 4 || 5 || 6:
				// 		season = "Spring"
				// 		break;
				// 	case 7 || 8 || 9:
				// 		season = "Summer"
				// 		break;
				// 	case 10 || 11 || 12:
				// 		season = "Fall"
				// 		break;
				// 	default:
				// 		alert("There is no month")
				// }
				// console.log(year, season, monthNumber)
				if (winnerData.errors) {
					alert(winnerData.errors[0].message)
					// return navigateTo("/login")
				} else {
					alert("You have ran the winner query")
				}
				// console.log(userData.data.userAnimeData.admin)
				// this.isAdmin = userData.data.userAnimeData.admin
				// console.log(this.isAdmin)
			} catch (error) {
				alert(error)
			}
		},

		async login(res: any) {

			try {
				axios
					.post("http://localhost:8000/social-login/google/", {
						code: res.code,
					})
					.then((res) => {

						this.token = res.data.access_token;
						// localStorage.setItem('token', JSON.stringify(this.token))
						axios
							.get("http://127.0.0.1:8000/auth/user/", {
								headers: { Authorization: `Bearer ${res.data.access_token}` },
							})
							.then((res) => {


								let index = res.data.email.indexOf("@");



								let account = res.data.email.slice(index + 1);

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

								this.userID = res.data.pk
								this.username = res.data.username;
								// this.userData = res.data;
								this.first_name = res.data.first_name;
								this.last_name = res.data.last_name;
								this.email = res.data.email;
								this.isAuthenticated = true;
								this.redirect = true;
								this.getAdmin()
								return navigateTo("/");
								// this.$router.push("/")
								// router.push({ path: "/"})
							});
					});
			} catch (error) {
				alert(error)
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

				const res = await axios
					.get("http://127.0.0.1:8000/auth/user/", {
						headers: { Authorization: `Bearer ${this.token}` },
					})
					.then((res) => {});

			} catch (error) {
				if (!this.token) {
					return;
				} else if ((error = "AxiosError: Request failed with status code 401")) {

					alert("Your session has expired. Please login again!");
					this.logout();
					return navigateTo("/login");

					//add router.push
				}
			}
		},
		logout() {
			try {
				// console.log("logout")
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
				this.userID = null
				// this.$router.push("/")
				// googleLogout();
			} catch (error) {
				alert(error)
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
