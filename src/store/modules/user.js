import axios from 'axios';

export default {
  state: {
    user: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    fetchUser(context, { url, params }) {
      context.commit('setLoading', true);
      context.commit('setError', null);
      context.commit('setUser', null);
      return new Promise((resolve, reject) => {
        axios({
          method: 'GET',
          url,
          params,
        })
          .then(({ data }) => {
            context.commit('setUser', data.data);
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
