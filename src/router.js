import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/users/:user',
      name: 'users.show',
      component: () => import('@/views/user/Show.vue'),
    },
    {
      path: '/projects',
      name: 'projects.index',
      component: () => import('@/views/project/Index.vue'),
    },
    {
      path: '/projects/:project',
      name: 'projects.show',
      component: () => import('@/views/project/Show.vue'),
    },
    {
      path: '/projects/:project/endpoints',
      name: 'endpoints.index',
      component: () => import('@/views/endpoint/Index.vue'),
    },
    {
      path: '/projects/:project/endpoints/:endpoint',
      name: 'endpoints.show',
      component: () => import('@/views/endpoint/Show.vue'),
    },
    {
      path: '/projects/:project/environments',
      name: 'environments.index',
      component: () => import('@/views/environment/Index.vue'),
    },
    {
      path: '/projects/:project/environments/:environment',
      name: 'environments.show',
      component: () => import('@/views/environment/Show.vue'),
    },
  ],
});
