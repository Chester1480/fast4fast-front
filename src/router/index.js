// Composables
import { createRouter, createWebHistory } from 'vue-router'


const components = [
  {
    path: '',
    name: 'home',
    //#region descricption
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //#endregion
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue'),
    // component: () => import(/* webpackChunkName: "home" */ '@/layouts/default/Inbox.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue'),
  },
  {
    path: '/table',
    name: 'table',
    component: () => import('@/views/Table.vue'),
  },
  
];

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
  },
  {
    
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: components,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
