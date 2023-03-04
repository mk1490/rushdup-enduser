import Vue from 'vue';
import i18n from '@/locale'

const baseData = {
    state: {
        menuItems: [],
        categoryItems: [],
        selectedCategory: null,
        battalionItems: [], timeRangeItems: [{
            text: i18n.t('timeRangeItems.recent12Hour'), value: 'recent12Hour'
        }, {
            text: i18n.t('timeRangeItems.recent3Days'), value: 'recent3Days'
        }, {
            text: i18n.t('timeRangeItems.recent15Days'), value: 'recent15Days'
        }, {
            text: i18n.t('timeRangeItems.recentMonth'), value: 'recentMonth'
        }, {
            text: i18n.t('timeRangeItems.recent6Month'), value: 'recent6Month'
        }, {text: i18n.t('timeRangeItems.customTimeRange'), value: 'customTimeRange'},], discountTypeItems: [{
            text: i18n.t('discount.form.discountTypeItems.percentage'), value: 0
        }, {
            text: i18n.t('discount.form.discountTypeItems.amountage'), value: 1
        },]
    }, getters: {
        menuItems: (state) => state.menuItems,
        categoryItems: (state) => state.categoryItems,
        selectedCategory: (state) => state.selectedCategory
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
        setCategory: async (context, payload) => {
            context.commit('SELECT_CATEGORY', payload);
            context.commit('NAVBAR_STATE', false);
        }
    },
};

export default baseData;
