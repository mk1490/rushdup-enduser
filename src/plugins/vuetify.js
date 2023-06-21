import {createVuetify} from "vuetify";
import 'vuetify/styles';
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import {locales} from "@/locale";

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        options: {
            customProperties: true,
        },
        // dark: false,
    },
    icons: {
        iconfont: 'mdi',
    },
    locale:{
        locale: 'fa',
        fallback: 'fa',
        messages:{...locales}
    },
    lang: {
        // locales,
        // current: settings.locale,
        // t: (key, ...params) => i18n.t(key, params),
    },
})

/*
export async function setVuetifyTheme(index) {
    if (vuetify.framework.theme.themes !== themes[index]) {
        console.log(`[Vuetify] Change theme to "${index}"`);
        vuetify.framework.theme.themes.light = themes[index].light || themes[0].light;
        vuetify.framework.theme.themes.dark = themes[index].dark || themes[0].dark;
    } else {
        console.warn(`[Vuetify] "${index}" is current theme `);
    }
}
*/
/**
 * Set the mode to dark/light for the Vuetify class object.
 *
 * @param {Boolean} dark new value
 */
export async function setVuetifyThemeDark(dark) {
    console.log(`[Vuetify] Change theme to "${dark ? 'dark' : 'light'}"`);
    // vuetify.framework.theme.dark = dark;
}


export default vuetify;
