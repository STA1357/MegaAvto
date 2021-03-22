/** @format */

export default {
  state: {
    sidebar: true,
  },
  mutations: {
    setSidebar(state) {
      state.sidebar = !state.sidebar;
    },
  },
  actions: {
    changeSidebar({ commit }) {
      commit("setSidebar");
    },
  },
  getters: {
    getSidebar: (state) => state.sidebar,
  },
};
