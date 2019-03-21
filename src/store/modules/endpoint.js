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
      context.commit('setLoading', true);
      context.commit('setError', null);
      context.commit('setEndpoints', []);
      return new Promise((resolve, reject) => {
        axios({
          method: 'GET',
          url,
          params,
        })
          .then(({ data }) => {
            context.commit('setEndpoints', data.data);
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
    fetchEndpoint(context, { url, params }) {
      context.commit('setLoading', true);
      context.commit('setError', null);
      context.commit('setEndpoint', null);
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
