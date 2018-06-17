import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Home from '@/components/Home';
import Admin from '@/components/Admin';
import Representante from '@/components/Representantes';
import Usuario from '@/components/Usuario';

Vue.use(Router);
/* eslint-disable */
function route(path, component, name, children) {
  return {
    exact: true,
    path,
    name,
    children,
    component,
    props: true,
  };
};
const router = new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    route('/', Home, 'Home', [
      route('/helloWord', HelloWorld, 'HelloWord'),
      route('/Admin', Admin, 'Admin'),
      route('/Representante', Representante, 'Representante'),
      route('/Usuario', Usuario, 'Usuario')
    ])
  ],
});

export default router;
// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld,
//     },
//   ],
// });
