<template>
  <!--  <div class="rtl page-template-default page woocommerce-js desktop desktop-menu">-->
    <div
            id="main-layout-wrapper"
            class="bp-nouveau rtl courses-template-default single single-courses postid-1990 wp-embed-responsive theme-edumall tutor-lms woocommerce-no-js desktop edumall-light-scheme mobile-menu-push-to-right woocommerce header-sticky-both wide page-has-sidebar title-bar-04 single-course-01 elementor-default elementor-kit-2492 no-js">
        <div class="content-wrapper">
            <the-layout-toolbar/>
            <app-title-bar
                    v-if="!!pageTitle"
            ></app-title-bar>
            <the-layout-content></the-layout-content>
            <the-layout-footer/>
        </div>

        <the-layout-scroll-to-top></the-layout-scroll-to-top>
        <the-layout-mobile-menu></the-layout-mobile-menu>
        <!--    <the-layout-drawer class="d-sm-none d-sm-block d-md-none"/>-->


    </div>
</template>

<script>
import TheLayoutDrawer from './TheLayoutDrawer.vue';
import TheLayoutToolbar from './TheLayoutToolbar/TheLayoutToolbar.vue';
import TheLayoutContent from './TheLayoutContent.vue';
import TheLayoutFab from './TheLayoutFab.vue';
import TheLayoutToTopFab from './TheLayoutToTopFab.vue';
import TheLayoutFooter from './TheLayoutFooter.vue';
import AppTitleBar from "@/view/widget/AppTitleBar.vue";
import TheLayoutMobileMenu from "@/view/layout/TheLayoutMobileMenu.vue";
import TheLayoutScrollToTop from "@/view/layout/TheLayoutScrollToTop.vue";
import {mapGetters} from "vuex";

export default {
    async created() {
        if (!(await this.$store.dispatch('isAuth'))) {
            // window.location.href = '/#/SignIn';
        }
    },
    mounted() {
        this.prepareMenuOrDesktopMenuStyle();
        window.onresize = () => {
            this.prepareMenuOrDesktopMenuStyle();
        }
    },

    name: 'TheLayout',
    components: {
        TheLayoutScrollToTop,
        TheLayoutMobileMenu,
        AppTitleBar,
        TheLayoutDrawer,
        TheLayoutToolbar,
        TheLayoutContent,
        TheLayoutFab,
        TheLayoutToTopFab,
        TheLayoutFooter,
    },
    data: () => ({}),
    computed: {
        ...mapGetters(['pageTitle'])
    },
    methods: {
        prepareMenuOrDesktopMenuStyle() {

            const isMobile = ((window.innerWidth <= 800) && (window.innerHeight <= 600));
            const mainLayoutWrapper = document.getElementById('main-layout-wrapper');

            if (isMobile) {
                mainLayoutWrapper.classList.remove('desktop-menu')
                mainLayoutWrapper.classList.remove('dashboard-nav-fixed')
                mainLayoutWrapper.classList.add('mobile-menu')
            } else {
                mainLayoutWrapper.classList.add('desktop-menu')
                mainLayoutWrapper.classList.add('dashboard-nav-fixed')
                mainLayoutWrapper.classList.remove('mobile-menu')
            }


        },
    }

};
</script>
