import {createRouter, createWebHistory} from 'vue-router';

const routers = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home.vue'),
        meta: { title: '首页'}
    },
    {
        path: '/category/:classification',
        name: 'category',
        component: () => import('../views/Home.vue'),
        meta: { title: '分类', params: 'classification'}
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/About.vue'),
        meta: { title: '关于'}
    },
    {
        path: '/friend',
        name: 'friend',
        component: () => import('../views/Friend.vue'),
        meta: { title: '友链'}
    },
    {
        path: '/article',
        name: 'article',
        component: () => import('../views/Articles.vue'),
        meta: { title: '文章'}
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes: routers
})
export default router;