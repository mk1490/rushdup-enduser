import Vue from 'vue';

const user = {
    state: {
        id: null,
        name: '',
        family: '',
        avatar: '',
        phoneNumber: '',
        personnelCode: '',
        roles: [],
        deleteDialog: {
            visible: false, index: 0,
        },
        walletAmount: 0,
        submitDelete: -1,
        isLogin: false,
        cartItems: [],
        cartExistItems: [],
    }, getters: {
        id: (state) => state.id,
        name: (state) => state.name,
        family: (state) => state.family,
        phoneNumber: (state) => state.phoneNumber,
        personnelCode: (state) => state.personnelCode,
        roles: (state) => state.roles,
        avatar: (state) => state.avatar,
        status: (state) => state.status,
        loginState: (state) => state.loginState,
        isLogin: (state) => state.isLogin,
        cartItems: (state) => state.cartItems,
        cartExistItems: (state) => state.cartExistItems,
        walletAmount: (state) => state.walletAmount,
    }, mutations: {
        SET_USER_INFO: (state, payload) => {
            state.name = payload.name;
            state.family = payload.family;
            state.avatar = payload.avatar;
            state.walletAmount = payload.walletAmount;
        }, SET_PHOTO: (state, payload) => {
            state.avatar = payload;
        }, SET_TOKEN: (state, token) => {
            state.token = token;
        }, ALL_PREFERENCES: (state, payload) => {
            state.allPreferences = payload;
        }, DELETE_DIALOG: (state, {index, visible}) => {
            state.deleteDialog.index = index;
            state.deleteDialog.visible = visible;
        }, SUBMIT_DELETE: (state, index) => {
            state.submitDelete = index;
        }, LOGOUT: () => {
        }, REMOVE_PHOTO: (state) => {
            state.avatar = '';
        },
        LOGIN_STATE: (state, payload) => {
            state.isLogin = payload;
        },
        ADD_TO_CART: (state, payload) => {
            let items = localStorage.getItem('cart');
            if (items) {
                items = JSON.parse(items);
            } else {
                items = [];
            }
            if (items.findIndex(x => x.id === payload.id) === -1) {
                items.push(payload);
            }
            localStorage.setItem('cart', JSON.stringify(items));
            state.cartItems = items;
        },
        REMOVE_CART_ITEM: (state, index) => {
            let items = state.cartItems;
            items.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(items));
            state.cartItems = items;
        },
        INITIAL_CART_ITEMS: (state) => {
            let items = localStorage.getItem('cart');
            if (items) {
                items = JSON.parse(items);
            } else {
                items = [];
            }
            state.cartItems = items;
        },
        SET_CART_ITEMS: (state, payload) => {
            state.cartItems = payload;
        },
        SET_CART_EXISTS_ITEMS: (state, payload) => {
            console.log("SET_CART_EXISTS_ITEMS", payload)
            state.cartExistItems = payload;
        },
    }, actions: {
        allPreferences: async ({commit}, payload) => {
            await commit('ALL_PREFERENCES', payload);
        }, deleteDialog: async ({commit}, index) => {
            await commit('DELETE_DIALOG', {
                index: index, visible: true,
            });
        }, submitDelete: async ({commit}, index) => {
            await commit('SUBMIT_DELETE', index);
        }, logout: async ({commit}) => {
            await commit('LOGOUT');
        }, /*initProfile: async ({commit}) => {
            let isAuthenticated = localStorage.getItem('Authorization');
            isAuthenticated = !!isAuthenticated;
            if (isAuthenticated == false)
                return;
            // const [err, data] = await Vue.prototype.to(Vue.prototype.http.get(`${Vue.prototype.serverAddress}/auth/currentProfile`));
            // if (!err) {
            //     if (data.avatar) {
            //         data.avatar = Vue.prototype.serverAddress + data.avatar;
            //     }
            //     await commit('SET_USER_INFO', data);
            // }
        // },*/
        setUserInfo: async ({commit}, payload) => {
            await commit('SET_USER_INFO', payload);
        }, setPhoto: async ({commit}, payload) => {
            await commit('SET_PHOTO', payload);
        }, removePhoto: async ({commit}) => {
            await commit('REMOVE_PHOTO');
        }, isAuth: async () => {
            return !!localStorage.getItem('Authorization');
        },
        setLoginState: async ({commit}, payload) => {
            await commit('LOGIN_STATE', payload);
        },
        addToCartLocally: async ({commit}, payload) => {
            await commit('ADD_TO_CART', payload);
        },
        removeCartItem: async ({commit}, index) => {
            await commit('REMOVE_CART_ITEM', index);
        },
    },

}
export default user;
