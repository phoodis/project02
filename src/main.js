import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'

// ✅ สร้างแอปก่อนแล้วเก็บไว้ในตัวแปร
const app = createApp(App)

app.use(router) // ✅ ใช้งาน router หลังจากสร้างแอป
app.mount('#app') // ✅ Mount แอปที่ <div id="app"></div>
