import { useUserStore } from "~~/stores/userStore";
import { useRouter } from "nuxt/app";


export default defineNuxtRouteMiddleware(() => {
  const userStore = useUserStore();
const router = useRouter()
    console.log("middleware")
    if (userStore.isAuthenticated === false) {
		alert("You must be logged in to view this page");
		router.push("/login");
	}
  })