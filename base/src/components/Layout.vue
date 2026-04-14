<template>
  <div class="layout-container">
    <!-- 左侧菜单 -->
    <aside class="sidebar">
      <el-menu
        :default-active="activeRoute"
        class="sidebar-menu"
        router
        :unique-opened="true"
        :collapse-transition="false"
      >
        <el-menu-item index="/">
          <el-icon><i-ep-home /></el-icon>
          <span>首页</span>
        </el-menu-item>
        <el-menu-item index="/vue3ViteProject">
          <el-icon><i-ep-info /></el-icon>
          <span>关于我们</span>
        </el-menu-item>
        <el-menu-item index="/dashboard">
          <el-icon><i-ep-data-analysis /></el-icon>
          <span>仪表板</span>
        </el-menu-item>
        <el-menu-item index="/user/1">
          <el-icon><i-ep-user /></el-icon>
          <span>用户资料</span>
        </el-menu-item>
        <el-menu-item index="/login">
          <el-icon><i-ep-switch-button /></el-icon>
          <span>登录</span>
        </el-menu-item>
      </el-menu>
    </aside>
    
    <!-- 右侧内容区域 -->
    <main class="content">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// 计算当前激活的路由
const activeRoute = computed(() => {
  const path = route.path
  // 处理子应用路由，当路径包含子应用前缀时，返回子应用根路径
  if (path.startsWith('/vue3ViteProject')) {
    return '/vue3ViteProject'
  }
  return path
})
</script>

<style scoped>
.layout-container {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

.sidebar {
  width: 200px;
  background-color: #f5f7fa;
  border-right: 1px solid #e4e7ed;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  overflow-y: auto;
  z-index: 1000;
}

.sidebar-menu {
  border-right: none;
  height: 100%;
}

.content {
  flex: 1;
  margin-left: 200px;
  padding: 20px;
  overflow-y: auto;
  background-color: #ffffff;
  height: 100vh;
  box-sizing: border-box;
}
</style>