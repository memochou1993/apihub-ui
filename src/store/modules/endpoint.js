import axios from 'axios';

export default {
  state: {
    endpoints: [],
    endpoint: null,
  },
  mutations: {
    setEndpoints(state, endpoints) {
      state.endpoints = endpoints;
    },
    setEndpoint(state, endpoint) {
      state.endpoint = endpoint;
    },
  },
  actions: {
    fetchEndpoints(context, { url, params }) {
      context.dispatch('initialState');
      return new Promise((resolve, reject) => {
        axios({
          method: 'GET',
          url,
          params,
        })
          .then(({ data }) => {
            context.commit('setEndpoints', data.data);
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
    fetchEndpoint(context, { url, params }) {
      context.dispatch('initialState');
      return new Promise((resolve, reject) => {
        axios({
          method: 'GET',
          url,
          params,
        })
          .then(({ data }) => {
            context.commit('setEndpoint', data.data);
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
