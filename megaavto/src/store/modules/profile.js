/** @format */

export default {
  state: {
    editState: true,
  },
  mutations: {
    setEdit(state) {
      state.editState = !state.editState;
    },
  },
  actions: {
    changeEdit({ commit }) {
      commit('setEdit');
    },
  },
  getters: {
    getEdit: (state) => state.editState,
  },
};
