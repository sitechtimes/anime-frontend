import { defineStore } from "pinia"
import axios from "axios"
import { createPersistedState } from "pinia-plugin-persistedstate"


export const useUserStore = defineStore("user", {
    state: () => ({
        // first_name: null,
        // last_name: null,
        // email: null
        // userData: null,
        // token: null,
        userData: JSON.parse(localStorage.getItem("user")),
        token: JSON.parse(localStorage.getItem("token"))
    }),
    actions: {
        async login(res: any){
            try {
                axios.post("http://localhost:8000/social-login/google/", {access_token: res.access_token}).then((res) => {
                    this.token = res.data.access_token
                    localStorage.setItem('token', JSON.stringify(this.token))
                    axios.get('http://127.0.0.1:8000/auth/user/', {headers:{"Authorization": `Bearer ${res.data.access_token}`}}).then((res)=>
                    {
                        console.log(res.data.first_name)
                        localStorage.setItem("user", res.data.first_name)
                        // this.user = res.data.first_name
                        this.userData = res.data
                    }
                    )
                    
                })
            } catch (error) {
                console.log(error)
            }
        }
    },
    // persist: 

})