import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import project from './modules/project';
import endpoint from './modules/endpoint';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    project,
    endpoint,
  },
  state: {
    loading: false,
    error: null,
    noData: false,
    pages: 1,
    methodColors: {
      GET: 'blue',
      POST: 'green',
      PUT: 'orange',
      PATCH: 'amber',
      DELETE: 'red',
    },
  },
  mutations: {
    setLoading(state, loading) {
      state.loading = loading;
    },
    setError(state, error) {
      state.error = error;
    },
    setNoData(state, noData) {
      state.noData = noData;
    },
    setPages(state, pages) {
      state.pages = pages;
    },
  },
  getters: {
    me() {
      return '1';
    },
  },
  actions: {
    initialState(context) {
      context.commit('setLoading', true);
      context.commit('setError', null);
      context.commit('setNoData', false);
    },
  },
});
