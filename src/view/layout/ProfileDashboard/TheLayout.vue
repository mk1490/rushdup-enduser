<template>
    <body
            class="bp-nouveau rtl page-template-default page page-id-5 logged-in wp-embed-responsive theme-edumall tutor-lms tutor-screen-frontend-dashboard woocommerce-js desktop desktop-menu edumall-light-scheme mobile-menu-push-to-right woocommerce header-sticky-both wide page-has-no-sidebar title-bar-none dashboard--page dashboard-page dashboard-nav-fixed elementor-default elementor-kit-2492 js loaded"
            data-header-sticky-height="80" id="__mpp-uploader-id-0">
    <the-layout-profile-header></the-layout-profile-header>
    <the-layout-drawer></the-layout-drawer>
    <the-layout-content></the-layout-content>

    </body>
</template>

<script>
import TheLayoutToolbar from "@/view/layout/ProfileDashboard/TheLayoutToolbar.vue";
import TheLayoutDrawer from "@/view/layout/ProfileDashboard/TheLayoutDrawer.vue";
import TheLayoutContent from "@/view/layout/ProfileDashboard/TheLayoutContent.vue";
import TheLayoutProfileHeader from "@/view/layout/ProfileDashboard/TheLayoutProfileHeader.vue";

export default {
    name: "TheLayout",
    components: {TheLayoutProfileHeader, TheLayoutContent, TheLayoutDrawer, TheLayoutToolbar},
    async created() {
    },
}
</script>

<style scoped>

</style>