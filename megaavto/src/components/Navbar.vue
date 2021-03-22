<!-- @format -->

<template>
  <div class="myNav">
    <v-app-bar class="nav-color" color=" navbar-main" dense dark style="height: 64px">
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-toolbar-title style="margin-top: 20px">
        <router-link
          class="router-link"
          to="/"
          style="color: #f69e30; font-weight: 600;"
          ><b>M</b>ega<b>A</b>vto
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>


        <v-btn
          class="button btn-about"
        style="color: #f69e30; font-weight:600; height: 34px; border-radius: 15px;
                margin: 12px 25px 0 0; background: none;"
        >О нас</v-btn>
        <v-btn
          class="button btn-about"
        style="color: #f69e30; font-weight:600; height: 34px; border-radius: 15px;
                margin: 12px 25px 0 0; background: none;"
        >Контакты</v-btn>

        <v-btn
          style="opacity: 1 !important; outline: none !important;"
          plain
          v-if="!isLoggedIn"
          class="button-enter"
          to="/login"
        ><span class="span_one">Войти в кабинет</span><span class="span_two">Войти</span></v-btn
        >

      <v-btn
        plain
        v-if="isLoggedIn"
        class="button-enter"
        style="color: #f69e30; font-weight:400; height: 34px"
        @click="logout"
        >Вихід</v-btn
      >
      <v-app-bar-nav-icon
        :ripple="false"
        class="mobile-btn"
        @click="openSidebar"
        color="#EF9E30"
        style="visibility: hidden"
      ></v-app-bar-nav-icon>
      <!-- <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn> -->
      <!-- <v-menu left bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on">
            <v-icon style="color: #f69e30">mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="n in 5" :key="n" @click="() => {}">
            <v-list-item-title style="color: #f69e30"
              >Option {{ n }}</v-list-item-title
            >
          </v-list-item>
        </v-list>
      </v-menu> -->
    </v-app-bar>
  </div>
</template>

<script>
import { mapGetters } from "vuex";


export default {
  components: {},
  computed: mapGetters(["isLoggedIn"]),
  methods: {
    async logout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
    openSidebar() {
      this.$store.dispatch("changeSidebar");
    },
  },
  mounted() {
    console.log(this.isLoggedIn);
  },
};
</script>

<style lang="scss" scoped>
  .v-btn--plain.v-btn__content {
    opacity: 1 !important;
  }
.span_one{
  display: block;
  padding-top: 1px;
}
.span_two{
  display: none;
  padding-top: 1px;
}

.button-enter{
  background: linear-gradient(180deg, #F2994A 0%, #FF7A7A 100%)!important;
  color: white !important;
  opacity: 1 !important;
  font-weight:600; height: 34px; border-radius: 15px;
  margin-top: 12px;
}

.g > div { background: #fff; }

  @media (max-width: 960px) {
    .span_one{
      display: none;
    }
    .span_two{
      display: block;
    }
    .button btn-about{
      display: none !important;
    }
  }

.router-link {
  color: #fff;
  text-decoration: none;
}
.button {
  position: relative;
  color: white;
  text-decoration: none;
  display: inline-block;
  align-items: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-top: 2px solid #F2994A;
  border-bottom: 2px solid #FF7A7A;
  border-left: 2px solid #F2994A;
  border-right: 2px solid #FF7A7A;
  border-radius: 1000px;
  padding: 0 50px!important;
  margin: 40px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: 0.5s all ease-in-out;
  &:hover {
    cursor: pointer;
    background: linear-gradient(180deg, #F2994A 0%, #FF7A7A 100%)!important;
    color: white !important;
    animation: none;
    //animation-play-state: paused;
  }
}
@media screen and (max-width: 960px){
  .button{
    display: none;
  }
}
.navbar-main {
  position: relative;
  z-index: 100;
}
.nav-color {
  background-color: white !important;
  position: fixed;
}
b {
  color: #2c3e50;
  font-weight: 600;
}
.button-pulse {
  animation: pulse 3s infinite 3s cubic-bezier(0.25, 0, 0, 1);
  box-shadow: 0 0 0 0 orange;
}
@keyframes pulse {
  to {
    box-shadow: 0 0 0 18px rgba(255, 255, 255, 0);
  }
}
  .v-btn--plain:not(.v-btn--active):not(.v-btn--loading):not(:focus):not(:hover)
  .v-btn__content {
    opacity: 1 !important;
    text-transform: capitalize;
    font-size: 14px !important;
    border: none;
  }
</style>
