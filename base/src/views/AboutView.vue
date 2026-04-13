<template>
    <div class="micro-app-page">
        <micro-app
            class="micro-app-container"
            name="vue3-vite-project"
            url="http://localhost:3002/"
            baseroute='/vue3ViteProject'
            iframe
        ></micro-app>
    </div>
</template>

<script setup>

</script>

<style scoped>
.micro-app-page {
    height: 100%;
    min-height: calc(100vh - 40px);
}

.micro-app-container {
    display: block;
    width: 100%;
    height: 100%;
}
</style>
