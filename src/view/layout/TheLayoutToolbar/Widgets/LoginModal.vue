<template>
    <v-dialog
            class="edumall-popup"
            width="470">
        <v-card>
            <v-card-title class="d-flex" style="place-content: center">
                <h3 style="margin-bottom: 8px;">ثبت نام</h3>
            </v-card-title>
            <v-card-text style="padding-left: 50px; padding-right: 50px">
                <p class="d-block text-center">
                    هنوز حسابی نداری؟
                    <a href="javascript:void(0)"
                       @click="$emit('registerClick')"
                       class="open-popup-register link-transition-02"> به صورت رایگان ثبت نام
                        کنید</a>
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
                                <div class="col-12">
                                    <password-text-field
                                            label="کلمۀ عبور"
                                            v-model="model.password"
                                            hide-details
                                            outlined>
                                    </password-text-field>
                                </div>
                            </div>

                            <div class="form-group row-flex row-middle">
                                <div class="col-grow">
                                    <label class="form-label form-label-checkbox" for="ip_rememberme">
                                        <input class="form-checkbox" name="rememberme" type="checkbox"
                                               id="ip_rememberme" value="forever">
                                        <span>مرا به خاطر بسپار</span>
                                    </label>
                                </div>
                                <div class="col-shrink">
                                    <div class="forgot-password">
                                        <a
                                                @click="$emit('lostPasswordClick')"
                                                href="javascript:void(0)"
                                                class="open-popup-lost-password forgot-password-link link-transition-02">رمز
                                            عبور خود را فراموش کرده اید؟</a>
                                    </div>
                                </div>
                            </div>


                            <div class="form-group">
                                <button
                                        @click="login"
                                        type="button" class="button form-submit v-btn--block">
                                    ورود
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
    name: "LoginModal",
    emits: ['registerClick', 'lostPasswordClick', 'onLoginSuccess'],
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
    components: {PasswordTextField},
    watch: {
        'visible': {
            handler(val) {
                this.$emit('update:visible', val)
            }
        }
    },
    methods: {
        async login() {
            const [err, data] = await this.to(this.http.post(`${this.serverAddress}/api/auth/login`, {
                username: this.model.username,
                password: this.model.password,
                sessionId: this.$store.getters.sessionId
            }));
            if (!err) {
                localStorage.setItem('Authorization', data.access_token)
                this.$emit('onLoginSuccess')
            }
        }
    }
}
</script>

<style scoped>
.row-middle {
    margin-top: 20px;
}
</style>