import {createApp} from 'vue'
import App from './App.vue'
// Gbolg默认CSS样式与icon图标
import './assets/font/iconfont.css';
import './assets/css/style.less';

// elementPlus依赖
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// axios实例
// import axios from './http' 封装后的axios实例，接入后端后使用
import axios from "axios";
import router from './router'

//markdown编辑器依赖
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
// highlight.js
import hljs from 'highlight.js';
// html预览
import VMdPreviewHtml from '@kangc/v-md-editor/lib/preview-html';
import '@kangc/v-md-editor/lib/style/preview-html.css';
//vuex
import store from "@/state";
//编辑主题
VueMarkdownEditor.use(githubTheme, {
    Hljs: hljs,
});

// 创建app实例
let app = createApp(App);
//全局挂载axios
app.config.globalProperties.$axios = axios

// 启用vue-router
app.use(router)
// 启用markdown支持
app.use(VMdPreviewHtml)
app.use(VueMarkdownEditor)
// 启用element-plus
app.use(ElementPlus)
//vuex
store.dispatch('init')
app.use(store)

// 挂载app实例
app.mount('#app')
