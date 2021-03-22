export default {
  state: {
    adminUser: false,
  },
  mutations: {
    setUser(state) {
      state.adminUser = !state.adminUser;
    },
  },
  actions: {
    changeUserPage({ commit }) {
      commit("setUser");
    },
  },
  getters: {
    getAdminUser: (state) => state.adminUser,
  },
};
