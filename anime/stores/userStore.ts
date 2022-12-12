import { defineStore } from "pinia"
import axios from "axios"

export const useUserStore = defineStore("user", {
    state: () => ({
        // first_name: null,
        // last_name: null,
        // email: null
        userData: null
    }),
    actions: {
        async login(res: any){
            try {
                console.log(res.access_token)
                axios.post("http://localhost:8000/social-login/google/", {access_token: res.access_token}).then((res) => {
                    console.log(res)
                    axios.get('http://127.0.0.1:8000/auth/user/', {headers:{"Authorization": `Bearer ${res.data.access_token}`}}).then((res)=>
                    {
                        console.log(res.data.first_name)
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
    persist: true
})