<template>
    <div class="tutor-dashboard-header-wrap">
        <div class="container small-gutter">
            <div class="row">
                <div class="col-md-12">
                    <div class="tutor-dashboard-header">
                        <div
                                @click="$emit('navbarClick')"
                                ref="toggleMenu"
                                class="dashboard-header-toggle-menu dashboard-header-menu-open-btn">
                            <svg width="20px" height="18px" viewBox="0 0 20 18" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <path d="M18.7179688,2.60581293 L1.28207031,2.60581293 C0.573828125,2.60581293 0,2.02491559 0,1.30798783 C0,0.591060076 0.573828125,0.0101231939 1.28207031,0.0101231939 L18.7179688,0.0101231939 C19.4261719,0.0101231939 20,0.591020532 20,1.30798783 C20,2.02495513 19.4261719,2.60581293 18.7179688,2.60581293 Z"></path>
                                <path d="M11.5384766,10.5957293 L1.28207031,10.5957293 C0.573828125,10.5957293 2.91322522e-13,10.0147924 2.91322522e-13,9.29786464 C2.91322522e-13,8.58093688 0.573828125,8 1.28207031,8 L11.5384766,8 C12.2466797,8 12.8205469,8.58089734 12.8205469,9.29786464 C12.8205469,10.0148319 12.2466797,10.5957293 11.5384766,10.5957293 Z"></path>
                                <path d="M18.7179688,17.6 L1.28207031,17.6 C0.573828125,17.6 0,17.0628683 0,16.4 C0,15.7371317 0.573828125,15.2 1.28207031,15.2 L18.7179688,15.2 C19.4261719,15.2 20,15.7370952 20,16.4 C20,17.0628683 19.4261719,17.6 18.7179688,17.6 Z"></path>
                            </svg>
                        </div>
                        <div class="tutor-header-user-info">
                            <div
                                    v-if="!!avatar"
                                    class="tutor-dashboard-header-avatar">
                                <img
                                        class="avatar avatar-150 photo"
                                        height="150"
                                        width="150" alt="">
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
import {mapActions, mapGetters} from "vuex";

export default {
    name: "TheLayoutProfileHeader",
    emits: ['navbarClick'],
    computed: {
        ...mapGetters(['name', 'family', 'avatar'])
    }
}
</script>

<style scoped>

</style>