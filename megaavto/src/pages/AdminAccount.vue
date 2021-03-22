<template>
  <div>
    <Sidebar />
    <Account />
  </div>
</template>

<script>
import Account from "../components/Account";
import Sidebar from "../components/Sidebar";
export default {
  name: "AdminAccount",
  components: {
    Sidebar,
    Account,
  },
};
</script>

<style></style>
