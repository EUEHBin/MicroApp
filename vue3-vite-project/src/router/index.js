import { createRouter, createWebHistory } from 'vue-router'

// 导入视图组件
const Home = () => import('@/views/Home.vue')
const About = () => import('@/views/About.vue')
const Contact = () => import('@/views/Contact.vue')

// 定义路由
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: '关于我们'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: '联系我们'
    }
  }
]

// 创建路由实例
const router = createRouter({
  history: createWebHistory(window.__MICRO_APP_BASE_ROUTE__ || '/'),
  routes
})

// 全局前置守卫，设置页面标题
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router