<!-- @format -->

<template>
  <!-- <div > -->
  <div :class="!getSidebar ? 'sidebar mobile-sidebar' : 'sidebar'">
    <v-card class="sidebar_card d-flex flex-column" elevation="0">
      <!-- <router-link to="/admin/profile">Профиль</router-link>
      <router-link to="/admin/account">Мой счёт</router-link>
      <router-link to="/admin/vehicle">Мои авто</router-link> -->
      <!-- <v-navigation-drawer permanent elevation="0"> -->
      <!-- <v-system-bar></v-system-bar> -->
      <v-btn
        depressed
        :ripple="false"
        @click="openSidebar"
        color="#EF9E30"
        class="white--text close-sidebar"
        ><v-icon>mdi-close</v-icon></v-btn
      >
      <v-list>
        <!-- <v-list-item>
            <v-list-item-avatar>
              <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
            </v-list-item-avatar>
          </v-list-item> -->

        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
              {{
                getUser.first_name.substring(0, 1).toUpperCase() +
                  getUser.first_name.substring(1).toLowerCase()
              }}
              {{
                getUser.last_name.substring(0, 1).toUpperCase() +
                  getUser.last_name.substring(1).toLowerCase()
              }}
            </v-list-item-title>
            <v-list-item-subtitle>{{ getUser.email }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <!-- <v-divider></v-divider>

          <v-btn
            depressed
            :ripple="false"
            plain
            outlined
            color="rgb(117, 115, 115)"
            class=" d-flex justify-content-between align-center link-btn"
            active-class="active-link-btn"
            :to="`/admin/exchange`"
          >
            <v-icon left>mdi-car</v-icon>
            Обмен</v-btn
          > -->

        <v-divider></v-divider>
      </v-list>
      <v-list nav dense>
        <!-- <v-list-item-group v-model="selectedItem" color="#f69e30">
            <v-list-item link
              ><v-icon>mdi-account</v-icon>
              <router-link to="/admin/profile"
                >Профиль</router-link
              ></v-list-item
            >
            <v-list-item class="r-link" link>
              <v-icon>mdi-cash</v-icon>
              <router-link class="r-link " to="/admin/account"
                >Мой счёт</router-link
              ></v-list-item
            >
            <v-list-item link>
              <v-icon>mdi-star</v-icon>
              <router-link to="/admin/vehicle"
                >Мои авто</router-link
              ></v-list-item
            >
          </v-list-item-group> -->
        <!-- <v-list-item-group>
            <v-list-item :ripple="false" v-for="(item, i) in items" :key="i">
              <v-list-item-content> -->
        <v-btn
          v-for="(item, i) in items"
          :key="i"
          depressed
          :ripple="false"
          plain
          outlined
          color="rgb(117, 115, 115)"
          class=" d-flex justify-content-between align-center link-btn mt-3"
          active-class="active-link-btn"
          :to="`/admin/${item.link}`"
        >
          <v-icon left style="color: darkorange">{{ item.icon }}</v-icon>
          {{ item.text }}</v-btn
        >
        <v-btn
          v-if="isAdmin"
          depressed
          :ripple="false"
          plain
          outlined
          color="rgb(117, 115, 115)"
          class=" d-flex justify-content-between align-center link-btn mt-3"
          active-class="active-link-btn"
          to="/admin/users"
        >
          <v-icon left style="color: darkorange">mdi-account-multiple</v-icon>
          Пользователи</v-btn
        >
        <!-- </v-list-item-content>
            </v-list-item>
          </v-list-item-group> -->
      </v-list>
      <!-- </v-navigation-drawer> -->
    </v-card>
  </div>

  <!-- </div> -->
</template>

<script>
export default {
  data: () => ({
    // selectedItem: 0,
    items: [
      { text: "Обмен", icon: "mdi-car", link: "exchange" },
      { text: "Профиль", icon: "mdi-account", link: "profile" },
      { text: "Мой счёт", icon: "mdi-cash", link: "account" },
      { text: "Мои авто", icon: "mdi-star", link: "vehicle" },
    ],
  }),
  computed: {
    getUser() {
      return this.$store.getters.getUser;
    },
    isAdmin() {
      return this.$store.getters.isAdmin;
    },
    getSidebar() {
      return this.$store.getters.getSidebar;
    },
  },
  methods: {
    openSidebar() {
      this.$store.dispatch("changeSidebar");
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 180px;
  background-color: rgb(228, 226, 226, 0.8);
  z-index: 98;
  transition: all 1s;
  opacity: 0.7;
  @media screen and(max-width: 960px) {
    left: auto;
    right: 0;
    transform: translateX(200px);
    box-shadow: 0 0 10px 0 rgba(136, 152, 170, 0.25) !important;
    z-index: 150;
  }
  &.mobile-sidebar {
    transform: translateX(0);
  }
}

.sidebar {
  & a {
    display: block;
    width: 100%;
    color: #000;
    text-decoration: none;
    // &.router-link-exact-active {
    //   color: #f69e30;
    //   text-decoration: none;
    // }
  }
}
.sidebar_card {
  position: relative;
  padding-top: 20px;
  width: 100%;
  height: 100%;
  z-index: 99;
  padding-top: 50px;
}
.link-btn {
  text-transform: capitalize;
  font-size: 14px !important;
  border-image: repeating-linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.38) 0,
      rgba(0, 0, 0, 0.38) 2px,
      transparent 0,
      transparent 4px
    )
    1 repeat;
  border: 1px black;
}
.active-link-btn {
  background-color: #dededc;
  color: #000 !important;
}
.v-btn--outlined {
  border: 1px dotted rgba(0, 0, 0, 0.38);
}
.close-sidebar {
  position: absolute;
  top: 0;
  left: 0;
  @media (min-width: 960px) {
    display: none;
  }
}
</style>
