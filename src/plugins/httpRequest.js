import Vue from 'vue';
import axios from "axios";
import i18n from '@/locale'; // Internationalization
import Router from "@/router";

const serverAddress = process.env.VUE_APP_SERVER_ADDRESS;
Vue.prototype.serverAddress = serverAddress;
let lastRequest;
// Vue.prototype.baseUrl = serverAddress + +(process.env.NODE_ENV === 'development' ? '/api' : '') + '/enduser';
Vue.prototype.baseUrl = serverAddress + '/api' + '/enduser';
axios.defaults.baseURL = Vue.prototype.baseUrl;
axios.interceptors.request.use(async (req) => {
    if (req.loader !== false) {
        Vue.prototype.showLoader();
    }
    // if (accessToken) {
    //     localStorage.setItem('accessToken', accessToken)
    // }
    const authorization = localStorage.getItem('Authorization');
    if (!!authorization) {
        req.headers.Authorization = 'Bearer ' + authorization;
    }
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
    const status = error.response.status;
    const errorObject = error.response.data;
    const statusCode = error.response.status;
    let message = null;
    switch (status) {

        case 400: {
            message = errorObject.message;
            break;
        }
        case 401: {
            if (error === 'Unauthorized') {
                localStorage.removeItem('Authorization');
                lastRequest.errorModal = false;
            } else {
                message = errorObject.content;
            }
            break;
        }
        case 404: {
            lastRequest.errorModal = false;
            break;
        }
        case 500: {
            message = i18n.t('errors.serverError');
            break;
        }

        default: {
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
            break;
        }
    }
    if (lastRequest.errorModal != false) {
        Vue.swal.fire({
            title: i18n.t('ui.error'), html: message, icon: 'error'
        });
    }


    return Promise.reject(error);
});
Vue.prototype.http = axios;
