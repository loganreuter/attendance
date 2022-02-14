<template>
  <div class="login-bg">
    <div class="login-form">
      <router-link to="/">Back</router-link>
      <h2>Login</h2>
      <div class="login-field">
        <label for="">Username:</label>
        <input type="text" name="" id="" />
      </div>
      <div class="login-field">
        <label for="">Password:</label>
        <input type="text" name="" id="" />
      </div>

      <button class="login-btn">Login</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style lang="scss" scoped>
.login-bg {
  width: 100%;
  height: 100%;
  background-color: var(--off-white);
  position: relative;
}

.login-form {
  aspect-ratio: 1/1;
  width: 30%;
  background-color: #fff;
  position: absolute;
  inset: 0;
  margin: auto;
  box-shadow: 0 0 5px -4px #000;
  border-radius: 5px;

  h2 {
    color: var(--accent-color);
  }

  .login-btn {
    font-size: 18px;
    background-color: var(--accent-color);
    border-radius: 5rem;
    padding: 0.5rem 0.75rem;
    color: #fff;
    border: none;
    outline: none;

    &:hover {
      cursor: pointer;
      filter: brightness(0.75);
    }
  }
}

.login-field {
  font-size: 20px;
  position: relative;
  margin-top: 4rem;

  label {
    position: absolute;
    top: -1.5rem;
    transform: translateX(-10px);
  }

  input {
    outline: none;
    border: none;
    border-bottom: 3px solid #ccc;
    width: 60%;
    font-size: 20px;
    &:focus {
      border-bottom-color: var(--accent-color);
    }
  }
}
</style>
