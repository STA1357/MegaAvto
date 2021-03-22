/** @format */

import Vue from "vue";
import Vuex from "vuex";
import users from "./modules/users";
import cars from "./modules/cars";
import profile from "./modules/profile";
import user from "./modules/user";
import mobileSidebar from "./modules/mobileSidebar";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { users, cars, profile, user, mobileSidebar },
});
