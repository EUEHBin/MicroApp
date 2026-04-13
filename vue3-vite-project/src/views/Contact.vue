<template>
  <div class="contact">
    <h1>联系我们</h1>
    <p>这是子应用的联系我们页面</p>
    <div class="contact-content">
      <p>邮箱: contact@example.com</p>
      <p>电话: 123-456-7890</p>
      <p>地址: 北京市朝阳区</p>
    </div>
    <div class="nav-buttons">
      <router-link to="/" class="nav-button">首页</router-link>
      <router-link to="/about" class="nav-button">关于我们</router-link>
      <router-link to="/contact" class="nav-button active">联系我们</router-link>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.contact {
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

.contact-content {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 30px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
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