<template>
  <div id="login">
    <img class="img" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5e5896a5-4a79-496a-bea4-81f26cfa2650/de910q8-18db91c0-990c-420a-8a95-b78f7a57eccd.png/v1/fill/w_1280,h_2391,strp/klee_genshin_impact_character_render_by_deg5270_de910q8-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjM5MSIsInBhdGgiOiJcL2ZcLzVlNTg5NmE1LTRhNzktNDk2YS1iZWE0LTgxZjI2Y2ZhMjY1MFwvZGU5MTBxOC0xOGRiOTFjMC05OTBjLTQyMGEtOGE5NS1iNzhmN2E1N2VjY2QucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.L8L6CqwfET7ty7Q-sHFupjSZalDiteazo-x6n61e6v4" alt="">
    <form action="" class="login-form">
      <div class="login-content">
        <h1 class="title">Technime</h1>
        <p class="login-msg">Welcome to Technime. Sign in here.</p>
        <GoogleLogin v-if="userStore.isAuthenticated == false" :callback="userStore.login"  class="login-with-google-btn">
                      <!-- <button>Sign in with Google</button> -->
          <p class="login-header">Sign in with Google</p>
        </GoogleLogin>
        <img class="gif" src="https://www.icegif.com/wp-content/uploads/icegif-2013.gif" alt="">
      </div>
    </form>
  </div>
</template>

<script >
import { useUserStore } from '~~/stores/userStore';
import { CallbackTypes } from 'vue3-google-login';
// const router = useRouter()

export default {
  name: 'login',
  setup(){
        const userStore = useUserStore()
        // userStore.$persist()
        // console.log(userStore.userData)

        return{
            userStore,
        }
    },
    methods: {
      signOut() {
        const auth2 = gapi.auth2.getAuthInstance()
        auth2.signOut().then(() => {
          console.log("user is signed out")
        })
      }
    }
}
</script>

<style scoped>


#login {
  padding-top: 9vh;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}
.img {
  height: 70vh;
}
.login-form {
  color: var(--white);
  background: var(--primary);
  height: 70vh;
  width: 30vw;
  border-radius: 30px;
  box-shadow: inset 0 0 60px var(--secondary-dark);
  display: flex;
  justify-content: center;
  padding: 4rem 1rem;
}
.login-content {
  width: 80%;
  display: flex;
  flex-direction: column;
  text-align: center;
}
.title {
  font-size: var(--h1);
}
.login-msg {
  font-size: var(--h5);
}
.gif {
  object-fit: cover;
  height: 50%;
}
.login-with-google-btn {
  cursor: pointer;
  transition: background-color .3s, box-shadow .3s;
  
  margin: 3rem 0;
  padding: 12px 16px 12px 42px;
  border: none;
  border-radius: 3px;
  box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 1px 1px rgba(0, 0, 0, .25);
  
  color: #757575;
  font-size: 14px;
  font-weight: 500;
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
  
  background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=);
  background-color: white;
  background-repeat: no-repeat;
  background-position: 12px 15px;
}

.login-with-google-btn:hover {
  box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 2px 4px rgba(0, 0, 0, .25);
}
  
.login-with-google-btn:active {
    background-color: #eeeeee;
  }

.login-with-google-btn:focus {
  outline: none;
  box-shadow: 
    0 -1px 0 rgba(0, 0, 0, .04),
    0 2px 4px rgba(0, 0, 0, .25),
    0 0 0 3px #c8dafc;
}
  
.login-with-google-btn:focus:disabled {
  filter: grayscale(100%);
  background-color: #ebebeb;
  box-shadow: 0 -1px 0 rgba(0, 0, 0, .04), 0 1px 1px rgba(0, 0, 0, .25);
  cursor: not-allowed;
}

@media screen and (max-width: 1285px) {
.login-form {
  width: 40vw;
  height: 72vh;
}
.login-with-google-btn {
  font-size: 17px;
}
}

@media screen and (max-width: 1025px) {
.title {
  font-size: var(--h2);
}
.login-form {
  width: 40vw;
  height: 75vh;
}
.login-with-google-btn {
  font-size: 13px;
}
}

@media screen and (max-width: 915px) {
.img {
  display: none;
}
.title {
  font-size: 7rem;
}
.login-form {
  width: 80%;
}
.login-with-google-btn {
  font-size: var(--h5);
}
}

@media screen and (max-width: 825px) {
.img {
  display: none;
}
.login-form {
  width: 80vw;
  height: 70vh;
}
}

@media screen and (max-width: 767px) {
#login {
  padding: 0;
  height: 85vh;
}
}

@media screen and (max-width: 550px) {
.img {
  display: none;
}
.title {
  font-size: var(--h1);
}
.login-form {
  width: 85vw;
  height: 75vh;
}
.login-with-google-btn {
  font-size: 14px;
}
}

@media screen and (max-width: 415px) {
.img {
  display: none;
}
.title {
  font-size: var(--h2);
}
.login-form {
  width: 90vw;
  height: 66vh;
}
.login-with-google-btn {
  font-size: 16px;
}
}

@media screen and (max-width: 285px) {
.img {
  display: none;
}
.title {
  font-size: var(--h2);
}
.login-form {
  width: 88vw;
  height: 67vh;
}
.login-with-google-btn {
  font-size: 11px;
}
}
</style>