import { createApp } from 'vue'
import App from './App.vue'

// axios依赖
import axios from './http/http'


let app = createApp(App);
//全局挂载axios
app.config.globalProperties.$axios = axios
app.mount('#app')
