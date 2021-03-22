<template>
  <div>
    <Sidebar />
    <Vehicle />
  </div>
</template>

<script>
import Vehicle from "../components/Vehicle";
import Sidebar from "../components/Sidebar";
export default {
  name: "AdminVehicle",
  components: {
    Sidebar,
    Vehicle,
  },
};
</script>

<style></style>
