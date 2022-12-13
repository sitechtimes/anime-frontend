<template>
  <div id="login">
    <form action="" class="login-form">
      <h1 class="title">Technime</h1>
      <input type="text" placeholder="Email" class="input-box">
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
    position: absolute;
    top: 18vh;
    left: 55vw;
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
}
.redirect {
  font-size: var(--h5);
  margin-top: 0.5rem;
}
.submit {
  text-align: center;
}
.submit-btn{
    background: var(--secondary);
    border-radius: 25px;
    font-style: normal;
    color: var(--white) ;
    font-weight: var(--fw-semi);
    font-size: var(--h4);
    padding: 1rem 3rem;
    border: 0;
    width: 10vw
};
</style>