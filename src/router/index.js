import {createRouter, createWebHistory} from 'vue-router';

const routers = [
    {
        path: '/',
        name: 'home',
        component: () => import('../components/views/Home.vue'),
        meta: { title: '首页'}
    },
    {
        //classification参数用于传递分类信息
        path: '/category/:classification',
        name: 'category',
        component: () => import('../components/views/Home.vue'),
        meta: { title: '分类', params: 'classification'}
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../components/views/About.vue'),
        meta: { title: '关于'}
    },
    {
        path: '/friend',
        name: 'friend',
        component: () => import('../components/views/Friend.vue'),
        meta: { title: '友链'}
    },
    {
        path: '/article',
        name: 'article',
        component: () => import('../components/views/Articles.vue'),
        meta: { title: '文章'}
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../components/login/login.vue'),
        meta: { title: '登录'}
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes: routers
})
export default router;