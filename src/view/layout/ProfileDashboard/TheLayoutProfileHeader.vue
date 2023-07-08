<template>
    <div class="tutor-dashboard-header-wrap">
        <div class="container small-gutter">
            <div class="row">
                <div class="col-md-12">
                    <div class="tutor-dashboard-header">
                        <div class="dashboard-header-toggle-menu dashboard-header-menu-open-btn">
                        </div>
                        <div class="tutor-header-user-info">
                            <div
                                    v-if="!!avatar"
                                    class="tutor-dashboard-header-avatar">
                                <img
                                        class="avatar avatar-150 photo"
                                        height="150"
                                        width="150"
                                        src="">
                            </div>
                            <div class="tutor-dashboard-header-info">
                                <h4 class="tutor-dashboard-header-display-name">
                                    <span class="welcome-text">سلام،</span>
                                    {{ name }}
                                </h4>

                            </div>
                        </div>

                        <div class="tutor-dashboard-header-button">
                            <div class="tm-button-wrapper">
                                <router-link to="/teacher-request">
                                    <a
                                            class="tm-button style-thick-border tm-button-nm button-grey open-popup-instructor-register icon-left">
                                        <div class="button-content-wrapper">

                                            <span class="button-icon"><i class="edumi edumi-user"></i></span>

                                            <span class="button-text">ثبت نام به عنوان مدرس</span>

                                        </div>
                                    </a>
                                </router-link>
                            </div>
                        </div>

                        <div id="page-open-main-menu" class="header-icon page-open-main-menu style-01">
                            <span class="far fa-bars"></span>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
    name: "TheLayoutProfileHeader",
    computed: {
        ...mapGetters(['name', 'family', 'avatar'])
    }
}
</script>

<style scoped>

</style>