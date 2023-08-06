<template>
    <body
            ref="mainWrapper"
            class="bp-nouveau rtl page-template-default page page-id-5 logged-in wp-embed-responsive theme-edumall tutor-lms tutor-screen-frontend-dashboard woocommerce-js desktop desktop-menu edumall-light-scheme mobile-menu-push-to-right woocommerce header-sticky-both wide page-has-no-sidebar title-bar-none dashboard--page dashboard-page dashboard-nav-fixed elementor-default elementor-kit-2492 js loaded">
    <the-layout-profile-header
            @navbarClick="toggleNavbar"
    ></the-layout-profile-header>
    <the-layout-drawer-list @close-navbar="closeNavbar"></the-layout-drawer-list>
    <the-layout-content></the-layout-content>

    </body>
</template>

<script>
import TheLayoutToolbar from "@/view/layout/ProfileDashboard/TheLayoutToolbar.vue";
import TheLayoutContent from "@/view/layout/ProfileDashboard/TheLayoutContent.vue";
import TheLayoutProfileHeader from "@/view/layout/ProfileDashboard/TheLayoutProfileHeader.vue";
import TheLayoutDrawerList from "@/view/layout/ProfileDashboard/TheLayoutDrawerList.vue";

export default {
    name: "TheLayout",
    components: {TheLayoutDrawerList, TheLayoutProfileHeader, TheLayoutContent, TheLayoutToolbar},
    mounted() {
        this.prepareMenuOrDesktopMenuStyle();
        window.onresize = () => {
            this.prepareMenuOrDesktopMenuStyle();
        }
    },
    async created() {
    },
    methods: {
        prepareMenuOrDesktopMenuStyle() {
            console.log(this.isMobile())
            const mainLayoutWrapper = this.$refs.mainWrapper;
            if (this.isMobile()) {
                mainLayoutWrapper.classList.remove('desktop-menu')
                mainLayoutWrapper.classList.remove('dashboard-nav-fixed')
                mainLayoutWrapper.classList.add('mobile-menu')
            } else {
                mainLayoutWrapper.classList.add('desktop-menu')
                mainLayoutWrapper.classList.add('dashboard-nav-fixed')
                mainLayoutWrapper.classList.remove('mobile-menu')
            }
        },
        toggleNavbar() {
            const mainWrapper = this.$refs.mainWrapper;
            if (mainWrapper.classList.contains('dashboard-nav-opened')) {
                this.closeNavbar();
            } else {
                mainWrapper.classList.add('dashboard-nav-opened');
            }
        },
        closeNavbar() {
            const mainWrapper = this.$refs.mainWrapper;
            if (mainWrapper.classList.contains('dashboard-nav-opened')) {
                mainWrapper.classList.remove('dashboard-nav-opened');
            }
        }

    }
}
</script>

<style scoped>

</style>