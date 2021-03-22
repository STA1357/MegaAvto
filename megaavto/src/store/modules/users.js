/** @format */

import axios from "axios";

export default {
  state: {
    loading: false,
    user: JSON.parse(localStorage.getItem("user")) || {},
    notification: {
      message: "",
      active: false,
    },
    users: JSON.parse(localStorage.getItem("users")) || {},
    adminPageUser: JSON.parse(localStorage.getItem("adminPageUser")) || {},
  },
  mutations: {
    auth_request(state) {
      state.loading = true;
    },
    all_users_request(state) {
      state.loading = true;
    },
    async auth_success(state, data) {
      state.loading = false;
      state.user = await data;
    },
    async user_notification(state, data) {
      state.loading = false;
      state.notification = await data;
    },
    async all_users_request_success(state, data) {
      state.loading = false;
      state.users = await data;
    },
    async adminUser(state, data) {
      state.adminPageUser = data;
    },
    auth_error(state) {
      state.loading = false;
    },
    logout(state) {
      state.user = {};
    },
  },
  actions: {
    async login({ commit }, body) {
      try {
        commit("auth_request");
        const { data } = await axios.post("http://localhost:5002/api/login", {
          email: body.email,
          password: body.password,
        });
        console.log(data);
        if (data) {
          commit("auth_success", data);
          localStorage.setItem("user", JSON.stringify(data));
        }
      } catch (e) {
        commit("auth_error", e);
        localStorage.removeItem("user");
      }
    },
    async register({ commit }, body) {
      try {
        commit("auth_request");
        const { data } = await axios.post(
          "http://localhost:5002/api/register",
          {
            first_name: body.first_name,
            last_name: body.last_name,
            username: body.username,
            phone_number: body.phone,
            email: body.email,
            password: body.password,
            image: "../../public/avatar.png",
          }
        );
        if (data) {
          localStorage.setItem("user", JSON.stringify(data));
          commit("auth_success", data);
        }
      } catch (e) {
        commit("auth_error", e);
        localStorage.removeItem("user");
      }
    },
    async updateUser({ commit }, body) {
      try {
        commit("auth_request");
        const { data } = await axios.put(
          "http://localhost:5002/api/update",
          {
            first_name: body.first_name,
            last_name: body.last_name,
            phone_number: body.phone,
            email: body.email,
          },
          {
            headers: {
              Authorization: `Bearer ${
                JSON.parse(localStorage.getItem("user")).token
              }`,
            },
          }
        );
        console.log("data:", data);
        if (data) {
          localStorage.setItem("user", JSON.stringify(data.response));
          commit("auth_success", data.response);
          commit("user_notification", { message: data.message, active: true });
          setTimeout(
            () =>
              commit("user_notification", {
                message: data.message,
                active: false,
              }),
            2000
          );
        }
      } catch (e) {
        commit("auth_error", e);
        // localStorage.removeItem('user');
      }
    },
    async updateImage({ commit, state }, data) {
      const { data: updatedUser } = await axios.put(
        "http://localhost:5002/api/updateImage",
        { image: data },
        {
          headers: {
            Authorization: `Bearer ${state.user.token}`,
          },
        }
      );
      // console.log(updatedUser);
      commit("auth_success", updatedUser.response);
      localStorage.setItem("user", JSON.stringify(updatedUser.response));
    },
    async allUsers({ commit }) {
      commit("all_users_request");
      const { data } = await axios("http://localhost:5002/api");
      commit("all_users_request_success", data);
      localStorage.setItem("users", JSON.stringify(data));
      // console.log(data);
    },
    async findUser({ commit }, user) {
      // console.log(user.id);
      const { data } = await axios(`http://localhost:5002/api/${user.id}`);
      // console.log(data);
      commit("adminUser", data);
      localStorage.setItem("adminPageUser", JSON.stringify(data));
    },
    async deleteUser({ commit, dispatch, state }, data) {
      const { data: deletedUser } = await axios.delete(
        `http://localhost:5002/api/${data._id}`,
        {
          headers: {
            Authorization: `Bearer ${state.user.token}`,
          },
        }
      );
      // console.log(deletedUser);
      await dispatch("allUsers");
      commit("user_notification", {
        message: deletedUser.message,
        active: true,
      });
      setTimeout(
        () =>
          commit("user_notification", {
            message: deletedUser.message,
            active: false,
          }),
        2000
      );
    },
    async logout({ commit, rootState }) {
      commit("logout");
      rootState.cars.myCars = [];
      rootState.cars.autoRiaCredentials = "";
      localStorage.removeItem("user");
      localStorage.removeItem("credentials");
      localStorage.removeItem("myCars");
    },
  },
  getters: {
    isLoggedIn(state) {
      return !!state.user.token;
    },
    getUser: (state) => state.user,
    authStatus: (state) => state.status,
    isAdmin: (state) => state.user.isAdmin,
    getId: (state) => state.user._id,
    getEmail: (state) => state.user.email,
    getNotification: (state) => state.notification,
    getAllUsers: (state) => state.users,
    getAdminPageUser: (state) => state.adminPageUser,
  },
};
