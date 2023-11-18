<template>
    <div id="page-mobile-main-menu" class="page-mobile-main-menu rendered">
        <div
                id="inner-page-mobile-main-menu"
                class="inner">
            <div class="page-mobile-menu-header">
                <div class="page-mobile-popup-logo page-mobile-menu-logo">
                    <router-link to="/">
                        <img src="../../../../assets/logo.png"
                             width="148" alt="">
                    </router-link>
                </div>
                <div @click="closeMenu" class="page-close-mobile-menu">
                    <div class="burger-icon burger-icon-close">
                        <span class="burger-icon-top"></span>
                        <span class="burger-icon-bottom"></span>
                    </div>
                </div>
            </div>

            <div class="page-mobile-menu-content">
                <v-list
                        class="drawer-list"
                        v-model:opened="open">
                    <v-list-group
                            v-for="item in categoryItems"
                            :value="item.id">
                        <template v-slot:activator="{ props }">
                            <v-list-item
                                    v-bind="props"
                                    :title="item.title"
                            ></v-list-item>
                        </template>
                        <v-list-group
                                class="two-level-list"
                                v-for="childItem in item.children"
                                :value="childItem.id">
                            <template
                                    v-slot:activator="{ props }">
                                <v-list-item
                                        v-bind="props"
                                        :title="childItem.title"
                                        :value="childItem.id"
                                ></v-list-item>
                            </template>

                            <v-list-item
                                class="three-level-list"
                                    v-for="childItemThreeLevel in childItem.children"
                                    :title="childItemThreeLevel.title"
                                    :value="childItemThreeLevel.id"
                            ></v-list-item>
                        </v-list-group>
                    </v-list-group>
                </v-list>

                <!--                <ul id="mobile-menu-primary" class="menu__container">-->
                <!--                    <li-->
                <!--                            v-for="(categoryItem, categoryIndex) in categoryItems"-->
                <!--                            :key="categoryIndex"-->
                <!--                            :id="`mobile_menu_${categoryIndex}`"-->
                <!--                            :class="`menu-item menu-item-type-post_type menu-item-object-page menu-item-1718 level-1 ${categoryItem.children.length > 0 ? 'has-mega-menu': ''}` ">-->
                <!--                        <a-->
                <!--                                @click="menuClick($event, categoryIndex)"-->
                <!--                                href="#">-->
                <!--                            <div class="menu-item-wrap">-->
                <!--                                <span class="menu-item-title">{{ categoryItem.title }}</span>-->
                <!--                                <span-->
                <!--                                        v-if="categoryItem.children.length > 0"-->
                <!--                                        class="toggle-sub-menu"></span>-->
                <!--                            </div>-->
                <!--                        </a>-->
                <!--                        <ul-->
                <!--                                :id="`child_menu_${categoryIndex}`"-->
                <!--                                class="sub-menu children simple-menu"-->
                <!--                                style="display: none">-->
                <!--                            <li-->
                <!--                                    v-for="childItem in categoryItem.children"-->
                <!--                                    class="menu-item menu-item-type-custom menu-item-object-custom menu-item-236">-->
                <!--                                <a-->
                <!--                                        :href="childItem.targetExtra"-->
                <!--                                        onclick="return true">-->
                <!--                                    <div class="menu-item-wrap">-->
                <!--                                        <span class="menu-item-title">{{ childItem.title }}</span>-->
                <!--                                    </div>-->
                <!--                                </a>-->
                <!--                            </li>-->
                <!--                        </ul>-->

                <!--                    </li>-->
                <!--                </ul>-->
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "TheLayoutMobileMenu",
    computed: {
        ...mapGetters(['menuItems', 'categoryItems'])
    },
    data() {
        return {
            open: ['Users'],
            admins: [
                ['Management', 'mdi-account-multiple-outline'],
                ['Settings', 'mdi-cog-outline'],
            ],
            cruds: [
                ['Create', 'mdi-plus-outline'],
                ['Read', 'mdi-file-outline'],
                ['Update', 'mdi-update'],
                ['Delete', 'mdi-delete'],
            ],
        }
    },
    created() {
        console.log(this.menuItems)
    },
    mounted() {
        let mouseOutsidedForMenu = false;
        const pageMobileMainMenuElement = document.getElementById('page-mobile-main-menu');
        const innerPageMobileMainMenuElement = document.getElementById('inner-page-mobile-main-menu');
        innerPageMobileMainMenuElement.onmouseleave = () => {
            mouseOutsidedForMenu = true;
        }
        innerPageMobileMainMenuElement.onmouseenter = () => {
            mouseOutsidedForMenu = false;
        }
        pageMobileMainMenuElement.onclick = () => {
            if (mouseOutsidedForMenu) {
                this.closeMenu();
            }
        }
    },
    methods: {
        closeMenu() {
            const mainLayoutWrapper = document.getElementById('main-layout-wrapper');
            mainLayoutWrapper.classList.remove('page-mobile-menu-opened');
        },
        menuClick(event, index) {
            const menuElement = document.getElementById('mobile_menu_' + index);
            const childElement = document.getElementById('child_menu_' + index);
            if (menuElement.classList.contains('opened')) {
                menuElement.classList.remove('opened');
                childElement.style.display = 'none';
            } else {
                if (this.categoryItems[index].children.length > 0) {
                    menuElement.classList.add('opened');
                    childElement.style.display = 'block';
                }
            }
        }
    }
}
</script>

<style scoped>
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

.page-mobile-main-menu {
    cursor: url(@/assets/images/light-close.png) 16 16, pointer;
}

.drawer-list {
    background-color: #FFFFFF00 !important;
}

.two-level-list {
    padding-left: 12px;
}

.three-level-list {
    padding-left: 90px!important;
}

:deep(.v-list-item-title){
    color: white!important;
}
:deep(.v-list-item__append){
    color: white!important;
}
</style>