<template>
  <router-link v-if="!this.$store.state.isLoggedIn" to="/login">login</router-link>
  <router-view/>
</template>

<style>
#app {
  font-family: Helvetica, Avenir,  Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
