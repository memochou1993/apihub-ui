import Vue from 'vue';
import Vuex from 'vuex';
import project from './modules/project';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    project,
  },
  state: {
    loading: false,
    error: null,
  },
  mutations: {
    setLoading(state, loading) {
      state.loading = loading;
    },
    setError(state, error) {
      state.error = error;
    },
  },
  getters: {
    me() {
      return '1';
    },
  },
  actions: {
    //
  },
});
