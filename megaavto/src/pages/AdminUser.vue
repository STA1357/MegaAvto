<!-- @format -->

<template>
  <div>
    <User />
  </div>
</template>

<script>
import User from "../components/User";
export default {
  name: "AdminUser",
  components: {
    User,
  },
  computed: {
    getAdminPageUser() {
      return this.$store.getters.getAdminPageUser;
    },
  },
  methods: {
    fetchAdminUser(id) {
      this.$store.dispatch("findUser", { id });
    },
  },
};
</script>

<style></style>
