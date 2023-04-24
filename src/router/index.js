import {createRouter, createWebHistory} from 'vue-router';

const routers = [
    {
        path: '/',
        name: 'home',
        component: () => import('../components/views/Home.vue'),
    },
    {
        //classification参数用于传递分类信息
        path: '/category/:classification',
        name: 'category',
        component: () => import('../components/views/Home.vue'),
        meta: {params: 'classification'}
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../components/views/About.vue'),
    },
    {
        path: '/friend',
        name: 'friend',
        component: () => import('../components/views/Friend.vue'),
    },
    {
        path: '/article',
        name: 'article',
        component: () => import('../components/views/Articles.vue'),
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../components/login/login.vue'),
    },
    {
        path: '/registered',
        name: 'registered',
        component: () => import('../components/login/registered.vue'),
    },
    {
        path: '/forget',
        name: 'forget',
        component: () => import('../components/login/forget.vue'),
    },
    {
        path: '/user',
        name: 'user',
        component: () => import('../components/userPage/index.vue'),
        children: [
            {
                path: '/updateUsername',
                name: 'user',
                component: () => import('../components/userPage/components/updateUsername.vue'),
            }
        ]
    },


]
const router = createRouter({
    history: createWebHistory(),
    routes: routers
})
export default router;