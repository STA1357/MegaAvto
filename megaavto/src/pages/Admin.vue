<!-- @format -->

<template>
  <div class="bg-color">
    <Sidebar />
    <router-view />
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar';
export default {
  name: 'Admin',
  components: {
    Sidebar,
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    },
  },
  beforeMount() {
    if (!this.isLoggedIn) {
      this.$router.push('/');
    }
  },
};
</script>

<style>
.bg-color {
  height: 100%;
  width: 100%;
  background: url("../assets/23а9о.jpeg") no-repeat center center;
  background-size: cover;
}
</style>
