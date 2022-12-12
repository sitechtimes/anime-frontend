<template>
  <div id="login">
    <form action="" class="login-form">
      <h1>Technime</h1>
      <input type="text">
      <input type="text">
      <p>Forget your password?</p>
      <button>Login</button>
      <p>Need to register?</p>
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
    border-radius: 30px;
}
</style>