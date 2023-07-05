<template>
    <header id="page-header"
            :class="'page-header header-01 header-dark nav-links-hover-style-01 header-sticky-dark-logo headroom headroom--not-bottom headroom--pinned headroom--top ' + (headerIsOpen ? 'header-more-tools-opened': '')">
        <div class="page-header-place-holder"></div>
        <div id="page-header-inner" class="page-header-inner" data-sticky="1">
            <div class="container">
                <div class="header-wrap">
                    <div class="header-left">
                        <div class="header-content-inner">
                            <div class="branding">
                                <div class="branding-logo-wrap">
                                    <a rel="home">
                                        <img
                                                src="../../../assets/logo.png"
                                                alt="رشد آپ" class="branding-logo dark-logo">
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="header-category-menu">
                        <a :href="'/cl'" class="header-icon category-menu-toggle">
                            <div class="category-toggle-icon">
                                <svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g stroke="none" stroke-width="1" fill="#000000" fill-rule="evenodd">
                                        <path
                                                d="M2,14 C3.1045695,14 4,14.8954305 4,16 C4,17.1045695 3.1045695,18 2,18 C0.8954305,18 0,17.1045695 0,16 C0,14.8954305 0.8954305,14 2,14 Z M9,14 C10.1045695,14 11,14.8954305 11,16 C11,17.1045695 10.1045695,18 9,18 C7.8954305,18 7,17.1045695 7,16 C7,14.8954305 7.8954305,14 9,14 Z M16,14 C17.1045695,14 18,14.8954305 18,16 C18,17.1045695 17.1045695,18 16,18 C14.8954305,18 14,17.1045695 14,16 C14,14.8954305 14.8954305,14 16,14 Z M2,7 C3.1045695,7 4,7.8954305 4,9 C4,10.1045695 3.1045695,11 2,11 C0.8954305,11 0,10.1045695 0,9 C0,7.8954305 0.8954305,7 2,7 Z M9,7 C10.1045695,7 11,7.8954305 11,9 C11,10.1045695 10.1045695,11 9,11 C7.8954305,11 7,10.1045695 7,9 C7,7.8954305 7.8954305,7 9,7 Z M16,7 C17.1045695,7 18,7.8954305 18,9 C18,10.1045695 17.1045695,11 16,11 C14.8954305,11 14,10.1045695 14,9 C14,7.8954305 14.8954305,7 16,7 Z M2,0 C3.1045695,0 4,0.8954305 4,2 C4,3.1045695 3.1045695,4 2,4 C0.8954305,4 0,3.1045695 0,2 C0,0.8954305 0.8954305,0 2,0 Z M9,0 C10.1045695,0 11,0.8954305 11,2 C11,3.1045695 10.1045695,4 9,4 C7.8954305,4 7,3.1045695 7,2 C7,0.8954305 7.8954305,0 9,0 Z M16,0 C17.1045695,0 18,0.8954305 18,2 C18,3.1045695 17.1045695,4 16,4 C14.8954305,4 14,3.1045695 14,2 C14,0.8954305 14.8954305,0 16,0 Z">
                                        </path>
                                    </g>
                                </svg>
                            </div>
                            <div class="category-toggle-text">
                                دوره ها
                            </div>
                        </a>
                        <nav class="header-category-dropdown-wrap">
                            <ul class="header-category-dropdown">
                                <li
                                        v-for="categoryItem in categoryItems"
                                        class="cat-item">
                                    <a :href="`/cl/${categoryItem.slug}`">
                                        {{ categoryItem.title }}
                                        <span
                                                v-if="categoryItem.children.length > 0"
                                                class="toggle-sub-menu"></span>
                                    </a>
                                    <ul
                                            v-if="categoryItem.children"
                                            v-for="childItem in categoryItem.children"
                                            class="children sub-categories">
                                        <li data-id="191" class="cat-item">
                                            <a :href="`/cl/${childItem.slug}`">
                                                {{ childItem.title }}
                                                <span
                                                        v-if="childItem.children.length > 0"
                                                        class="toggle-sub-menu">
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div class="header-right">
                        <div class="header-content-inner">
                            <div id="header-right-inner" class="header-right-inner">
                                <div class="header-right-inner-content">

                                    <div class="header-search-form">
                                        <form
                                                v-on:submit="submitFormForSearch"
                                                class="search-form">
                                            <label>
                                                <span class="screen-reader-text">جستجو برای:</span>
                                                <input type="search" class="search-field" placeholder="جستجو" value=""
                                                       title="جستجو برای:">
                                            </label>
                                            <button type="submit" class="search-submit">
                                                <span class="search-btn-icon fas fa-search"></span>
                                                <span class="search-btn-text">
                                                    جستجو
                                                </span>
                                            </button>
                                        </form>
                                    </div>

                                    <div class="navigation page-navigation d-none d-md-block">
                                        <nav class="menu menu--primary">
                                            <ul class="menu__container sm sm-simple sm-rtl">
                                                <li
                                                        v-for="(menuItem, menuIndex) in menuItems"
                                                        :id="'menu_'+menuIndex"
                                                        @mouseenter="mouseEnter($event, menuIndex)"
                                                        @mouseleave="mouseLeave($event, menuIndex)"
                                                        :class="`menu-item menu-item-type-custom menu-item-object-custom menu-item level-1 ${menuItem.childrenItems.length > 0 ? 'menu-item-has-children' : ''}` ">
                                                    <a :href="menuItem.targetExtra"
                                                       onclick="return true"
                                                       class="has-submenu" aria-expanded="true">
                                                        <div class="menu-item-wrap">
                                                            <span class="menu-item-title">{{ menuItem.title }}</span>
                                                            <span
                                                                    v-if="menuItem.childrenItems.length > 0"
                                                                    class="toggle-sub-menu">
                                                        </span>
                                                        </div>
                                                        <span class="sub-arrow"></span>
                                                    </a>
                                                    <ul
                                                            v-if="menuItem.childrenItems.length > 0"
                                                            v-for="(childItem,childIndex) in menuItem.childrenItems"
                                                            :id="'childMenu_' +menuIndex"
                                                            class="sub-menu children simple-menu" aria-expanded="false"
                                                            style="width: auto; top: auto; z-index: 10001; min-width: 10em; max-width: 20em;">
                                                        <li
                                                                class="menu-item menu-item-type-custom menu-item-object-custom menu-item-236">
                                                            <a :href="childItem.targetExtra"
                                                               onclick="return true">
                                                                <div class="menu-item-wrap"><span
                                                                        class="menu-item-title">{{
                                                                    childItem.title
                                                                    }}</span>
                                                                </div>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>


                                    <the-layout-toolbar-cart-widget>
                                    </the-layout-toolbar-cart-widget>
                                    <the-layout-toolbar-user-button>
                                    </the-layout-toolbar-user-button>
                                </div>
                            </div>
                            <div
                                    class="header-icon page-open-mobile-menu"
                                    @click="toggleNavbar">
                                <div class="burger-icon">
                                    <span class="burger-icon-top"></span>
                                    <span class="burger-icon-bottom"></span>
                                </div>
                            </div>
                            <div class="header-icon page-open-components"
                                 @click="headerToggle">
                                <div class="inner">
                                    <div class="circle circle-one"></div>
                                    <div class="circle circle-two"></div>
                                    <div class="circle circle-three"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </header>
</template>


<script>
import {mapGetters} from 'vuex';
import Breadcrumbs from '../../widget/AppBreadcrumbs.vue';
import ErrorLog from '../../widget/AppErrorLog.vue';
import FullScreen from '../../widget/AppFullScreen.vue';
import Localization from '../../widget/AppLocalization.vue';
import Notification from '../../widget/AppNotification.vue';
import Profile from '../../widget/AppProfile.vue';
import AppDateTime from "@/view/widget/AppDateTime.vue";
import TheLayoutToolbarCartWidget from "@/view/layout/TheLayoutToolbar/Widgets/TheLayoutToolbarCartWidget.vue";
import LoginButton from "@/view/widget/LoginButton.vue";
import TheLayoutToolbarUserButton from "@/view/layout/TheLayoutToolbar/Widgets/TheLayoutToolbarUserButton.vue";


export default {
    name: 'TheLayoutToolbar',
    created() {
        console.log(this.menuItems)
    },
    mounted() {
        const header = document.getElementById('page-header');
        window.addEventListener('scroll', (event) => {
            if (window.scrollY > header.offsetHeight) {
                header.classList.add('headroom--not-bottom', 'headroom--not-top', 'headroom--unpinned');
                header.classList.remove('headroom--not-bottom', 'headroom--pinned', 'headroom--top')
            } else {
                header.classList.add('headroom--not-bottom', 'headroom--pinned', 'headroom--top');
                header.classList.remove('headroom--not-bottom', 'headroom--not-top', 'headroom--unpinned')

            }
        })
    },
    components: {
        TheLayoutToolbarUserButton,
        LoginButton,
        TheLayoutToolbarCartWidget,
        AppDateTime,
        Breadcrumbs,
        ErrorLog,
        FullScreen,
        Localization,
        Notification,
        Profile,
    },
    data: () => ({
        headerIsOpen: false
    }),
    computed: {
        ...mapGetters([
            'toolbarDense',
            'navbarShow',
            'menuItems',
            'categoryItems',
            'cartItems',
            'cartExistItems',
        ]),
        toggleNavbarIcon() {
            return this.navbarShow ? 'mdi-format-indent-decrease' : 'mdi-format-indent-increase';
        },
    },
    methods: {
        getMenuTarget(item) {
            if (item['targetType'] === 1) {
                const targetExtrea = item['targetExtra'];
                switch (targetExtrea) {
                    case 'Home':
                        return '/'
                        break;
                    default :
                        return '/' + targetExtrea;
                }
            } else {
                return item['target'];
            }
        },
        toggleNavbar() {
            const mainLayoutWrapper = document.getElementById('main-layout-wrapper');
            mainLayoutWrapper.classList.add('page-mobile-menu-opened');
        },
        headerToggle() {
            this.headerIsOpen = !this.headerIsOpen;
        },
        mouseEnter(event, menuIndex) {
            const childMenuItem = document.getElementById(`childMenu_${menuIndex}`);
            if (!!childMenuItem) {
                childMenuItem.style.display = 'block';
                childMenuItem.classList.remove('hide-animation');
                childMenuItem.classList.add('show-animation');
                setTimeout(() => {
                    childMenuItem.classList.remove('show-animation');
                }, 1000)
            }
        },
        mouseLeave(event, menuIndex) {
            const childMenuItem = document.getElementById(`childMenu_${menuIndex}`);
            if (!!childMenuItem) {
                childMenuItem.classList.remove('show-animation');
                childMenuItem.classList.add('hide-animation');
                setTimeout(() => {
                    childMenuItem.style.display = 'none';
                }, 200)
            }
        },
        submitFormForSearch(event) {
            event.preventDefault();
            const searchValue = event.srcElement[0].value;
            const targetRoute = `/search`;
            if (this.$route.path === targetRoute) {
                this.$router.push('/')
            }
            this.$router.push(`${targetRoute}?q=${searchValue}`);
        }
    },
};
</script>


<style scoped id="elementor-post-2387">
.elementor-2387 .elementor-element.elementor-element-fd846ca > .elementor-container.elementor-container {
    max-width: 980px;
}

.elementor-2387 .elementor-element.elementor-element-fd846ca > .elementor-container > .elementor-row {
    align-items: stretch;
}

.elementor-2387 .elementor-element.elementor-element-d60b87c .list-header {
    align-items: center;
}

.elementor-2387 .elementor-element.elementor-element-d60b87c .elementor-repeater-item-c47c1f8 .badge {
    background: #36FF00;
}

.elementor-2387 .elementor-element.elementor-element-d60b87c.edumall-list-layout-block .item + .item,
.elementor-2387 .elementor-element.elementor-element-d60b87c.edumall-list-layout-columns .item:nth-child(2) ~ .item {
    margin-top: 10px;
}

.elementor-2387 .elementor-element.elementor-element-d60b87c.edumall-list-layout-inline .item {
    margin-bottom: 10px;
}

.elementor-2387 .elementor-element.elementor-element-d60b87c .text {
    font-size: 13px;
    line-height: 26px;
    color: #7E7E7E;
}

.elementor-2387 .elementor-element.elementor-element-d60b87c .text .stop-a {
    stop-color: #7E7E7E;
}

.elementor-2387 .elementor-element.elementor-element-d60b87c .text .stop-b {
    stop-color: #7E7E7E;
}

.elementor-2387 .elementor-element.elementor-element-d60b87c .badge {
    background-color: transparent;
    background-image: linear-gradient(45deg, #FE378C 0%, #FE5B34 100%);
}

.elementor-2387 .elementor-element.elementor-element-d60b87c .icon {
    text-align: center;
}

.elementor-2387 .elementor-element.elementor-element-a66ba11 .list-header {
    align-items: center;
}

.elementor-2387 .elementor-element.elementor-element-a66ba11 .elementor-repeater-item-59aef65 .badge {
    background: #36FF00;
}

.elementor-2387 .elementor-element.elementor-element-a66ba11.edumall-list-layout-block .item + .item,
.elementor-2387 .elementor-element.elementor-element-a66ba11.edumall-list-layout-columns .item:nth-child(2) ~ .item {
    margin-top: 10px;
}

.elementor-2387 .elementor-element.elementor-element-a66ba11.edumall-list-layout-inline .item {
    margin-bottom: 10px;
}

.elementor-2387 .elementor-element.elementor-element-a66ba11 .text {
    font-size: 13px;
    line-height: 26px;
    color: #7E7E7E;
}

.elementor-2387 .elementor-element.elementor-element-a66ba11 .text .stop-a {
    stop-color: #7E7E7E;
}

.elementor-2387 .elementor-element.elementor-element-a66ba11 .text .stop-b {
    stop-color: #7E7E7E;
}

.elementor-2387 .elementor-element.elementor-element-a66ba11 .badge {
    background-color: transparent;
    background-image: linear-gradient(45deg, #FE378C 0%, #FE5B34 100%);
}

.elementor-2387 .elementor-element.elementor-element-a66ba11 .icon {
    text-align: center;
}

.elementor-2387 .elementor-element.elementor-element-014f41d > .elementor-container > .elementor-row {
    align-items: stretch;
}

.elementor-2387 .elementor-element.elementor-element-014f41d:not(.elementor-motion-effects-element-type-background),
.elementor-2387 .elementor-element.elementor-element-014f41d > .elementor-motion-effects-container > .elementor-motion-effects-layer {
    background-color: #F2F2F2;
    /*background-image: url("../../wp-content/uploads/2020/11/home-megamenu-bg-1-e1609085762966.jpg");*/
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
}

.elementor-2387 .elementor-element.elementor-element-014f41d,
.elementor-2387 .elementor-element.elementor-element-014f41d > .elementor-background-overlay {
    border-radius: 5px 5px 5px 5px;
}

.elementor-2387 .elementor-element.elementor-element-014f41d {
    transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
    padding: 21px 30px 25px 30px;
}

.elementor-2387 .elementor-element.elementor-element-014f41d > .elementor-background-overlay {
    transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
}

.elementor-2387 .elementor-element.elementor-element-2bdd83d .tm-modern-heading {
    width: 200px;
}

.elementor-2387 .elementor-element.elementor-element-2bdd83d .heading-primary {
    font-size: 16px;
    line-height: 30px;
}

.elementor-2387 .elementor-element.elementor-element-fb175d6 .tm-button {
    width: 144px;
}

.elementor-2387 .elementor-element.elementor-element-fb175d6 > .elementor-widget-container {
    margin: 14px 0px 0px 0px;
}

@media (min-width: 768px) {
    .elementor-2387 .elementor-element.elementor-element-81affe9 {
        width: 22.33%;
    }

    .elementor-2387 .elementor-element.elementor-element-ba0abd1 {
        width: 52.67%;
    }
}


.elementor-2387 .elementor-element.elementor-element-fd846ca > .elementor-container.elementor-container {
    max-width: 980px;
}

.elementor-2387 .elementor-element.elementor-element-fd846ca > .elementor-container > .elementor-row {
    align-items: stretch;
}

.elementor-2387 .elementor-element.elementor-element-d60b87c .list-header {
    align-items: center;
}

.elementor-2387 .elementor-element.elementor-element-d60b87c .elementor-repeater-item-c47c1f8 .badge {
    background: #36FF00;
}

.elementor-2387 .elementor-element.elementor-element-d60b87c.edumall-list-layout-block .item + .item, .elementor-2387 .elementor-element.elementor-element-d60b87c.edumall-list-layout-columns .item:nth-child(2) ~ .item {
    margin-top: 10px;
}

.elementor-2387 .elementor-element.elementor-element-d60b87c.edumall-list-layout-inline .item {
    margin-bottom: 10px;
}

.elementor-2387 .elementor-element.elementor-element-d60b87c .text {
    font-size: 13px;
    line-height: 26px;
    color: #7E7E7E;
}

.elementor-2387 .elementor-element.elementor-element-d60b87c .text .stop-a {
    stop-color: #7E7E7E;
}

.elementor-2387 .elementor-element.elementor-element-d60b87c .text .stop-b {
    stop-color: #7E7E7E;
}

.elementor-2387 .elementor-element.elementor-element-d60b87c .badge {
    background-color: transparent;
    background-image: linear-gradient(45deg, #FE378C 0%, #FE5B34 100%);
}

.elementor-2387 .elementor-element.elementor-element-d60b87c .icon {
    text-align: center;
}

.elementor-2387 .elementor-element.elementor-element-a66ba11 .list-header {
    align-items: center;
}

.elementor-2387 .elementor-element.elementor-element-a66ba11 .elementor-repeater-item-59aef65 .badge {
    background: #36FF00;
}

.elementor-2387 .elementor-element.elementor-element-a66ba11.edumall-list-layout-block .item + .item, .elementor-2387 .elementor-element.elementor-element-a66ba11.edumall-list-layout-columns .item:nth-child(2) ~ .item {
    margin-top: 10px;
}

.elementor-2387 .elementor-element.elementor-element-a66ba11.edumall-list-layout-inline .item {
    margin-bottom: 10px;
}

.elementor-2387 .elementor-element.elementor-element-a66ba11 .text {
    font-size: 13px;
    line-height: 26px;
    color: #7E7E7E;
}

.elementor-2387 .elementor-element.elementor-element-a66ba11 .text .stop-a {
    stop-color: #7E7E7E;
}

.elementor-2387 .elementor-element.elementor-element-a66ba11 .text .stop-b {
    stop-color: #7E7E7E;
}

.elementor-2387 .elementor-element.elementor-element-a66ba11 .badge {
    background-color: transparent;
    background-image: linear-gradient(45deg, #FE378C 0%, #FE5B34 100%);
}

.elementor-2387 .elementor-element.elementor-element-a66ba11 .icon {
    text-align: center;
}

.elementor-2387 .elementor-element.elementor-element-014f41d > .elementor-container > .elementor-row {
    align-items: stretch;
}

.elementor-2387 .elementor-element.elementor-element-014f41d:not(.elementor-motion-effects-element-type-background), .elementor-2387 .elementor-element.elementor-element-014f41d > .elementor-motion-effects-container > .elementor-motion-effects-layer {
    background-color: #F2F2F2;
    background-image: url("https://dana-team.com/products/edumall/wp-content/uploads/2020/11/home-megamenu-bg-1-e1609085762966.jpg");
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
}

.elementor-2387 .elementor-element.elementor-element-014f41d, .elementor-2387 .elementor-element.elementor-element-014f41d > .elementor-background-overlay {
    border-radius: 5px 5px 5px 5px;
}

.elementor-2387 .elementor-element.elementor-element-014f41d {
    transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s;
    padding: 21px 30px 25px 30px;
}

.elementor-2387 .elementor-element.elementor-element-014f41d > .elementor-background-overlay {
    transition: background 0.3s, border-radius 0.3s, opacity 0.3s;
}

.elementor-2387 .elementor-element.elementor-element-2bdd83d .tm-modern-heading {
    width: 200px;
}

.elementor-2387 .elementor-element.elementor-element-2bdd83d .heading-primary {
    font-size: 16px;
    line-height: 30px;
}

.elementor-2387 .elementor-element.elementor-element-fb175d6 .tm-button {
    width: 144px;
}

.elementor-2387 .elementor-element.elementor-element-fb175d6 > .elementor-widget-container {
    margin: 14px 0px 0px 0px;
}

@media (min-width: 768px) {
    .elementor-2387 .elementor-element.elementor-element-81affe9 {
        width: 22.33%;
    }

    .elementor-2387 .elementor-element.elementor-element-ba0abd1 {
        width: 52.67%;
    }
}

.search-field {
    color: #9B9B9B;
    border-color: #F2F2F2;
    background: #F2F2F2;
    width: 380px !important;
}

.search-field:focus {
    color: #333;
    border-color: #0071dc;
    background: #fff;
}

.header-04.header-dark .search-field {
    color: #80868d !important;
    border-color: #19222d !important;
    background: #19222d !important;
}

.header-04.header-dark .search-field:focus {
    color: #fff;
    border-color: #fff;
    background: #19222d;
}

.search-submit {
    color: #0071dc !important;
}

.page-open-mobile-menu .burger-icon {
    position: relative;
    width: 24px;
    height: 20px;
}

::v-deep .button-content-wrapper {
    color: #696969 !important;
}
</style>