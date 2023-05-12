<template>
    <v-dialog
            class="edumall-popup"
            width="470"
            v-model="visible">
        <v-card style="padding-left: 50px; padding-right: 50px">
            <v-card-title class="d-flex" style="place-content: center">
                <h3 style="margin-bottom: 8px;">رمز عبور خود را فراموش کرده اید؟</h3>
            </v-card-title>
            <v-card-text>
                <p class="d-block text-center">
                    لطفا نام کاربری یا آدرس ایمیل خود را وارد نمایید. برای ایجاد گذرواژه جدید از طریق ایمیل پیوند دریافت
                    خواهید کرد. حالا يادته؟
                    <a
                            @click="$emit('loginClick')"
                            href="javascript:void(0)" class="open-popup-login link-transition-02"> بازگشت به ورود</a>
                </p>
                <div style="margin-top: 40px">
                    <div class="popup-content-body">
                        <div class="edumall-register-form">
                            <div class="row">
                                <div class="col-12">
                                    <v-text-field
                                            label="نام کاربری یا ایمیل"
                                            v-model="model.username"
                                            hide-details
                                            outlined
                                    >
                                    </v-text-field>
                                </div>
                            </div>
                            <div class="form-group" style="margin-top: 20px">
                                <button
                                        @click="sendDataToServer"
                                        type="button" class="button form-submit v-btn--block">
                                    بازنشانی گذرواژه
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>


<script>
import PasswordTextField from "@/view/widget/CustomViews/PasswordTextField.vue";

export default {
    name: "LostPasswordModal",
    components: {PasswordTextField},
    emits: ['loginClick'],
    props: {
        visible: Boolean
    },
    data() {
        return {
            model: {
                username: null,
                password: null,
            }
        }
    },
    watch: {
        'visible': {
            handler(val) {
                this.$emit('update:visible', val)
            }
        }
    },
    methods: {
        async sendDataToServer() {

        }
    }
}
</script>

<style scoped>

</style>