import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
/* eslint-disable no-underscore-dangle */

export default new Vuex.Store({
  state: {
    token: '',
    user: '',
  },
  mutations: {
    SIGNIN(state, { info }) {
      state.token = info.token;
      state.user = info._id;
    },
  },
  actions: {
    signin({ commit }, info) {
      commit('SIGNIN', info);
    },
  },
});
