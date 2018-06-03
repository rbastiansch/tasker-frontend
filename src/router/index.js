import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Login from '@/components/Login';
import ProjectItem from '@/components/ProjectItem';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/project/new',
      name: 'new-project',
      component: ProjectItem,
    },
    {
      path: '/project/:id',
      name: 'edit-project',
      component: ProjectItem,
      props: true,
    },
  ],
});
