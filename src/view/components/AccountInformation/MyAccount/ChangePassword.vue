<template>
    <v-container
            fluid="true"
            class="container--fluid fill-height">
        <v-layout class="align-center justify-center">
            <div class="d-inline-block justify-center">
                <h2 class="d-flex white--text justify-center">بازنشانی کلمۀ عبور</h2>
                <div class="d-flex justify-center mt-8">
                    <v-card class="elevation-3" width="380">
                        <div class="d-block justify-center mt-3" style="text-align: -webkit-center">
                            <v-img
                                    width="200"
                                    src="@/assets/logo.png">

                            </v-img>
                        </div>
                        <div class="justify-center text-center text-wrap px-4 py-3">
                            <span>رمز عبور جدید خود را در فرم زیر وارد نمایید.</span>
                        </div>
                        <v-card-text>
                            <v-form
                                    dir="ltr"
                                    ref="form"
                                    lazy-validation>
                                <div class="row">
                                    <div class="v-col-12">
                                        <v-text-field
                                                class="text-center"
                                                dense
                                                maxlength="50"
                                                outlined
                                                dir="ltr"
                                                hide-details="auto"
                                                v-model="model.password"
                                                label="کلمۀ عبور جدید"
                                        />
                                    </div>
                                    <div class="v-col-12">
                                        <v-text-field
                                                class="text-center"
                                                dense
                                                dir="ltr"
                                                maxlength="50"
                                                outlined
                                                hide-details="auto"
                                                v-model="model.submitPassword"
                                                label="تأیید کلمۀ عبور"/>
                                    </div>
                                </div>
                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                            <div class="d-inline-block flex-fill"
                                 style="text-align: center; margin-top:20px">
                                <a @click="$router.push('/')">
                                    بازگشت به صفحه اصلی
                                </a>
                                <v-btn
                                        @click="sendDataToServer"
                                        color="green"
                                        class="col-12 white--text mt-5"
                                        block>
                                    ورود
                                </v-btn>
                            </div>
                        </v-card-actions>
                    </v-card>
                </div>

            </div>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: "ChangePassword",
    async created() {
        this.token = this.$route.query.rc;
        const [err, data] = await this.to(this.http.get(`/user/lostPassword?token=${this.token}`));
        if (!err) {
            this.username = data.username;
        } else {
            this.$router.push('/')
        }
    },
    data() {
        return {
            token: null,
            username: null,
            model: {
                password: null,
                submitPassword: null,
            }
        }
    },
    methods: {
        async sendDataToServer() {
            const [err, data] = await this.to(this.http.put(`/user/lostPassword?token=${this.token}`, {
                password: this.model.password,
                submitPassword: this.model.submitPassword,
            }));
            if (!err) {
                this.$swal.fire({
                    icon: 'success',
                    text: 'درخواست تغییر کلمۀ عبور با موفقیت انجام شد!'
                }).then(res => {
                    this.$router.push('/')
                })
            }

        }
    }
}
</script>

<style scoped>

</style>