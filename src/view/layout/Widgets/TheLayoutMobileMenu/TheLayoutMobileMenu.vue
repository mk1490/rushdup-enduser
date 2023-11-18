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
                                    :title="item.title">
                            </v-list-item>
                        </template>


                        <template v-for="childItem in item.children">


                            <div v-if="childItem.children.length > 0">
                                <v-list-group
                                        v-if="item.children.length > 0"
                                        class="two-level-list"
                                        :value="childItem.id">
                                    <template
                                            v-slot:activator="{ props }">
                                        <v-list-item
                                                v-bind="props"
                                                :title="childItem.title"
                                                :value="childItem.id">
                                        </v-list-item>
                                    </template>
                                    <v-list-item
                                            class="three-level-list"
                                            v-for="childItemThreeLevel in childItem.children"
                                            :title="childItemThreeLevel.title"
                                            :value="childItemThreeLevel.id"
                                            :to="targetUrl(childItemThreeLevel)"
                                    >
                                    </v-list-item>
                                </v-list-group>
                            </div>
                            <div v-else class="two-level-list-single">
                                <v-list-item
                                        :title="childItem.title"
                                        :value="childItem.id"
                                        :to="targetUrl(childItem)"
                                >
                                </v-list-item>
                            </div>
                        </template>
                    </v-list-group>
                </v-list>
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
        },
        targetUrl(item) {
            return `/cl/${item.slug}`
        }
    }
}
</script>

<style scoped>

.page-mobile-main-menu {
    cursor: url(@/assets/images/light-close.png) 16 16, pointer;
}

.drawer-list {
    background-color: #FFFFFF00 !important;
}

.two-level-list {
    padding-left: 12px;
}

.two-level-list-single {
    padding-left: 65px;
}

.three-level-list {
    padding-left: 90px !important;
}

:deep(.v-list-item-title) {
    color: white !important;
}

:deep(.v-list-item__append) {
    color: white !important;
}
</style>