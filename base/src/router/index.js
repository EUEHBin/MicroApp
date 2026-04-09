// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'

// 路由懒加载的视图组件
const HomeView = () => import('@/views/HomeView.vue')
const AboutView = () => import('@/views/AboutView.vue')
const UserProfile = () => import('@/views/UserProfile.vue')
const NotFound = () => import('@/views/NotFound.vue')
const LoginView = () => import('@/views/LoginView.vue')
const DashboardView = () => import('@/views/DashboardView.vue')

// 定义路由记录
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: '首页',
      requiresAuth: false // 不需要登录
    }
  },
  {
    path: '/vue3ViteProject',
    name: 'Vue3ViteProject',
    component: AboutView,
    meta: {
      title: '关于我们',
      requiresAuth: false
    }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
    meta: {
      title: '登录',
      requiresAuth: false,
      hideNav: true // 隐藏导航栏
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: DashboardView,
    meta: {
      title: '仪表板',
      requiresAuth: true, // 需要登录
      roles: ['admin', 'user'] // 需要的角色
    }
  },
  {
    path: '/user/:id',
    name: 'user-profile',
    component: UserProfile,
    props: true, // 将路由参数作为 props 传递
    meta: {
      title: '用户资料',
      requiresAuth: true
    }
  },
  {
    path: '/:pathMatch(.*)*', // 404 页面
    name: 'not-found',
    component: NotFound,
    meta: {
      title: '页面不存在',
      requiresAuth: false
    }
  }
]

// 创建路由实例
const router = createRouter({
  // 使用 HTML5 历史模式
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  // 滚动行为
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

export default router