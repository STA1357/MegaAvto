<!-- @format -->

<template>
  <div id="app">
    <v-app>
      <Navbar />
      <router-view />
    </v-app>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  components: { Navbar },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  box-sizing: border-box;
  margin-bottom: -25px;
  overflow: hidden;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.content-admin {
  display: flex;
  justify-content: center;
  margin-left: 200px;
  position: relative;
  z-index: 20;
  margin-right: 20px;
  margin-top: 50px;
  padding-bottom: 10px;
  @media screen and(max-width: 960px) {
    margin: 50px 20px 10px 20px;
  }
}
</style>
