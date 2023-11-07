import {createI18n} from 'vue-i18n'
import fa from './fa_IR';
import vuetify from '@/locale/vuetify';
const messages = {
    fa: {
        ...fa,
        $vuetify: vuetify.fa
    },
};

console.error(messages.fa)

export const locales = [
    {
        title: 'فارسی',
        locale: 'fa-IR',
        abbr: 'IRR',
    },
];

const i18n = createI18n({
    legacy:false,
    messages,
    locale: 'fa',
    fallbackLocale: 'fa',
});

export async function setLocale(locale) {
    if (i18n.locale !== locale) {
        i18n.locale = locale || settings.locale;
    }
}


// i18n.global.locale = 'fa-IR'

export default i18n;
