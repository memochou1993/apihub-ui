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
