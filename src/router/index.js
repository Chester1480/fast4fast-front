// Composables
import { createRouter, createWebHistory } from 'vue-router'


//一般PC頁面子項目
const components = [
  {
    path: '',
    name: 'home',
    //#region descricption
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //#endregion
    component: () => import(/* webpackChunkName: "home" */ '@/views/PC/Home.vue'),
    // component: () => import(/* webpackChunkName: "home" */ '@/layouts/default/Inbox.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/PC/About.vue'),
  },
  {
    path: '/table',
    name: 'table',
    component: () => import('@/views/PC/Table.vue'),
  },
];
//手機頁面子項目
const mobileComponents = [
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import('@/views/PC/About.vue'),
  // },
]

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/PC/Login.vue'),
  },
  {
    //一般PC頁面
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: components,
  },
  {
    //手機頁面
    path: '/Mobile',
    component: () => import('@/layouts/Mobile/Default.vue'),
    // children: mobileComponents,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
