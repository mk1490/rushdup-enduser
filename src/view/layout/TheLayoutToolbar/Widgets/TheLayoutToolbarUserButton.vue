<template>

    <div class="header-user-buttons">
        <div class="inner">

            <div
                    v-if="!isLogin"
                    class="tm-button-wrapper">
                <a
                        @click="openLoginModal()"
                        class="tm-button style-bottom-line-alt button-thin tm-button-sm open-popup-login"
                        href="javascript:void(0)">
                    <div class="button-content-wrapper">
                        <span class="button-text">ورود</span>

                    </div>
                </a>
            </div>
            <div
                    v-if="!isLogin"
                    class="tm-button-wrapper">
                <a
                        @click="openRegisterModal()"
                        class="tm-button style-flat tm-button-sm open-popup-register button-thin button-light-primary"
                        href="javascript:void(0)">
                    <div class="button-content-wrapper">
                        <span class="button-text">ثبت نام</span>
                    </div>
                </a></div>


            <div
                    v-if="isLogin"
                    class="tm-button-wrapper">
                <a
                        class="tm-button style-bottom-line-alt tm-button-sm"
                        href="https://dana-team.com/products/edumall/dashboard/">
                    <div class="button-content-wrapper">
                        <span class="button-text">داشبورد</span>
                    </div>
                </a>
            </div>
            <div
                    v-if="isLogin"
                    class="tm-button-wrapper">
                <a
                        class="tm-button style-flat tm-button-sm button-thin button-secondary-white">
                    <div class="button-content-wrapper">
                        <span class="button-text">خروج</span>

                    </div>
                </a>
            </div>
        </div>
        <register-modal
                @loginClick="openLoginModal"
                :visible.sync="modal.register.visible">
        </register-modal>
        <login-modal
                @registerClick="openRegisterModal"
                @lostPasswordClick="openLostPasswordModal"
                @onLoginSuccess="loginSuccess"
                :visible.sync="modal.login.visible">
        </login-modal>
        <lost-password-modal
                @loginClick="openLoginModal"
                @resetSended="resetSended()"
                :visible.sync="modal.lostPassword.visible">
        </lost-password-modal>
    </div>
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
        ...mapGetters(['isLogin'])
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
            this.modal.login.visible = false;
            this.modal.register.visible = true;
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
        },
        resetSended() {
            this.modal.lostPassword.visible = false;
        }
    }
}
</script>

<style scoped>

</style>