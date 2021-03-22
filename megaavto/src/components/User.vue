<template>
  <div class="content-admin">
    <v-col cols="12" md="10">
      <v-card v-if="getAdminUser">
        <v-btn to="/admin/users">Назад</v-btn>
        <h1>{{ adminUser.first_name }}</h1>
      </v-card>
    </v-col>
  </div>
</template>

<script>
export default {
  computed: {
    getAdminUser() {
      return this.$store.getters.getAdminUser;
    },
    adminUser() {
      return this.$store.getters.getAdminPageUser;
    },
  },
  methods: {
    async fetchAdminUser() {
      await this.$store.dispatch("findUser", { id: this.$route.params.id });
    },
  },
  beforeMount() {
    this.fetchAdminUser();
    // console.log(this.getAdminUser);
  },
  beforeDestroy() {
    this.$store.dispatch("changeUserPage");
  },
};
</script>

<style lang="scss" scoped></style>
