import {createApp} from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router';
import {to} from 'await-to-js'
import '@/router/permission';
import locale from '@/locale';
import store from './store';
import VueToast from 'vue-toast-notification';
import VueSweetalert2 from 'vue-sweetalert2';
import "@/assets/styles/main.scss";
// import jQuery from 'jquery';
// Vue.prototype.jQuery = jQuery
import VueCarousel from 'vue-carousel';
// Vue.use(VueCarousel);
// Vue.use(VueSweetalert2, {
//     confirmButtonColor: '#41b882',
//     cancelButtonColor: '#ff7674',
// confirmButtonText: i18n.t('ui.submit'),
// cancelButtonText: i18n.t('ui.cancel')
// });
// Vue.use(VueToast, {
//     position: 'bottom-left'
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

// import axios from '@/plugins/httpRequest';
// import '@/plugins/commonMethods';
// import '@/plugins/toastMessageProvider';

const app = createApp(App)
    .use(vuetify)
    .use(store)
    .use(router)
    .use(locale);
app.mount('#app');
