import { defineStore } from "pinia";
import axios from "axios";
import { createPersistedState } from "pinia-plugin-persistedstate";
import { googleLogout } from "vue3-google-login";
// const router = useRouter()

export const useUserStore = defineStore("user", {
  state: () => ({
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
    async login(res: any) {
      try {
        axios
          .post("http://localhost:8000/social-login/google/", {
            access_token: res.access_token,
          })
          .then((res) => {
            console.log(res.data)
            this.token = res.data.access_token;
            // localStorage.setItem('token', JSON.stringify(this.token))
            axios
              .get("http://127.0.0.1:8000/auth/user/", {
                headers: { Authorization: `Bearer ${res.data.access_token}` },
              })
              .then((res) => {
                console.log(res.data);
                console.log(this.token)
                let index = res.data.email.indexOf("@")
                console.log(res.data.email.slice(index + 1))
                console.log(index)

                let account = res.data.email.slice(index + 1)

                if (account != "nycstudents.net") {
                  return alert("Need to login with your nycstudents.net")
                  
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
    logout() {
      try {
        // let user = useCookie('user')
        // user = null
        localStorage.removeItem("token");
        location.reload();
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
  persist: true,
});
