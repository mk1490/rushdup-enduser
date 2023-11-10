<template>
    <div class="tutor-dashboard-content-inner">


        <div class="dashboard-settings-form dashboard-settings-profile-form">
            <div class="row">
                <div class="col-md-12 col-lg-6">
                    <div class="dashboard-content-box">
                        <h4 class="dashboard-content-box-title">اطلاعات تماس</h4>
                        <p>برای ایجاد نمایه حساب خود ، جزئیات خود را در زیر ارائه دهید</p>

                        <div class="row">
                            <div class="v-col-md-6">

                                <v-text-field
                                    variant="outlined"
                                    label="نام"
                                    hide-details
                                    v-model="model.name"
                                />
                            </div>
                            <div class="v-col-md-6">
                                <v-text-field
                                    label="نام خانوادگی"
                                    variant="outlined"
                                    hide-details
                                    v-model="model.family">
                                </v-text-field>
                            </div>
                            <div class="v-col-md-6">
                                <v-text-field
                                    variant="outlined"
                                    outlined
                                    dense
                                    hide-details
                                    label="کد ملّی"
                                    v-model="model.nationalityCode">
                                </v-text-field>
                            </div>
                            <div class="v-col-md-6">
                                <div class="tutor-form-group">
                                    <label for="tutor_profile_national_code">جنسیت</label>
                                    <v-select
                                            name="tutor_profile_national_code"
                                            id="tutor_profile_national_code"
                                            outlined
                                            hide-details
                                            dense
                                            :items="items.sex"
                                            v-model="model.sex">
                                    </v-select>
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="v-col-md-6">
                                <div class="tutor-form-group">
                                    <label for="tutor_profile_job_title">عنوان شغل</label>
                                    <v-text-field
                                            name="tutor_profile_job_title"
                                            id="tutor_profile_job_title"
                                            outlined
                                            hide-details
                                            v-model="model.jobTitle">
                                    </v-text-field>
                                </div>
                            </div>
                            <div class="v-col-md-6">
                                <div class="tutor-form-group">
                                    <label for="tutor_profile_phone_number">شماره تلفن</label>
                                    <v-text-field
                                            name="tutor_profile_phone_number"
                                            id="tutor_profile_phone_number"
                                            outlined
                                            hide-details
                                            v-model="model.phoneNumber">
                                    </v-text-field>
                                </div>
                            </div>
                        </div>

                        <div class="tutor-form-group">
                            <label for="tutor_profile_bio">
                                بیوگرافی </label>
                            <v-textarea
                                    v-model="model.bio"
                                    hide-details
                                    name="tutor_profile_bio"
                                    id="tutor_profile_bio">
                            </v-textarea>
                        </div>
                    </div>
                </div>
                <div class="col-md-12 col-lg-6">
                    <div class="dashboard-content-box">
                        <div class="row">
                            <div class="col-md-12">
                                <h4 class="dashboard-content-box-title">عکس</h4>
                                <p>آپلود تصویر نمایه شما.</p>
                                <div id="tutor_profile_cover_photo_editor">
                                    <input id="tutor_photo_dialogue_box" type="file" accept=".png,.jpg,.jpeg">
                                    <div id="tutor_cover_area">
						            <span
                                @click="deleteCoverPhoto"
                                class="tutor_cover_deleter">
						                <i class="far fa-trash-alt"></i>
						            </span>
                                        <div class="tutor_overlay">
                                            <v-btn
                                                class="tutor_cover_uploader"
                                                @click="openFilePicker('cover')">
                                                <i class="far fa-camera"></i>
                                                <span>آپلود تصویر کاور</span>
                                            </v-btn>
                                        </div>
                                    </div>
                                    <div id="tutor_photo_meta_area">
                                        <img
                                                src="https://dana-team.com/products/edumall/wp-content/plugins/tutor//assets/images/info-icon.svg">
                                        <span>اندازه عکس پروفایل : <strong>200x200</strong> پیکسل</span>
                                        <span>اندازه عکس کاور : <strong>700x430</strong> پیکسل</span>
                                        <span class="loader-area">ذخیره</span>
                                    </div>
                                    <div id="tutor_profile_area">
                                        <div
                                                @click="togglePopup"
                                                class="tutor_overlay">
                                            <i class="far fa-camera"></i>
                                        </div>
                                    </div>
                                    <div id="tutor_pp_option">
                                        <div class="up-arrow">
                                            <i></i>
                                        </div>
                                        <span
                                                @click="openFilePicker('avatar')"
                                                class="tutor_pp_uploader">
                                    <i class="far fa-upload"></i>
                                    آپلود عکس
                                </span>
                                        <span
                                                id="delete-button"
                                                @click="deleteAvatarPhoto"
                                                class="tutor_pp_deleter"><i class="far fa-trash-alt"></i>
                                    حذف
                                </span>
                                    </div>
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="tutor-form-group">
                                    <div class="tutor-form-group">
                                        <label for="display_name">نمایش نام عمومی به عنوان</label>
                                        <select name="display_name" id="display_name">
                                            <option selected="selected">متین</option>
                                            <option>matink1490</option>
                                        </select>
                                        <p class="form-description">
                                            نام نمایش داده شده در همه فیلدهای عمومی مانند نام نویسنده، نام مدرس، نام
                                            دانشجو و نامی که روی گواهی پرینت می شود قرار می گیرد. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <input
                        @change="filePicked"
                        hidden="hidden"
                        ref="filePicker"
                        type="file" accept=".png,.jpg,.jpeg">
            </div>

            <div class="tutor-form-group tutor-profile-form-btn-wrap form-submit-wrap">
                <button
                        @click="updateProfileAndSendDataToServer"
                        class="tutor-button tutor-profile-settings-save">بروزرسانی پروفایل
                </button>
            </div>


        </div>
    </div>
</template>

<script>
export default {
    name: "Profile",
    async created() {
        const [err, data] = await this.to(this.http.get(`/profile/information`));
        if (!err) {
            this.model.name = data.personalInformation.name;
            this.model.family = data.personalInformation.family;
            this.model.jobTitle = data.personalInformation.jobTitle;
            this.model.phoneNumber = data.personalInformation.phoneNumber;
            this.model.nationalityCode = data.personalInformation.nationalityCode;
            this.items.sex = data.sexItems;
        }
    },
    async mounted() {
        this.setAvatarToDefault();
        this.setCoverToDefault();
    },
    methods: {
        togglePopup() {
            const tutor_profile_cover_photo_editor = document.getElementById('tutor_profile_cover_photo_editor');
            if (tutor_profile_cover_photo_editor.classList.contains("pop-up-opened")) {
                this.hidePopup();
            } else {
                tutor_profile_cover_photo_editor.classList.add('pop-up-opened');
            }
        },
        hidePopup() {
            document.getElementById('tutor_profile_cover_photo_editor').classList.remove('pop-up-opened');
        },
        openFilePicker(uploadTarget) {
            this.uploadTarget = uploadTarget;
            this.$refs.filePicker.click();
        },
        async deleteAvatarPhoto() {
            const [err] = await this.to(this.http.delete(`/profile/avatar`));
            if (!err) {
                this.setAvatarToDefault();
                this.hidePopup();
            }
        },
        async deleteCoverPhoto() {
            const [err] = await this.to(this.http.delete(`/profile/cover`));
            if (!err) {
                this.setCoverToDefault();
            }
        },
        async filePicked(event) {
            const file = event.target.files[0];
            this.hidePopup();
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                const base64Result = fileReader.result;
                if (this.uploadTarget == 'avatar') {
                    this.setAvatarPhoto(base64Result);
                } else {
                    this.setCoverPhoto(fileReader.result);
                }
            }

            const formData = new FormData();
            formData.append('file', file);
            const [err, data] = await this.to(this.http.put(`/profile/${this.uploadTarget == 'avatar' ? 'update-avatar' : 'update-cover'}`, formData));
            if (!err) {

            }

        },
        setAvatarPhoto(src) {
            document.getElementById('tutor_profile_area').style.backgroundImage = `url(${src})`
            this.setDeleteAvatarButtonVisibilityState(true);
        },
        setCoverPhoto(src) {
            document.getElementById('tutor_cover_area').style.backgroundImage = `url(${src})`
        },
        setAvatarToDefault() {
            this.setAvatarPhoto(`'${require('@/assets/images/avatar.png')}'`);
            this.setDeleteAvatarButtonVisibilityState(false);
        },
        setCoverToDefault() {
            this.setCoverPhoto(`'${require('@/assets/images/cover-photo.jpg')}'`);
        },
        setDeleteAvatarButtonVisibilityState(state) {
            document.getElementById('delete-button').style.display = state == true ? 'block' : 'none';
        },
        async updateProfileAndSendDataToServer() {
            const [err, data] = await this.to(this.http.put(`/profile/information`, {
                personalInformation: {
                    name: this.model.name,
                    family: this.model.family,
                    jobTitle: this.model.jobTitle,
                    phoneNumber: this.model.phoneNumber,
                    bio: this.model.bio,
                    nationalityCode: this.model.nationalityCode,
                    sex: this.model.sex,
                }
            }));
            if (!err) {

            }
        }

    },
    data() {
        return {
            uploadTarget: null,
            items: {
                sex: [],
            },
            model: {
                name: null,
                family: null,
                jobTitle: null,
                phoneNumber: null,
                bio: null,
                nationalityCode: null,
                sex: null,
            },
            avatar: null,
        }
    }
}
</script>

<style scoped>

</style>