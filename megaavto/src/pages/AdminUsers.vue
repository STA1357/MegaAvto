<!-- @format -->

<template>
  <div>
    <Sidebar />
    <Users />
    <router-view />
  </div>
</template>

<script>
import Sidebar from '../components/Sidebar';
import Users from '../components/Users';
export default {
  name: 'AdminUsers',
  components: {
    Sidebar,
    Users,
  },
};
</script>

<style></style>
