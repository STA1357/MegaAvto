<!-- @format -->

<template>
  <div>
    <Sidebar />
    <Profile />
    <router-view />
  </div>
</template>

<script>
import Profile from '../components/Profile';
import Sidebar from '../components/Sidebar';
export default {
  name: 'AdminProfile',
  components: {
    Sidebar,
    Profile,
  },
};
</script>

<style></style>
