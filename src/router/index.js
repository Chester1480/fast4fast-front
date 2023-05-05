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
    component: () => import(/* webpackChunkName: "home" */ '@/views/Dashboard/Home.vue'),
    // component: () => import(/* webpackChunkName: "home" */ '@/layouts/default/Inbox.vue'),
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/Dashboard/About.vue'),
  },
  {
    path: '/table',
    name: 'table',
    component: () => import('@/views/Dashboard/Table.vue'),
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
    component: () => import('@/views/Dashboard/Login.vue'),
  },
  {
    //一般PC頁面
    path: '/',
    component: () => import('@/layouts/Default/Default.vue'),
    children: components,
  },
  {
    //手機頁面
    path: '/Mobile',
    component: () => import('@/layouts/Mobile/Default.vue'),
    // children: mobileComponents,
  },
  {
    //個人管理頁面
    path: '/Dashboard',
    component: () => import('@/layouts/Dashboard/Default.vue'),
    children: components,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
