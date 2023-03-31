import Vue from 'vue';
import axios from "axios";
import i18n from '@/locale'; // Internationalization
import Router from "@/router";

const serverAddress = process.env.VUE_APP_SERVER_ADDRESS;
Vue.prototype.serverAddress = serverAddress;
let lastRequest;
Vue.prototype.baseUrl = serverAddress + '/api/enduser';
axios.defaults.baseURL = Vue.prototype.baseUrl;
axios.interceptors.request.use(async (req) => {
    if (req.loader !== false) {
        Vue.prototype.showLoader();
    }
    // if (accessToken) {
    //     localStorage.setItem('accessToken', accessToken)
    // }
    // req.headers.Authorization = 'Bearer ' + localStorage.getItem('accessToken');
    lastRequest = req;
    return req;
});
axios.interceptors.response.use(async (response) => {
    Vue.prototype.hideLoader();
    if (lastRequest.method.toString() === 'delete') {
        Vue.prototype.$toast.success(i18n.t('ui.deleteItemSuccess'));
    }
    return response.data;
}, async error => {
    Vue.prototype.hideLoader();
    if (lastRequest.method.toString() === 'delete') {
        Vue.prototype.$toast.error(i18n.t('ui.deleteItemFailed'));
    }
    try {
        const status = error.response.status;
        if (status === 401) {
            localStorage.removeItem('Authorization');
            if (Router.currentRoute.fullPath !== '/SignIn') {
                await Router.push('/SignIn');
            }
        } else if (status === 403) {
            if (lastRequest.errorModal !== undefined && lastRequest.errorModal !== false) {
                Vue.swal.fire({
                    title: i18n.t('ui.error'), html: error.response.data.message, icon: 'error'
                });
            }
        }
    } catch (e) {
        Vue.prototype.$swal.fire({
            title: i18n.t('errors.noConnectionToServer'), icon: 'error',
        })
        return Promise.reject(e);
    }
    const errorObject = error.response.data;
    const statusCode = error.response.status;
    if (statusCode === 500) {
        Vue.swal.fire(i18n.t('errors.serverError'), '', 'error');
    } else if ((statusCode !== 403) && errorObject.message) {
        let message = '';
        if (Array.isArray(errorObject.message)) {
            errorObject.message.map((f) => {
                message += f + `<br>`;
            });
        } else {
            message = errorObject.message;
        }
        if (lastRequest.errorModal !== undefined && lastRequest.errorModal !== false) {
            Vue.swal.fire({
                title: i18n.t('ui.error'), html: message, icon: 'error'
            });
        }
    }
    return Promise.reject(error);
});
Vue.prototype.http = axios;
