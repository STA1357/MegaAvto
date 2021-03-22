<!-- @format -->

<template>
  <div>
    <Sidebar />
    <Exchange />
    <router-view />
  </div>
</template>

<script>
import Exchange from "../components/Exchange";
import Sidebar from "../components/Sidebar";
export default {
  name: "AdminExchange",
  components: {
    Sidebar,
    Exchange,
  },
};
</script>

<style></style>
