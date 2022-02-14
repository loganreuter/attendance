<template>
  <router-view class="view" />
</template>

<style lang="scss">
:root {
  --accent-color: #6fb8dd;
  --off-white: #ddd2;
  --disabled-text: #ccc;
  --text-color: #444;
}

body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
}

.view {
  min-height: 0;
  min-width: 0;
  flex: 1 1 auto;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
