/** @format */

import axios from "axios";

export default {
  state: {
    loading: false,
    products: JSON.parse(localStorage.getItem("products")) || [],
    myCars: JSON.parse(localStorage.getItem("myCars")) || [],
    autoRiaCredentials: JSON.parse(localStorage.getItem("credentials")) || "",
    _API_KEY: "7SOvB6WswjByVG5cZQ05yhHJYOnp3jcZR2NeRlw0",
  },
  mutations: {
    cars_request(state) {
      state.loading = true;
    },
    async cars_request_success(state, allCars) {
      state.loading = false;
      state.myCars = allCars;
    },
    set_autoria_credentials(state, credentials) {
      state.loading = false;
      state.autoRiaCredentials = credentials;
    },
    cars_request_error(state) {
      state.loading = false;
    },
  },
  actions: {
    createCredentials({ commit }, credentials) {
      try {
        commit("cars_request");
        commit("set_autoria_credentials", credentials);
        localStorage.setItem("credentials", JSON.stringify(credentials));
      } catch (e) {
        console.log(e);
      }
    },
    async fetchMyCars({ commit, state }) {
      try {
        if (state.myCars.length !== 0) {
          return;
        }
        console.log("fetch cars");
        commit("cars_request");
        const { data } = await axios(
          `https://developers.ria.com/auto/used/autos/ids?user_id=${state.autoRiaCredentials.autoRiaId}&api_key=${state._API_KEY}`
        );
        const allCars = [];

        for (let i of data.active.moderated) {
          const { data: myCar } = await axios(
            `https://developers.ria.com/auto/info?api_key=${state._API_KEY}&auto_id=${i}`
          );
          allCars.push(myCar);
        }
        commit("cars_request_success", allCars);

        localStorage.setItem("myCars", JSON.stringify(state.myCars));
      } catch (e) {
        console.log(e);
        localStorage.removeItem("credentials");
        commit("cars_request_error");
      }
    },
  },
  getters: {
    getProducts: (state) => state.products,
    getMyCars: (state) => state.myCars,
    getCredentials: (state) => state.autoRiaCredentials,
    getApiKey: (state) => state._API_KEY,
  },
};
