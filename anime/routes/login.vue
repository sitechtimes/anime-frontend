<template>
  <div id="login">
    <form action="" class="login-form">
      <h1 class="title">Technime</h1>
      <input type="text">
      <div>
        <input type="text">
        <p>Forget your password?</p>
      </div>
      <div>
        <button>Login</button>
        <p>Need to register?</p>
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
    gap: 2vh;

    border-radius: 30px;
    position: absolute;
    top: 18vh;
    left: 55vw;
}
.title {
  font-size: var(--h1);
}
input {
  font-size: var(--h5);
  border: none;
  border-radius: 10px;
  outline: none;
  padding: 1rem;
}
</style>