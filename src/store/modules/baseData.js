import app from '@/main'
import {v4 as uuidv4} from "uuid";

const baseData = {
    state: {
        sessionId: null,
        menuItems: [],
        categoryItems: [],
        selectedCategory: null,
        profileNavbarShow: true,
        homeItems: [],
        pageTitle: null,
        breadCrumb: [],
        battalionItems: [],
        loading: false,
        // timeRangeItems: [{
        //     text: i18n.t('timeRangeItems.recent12Hour'), value: 'recent12Hour'
        // }, {
        //     text: i18n.t('timeRangeItems.recent3Days'), value: 'recent3Days'
        // }, {
        //     text: i18n.t('timeRangeItems.recent15Days'), value: 'recent15Days'
        // }, {
        //     text: i18n.t('timeRangeItems.recentMonth'), value: 'recentMonth'
        // }, {
        //     text: i18n.t('timeRangeItems.recent6Month'), value: 'recent6Month'
        // }, {text: i18n.t('timeRangeItems.customTimeRange'), value: 'customTimeRange'},], discountTypeItems: [{
        //     text: i18n.t('discount.form.discountTypeItems.percentage'), value: 0
        // }, {
        //     text: i18n.t('discount.form.discountTypeItems.amountage'), value: 1
        // },]
    }, getters: {
        menuItems: (state) => state.menuItems,
        categoryItems: (state) => state.categoryItems,
        selectedCategory: (state) => state.selectedCategory,
        sessionId: (state) => state.sessionId,
        profileNavbarShow: (state) => state.profileNavbarShow,
        homeItems: (state) => state.homeItems,
        pageTitle: (state) => state.pageTitle,
        loading: (state) => state.loading,
    },
    mutations: {
        SET_MENU_ITEMS: (state, payload) => {
            state.menuItems = payload;
        },
        SET_CATEGORY_ITEMS: (state, payload) => {
            state.categoryItems = payload;
        },
        SELECT_CATEGORY: (state, payload) => {
            state.selectedCategory = payload;
        },
        SET_HOME_ITEMS: (state, payload) => {
            state.homeItems = payload;
        },
        SHOW_LOADING: (state, showLoading) => {
            state.loading = showLoading;
        },
    }, actions: {
        initMenuItems: async (context, payload) => {
            context.commit('SET_MENU_ITEMS', payload);
        },
        initCategoryItems: async (context, payload) => {
            context.commit('SET_CATEGORY_ITEMS', payload);
        },
        initCartExistsItems: async (context, payload) => {
            context.commit('SET_CART_EXISTS_ITEMS', payload);
        },
        initHomeItems: async (context, payload) => {
            context.commit('SET_HOME_ITEMS', payload);
        },
        setCategory: async (context, payload) => {
            context.commit('SELECT_CATEGORY', payload);
            context.commit('NAVBAR_STATE', false);
        },
        initializeSessionId: ({state}) => {
            let id = sessionStorage.getItem('id');
            console.log('id', id, !id)
            if (!id) {
                id = uuidv4();
                sessionStorage.setItem('id', id);
            }
            state.sessionId = id;
        },
        setPageTitle({state}, pageTitle) {
            state.pageTitle = pageTitle;
        },
        clearBreadcrumb({state}, payload) {
            state.breadCrumb = []
        },
        pushBreadcrumb({state}, payload) {
            state.breadCrumb.push(payload);
        },
        setLoadingState: ({commit}, payload) => {
            commit('SHOW_LOADING', payload);
        },
    },
};

export default baseData;
