import {createI18n} from 'vue-i18n'
import fa from './fa_IR';

const messages = {
    fa: {
        ...fa,
    },
};

export const locales = [
    {
        title: 'فارسی',
        locale: 'fa',
        abbr: 'IRR',
    },
];

const i18n = createI18n({
    messages,
});

export async function setLocale(locale) {
    if (i18n.locale !== locale) {
        i18n.locale = locale || settings.locale;
    }
}


i18n.global.locale = 'fa'

export default i18n;
