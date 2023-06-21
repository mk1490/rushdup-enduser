<template>
    <v-dialog
            class="edumall-popup"
            width="670">
        <v-card>
            <v-card-title class="d-flex" style="place-content: center">
                <h3 style="margin-bottom: 8px;">ثبت نام</h3>
            </v-card-title>
            <v-card-text style="padding-left: 50px; padding-right: 50px">
                <p class="d-block text-center">
                    از قبل حساب دارید؟
                    <a href="javascript:void(0)"
                       @click="$emit('loginClick')"
                       class="open-popup-login link-transition-02"> وارد شوید</a>
                </p>
                <div style="margin-top: 40px">
                    <div class="popup-content-body">
                        <div class="edumall-register-form">
                            <div class="row">
                                <div class="col-6">
                                    <v-text-field
                                            v-model="model.name"
                                            hide-details
                                            outlined
                                            label="نام">
                                    </v-text-field>
                                </div>
                                <div class="col-6">
                                    <v-text-field
                                            v-model="model.family"
                                            hide-details
                                            outlined
                                            label="نام خانوادگی">
                                    </v-text-field>
                                </div>
                            </div>


                            <div class="row">
                                <div class="col-6">
                                    <v-text-field
                                            label="نام کاربری"
                                            v-model="model.username"
                                            hide-details
                                            outlined
                                    >
                                    </v-text-field>
                                </div>
                                <div class="col-6">
                                    <v-text-field
                                            label="ایمیل"
                                            v-model="model.emailAddress"
                                            hide-details
                                            outlined>
                                    </v-text-field>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-6">
                                    <password-text-field
                                            type="password"
                                            v-model="model.password"
                                            label="رمز عبور">

                                    </password-text-field>
                                </div>
                                <div class="col-6">
                                    <password-text-field
                                            label="رمز عبور را دوباره وارد کنید"
                                            v-model="model.submitPassword"
                                            type="password">
                                    </password-text-field>
                                </div>
                            </div>

                            <div class="form-group accept-account">
                                <label class="form-label form-label-checkbox" for="ip_accept_account">
                                    <input type="checkbox" class="form-control"
                                           value="1">
                                    پذیرش شرایط و
                                    <a href="" class="edumall-privacy-policy-link" target="_blank">
                                        سیاست حفظ حریم خصوصی
                                    </a>
                                </label>
                            </div>


                            <div class="form-response-messages"></div>

                            <div class="form-group">
                                <button
                                        @click="register"
                                        type="button" class="button form-submit v-btn--block">
                                    ثبت نام
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
import TextField from "@/view/widget/CustomViews/TextField.vue";
import PasswordTextField from "@/view/widget/CustomViews/PasswordTextField.vue";

export default {
    name: "RegisterModal",
    emits: ['loginClick'],
    components: {PasswordTextField, TextField},
    props: {
        visible: Boolean,
    },
    data() {
        return {
            model: {
                name: null,
                family: null,
                username: null,
                password: null,
                emailAddress: null,
                submitPassword: null,
            }
        }
    },
    methods: {
        async register() {
            const [err, data] = await this.to(this.http.post(`/user/register`, {
                name: this.model.name,
                family: this.model.family,
                username: this.model.username,
                emailAddress: this.model.emailAddress,
                password: this.model.password,
                submitPassword: this.model.submitPassword
            }));
            if (!err) {

            }
        }
    },
    watch: {
        'visible': {
            handler(val) {
                this.$emit('update:visible', val)
            }
        }
    }
}
</script>

<style scoped>
.accept-account {
    margin-top: 20px;
}
</style>