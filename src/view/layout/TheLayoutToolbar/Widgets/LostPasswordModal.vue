<template>
    <v-dialog
            @click:outside="onClickOutside"
            :model-value="visible"
            :close-on-back="true"
            @update:model-value="$emit('update:visible', $event)"
            width="470">
        <v-card style="padding-left: 50px; padding-right: 50px">
            <v-card-title class="d-flex" style="place-content: center">
                <h3 class="card-title">رمز عبور خود را فراموش کرده اید؟</h3>
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
                                <div class="col-md-12">
                                    <v-text-field
                                            dir="ltr"
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
    emits: ['loginClick', 'resetSended', 'close'],
    props: {
        visible: Boolean
    },
    data() {
        return {
            hasError: false,
            model: {
                username: null,
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
            this.hasError = false;
            const [err, data] = await this.to(this.http.post(`/user/lostPassword`, {
                usernameOrEmail: this.model.username
            }));
            if (!err) {
                this.$swal.fire({
                    icon: 'success',
                    text: `درخواست بازنشانی کلمۀ عبور به پست الکترونیک ${data.email} ارسال گردید.`
                }).then(res => {
                    this.$emit('resetSended')
                })
            } else {
                this.hasError = true;
            }
        },
        onClickOutside() {
            if (!this.hasError) {
                this.$emit('close')
            }

        }
    }
}
</script>

<style scoped>

.card-title {
    margin-top: 8px;
    text-wrap: initial;
    text-align: center;
}
</style>