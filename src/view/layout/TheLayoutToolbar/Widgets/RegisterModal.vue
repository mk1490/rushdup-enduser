<template>
    <v-dialog
            @click:outside="clickOutside"
            :model-value="visible"
            @update:modelValue="updateModelValue"
            :width="670">
        <v-card>
            <v-card-title class="d-flex" style="place-content: center">
                <h3 style="margin-bottom: 8px;">ثبت نام</h3>
            </v-card-title>
            <v-card-text style="padding-left: 50px; padding-right: 50px">
                <p class="d-block text-center">
                    از قبل حساب دارید؟
                    <a @click="$emit('loginClick')"
                       class="open-popup-login link-transition-02"> وارد شوید</a>
                </p>
                <div class="row">
                    <div class="col-md-6">
                        <v-text-field
                                v-model="model.name"
                                hide-details
                                label="نام">
                        </v-text-field>
                    </div>
                    <div class="col-md-6">
                        <v-text-field
                                v-model="model.family"
                                hide-details
                                label="نام خانوادگی">
                        </v-text-field>
                    </div>
                    <div class="col-md-6">
                        <v-text-field
                                dir="ltr"
                                label="نام کاربری"
                                v-model="model.username"
                                hide-details
                        >
                        </v-text-field>
                    </div>
                    <div class="col-md-6">
                        <v-text-field
                                dir="ltr"
                                label="ایمیل"
                                v-model="model.emailAddress"
                                hide-details>
                        </v-text-field>
                    </div>
                    <div class="col-md-6">
                        <password-text-field
                                type="password"
                                v-model="model.password"
                                label="رمز عبور">

                        </password-text-field>
                    </div>
                    <div class="col-md-6">
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
                    <div class="d-block">
                        <button
                                @click="register"
                                type="button" class="button form-submit v-btn--block">
                            ثبت نام
                        </button>

                        <v-btn
                                class="mt-2"
                                @click="$emit('close')"
                                :block="true"
                                :text="true"
                                :flat="true">
                            بستن
                        </v-btn>
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
    emits: ['loginClick', 'visible', 'close'],
    components: {PasswordTextField, TextField},
    props: {
        visible: Boolean,
    },
    data() {
        return {
            hasError: false,
            tempVisible: true,
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
            this.hasError = false;
            const [err, data] = await this.to(this.http.post(`/user/register`, {
                name: this.model.name,
                family: this.model.family,
                username: this.model.username,
                emailAddress: this.model.emailAddress,
                password: this.model.password,
                submitPassword: this.model.submitPassword
            }));
            if (!err) {
                
            } else {
                this.hasError = true;
            }
        },
        updateModelValue(event) {
            this.$emit('update:visible', event)
        },
        clickOutside() {
            if (!!this.hasError)
                return;
            this.$emit('close')
        }
    },
    watch: {
        'visible': {
            handler(val) {
                // this.$emit('update:visible', val)
            }
        }
    }
}
</script>

<style scoped>
.accept-account {
    margin-top: 20px;
}

.col-md-6 {
    margin-top: 20px !important;
}
</style>