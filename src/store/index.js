import {createStore} from 'vuex'
import syncStorage from './plugins/syncStorage';
import permission from './modules/permission';
import settings from './modules/settings';
import baseData from './modules/baseData';
import user from './modules/user';
import cart from './modules/cart';

export default createStore({
    modules: {
        permission,
        settings,
        user,
        baseData,
        cart,
    },

    plugins: [
        syncStorage({}),
    ],
    state: {},
    mutations: {},
    actions: {},
    getters: {},
});
