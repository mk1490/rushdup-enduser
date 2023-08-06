<template>
    <v-dialog
            @click:outside="clickOutside"
            :model-value="visible"
            @update:modelValue="$emit('update:visible', $event)"
            width="470">
        <v-card>
            <v-card-title class="d-flex" style="place-content: center">
                <h3 style="margin-bottom: 8px;">ورود به حساب کاربری</h3>
            </v-card-title>
            <v-card-text style="padding-left: 50px; padding-right: 50px">
                <p class="d-block text-center">
                    هنوز حسابی نداری؟
                    <a
                            @click="$emit('registerClick')"
                            class="open-popup-register link-transition-02"> به صورت رایگان ثبت نام
                        کنید</a>
                </p>
                <div style="margin-top: 40px">
                    <div class="popup-content-body">
                        <div class="edumall-register-form">
                            <div class="row">
                                <div class="col-md-12">
                                    <v-text-field
                                            label="نام کاربری یا ایمیل"
                                            v-model="model.username"
                                            hide-details
                                            dir="ltr"
                                    >
                                    </v-text-field>
                                </div>
                                <div class="col-md-12" style="margin-top: 20px">
                                    <password-text-field
                                            label="کلمۀ عبور"
                                            v-model.sync="model.password"
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
    emits: ['registerClick', 'lostPasswordClick', 'onLoginSuccess', 'close'],
    props: {
        visible: Boolean
    },
    data() {
        return {
            hasError: false,
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
            this.hasError = false;
            const [err, data] = await this.to(this.http.post(`${this.serverAddress}/api/auth/login`, {
                username: this.model.username,
                password: this.model.password,
                sessionId: this.$store.getters.sessionId
            }));
            if (!err) {
                localStorage.setItem('Authorization', data.access_token)
                this.$emit('onLoginSuccess')
            } else {
                this.hasError = true;
            }
        },
        clickOutside() {
            if (!!this.hasError)
                return;
            this.$emit('close')
        }
    }
}
</script>

<style scoped>
.row-middle {
    margin-top: 20px;
}
</style>