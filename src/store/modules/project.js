import axios from 'axios';

export default {
  state: {
    projects: [],
    project: null,
  },
  mutations: {
    setProjects(state, projects) {
      state.projects = projects;
    },
    setProject(state, project) {
      state.project = project;
    },
  },
  actions: {
    fetchProjects(context, { url, params }) {
      context.dispatch('initialState');
      return new Promise((resolve, reject) => {
        axios({
          method: 'GET',
          url,
          params,
        })
          .then(({ data }) => {
            context.commit('setProjects', data.data);
            context.commit('setPages', data.meta.last_page);
            context.commit('setNoData', data.data.length === 0);
            resolve(data);
          })
          .catch((error) => {
            setTimeout(() => {
              context.commit('setError', error);
              context.commit('setNoData', true);
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
    fetchProject(context, { url, params }) {
      context.dispatch('initialState');
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
              context.commit('setNoData', true);
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
};
