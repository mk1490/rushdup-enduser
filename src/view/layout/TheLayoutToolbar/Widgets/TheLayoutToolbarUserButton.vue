<template>

    <div class="header-user-buttons">
        <div class="inner">

            <div
                    v-if="!isLogin"
                    class="tm-button-wrapper">
                <a
                        @click="openLoginModal()"
                        class="tm-button style-bottom-line-alt button-thin tm-button-sm open-popup-login">
                    <div class="button-content-wrapper">
                        <span class="button-text">ورود</span>

                    </div>
                </a>
            </div>
            <div
                    v-if="!isLogin"
                    class="tm-button-wrapper">
                <a
                        @click="openRegisterModal"
                        class="tm-button style-flat tm-button-sm open-popup-register button-thin button-light-primary">
                    <div class="button-content-wrapper">
                        <span class="button-text">ثبت نام</span>
                    </div>
                </a></div>


            <div
                    v-if="isLogin"
                    class="tm-button-wrapper">
                <a
                        class="tm-button style-bottom-line-alt tm-button-sm"
                        @click="toDashboard()">
                    <div class="button-content-wrapper">
                        <span class="button-text">داشبورد</span>
                    </div>
                </a>
            </div>
            <div
                    v-if="isLogin"
                    class="tm-button-wrapper">
                <a
                        @click="logout"
                        class="tm-button style-flat tm-button-sm button-thin button-secondary-white">
                    <div class="button-content-wrapper">
                        <span class="button-text">خروج</span>

                    </div>
                </a>
            </div>
        </div>

        <login-modal
                v-if="modal.login.visible"
                @registerClick="openRegisterModal"
                @lostPasswordClick="openLostPasswordModal"
                @onLoginSuccess="loginSuccess"
                @close="modal.login.visible =false"
                :visible.sync="modal.login.visible">
        </login-modal>
        <lost-password-modal
                v-if="modal.lostPassword.visible"
                @loginClick="openLoginModal"
                @resetSended="resetSended()"
                @close="modal.lostPassword.visible =false"
                :visible.sync="modal.lostPassword.visible">
        </lost-password-modal>
    </div>
    <register-modal
            v-if="modal.register.visible"
            :visible.sync="modal.register.visible"
            @close="modal.register.visible =false"
            @loginClick="openLoginModal">
    </register-modal>
</template>
<script>
import RegisterModal from "@/view/layout/TheLayoutToolbar/Widgets/RegisterModal.vue";
import LoginModal from "@/view/layout/TheLayoutToolbar/Widgets/LoginModal.vue";
import LostPasswordModal from "@/view/layout/TheLayoutToolbar/Widgets/LostPasswordModal.vue";
import {mapGetters} from "vuex";

export default {
    name: "TheLayoutToolbarUserButton",
    components: {LostPasswordModal, LoginModal, RegisterModal},
    computed: {
        ...mapGetters(['isLogin', 'loginModal'])
    },
    created() {
        this.$store.subscribeAction(({type}, state) => {
            if (type == 'openLoginModal') {
                this.openLoginModal();
            }
        })
    },
    data() {
        return {
            modal: {
                register: {
                    visible: false,
                },
                login: {
                    visible: false,
                },
                lostPassword: {
                    visible: false,
                }
            }
        }
    },
    methods: {
        openRegisterModal() {
            this.modal.register.visible = true;
            this.modal.login.visible = false;
        },
        openLoginModal() {
            this.modal.lostPassword.visible = false;
            this.modal.register.visible = false;
            this.modal.login.visible = true;
        },
        openLostPasswordModal() {
            this.modal.login.visible = false;
            this.modal.lostPassword.visible = true;
        },
        loginSuccess() {
            this.modal.login = false;
            this.$store.dispatch('setLoginState', true);
        },
        resetSended() {
            this.modal.lostPassword.visible = false;
        },
        toDashboard() {
            this.$router.push({
                name: 'dashboard'
            })
        },
        logout() {
            localStorage.removeItem('Authorization');
            this.$store.dispatch('setLoginState', false);
        }
    },
}
</script>

<style scoped>

</style>