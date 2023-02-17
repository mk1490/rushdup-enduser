import Vue from 'vue';
import i18n from '@/locale'

const baseData = {
    state: {
        menuItems: [],
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
        menuItems: (state) => state.menuItems
    },
    mutations: {
        SET_MENU_ITEMS: (state, payload) => {
            state.menuItems = payload;
        }
    }, actions: {
        initMenuItems: async (context, payload) => {
            context.commit('SET_MENU_ITEMS', payload);
        }
    },
};

export default baseData;
