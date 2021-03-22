/** @format */

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AdminExchange from "../pages/AdminExchange.vue";
import AdminAccount from "../pages/AdminAccount.vue";
import AdminVehicle from "../pages/AdminVehicle.vue";
import AdminUsers from "../pages/AdminUsers.vue";
import AdminUser from "../pages/AdminUser.vue";
import AdminProfile from "../pages/AdminProfile.vue";
import AdminEditProfile from "../pages/AdminEditProfile.vue";
import Admin from "../pages/Admin.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";


Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },

    {
      path: "/login",
      name: "LogIn",
      component: Login,
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
    },
    {
      path: "/admin",
      name: "Admin",
      component: Admin,
      redirect: "/admin/exchange",
      children: [
        {
          path: "exchange",
          name: "AdminExchange",
          component: AdminExchange,
        },
        {
          path: "profile",
          name: "AdminProfile",
          component: AdminProfile,
          children: [
            {
              path: "edit",
              name: "AdminEditProfile",
              component: AdminEditProfile,
            },
          ],
        },
        {
          path: "account",
          name: "AdminAccount",
          component: AdminAccount,
        },
        {
          path: "vehicle",
          name: "AdminVehicle",
          component: AdminVehicle,
        },
        {
          path: "users",
          name: "AdminUsers",
          component: AdminUsers,
          children: [
            {
              path: ":id",
              name: "AdminUser",
              component: AdminUser,
            },
          ],
        },
      ],
    },
  ],
});

export default router;
