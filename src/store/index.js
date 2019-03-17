import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
// import module from './modules/module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    // module,
  },
  state: {
    loading: false,
    error: null,
    project: null,
    projects: [],
  },
  mutations: {
    setLoading(state, loading) {
      state.loading = loading;
    },
    setError(state, error) {
      state.error = error;
    },
    setProject(state, project) {
      state.project = project;
    },
    setProjects(state, projects) {
      state.projects = projects;
    },
  },
  actions: {
    fetchProject(context, { url, params }) {
      context.commit('setLoading', true);
      context.commit('setError', null);
      return new Promise((resolve, reject) => {
        axios({
          method: 'GET',
          url,
          params,
        })
          .then(({ data }) => {
            context.commit('setProject', data.data);
            resolve(data);
          })
          .catch((error) => {
            setTimeout(() => {
              context.commit('setError', error);
            }, 500);
            reject(error);
          })
          .then(() => {
            setTimeout(() => {
              context.commit('setLoading', false);
            }, 1000);
          });
      });
    },
    fetchProjects(context, { url, params }) {
      context.commit('setLoading', true);
      context.commit('setError', null);
      return new Promise((resolve, reject) => {
        axios({
          method: 'GET',
          url,
          params,
        })
          .then(({ data }) => {
            context.commit('setProjects', data.data);
            resolve(data);
          })
          .catch((error) => {
            setTimeout(() => {
              context.commit('setError', error);
            }, 500);
            reject(error);
          })
          .then(() => {
            setTimeout(() => {
              context.commit('setLoading', false);
            }, 1000);
          });
      });
    },
  },
});
