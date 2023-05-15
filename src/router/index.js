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
        path: '/article/:id',
        name: 'article',
        component: () => import('../components/views/Articles.vue'),
        meta: {params: 'id'}
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
        redirect:'/userItem',
        children: [
            {
                path: '/updateUserItem',
                name: 'username',
                component: () => import('../components/userPage/components/updateUserItem.vue'),
            },
            {
                path: '/userItem',
                name: 'userItem',
                component: () => import('../components/userPage/components/userItem.vue'),
            },
            {
                path: '/updateHeader',
                name: 'updateHeader',
                component: () => import('../components/userPage/components/updateHeader.vue'),
            },
            {
                path: '/updateEmail',
                name: 'updateEmail',
                component: () => import('../components/userPage/components/updateEmail.vue'),
            },
            {
                path: '/updatePassword',
                name: 'updatePassword',
                component: () => import('../components/userPage/components/updatePassword.vue'),
            },
            {
                path: '/unsubscribe',
                name: 'unsubscribe',
                component: () => import('../components/userPage/components/unsubscribe.vue'),
            }
        ]
    },
    {
        path: '/admin',
        name: 'admin',
        component: () => import('../components/adminPage/index.vue'),
        redirect:'/adminHome',
        children: [
            {
                path: '/adminHome',
                name: 'admin主页',
                component: () => import('../components/adminPage/components/adminHome.vue'),
            },
            {
                path: '/adminUser',
                name: '用户管理',
                component: () => import('../components/adminPage/components/adminUser.vue'),
            },
            {
                path: '/adminUserItem',
                name: '用户信息',
                component: () => import('../components/adminPage/components/adminUserItem.vue'),
            },
            {
                path: '/webData',
                name: '站点数据',
                component: () => import('../components/adminPage/components/webData.vue'),
            },
            {
                path: '/publishArticle',
                name: '发布文章',
                component: () => import('../components/adminPage/components/publishArticle.vue'),
            },
            {
                path: '/articleList',
                name: '文章列表',
                component: () => import('../components/adminPage/components/articleList.vue'),
            },
            {
                path: '/articleListItem',
                name: '文章修改',
                component: () => import('../components/adminPage/components/articleListItem.vue'),
            },
            {
                path: '/adminClassification',
                name: '分类管理',
                component: () => import('../components/adminPage/components/adminClassification.vue'),
            },
            {
                path: '/adminComment',
                name: '评论管理',
                component: () => import('../components/adminPage/components/adminComment.vue'),
            },
        ]
    },


]
const router = createRouter({
    history: createWebHistory(),
    routes: routers
})
export default router;