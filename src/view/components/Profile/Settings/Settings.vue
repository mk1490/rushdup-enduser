<template>
    <div class="tutor-dashboard-content">
        <h3>تنظیمات</h3>

        <div class="tutor-dashboard-content-inner">
            <div class="tutor-dashboard-inline-links">
                <ul>
                    <li
                            v-for="item in tabs"
                            class="active">
                        <a href="https://dana-team.com/products/edumall/dashboard/settings">{{ item.title }}</a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="tutor-dashboard-content-inner">


            <div class="dashboard-settings-form dashboard-settings-profile-form">
                <profile></profile>
                <div class="tutor-form-group tutor-profile-form-btn-wrap form-submit-wrap">
                    <button

                        @click="updateProfileAndSendDataToServer"
                            type="submit" name="tutor_register_student_btn"
                            class="tutor-button tutor-profile-settings-save">
                        بروزرسانی پروفایل
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Profile from "@/view/components/Profile/Settings/Tabs/Profile.vue";

export default {
    name: "Settings",
    components: {Profile},
    created() {
        this.tabs.push({title: 'پروفایل', to: ''})
        this.tabs.push({title: 'تغییر کلمۀ عبور', to: 'changePassword'})
    },
    data() {
        return {
            tabs: [],
        }
    },
    methods: {
        checkRouteActiveTab() {
            const index = this.tabs.findIndex(x => x.to == this.$route.path);
            this.changeView(index);
            this.tabs = this.tabs.map((f, i) => {
                if (index == i) {
                    f.active = true;
                } else {
                    f.active = false;
                }
                return f;
            })
        },
        async updateProfileAndSendDataToServer(){
            const [err, data] = await this.to(this.http.put(``));
            if (!err){

            }
        }
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