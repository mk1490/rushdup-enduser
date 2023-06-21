/**
 * vva v0.0.5
 * (c) 2019 NelsonEAX
 * @license MIT
 */
import { createI18n } from 'vue-i18n'
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

// export async function setLocale(locale) {
//     if (i18n.locale !== locale) {
//         console.log(`[Locale] Set to "${locale}"`);
//         i18n.locale = locale || settings.locale;
//     } else {
//         console.warn(`[Locale] "${locale}" is current`);
//     }
// }

export default i18n;
