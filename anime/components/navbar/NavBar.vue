<template>
    <section id="nav" class="nav">
        <nav class="navigation" :class="{ 'is-hidden': !showHeader }">
            <h1 id="logo">
                <<<<<<< HEAD
                <NuxtLink to="/">Technime</NuxtLink>
                =======
                <NuxtLink to="/" class="home-link">Technime</NuxtLink>
                >>>>>>> dev2
            </h1>
            <SearchBar />
            <ul class="routers">
                <li class="link">
                    <NuxtLink to="/awards" class="link-href">Awards</NuxtLink>
                </li>
                <li class="link">
                    <NuxtLink to="/ranking" class="link-href"
                        >Rankings</NuxtLink
                    >
                </li>
                <li class="link">
                    <NuxtLink to="/history" class="link-href">History</NuxtLink>
                </li>
                <<<<<<< HEAD ======= >>>>>>> dev2
                <NuxtLink
                    v-if="userStore.isAuthenticated == false"
                    to="/login"
                    class="link-href"
                >
                    <button class="log-in button">Log In</button></NuxtLink
                >
                <<<<<<< HEAD
                <NuxtLink
                    v-if="userStore.isAuthenticated == true"
                    to="/profile"
                    class="link-href"
                    ><img
                        src="https://th.bing.com/th/id/R.945f33b643f2ceffcdae90fb57c61854?rik=Ox1dcxb6rfOngw&riu=http%3a%2f%2fgetdrawings.com%2ffree-icon-bw%2ffree-avatars-icons-25.png&ehk=i8VrSYUn0ZsIdAnnI51DInJ0WdIXd3ukvat6kwZC%2f3c%3d&risl=&pid=ImgRaw&r=0"
                        alt=""
                        class="profile-button"
                /></NuxtLink>
                ======= >>>>>>> dev2
                <button
                    @click="userStore.logout"
                    v-if="userStore.isAuthenticated == true"
                    class="log-in button"
                >
                    Logout
                </button>
            </ul>
        </nav>
    </section>
</template>
<script lang="ts">
import SearchBar from "./SearchBar.vue";
import axios from "axios";
import { useUserStore } from "../../stores/userStore";

export default {
    name: "NavBar",
    components: {
        SearchBar,
    },
    setup() {
        const userStore = useUserStore();
        // const router = useRoute()
        // userStore.$persist()
        // console.log(userStore.userData)

        return {
            userStore,
            // router
        };
    },

    //     data: () => ({
    //     showHeader: true,
    //     lastScrollPosition: 0,
    //     scrollOffset: 40,
    //     user: null
    //   }),
    data() {
        return {
            showHeader: true,
            lastScrollPosition: 0,
            scrollOffset: 40,
        };
    },
    mounted() {
        this.lastScrollPosition = window.pageYOffset;
        window.addEventListener("scroll", this.onScroll);

        // console.log(this.user)
    },

    beforeDestroy() {
        window.removeEventListener("scroll", this.onScroll);
    },
    methods: {
        test() {},
        // Toggle if navigation is shown or hidden
        onScroll() {
            if (window.pageYOffset < 0) {
                return;
            }
            if (
                Math.abs(window.pageYOffset - this.lastScrollPosition) <
                this.scrollOffset
            ) {
                return;
            }
            this.showHeader = window.pageYOffset < this.lastScrollPosition;
            this.lastScrollPosition = window.pageYOffset;
        },
        // signOut() {
        //     const auth2 = gapi.auth2.getAuthInstance()
        //     auth2.signOut().then(() => {
        //       console.log("user is signed out")
        //     })
        // },
        // callback(res: any) {
        //     console.log(res.access_token)
        //     axios.post("http://localhost:8000/social-login/google/", {access_token: res.access_token}).then((res) => {
        //         console.log(res)
        //         axios.get('http://127.0.0.1:8000/auth/user/', {headers:{"Authorization": `Bearer ${res.data.access_token}`}}).then((res)=>
        //         {
        //             console.log(res.data.first_name)
        //             // this.user = res.data.first_name
        //             this.user = res.data
        //         }
        //         )

        //     })

        // }
    },
};
</script>
<style scoped>
/* .log-in {
    width: 100%;
} */
.navigation {
    z-index: 5;
    width: 100%;
    height: 9vh;
    padding: 1rem;
    display: flex;
    margin: 0 auto;
    position: fixed;
    align-items: center;
    align-self: stretch;
    justify-content: space-evenly;
    transition: 0.1s all ease-out;
    transform: translate3d(0, 0, 0);
    background-color: var(--tertiary);
}
.routers {
    width: 40%;
    display: flex;
    justify-content: space-between;
}
.routers {
    width: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.navbar.navbar--hidden {
    box-shadow: none;
    transform: translate3d(0, -100%, 0);
}
#logo {
    color: var(--white);
    font-size: var(--h2);
    transition: all 1s ease-in-out;
    -webkit-transition: all 1s ease-in-out;
}
.link {
    font-size: var(--h4);
}
.link:hover {
    color: var(--tertiary);
}
.navigation {
    transform: translateY(0);
    transition: transform 300ms linear;
}
.navigation.is-hidden {
    transform: translateY(-100%);
}
@media screen and (max-width: 1285px) {
    .log-in {
        width: 10rem;
        padding: 0.6rem;
        font-size: var(--h4);
    }
    .home-link {
        font-size: var(--h3);
    }
    .link-href {
        margin: 2px 5px;
        font-size: var(--h4);
    }
}
@media screen and (max-width: 1025px) {
    .log-in {
        width: 7rem;
        font-size: var(--h5);
    }
    .link-href {
        font-size: var(--h5);
    }
}
@media screen and (max-width: 915px) {
    .log-in {
        width: 7.8rem;
    }
    .home-link {
        padding: 0rem;
        font-size: var(--h3);
    }
    .link-href {
        margin: 1px 5px;
        font-size: var(--h4);
    }
}
@media screen and (max-width: 825px) {
    .log-in {
        width: 8.2rem;
        font-size: 1.65rem;
        margin-right: 5rem;
    }
    .home-link {
        font-size: var(--h3);
    }
    .link-href {
        margin: 1px 5px;
        font-size: 1.7rem;
    }
}
@media screen and (max-width: 770px) {
    .log-in {
        width: 7rem;
        font-size: 1.5rem;
    }
    .link-href {
        margin: 2px 5px;
        font-size: var(--h5);
    }
}
</style>
