import {getCurrentInstance, provide} from 'vue';
import axios from "axios";
import i18n from '@/locale';
import store from '@/store';
import app from "@/main"; // Internationalization
export default {
    install(app) {
        let lastRequest;
        axios.defaults.baseURL = app.config.globalProperties.baseUrl;
        axios.interceptors.request.use(async (req) => {
            if (req.loader !== false) {
                app.config.globalProperties.showLoader();
            }
            let authorization = localStorage.getItem('Authorization');
            if (!!authorization) {
                authorization = 'Bearer ' + authorization;
                app.config.globalProperties.Authorization = authorization;
                req.headers.Authorization = authorization;
            } else {
                req.headers.sessionId = store.getters.sessionId;
            }
            lastRequest = req;
            return req;
        });
        axios.interceptors.response.use(async (response) => {
            app.config.globalProperties.hideLoader();
            return response.data;
        }, async error => {
            app.config.globalProperties.hideLoader();
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
                    message = i18n.t('errors.serverError');
                    break;
                }

                default: {
                    console.log(errorObject)
                    if (Array.isArray(errorObject.message)) {
                        errorObject.message.map((f) => {
                            message += f + `<br>`;
                        });
                    } else {
                        message = errorObject.message;
                    }
                    if (lastRequest.errorModal !== false) {
                        app.$swal.fire({
                            title: "sAlam"
                        })
                        app.config.globalProperties.$swal.fire({
                            title: i18n.t('ui.error'), html: message, icon: 'error'
                        });
                    }
                    break;
                }
            }
            if (lastRequest.errorModal != false) {
                app.config.globalProperties.$swal.fire({
                    // title: i18n.t('ui.error'),
                    html: message,
                    icon: 'error'
                });
            }

            return Promise.reject(error);
        });
        app.config.globalProperties.http = axios;
    }
};

