import { defineStore } from "pinia";
import axios from "axios";
import { createPersistedState } from "pinia-plugin-persistedstate";
import { googleLogout } from "vue3-google-login";

export const useUserStore = defineStore("user", {
  state: () => ({
    // first_name: null,
    // last_name: null,
    // email: null
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
            this.token = res.data.access_token;
            // localStorage.setItem('token', JSON.stringify(this.token))
            axios
              .get("http://127.0.0.1:8000/auth/user/", {
                headers: { Authorization: `Bearer ${res.data.access_token}` },
              })
              .then((res) => {
                console.log(res.data.first_name);
                // localStorage.setItem("user", res.data.first_name)
                // this.userData = localStorage.getItem("user")
                // this.user = res.data.first_name
                this.userData = res.data;
                this.isAuthenticated = true;
                return navigateTo("/");
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
      this.userData = null;
      this.token = null;
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      location.reload();
      this.isAuthenticated = false;
      googleLogout();
    },
  },

  // persist: {
  //     storage: persistedState.cookiesWithOptions({
  //       sameSite: 'strict',
  //     }),
  //   },
  persist: true,
});