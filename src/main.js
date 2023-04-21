import { createApp } from 'vue'
import App from './App.vue'
// Gbolg默认CSS样式与icon图标
import './assets/css/style.less';
import './assets/font/iconfont.css';
// elementPlus依赖
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// axios实例
// import axios from './http' 封装后的axios实例，接入后端后使用
import axios from "axios";
import router from './router'

// 创建app实例
let app = createApp(App);
//全局挂载axios
app.config.globalProperties.$axios = axios



// 启用vue-router
app.use(router)
// 启用element-plus
app.use(ElementPlus)





// 挂载app实例
app.mount('#app')
