import router from './index'
import Vue from 'vue';
import vuex from '../store/index'
import app from '@/main'

let whiteList = ['/SignIn'];

function isAuth() {
    return vuex.getters.isLogin;
}

router.beforeEach(async (toRoute, from, next) => {
    const isAuthenticated = isAuth();
    if (isAuthenticated) {
        next();
    } else {
        app.config.globalProperties.$store.dispatch('setPageTitle', toRoute.meta.pageTitle);
        app.config.globalProperties.$store.dispatch('setPageTitleType', toRoute.meta.pageTitleType);
        next();
    }


    // console.log(hasRedirectForCallback);
    // if (!isAuthenticated && hasRedirectForCallback) {
    //     next({path: '/callback'});
    // }
    // if (toPath === '/callback') {
    //     next();
    //     return;
    // }
    // if (!isAuthenticated) {
    // console.log("REDIRECT TO SIGN IN")
    // sessionStorage.setItem('hasRedirect', 'true');
    // await oAuth.signinRedirect(toPath);  
    // }
    next();
});