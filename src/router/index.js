import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue'; // Importa App.vue como componente raíz


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home, // Asegúrate de que el componente Home esté correctamente importado
      },
  {
    path: '/menu',
    name: 'Menu',
    component: () => import('../components/Menu.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../components/aboutUs.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../components/Contact.vue'),
  },
  {
    path: '/sale',
    name: 'Sale',
    component: () => import('../components/sale.vue'),
  },
  {
    path: '/faq',
    name: 'FAQ',
    component: () => import('../components/faq.vue'),
  },
  {
    path: '/collection',
    name: 'Collection',
    component: () => import('../components/collection.vue'),
  },
  {
    path: '/policy',
    name: 'Policy',
    component: () => import('../components/PolicyView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
