import {createVuetify, useLocale} from "vuetify";
import 'vuetify/styles';
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import i18n, {locales} from "@/locale";
import {settings} from "@/config";
import {createVueI18nAdapter} from "vuetify/locale/adapters/vue-i18n";
import {useI18n} from "vue-i18n";

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        options: {
            customProperties: true,
        },
    },
    icons: {
        iconfont: 'mdi',
    },
    locale: {
        locale: 'fa',
        fallback: 'fa',
        adapter: createVueI18nAdapter({i18n, useI18n})
    },
    lang: {
        locales,
        current: settings.locale,
        t: (key, ...params) => i18n.t(key, params),
    },
})
export async function setVuetifyThemeDark(dark) {
    // vuetify.framework.theme.dark = dark;
}


export default vuetify;
