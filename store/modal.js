export const state = () => ({
  show: false,
  isDelete: false,
  isChooseDevise: false,
  isAddRole: false,
  isAddAccess: false,
  isAddOperation: false,
  viewClient: false,
  viewOperation: false,
  viewAttente: false,
  loading: false,
  fetch: false,
});

export const mutations = {
  SHOW_MODAL(state) {
    state.show = true;
  },
  HIDE_MODAL(state) {
    state.show = false;
  },
  TOOGLE_MODAL(state) {
    state.show = !state.show;
  },
  TOOGLE_CHOOSE_DEVISE(state) {
    state.isChooseDevise = !state.isChooseDevise;
  },
  TOOGLE_ADD_ROLE(state) {
    state.isAddRole = !state.isAddRole;
  },
  TOOGLE_ADD_ACCESS(state) {
    state.isAddAccess = !state.isAddAccess;
  },
  TOOGLE_ADD_OPERATION(state) {
    state.isAddOperation = !state.isAddOperation;
  },
  TOOGLE_VIEW_OPERATION(state) {
    state.viewOperation = !state.viewOperation;
  },
  TOOGLE_ATTENTE_OPERATION(state) {
    state.viewAttente = !state.viewAttente;
  },
  TOOGLE_VIEW_CLIENT(state) {
    state.viewClient = !state.viewClient;
  },
  TOOGLE_MODAL_DELETE(state) {
    state.isDelete = !state.isDelete;
  },
  TOOGLE_LOADING_MODAL(state) {
    state.loading = !state.loading;
  },
  TOOGLE_FETCH_MODAL(state) {
    state.fetch = !state.fetch;
  },
};

export const actions = {
  showModal({ commit }) {
    commit("SHOW_MODAL");
  },
  hideModal({ commit }) {
    commit("HIDE_MODAL");
  },
  toogleModal({ commit }) {
    commit("TOOGLE_MODAL");
  },
  toogleModalDelete({ commit }) {
    commit("TOOGLE_MODAL_DELETE");
  },
  toogleModalChooseDevise({ commit }) {
    commit("TOOGLE_CHOOSE_DEVISE");
  },

  toogleModalAddRole({ commit }) {
    commit("TOOGLE_ADD_ROLE");
  },
  toogleModalAddAccess({ commit }) {
    commit("TOOGLE_ADD_ACCESS");
  },
  toogleModalAddOperation({ commit }) {
    commit("TOOGLE_ADD_OPERATION");
  },
  toogleModalViewOperation({ commit }) {
    commit("TOOGLE_VIEW_OPERATION");
  },
  toogleModalViewAttente({ commit }) {
    commit("TOOGLE_ATTENTE_OPERATION");
  },
  toogleModalViewClient({ commit }) {
    commit("TOOGLE_VIEW_CLIENT");
  },
  toogleModalLoading({ commit }) {
    commit("TOOGLE_LOADING_MODAL");
  },
  toogleModalFetch({ commit }) {
    commit("TOOGLE_FETCH_MODAL");
  },
};
