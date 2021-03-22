<!-- @format -->

<template>
  <div class="content-admin">
    <v-col v-if="!getAdminUser" cols="12" md="10">
      <h1 style="color: darkorange">Пользователи</h1>
      <div v-for="(user, i) in allUsers" :key="i">
        <v-card
          @click="userHandler(user._id)"
          elevation="0"
          class="user_card mb-2"
          v-if="!user.isAdmin"
        >
          <ul
            class="d-flex justify-content-between align-content-center users_list"
          >
            <li>№{{ i }}</li>
            <li>Имя: {{ user.first_name }}</li>
            <li>Фамилия: {{ user.last_name }}</li>
            <li>Почта: {{ user.email }}</li>
            <li>Телефон: {{ user.phone_number }}</li>
            <li>
              <v-icon
                @click="deleteUser(user._id)"
                color="red"
                class="delete_user"
                >mdi-delete</v-icon
              >
            </li>
          </ul>
        </v-card>
      </div>
    </v-col>
  </div>
</template>

<script>
export default {
  computed: {
    allUsers() {
      return this.$store.getters.getAllUsers;
    },
    getAdminUser() {
      return this.$store.getters.getAdminUser;
    },
  },
  methods: {
    async fetchUsers() {
      await this.$store.dispatch("allUsers");
    },
    deleteUser(id) {
      this.$store.dispatch("deleteUser", { _id: id });
    },
    userHandler(id) {
      this.$router.push(`/admin/users/${id}`);
      this.$store.dispatch("changeUserPage");
    },
  },
  beforeMount() {
    this.fetchUsers();
  },
};
</script>

<style lang="scss">
.users_list {
  padding: 10px;
  list-style-type: none;
}
.delete_user {
  cursor: pointer;
}
.user_card {
  cursor: pointer;
}
.content-admin{
  background-color: rgba(0, 0, 0, 0.8);
  border-radius: 15px;
  padding: 20px;
}
@media screen and (max-width: 570px){
  ul{
    display: flex;
    flex-direction: column!important;
  }
  li{
    font-size: 14px;
  }
}
</style>
