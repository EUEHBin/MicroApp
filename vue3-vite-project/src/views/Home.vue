<template>
  <div class="home">
    <h1>子应用首页</h1>
    <p>这是子应用的首页内容</p>
    <img src="../assets/anm.png" alt="示例图片" class="home-image">
    <div class="nav-buttons">
      <router-link to="/" class="nav-button active">首页</router-link>
      <router-link to="/about" class="nav-button">关于我们</router-link>
      <router-link to="/contact" class="nav-button">联系我们</router-link>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.home {
  padding: 20px;
  text-align: center;
}

h1 {
  color: #333;
  margin-bottom: 20px;
}

p {
  color: #666;
  margin-bottom: 30px;
}

.home-image {
  max-width: 300px;
  margin-bottom: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.nav-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
}

.nav-button {
  padding: 10px 20px;
  background-color: #f0f0f0;
  border-radius: 4px;
  text-decoration: none;
  color: #333;
  transition: all 0.3s ease;
}

.nav-button:hover {
  background-color: #e0e0e0;
}

.nav-button.active {
  background-color: #409EFF;
  color: white;
}
</style>