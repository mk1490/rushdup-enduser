﻿<template>
    <div class="tutor-dashboard-left-menu">
        <div
                @click:outside="closeNavbar"
                class="dashboard-nav-wrapper">
            <div class="dashboard-nav-header">
                <div
                        @click="closeNavbar"
                        class="dashboard-header-toggle-menu dashboard-header-close-menu">
                    <span class="fal fa-times"></span>
                </div>
                <div class="branding">
                    <div class="branding-logo-wrap">
                        <router-link to="/">
                            <a>
                                <img
                                        src="../../../assets/logo.png"
                                        class="branding-logo dark-logo">
                            </a>
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="dashboard-nav-content">
                <div class="dashboard-nav-content-inner ps-container ps-theme-default ps-active-y">
                    <ul class="tutor-dashboard-permalinks">
                        <li
                                v-for="item in items"
                                :class="`tutor-dashboard-menu-${item.icon} ${!!item.active? 'active': ''}` ">
                            <router-link :to="item.to">
                                {{ item.title }}
                            </router-link>

                        </li>
                    </ul>
                </div>
            </div>
            <div class="dashboard-nav-content">
                <div class="dashboard-nav-content-inner ps-container ps-theme-default ps-active-y">
                    <wallet></wallet>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Wallet from "./Widgets/Wallet.vue";

export default {
    name: "TheLayoutDrawerList",
    components: {Wallet},
    emits: ['closeNavbar'],
    created() {
        this.items.push({title: 'پیشخوان', icon: 'index', to: '/dashboard'});
        this.items.push({title: 'پروفایل من', icon: 'my-profile', to: '/myProfile'});
        this.items.push({title: 'دوره‌های ثبت‌نام شده', icon: 'enrolled-courses', to: '/enrolledCourses'});
        this.items.push({title: 'تیکت پشتیبانی', icon: 'ticket', to: '/supportTicket'});
        this.items.push({title: 'تنظیمات', icon: 'settings', to: '/settings'});
        this.checkActiveRoute();
    },
    data() {
        return {
            items: []
        }
    },
    methods: {
        async navigateToRoute(route) {
            await this.$router.push(route);
        },
        checkActiveRoute() {
            const index = this.items.findIndex(x => x.to == '/' + this.$route.path.split('/')[1]);
            this.items = this.items.map((f, i) => {
                if (index == i) {
                    f.active = true;
                } else {
                    f.active = false;
                }
                return f;
            });
        },
        closeNavbar() {
            this.$emit('closeNavbar')
        }

    },
    watch: {
        '$route': {
            handler(val) {
                this.checkActiveRoute();
            }
        }
    }
}
</script>

<style scoped>

.v-list-item--active {
    /*background-color: #EF5350 !important;*/
    color: #0066ff !important;
}
</style>