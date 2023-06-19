<template>
    <div class="row">
        <div class="col-md-12 col-lg-6">
            <div class="dashboard-content-box">
                <h4 class="dashboard-content-box-title">اطلاعات تماس</h4>
                <p>برای ایجاد نمایه حساب خود ، جزئیات خود را در زیر ارائه دهید</p>

                <div class="row">
                    <div class="col-md-6">
                        <div class="tutor-form-group">
                            <label for="tutor_profile_first_name">نام</label>
                            <v-text-field
                                    name="tutor_profile_first_name"
                                    id="tutor_profile_first_name"
                                    outlined
                                    hide-details
                                    v-model="model.name">
                            </v-text-field>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="tutor-form-group">
                            <label for="tutor_profile_last_name">نام خانوادگی</label>
                            <v-text-field
                                    name="tutor_profile_last_name"
                                    id="tutor_profile_last_name"
                                    outlined
                                    hide-details
                                    v-model="model.family">
                            </v-text-field>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-6">
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
                    <div class="col-md-6">
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
                            <div id="tutor_cover_area"
                                 data-fallback="https://dana-team.com/products/edumall/wp-content/plugins/tutor/assets/images/cover-photo.jpg"
                                 style="background-image:url(https://dana-team.com/products/edumall/wp-content/plugins/tutor/assets/images/cover-photo.jpg)">
						            <span class="tutor_cover_deleter">
						                <i class="far fa-trash-alt"></i>
						            </span>
                                <div

                                        class="tutor_overlay">
                                    <button class="tutor_cover_uploader" type="button">
                                        <i class="far fa-camera"></i>&nbsp;
                                        <span>
                                                آپلود تصویر کاور                                            </span>
                                    </button>
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
</template>

<script>
export default {
    name: "Profile",
    mounted() {
        this.setAvatarToDefault();
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
        async filePicked(event) {
            const file = event.target.files[0];
            this.hidePopup();
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                this.avatar = fileReader.result;
                this.setAvatarPhoto(fileReader.result);
            }
            const formData = new FormData();
            formData.append('file', file)
            const [err, data] = await this.to(this.http.put(`/profile/update-avatar`, formData));
            if (!err) {

            }

        },
        setAvatarPhoto(src) {
            document.getElementById('tutor_profile_area').style.backgroundImage = `url(${src})`
            this.setDeleteAvatarButtonVisibilityState(true);
        },
        setAvatarToDefault() {
            this.setAvatarPhoto(`'${require('@/assets/images/avatar.png')}'`);
            this.setDeleteAvatarButtonVisibilityState(false);
        },
        setDeleteAvatarButtonVisibilityState(state) {
            document.getElementById('delete-button').style.display = state == true ? 'block' : 'none';
        }

    },
    data() {
        return {
            uploadTarget: null,
            model: {
                name: null,
                family: null,
                jobTitle: null,
                phoneNumber: null,
                bio: null,
            },
            avatar: null,
        }
    }
}
</script>

<style scoped>

</style>