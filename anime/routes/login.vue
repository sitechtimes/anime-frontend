<template>
  <div id="login">
    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5e5896a5-4a79-496a-bea4-81f26cfa2650/de910q8-18db91c0-990c-420a-8a95-b78f7a57eccd.png/v1/fill/w_1280,h_2391,strp/klee_genshin_impact_character_render_by_deg5270_de910q8-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjM5MSIsInBhdGgiOiJcL2ZcLzVlNTg5NmE1LTRhNzktNDk2YS1iZWE0LTgxZjI2Y2ZhMjY1MFwvZGU5MTBxOC0xOGRiOTFjMC05OTBjLTQyMGEtOGE5NS1iNzhmN2E1N2VjY2QucG5nIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.L8L6CqwfET7ty7Q-sHFupjSZalDiteazo-x6n61e6v4" alt="" class="img">
    <form action="" class="login-form">
      <h1 class="title">Technime</h1>
      <input type="text" placeholder="Email" spellcheck="false" class="input-box">
      <div class="password">
        <input type="password" placeholder="Password" class="input-box">
        <p class="redirect">Forget your password?</p>
      </div>
      <div class="submit">
        <button type="submit" class="submit-btn">Login</button>
        <p class="redirect">Need to register?</p>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'login',
  components:{
  
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 70vh;
    width: 30vw;
    gap: 3vh;
    border-radius: 30px;
    box-shadow: inset 0 0 15px black;
}
.title {
  font-size: var(--h1);
}
.password {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.input-box {
  font-size: var(--h4);
  border: none;
  border-radius: 15px;
  outline: none;
  padding: 1.5rem 2rem;
  width: 23vw;
  background: var(--secondary);
  color: var(--white);
}
::placeholder {
  color: white;
  opacity: 85%;
}
.input-box:focus, .submit-btn:hover {
  background: var(--secondary-dark);
}
.redirect {
  font-size: var(--h5);
  margin-top: 0.5rem;
}
.redirect:hover {
  filter: brightness(90%);
}
.submit {
  text-align: center;
}
.submit-btn{
  background: var(--secondary);
  transition: 0.25s;
  border-radius: 25px;
  color: var(--white) ;
  font-weight: var(--fw-semi);
  font-size: var(--h4);
  padding: 1rem 3rem;
  border: 0;
  width: 10vw
};
</style>