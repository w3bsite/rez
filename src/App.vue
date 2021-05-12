<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">کاربر</router-link> |
      <router-link to="/user/list">لیست کاربران</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  direction: rtl;
  text-align: right;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 30px;
  text-align: center;
  color: #2c3e50;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
