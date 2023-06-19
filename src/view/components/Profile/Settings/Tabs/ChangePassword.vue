<template>
    <div class="tutor-reset-password-form-wrap">
        <form class="dashboard-settings-form dashboard-settings-reset-password-form">
            <div class="row">
                <div class="col-md-12 col-lg-6">
                    <div class="dashboard-content-box">
                        <h4 class="dashboard-content-box-title">بازیابی رمز عبور</h4>

                        <div class="tutor-form-group">
                            <label> رمز عبور فعلی </label>
                            <v-text-field
                                    v-model="model.oldPassword"
                                    outlined
                                    hide-details
                                    type="password"
                                    name="previous_password">
                            </v-text-field>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="tutor-form-group">
                                    <label>رمز عبور جدید</label>
                                    <v-text-field
                                            v-model="model.newPassword"
                                            outlined
                                            hide-details
                                            type="password"
                                            name="new_password">
                                    </v-text-field>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="tutor-form-group">
                                    <label>تأیید رمز جدید</label>
                                    <v-text-field
                                            v-model="model.submitNewPassword"
                                            outlined
                                            hide-details
                                            type="password"
                                            name="confirm_new_password">
                                    </v-text-field>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="tutor-form-group form-submit-wrap">
                <button type="submit" class="tutor-button tutor-profile-password-reset">
                    بازیابی رمز عبور
                </button>
            </div>
        </form>
    </div>


</template>

<script>
export default {
    name: "ChangePassword",
    data() {
        return {
            model: {
                oldPassword: null,
                newPassword: null,
                submitNewPassword: null,
            }
        }
    },
    methods: {
        async updatePassword() {
            const [err, data] = await this.to(this.http.put(`/profile/update-password`, this.model));
            if (!err) {

            }
        }
    }
}
</script>

<style scoped>

</style>