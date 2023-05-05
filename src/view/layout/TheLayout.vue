<template>
  <!--  <div class="rtl page-template-default page woocommerce-js desktop desktop-menu">-->
    <div class="bp-nouveau rtl courses-template-default single single-courses postid-1990 wp-embed-responsive theme-edumall tutor-lms woocommerce-no-js desktop desktop-menu edumall-light-scheme mobile-menu-push-to-right woocommerce header-sticky-both wide page-has-sidebar title-bar-04 single-course-01 elementor-default elementor-kit-2492 no-js">
        <div class="content-wrapper">
            <the-layout-toolbar/>
            <app-title-bar></app-title-bar>
            <the-layout-content></the-layout-content>
            <the-layout-footer/>
        </div>
        <!--    <the-layout-drawer class="d-sm-none d-sm-block d-md-none"/>-->


    </div>
</template>

<script>
import TheLayoutDrawer from './TheLayoutDrawer.vue';
import TheLayoutToolbar from './TheLayoutToolbar.vue';
import TheLayoutContent from './TheLayoutContent.vue';
import TheLayoutFab from './TheLayoutFab.vue';
import TheLayoutToTopFab from './TheLayoutToTopFab.vue';
import TheLayoutFooter from './TheLayoutFooter.vue';
import AppTitleBar from "@/view/widget/AppTitleBar.vue";

export default {
    async created() {
        if (!(await this.$store.dispatch('isAuth'))) {
            // window.location.href = '/#/SignIn';
        }
    },
    name: 'TheLayout',
    components: {
        AppTitleBar,
        TheLayoutDrawer,
        TheLayoutToolbar,
        TheLayoutContent,
        TheLayoutFab,
        TheLayoutToTopFab,
        TheLayoutFooter,
    },
    data: () => ({}),
};
</script>
