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
        }, submitDelete: -1,
        loading: false,
        isLogin: false,
    },
    getters: {
        id: (state) => state.id,
        name: (state) => state.name,
        family: (state) => state.family,
        phoneNumber: (state) => state.phoneNumber,
        personnelCode: (state) => state.personnelCode,
        roles: (state) => state.roles,
        avatar: (state) => state.avatar,
        status: (state) => state.status,
        loading: (state) => state.loading,
        loginState: (state) => state.loginState,
        isLogin: (state) => state.isLogin,
    },
    mutations: {
        SET_USER_INFO: (state, payload) => {
            state.id = payload.id || null;
            state.name = payload.name || state.name;
            state.family = payload.family || state.family;
            state.avatar = payload.avatar || state.avatar;
            state.phoneNumber = payload.phoneNumber || state.phoneNumber;
            state.personnelCode = payload.username || state.personnelCode;
            state.roles = payload.roles;
        },
        SET_PHOTO: (state, payload) => {
            state.avatar = payload;
        },
        SET_TOKEN: (state, token) => {
            state.token = token;
        },
        SHOW_LOADING: (state, showLoading) => {
            state.loading = showLoading;
        }, ALL_PREFERENCES: (state, payload) => {
            state.allPreferences = payload;
        }, DELETE_DIALOG: (state, {index, visible}) => {
            state.deleteDialog.index = index;
            state.deleteDialog.visible = visible;
        }, SUBMIT_DELETE: (state, index) => {
            state.submitDelete = index;
        }, LOGOUT: () => {
        },
        REMOVE_PHOTO: (state) => {
            state.avatar = '';
        }
    },
    actions: {
        showLoading: ({commit}) => {
            commit('SHOW_LOADING', true);
        },
        hideLoading: ({commit}) => {
            commit('SHOW_LOADING', false);
        },
        allPreferences: async ({commit}, payload) => {
            await commit('ALL_PREFERENCES', payload);
        },
        deleteDialog: async ({commit}, index) => {
            await commit('DELETE_DIALOG', {
                index: index, visible: true,
            });
        },
        submitDelete: async ({commit}, index) => {
            await commit('SUBMIT_DELETE', index);
        },
        logout: async ({commit}) => {
            await commit('LOGOUT');
        },
        /*initProfile: async ({commit}) => {
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
        },
        setPhoto: async ({commit}, payload) => {
            await commit('SET_PHOTO', payload);
        },
        removePhoto: async ({commit}) => {
            await commit('REMOVE_PHOTO');
        },
        isAuth: async () => {
            return !!localStorage.getItem('Authorization');
        }
    }
}
export default user;
