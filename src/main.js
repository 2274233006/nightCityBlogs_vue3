import {createApp} from 'vue'
import App from './App.vue'

// Gbolg默认CSS样式与icon图标
import './assets/font/iconfont.css';
import './assets/css/style.less';

// elementPlus依赖
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// axios实例
import axios from './http'
import router from './router'

//markdown编辑器依赖
import VueMarkdownEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
// highlight.js
import hljs from 'highlight.js';
// 预览
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';

//vuex
import store from "@/state";
//MD5加密
import md5 from 'js-md5';
//编辑主题
VueMarkdownEditor.use(githubTheme, {
    Hljs: hljs,
});
VMdPreview.use(githubTheme, {
    Hljs: hljs,
});

//layer弹出层组件
import {layer} from "vue3-layer";
import 'vue3-layer/dist/s3Layer.css';

// 创建app实例
let app = createApp(App);
//全局挂载axios
app.config.globalProperties.$axios = axios
app.config.globalProperties.$md5 = md5
// 启用vue-router
app.use(router)

//全局注册layer组件
app.component(layer)

// 启用markdown支持
app.use(VMdPreview)
app.use(VueMarkdownEditor)

// 启用element-plus
app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

//vuex
app.use(store)

// 挂载app实例
app.mount('#app')
