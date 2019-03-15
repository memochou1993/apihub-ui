import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/:user',
      name: 'users.show',
      component: () => import('@/views/user/Show.vue'),
    },
    {
      path: '/:user/:project',
      name: 'projects.show',
      component: () => import('@/views/project/Show.vue'),
    },
    {
      path: '/:user/:project/endpoints',
      name: 'endpoints.index',
      component: () => import('@/views/endpoint/Index.vue'),
    },
    {
      path: '/:user/:project/endpoints/:endpoint',
      name: 'endpoints.show',
      component: () => import('@/views/endpoint/Show.vue'),
    },
    {
      path: '/:user/:project/environments',
      name: 'environments.index',
      component: () => import('@/views/environment/Index.vue'),
    },
    {
      path: '/:user/:project/environments/:environment',
      name: 'environments.show',
      component: () => import('@/views/environment/Show.vue'),
    },
  ],
});
