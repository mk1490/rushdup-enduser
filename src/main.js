import {createApp, getCurrentInstance} from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router';
import {to} from 'await-to-js'
import '@/router/permission';
import locale from '@/locale';
import store from './store';
import ToastPlugin from 'vue-toast-notification';
import VueSweetalert2 from 'vue-sweetalert2';
import "@/assets/styles/main.scss";
// import jQuery from 'jquery';
// Vue.prototype.jQuery = jQuery
import VueCarousel from 'vue-carousel';
import axios from '@/plugins/httpRequest';
// Vue.use(VueCarousel);
// Vue.use(VueSweetalert2, {
//     confirmButtonColor: '#41b882',
//     cancelButtonColor: '#ff7674',
// confirmButtonText: i18n.t('ui.submit'),
// cancelButtonText: i18n.t('ui.cancel')
// });
// Vue.prototype.to = to;
// Vue.config.productionTip = false
// Vue.prototype.showLoader = () => {
//     (async () => {
//         await store.dispatch('showLoading');
//     })();
// }
// Vue.prototype.ls = () => {
//     (async () => {
//         await store.dispatch('showLoading');
//     })();
// }
// Vue.prototype.hideLoader = () => {
//     (async () => {
//         await store.dispatch('hideLoading');
//     })();
// }
// Vue.prototype.lh = () => {
//     (async () => {
//         await store.dispatch('hideLoading');
//     })();
// }
// Vue.prototype.showDelete = async (index) => {
//     return await store.dispatch('deleteDialog', index);
// }


// import '@/plugins/toastMessageProvider';
const serverAddress = process.env.VUE_APP_SERVER_ADDRESS;

const app = createApp(App)
    .use(VueSweetalert2)
    .use(vuetify)
    .use(store)
    .use(router)
    .use(ToastPlugin, {
        position: 'bottom-left'
    })
    .use(locale);
app.config.globalProperties.serverAddress = serverAddress;
app.config.globalProperties.baseUrl = serverAddress + '/api' + '/enduser';
app.config.globalProperties.to = to;
app.config.globalProperties.$globalVar = 'globalVar'
app.config.globalProperties.http = axios;
app.config.globalProperties.http.defaults.baseURL = app.config.globalProperties.baseUrl;
window.Swal = app.config.globalProperties.$swal;


app.mount('#app');