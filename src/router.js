import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/:user',
      name: 'users.show',
      component: () => import('@/views/User/Show.vue'),
    },
    {
      path: '/:user/:project',
      name: 'projects.show',
      component: () => import('@/views/Project/Show.vue'),
    },
    {
      path: '/:user/:project/endpoints',
      name: 'endpoints.index',
      component: () => import('@/views/Endpoint/Index.vue'),
    },
    {
      path: '/:user/:project/endpoints/:endpoint',
      name: 'endpoints.show',
      component: () => import('@/views/Endpoint/Show.vue'),
    },
    {
      path: '/:user/:project/environments',
      name: 'environments.index',
      component: () => import('@/views/Environment/Index.vue'),
    },
    {
      path: '/:user/:project/environments/:environment',
      name: 'environments.show',
      component: () => import('@/views/Environment/Show.vue'),
    },
    {
      path: '*',
      name: 404,
      component: () => import('@/views/Errors/404.vue'),
    },
  ],
});
