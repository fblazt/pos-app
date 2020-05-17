import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex, axios);

export default new Vuex.Store({
  state: {
    menu: [],
    category: [],
    data: [],
  },
  mutations: {
    SET_MENU(state, menu) {
      state.menu = menu;
    },
    SET_CATEGORY(state, category) {
      state.category = category;
    },
    POST_MENU(state, menu) {
      state.menu = menu;
    },
  },
  actions: {
    allMenu({ commit }) {
      axios
        .get(`${process.env.VUE_APP_API_URL}menu`)
        .then((res) => {
          console.log(res.data);
          const menu = res.data.result;
          commit('SET_MENU', menu);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    allCategory({ commit }) {
      axios
        .get(`${process.env.VUE_APP_API_URL}category`)
        .then((res) => {
          console.log(res.data);
          const category = res.data.result;
          commit('SET_CATEGORY', category);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    addMenu({ commit }, menu) {
      axios
        .post(`${process.env.VUE_APP_API_URL}menu`, { menu })
        .then((res) => {
          console.log(res.menu);
          const data = res.menu.result;
          commit('POST_MENU', data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  modules: {
  },
});
