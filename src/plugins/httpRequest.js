﻿import {getCurrentInstance, provide} from 'vue';
import axios from "axios";
import app from '@/main'
import i18n from "@/locale";
import store from "@/store";


let lastRequest;
axios.interceptors.request.use(async (req) => {
    if (req.loader !== false) {
        app.config.globalProperties.showLoader();
    }
    // if (accessToken) {
    //     localStorage.setItem('accessToken', accessToken)
    // }
    const authorization = localStorage.getItem('Authorization');


    if (!!authorization) {
        req.headers.Authorization = 'Bearer ' + authorization;
    } else {
        req.headers.sessionId = store.getters.sessionId;
    }
    lastRequest = req;
    return req;
});
axios.interceptors.response.use(async (response) => {
    app.config.globalProperties.hideLoader();
    // if (lastRequest.method.toString() === 'delete') {
    // Vue.prototype.$toast.success(i18n.t('ui.deleteItemSuccess'));
    // }
    return response.data;
}, async error => {
    app.config.globalProperties.hideLoader();
    // if (lastRequest.method.toString() === 'delete') {
    // Vue.prototype.$toast.error(i18n.t('ui.deleteItemFailed'));
    // }
    const status = error.response['status'];
    const errorObject = error.response.data;
    let message = null;
    switch (status) {

        case 400: {
            message = errorObject.message;
            break;
        }
        case 401: {
            if (errorObject.error === 'Unauthorized') {
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
            message = i18n.global.t('errors.serverError');
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
                    title: i18n.global.t('ui.error'), html: message, icon: 'error'
                });
            }
            break;
        }
    }

    if (lastRequest.errorModal != false) {
        app.config.globalProperties.$swal.fire({
            title: i18n.global.t('ui.error'), html: message, icon: 'error'
        }).then(res => {

        }).catch(e => {

        });
    }
    return Promise.reject(error);
});
export default axios;
// app.appContext.config.globalProperties.http = axios;
