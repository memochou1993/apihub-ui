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
    project: {},
    projects: [],
  },
  mutations: {
    setProject(state, project) {
      state.project = project;
    },
    setProjects(state, projects) {
      state.projects = projects;
    },
  },
  actions: {
    fetchProject(context, { url, params }) {
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
            reject(error);
          });
      });
    },
    fetchProjects(context, { url, params }) {
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
            reject(error);
          });
      });
    },
  },
});
