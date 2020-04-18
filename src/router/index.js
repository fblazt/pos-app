import Vue from 'vue';
import VueRouter from 'vue-router';
import NotFound from '../views/NotFound.vue';
import Login from '../views/auth/Login.vue';
import Home from '../views/Home.vue';
import History from '../views/History.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/history',
    name: 'History',
    component: History,
  },
  {
    path: '*',
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
