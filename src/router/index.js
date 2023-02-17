import Vue from 'vue';
import Router from 'vue-router';

import Layout from '../view/layout/TheLayout.vue';

Vue.use(Router);


export const constantRoutes = [{
    path: '*', hidden: true, redirect: 'Home'
}, {
    path: '/', name: 'Root', component: Layout, meta: {
        noCache: true, affix: true, title: 'route.Management'
    }, children: [{
        path: '', name: 'Home', component: () => import('@/view/components/Home/Home.vue'), meta: {
            title: 'route.courses', icon: 'mdi-book-education'
        },
    }, {
        path: 'Test', name: 'Test', component: () => import('@/view/components/Home/Test.vue'), meta: {
            title: 'route.test', icon: 'mdi-book-education'
        },
    }, {
        path: 'MyCourses',
        name: 'MyCourses',
        component: () => import('@/view/components/Course/MyCourses/MyCourses.vue'),
        meta: {
            title: 'route.myCourses', icon: 'mdi-book-education'
        },
    }, {
        path: 'MyAccount',
        name: 'MyAccount',
        component: () => import('@/view/components/AccountInformation/MyAccount/MyAccount.vue'),
        meta: {},
    }, {
        path: 'AccountInformation',
        name: 'AccountInformation',
        component: () => import('@/view/components/AccountInformation/AccountInformation.vue'),
        meta: {
            title: 'route.myCourses', icon: 'mdi-book-education'
        },
    },
        {
            path: 'course-details/:slugOrId',
            name: 'CourseDetails',
            component: () => import('@/view/components/Course/CourseDetails/CourseDetails.vue'),
            meta: {
                title: 'route.myCourses', icon: 'mdi-book-education'
            },
        }, {
            path: 'CourseDetailsVideo/:id',
            name: 'CourseDetailsVideo',
            component: () => import('@/view/components/Course/CourseDetails/CourseDetailsVideo.vue'),
            meta: {
                title: 'route.myCourses', icon: 'mdi-book-education'
            },
        }, {
            path: 'explore',
            name: 'AllCoursesExplore',
            component: () => import('@/view/components/Course/AllCourses/CoursesList.vue'),
            meta: {},
            children: [
                {
                    path: 'course-details/:slug',
                    name: 'CourseDetails',
                    component: () => import('@/view/components/Course/CourseDetails/CourseDetailsVideo.vue'),
                    hidden: true,
                    meta: {}
                }
            ]
        }]
},];

export default new Router({
    scrollBehavior: () => ({y: 0}), routes: constantRoutes,
});

export const asyncRoutes = [{path: '*', redirect: '/error/404', hidden: true},];
