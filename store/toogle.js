export const state = () => ({
  show: true,
});

export const mutations = {
  SHOW_MENU(state) {
    state.show = !state.show;
  },
  HIDE_MENU(state) {
    state.show = false;
  },
  TOOGLE_MENU(state) {
    state.show = !state.show;
  },
};

export const actions = {
  showMenu({ commit }) {
    commit("SHOW_MENU");
  },
  hideMenu({ commit }) {
    commit("HIDE_MENU");
  },
  toogleMenu({ commit }) {
    commit("TOOGLE_MENU");
  },
};
