import Vue from 'vue';
import i18n from '@/locale'

const baseData = {
    state: {
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
        battalionItems: (state) => state.battalionItems,
        timeRangeItems: (state) => state.timeRangeItems,
        discountTypeItems: (state) => state.discountTypeItems,
    },

    mutations: {
        SET_BATTALION_ITEMS: (state, payload) => {
            state.battalionItems = payload;
        }
    }, actions: {},
};

export default baseData;
