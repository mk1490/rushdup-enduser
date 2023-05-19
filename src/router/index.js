import Vue from 'vue';
import Router from 'vue-router';

import Layout from '../view/layout/TheLayout.vue';

Vue.use(Router);


export const constantRoutes = [
    {
        path: '/lostPassword',
        name: 'LostPassword',
        component: () => import('@/view/components/AccountInformation/MyAccount/ChangePassword.vue'),
        meta: {},
    },
    {
        path: '*', hidden: true, redirect: 'Home',
    }, {
        path: '/',
        alias: '',
        name: 'Root',
        component: Layout,
        meta: {
            noCache: true,
            affix: true,
            title: 'route.Management'
        }, children: [
            {
                path: 'home',
                name: 'Home',
                redirect: ''
            },
            {
                path: '', name: 'Home', component: () => import('@/view/components/Home/Home.vue'), meta: {
                    title: 'route.home',
                },

            },
            {
                path: '/Cart',
                name: 'Cart',
                component: () => import('@/view/components/Cart/Cart.vue'),
                meta: {},
            },
            {
                path: 'MyAccount',
                name: 'MyAccount',
                component: () => import('@/view/components/AccountInformation/MyAccount/MyAccount.vue'),
                meta: {},
            },
            {
                path: 'AccountInformation',
                name: 'AccountInformation',
                component: () => import('@/view/components/AccountInformation/AccountInformation.vue'),
                meta: {
                    title: 'route.myCourses', icon: 'mdi-book-education'
                },
            }, {
                path: 'course-details/:slugOrId',
                name: 'CourseDetails',
                component: () => import('@/view/components/Course/CourseDetails/CourseDetails.vue'),
                meta: {
                    title: 'route.myCourses', icon: 'mdi-book-education'
                },
            },
            {
                path: 'course-details/:slugOrId/:courseGroupId',
                name: 'CourseEpisode',
                component: () => import('@/view/components/Course/CourseDetails/CourseEpisode/CourseEpisode.vue'),
                hidden: true,
                meta: {},
            },
            {
                path: 'CourseDetailsVideo/:id',
                name: 'CourseDetailsVideo',
                component: () => import('@/view/components/Course/CourseDetails/CourseDetailsVideo.vue'),
                meta: {
                    title: 'route.myCourses', icon: 'mdi-book-education'
                },
            },
            {
                path: '/cd/:courseSlug',
                name: 'cd',
                component: () => import('@/view/components/Course/Course_Details/Course.vue'),
                meta: {
                    title: 'route.myCourses', icon: 'mdi-book-education'
                },
            },
            {
                path: '/cl',
                alias: '/cl/:categorySlug',
                name: 'cl',
                component: () => import('@/view/components/Course/CourseList/CourseList.vue'),
                meta: {
                    title: 'route.courses'
                },
            },
            {
                path: 'explore',
                name: 'AllCoursesExplore',
                component: () => import('@/view/components/Course/AllCourses/CoursesList.vue'),
                meta: {},
                children: [{
                    path: 'course-details/:slug',
                    name: 'CourseDetails',
                    component: () => import('@/view/components/Course/CourseDetails/CourseDetailsVideo.vue'),
                    hidden: true,
                    meta: {}
                }]
            },
            {
                path: '/category/:slug',
                name: 'Category',
                component: () => import('@/view/components/Course/Category/CategoryLists.vue'),
                meta: {},
                children: []
            },
            {
                path: '/teacherProfile/:slug',
                name: 'Category',
                component: () => import('@/view/components/Teacher/TeacherInformationProfile.vue'),
                meta: {},
                children: []
            },
            {
                path: '/teacher-request',
                name: 'teacher-request',
                component: () => import('@/view/components/Teacher/TeacherRequestForm.vue'),
                meta: {},
                children: []
            },
            {
                path: '/search',
                name: 'Search',
                component: () => import('@/view/components/Course/Search/Search.vue'),
                meta: {},
                children: []
            },
        ],

    },
    {
        path: '/profile',
        name: 'profile',
        component: () => import('@/view/layout/ProfileDashboard/TheLayout.vue'),
        hidden: true,
        meta: {},
        children: [
            {
                path: '/dashboard',
                name: 'dashboard',
                component: () => import('@/view/components/Profile/Dashboard.vue'),
                meta: {},
            },
            {
                path: '/MyAccountInformation',
                name: 'MyAccountInformation',
                component: () => import('@/view/components/Profile/MyAccountInformation.vue'),
            },
            {
                path: '/MyCourses',
                name: 'MyCourses',
                component: () => import('@/view/components/Course/MyCourses/MyCoursesTable.vue'),
            },
            {
                path: '/Licenses',
                name: 'Licenses',
                component: () => import('@/view/components/Profile/MyLicenses.vue'),
            },
            {
                path: '/tickets',
                name: 'Tickets',
                component: () => import('@/view/components/Profile/Tickets/SupportTicket.vue'),
            },
            {
                path: '/registerNewTicket',
                name: 'RegisterNewTicket',
                component: () => import('@/view/components/Profile/Tickets/RegisterNewTicket.vue'),
            },
            {
                path: '/ticketDetails/:ticketId',
                name: 'ticketDetails',
                component: () => import('@/view/components/Profile/Tickets/TicketDetails.vue'),
            },
            {
                path: '/wallet',
                name: 'wallet',
                component: () => import('@/view/components/Profile/Wallet.vue'),
            },
            {
                path: '/transactions',
                name: 'transactions',
                component: () => import('@/view/components/Profile/Order/Order.vue'),
            },
            {
                path: '/transaction/:transactionId',
                name: 'transactions',
                component: () => import('@/view/components/Profile/Order/OrderDetails.vue'),
            },

        ]
    },
    {
        path: '/Login',
        name: 'Login',
        component: () => import('@/view/components/Login.vue'),
        meta: {},
        children: []
    },
];

export default new Router({
    scrollBehavior: () => ({y: 0}), routes: constantRoutes,
    mode: "history",
});

export const asyncRoutes = [{path: '*', redirect: '/error/404', hidden: true},];
