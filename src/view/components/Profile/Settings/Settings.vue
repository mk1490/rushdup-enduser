<template>
    <div class="tutor-dashboard-content">
        <h3>تنظیمات</h3>

        <div class="tutor-dashboard-content-inner">
            <div class="tutor-dashboard-inline-links">
                <ul>
                    <li
                            v-for="item in tabs"
                            :class="`${item.active == true? 'active': ''}`">
                        <router-link :to="item.to">{{ item.title }}</router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div class="tutor-dashboard-content-inner">
            <div class="dashboard-settings-form dashboard-settings-profile-form">
                <profile
                        v-if="selectedTab == 0">
                </profile>
                <change-password
                        v-if="selectedTab == 1"
                >
                </change-password>

            </div>
        </div>
    </div>
</template>

<script>
import Profile from "@/view/components/Profile/Settings/Tabs/Profile.vue";
import ChangePassword from "@/view/components/Profile/Settings/Tabs/ChangePassword.vue";

export default {
    name: "Settings",
    components: {ChangePassword, Profile},
    created() {
        this.tabs.push({title: 'پروفایل', to: '/settings'})
        this.tabs.push({title: 'تغییر کلمۀ عبور', to: '/settings/changePassword'})
        this.checkRouteActiveTab();
    },
    data() {
        return {
            tabs: [],
            selectedTab: 0,
        }
    },
    methods: {
        checkRouteActiveTab() {
            const index = this.tabs.findIndex(x => x.to == this.$route.path);
            this.selectedTab = index;
            this.tabs = this.tabs.map((f, i) => {
                if (index == i) {
                    f.active = true;
                } else {
                    f.active = false;
                }
                return f;
            })
        },
    },
    watch: {
        '$route': {
            handler(val) {
                this.checkRouteActiveTab();
            }
        }
    }
}
</script>

<style scoped>

</style>