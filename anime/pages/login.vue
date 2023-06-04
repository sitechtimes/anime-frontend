<template>
  <div id="login">
    <img class="img" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5e5896a5-4a79-496a-bea4-81f26cfa2650/de910q8-18db91c0-990c-420a-8a95-b78f7a57eccd.png/v1/fill/w_1280,h_2391,strp/klee_genshin_impact_character_render_by_deg5270_de910q8-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjM5MSIsInBhdGgiOiJcL2ZcLzVlNTg5NmE1LTRhNzktNDk2YS1iZWE0LTgxZjI2Y2ZhMjY1MFwvZGU5MTBxOC0xOGRiOTFjMC05OTBjLTQyMGEtOGE5NS1iNzhmN2E1N2VjY2QucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.L8L6CqwfET7ty7Q-sHFupjSZalDiteazo-x6n61e6v4" alt="klee">
    <form action="" class="login-form">
      <div class="login-content">
        <p class="login-head">Technime</p>
        <p class="login-msg">Welcome to Technime. Sign in here.</p>
        <GoogleLogin v-if="userStore.isAuthenticated == false" :callback="userStore.login"  class="login-with-google-btn">
                      <!-- <button>Sign in with Google</button> -->
          <img class="google-logo" src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA" alt="google logo">
          <p class="login-header">Sign in with Google</p>
          <div class="hide"></div>
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


        return{
            userStore,
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
  justify-content: center;
  gap: 15rem;
  align-items: center;
}
.img {
  height: 70vh;
}
.login-form {
  color: var(--white);
  background: var(--primary);
  height: 70vh;
  width: 55rem;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  padding: 4rem 0;
}
.login-content {
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 80%;
  height: 100%;
}
.login-head {
  font-size: var(--h1);
}
.login-msg {
  font-size: var(--h5);
}
.gif {
  object-fit: cover;
  overflow: hidden;
}
.login-with-google-btn {
  margin: 3rem 0;
  padding: 1rem 3rem;
  border: none;
  border-radius: 3px;
  box-shadow: 0 1px 1px var(--login-shadow); 
  color: var(--shaded-text);
  font-size: var(--h5);
  font-weight: var(--fw-med);
  background-color: var(--white);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}
.login-with-google-btn:hover {
  box-shadow: 0 2px 4px var(--login-shadow);
}
.login-with-google-btn:active {
  background-color: var(--off-white);
}
.login-with-google-btn:focus:disabled {
  filter: grayscale(100%);
  cursor: not-allowed;
}
.google-logo {
  height: 1.5rem;
}
.hide {
  visibility: hidden;
  height: 1.5rem;
  width: 1.5rem;
}

@media screen and (max-width: 1440px) {
  #login {
    gap: 10rem;
  }
  .login-form {
    width: 50rem;
  }
  .login-msg {
    margin: -0.5rem 0;
  }
}

@media screen and (max-width: 1200px) {
  .login-head {
    font-size: var(--h2);
  }
  .login-with-google-btn {
    margin: 2rem 0;
  }
}

@media screen and (max-width: 1024px) {
  #login {
    gap: 5rem;
  }
  .login-form {
    width: 40rem;
  }
  .login-msg, .login-with-google-btn {
    font-size: var(--h6);
  }
}

@media screen and (max-width: 915px) {
  .login-form {
    height: 70vh;
  }
  .img {
    display: none;
  }
}

@media screen and (max-width: 767px) {
  #login {
    padding: 0;
    height: 85vh;
  }
}

@media screen and (max-width: 568px) {
  .login-form {
    width: 80vw;
  }
}

@media screen and (max-width: 425px) {
  .login-form {
    height: auto;
  }
  .login-head {
    font-size: var(--h3);
  }
  .login-msg, .login-with-google-btn {
    font-size: var(--h7);
  }
}
</style>