// Composables
import { createRouter, createWebHistory } from 'vue-router'


//個人管理頁面子項目
const dashboardComponents = [
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

//測試項目DashboardComponents
const testDashboardComponents = [
  {
    path: '',
    name: 'home',
    component: () => import('@/views/Test/Home.vue'),
  },
]

//手機頁面子項目
const mobileComponents = [
  // {
  //   path: '/about',
  //   name: 'about',
  //   component: () => import('@/views/PC/About.vue'),
  // },
]

//一般PC頁面子項目
const components = [
  {
    path: '/',
    name: 'searchfy',
    component: () => import('@/views/Public/Searchfy.vue'),
  },
  // {
  //   path: '/test',
  //   name: 'test',
  //   component: () => import('@/views/Public/Test.vue'),
  // },
]

const lineliffComponents = [
  {
    path: '/Lineliff/Search',
    name: 'Search',
    component: () => import('@/views/Lineliff/Search.vue'),
    meta: {
      title:"Search"
    }
  },
  {
    path: '/Lineliff/Message',
    name: 'Message',
    component: () => import('@/views/Lineliff/Message.vue'),
  },
  {
    path: '/Lineliff/UserInfo',
    name: 'UserInfo',
    component: () => import('@/views/Lineliff/UserInfo.vue'),
  },
  {
    path: '/Lineliff',
    name: 'Index',
    component: () => import('@/views/Lineliff/Index.vue'),
  },
]

const routes = [
 
  {
    //一般PC頁面
    path: '/',
    component: () => import('@/layouts/Default/Default.vue'),
    children: components,
  },
  {
    path: '/Lineliff',
    component: () => import('@/layouts/Lineliff/Default.vue'),
    children: lineliffComponents,
  },
  // {
  //   //手機頁面
  //   path: '/mobile',
  //   component: () => import('@/layouts/Mobile/Default.vue'),
  //   children: mobileComponents,
  // },
  {
    path: '/dashboard/login',
    name: 'Login',
    component: () => import('@/views/Dashboard/Login.vue'),
  },
  {
    //個人管理頁面
    path: '/dashboard',
    component: () => import('@/layouts/Dashboard/Default.vue'),
    children: dashboardComponents,
  },
  {
    //測試用功能
    path: '/testdashboard',
    component: () => import('@/layouts/Test/Default.vue'),
    children: testDashboardComponents,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

// 驗證使用者是否已登入
router.beforeEach((to, from, next) => {

  const { path, query } = to; //可以用query抓後面帶的參數
  
   // //每次都記錄最後使用路由的位置
  localStorage.setItem("routerIndex",path);
  next();
  // if(path == '/login'){
  //   if (isLoggedIn()) {
  //     next('/')
  //   }else{
  //     next();
  //   }
  //   return;
  // }else{
  //   if (!isLoggedIn()) {
  //     next('/login')
  //   }else{
  //     next()
  //   }
  //   return;
  // }

  // //mobile way
  // if (isMobileDevice()) {
  //   //console.log("mobile")
  //   if (isLoggedIn()) {
      
  //   } else {
      
  //   }
  //   next()
  //   return;
  // } else {
  //   // window.location.href = "/";
  //   if (isLoggedIn()) {
  //     next()
  //   } else {
  //     next("/login")
  //   }
  //   return;
  // }
  
})


function pathPrefix(key) {
  const path = {
    "/": "",
    
  }
}

// 判斷是否已登入
function isLoggedIn() {
  // 檢查登入狀態
  // 若已登入，回傳 true
  // 若未登入，回傳 false
  const token = localStorage.getItem("token");
  return token != undefined ? true : false;
}

function isMobileDevice() {
  let mobileDevices = ['Android', 'webOS', 'iPhone', 'iPad', 'iPod', 'BlackBerry', 'Windows Phone']
  for (var i = 0; i < mobileDevices.length; i++) {
      if (navigator.userAgent.match(mobileDevices[i])) {
        //console.log("isMobileDevice: match " + mobileDevices[i]);
        return true;
      }
  }
  return false
}


export default router
