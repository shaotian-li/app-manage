import Vue from 'vue';
import Router from 'vue-router';
import Login from '@src/page/Login/login.vue';
import Main from '@src/page/Main/main.vue';

console.log(Main, 'mainx');

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
    {
      path: '/main',
      name: 'main',
      component: Main,
    },
  ],
});
