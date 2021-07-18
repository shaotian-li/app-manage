import Vue from 'vue';
import Router from 'vue-router';
import Login from '@src/page/Login/index.vue';

Vue.use(Router);

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'login', // 重定向
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
  ],
});
