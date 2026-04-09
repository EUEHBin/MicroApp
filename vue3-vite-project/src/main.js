import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.mount('#vue3-vite-project')

// 卸载应用
window.unmount = () => {
  app.unmount()
}