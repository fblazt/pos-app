import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex, axios);

export default new Vuex.Store({
  state: {
    menu: [],
    category: [],
  },
  mutations: {
    SET_MENU(state, menu) {
      state.menu = menu;
    },
    SET_CATEGORY(state, category) {
      state.category = category;
    },
  },
  actions: {
    allMenu({ commit }) {
      axios
        .get(`${process.env.VUE_APP_POS_API}menu`)
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
        .get(`${process.env.VUE_APP_POS_API}category`)
        .then((res) => {
          console.log(res.data);
          const category = res.data.result;
          commit('SET_CATEGORY', category);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  modules: {
  },
});
