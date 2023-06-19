<template>
    <div class="tutor-dashboard-content">
        <h3>پروفایل من</h3>
        <div class="tutor-dashboard-content-inner">
            <div class="dashboard-profile-info">
                <div class="dashboard-profile-info-item profile-registration-date">
                    <div class="heading">
                        تاریخ ثبت نام
                    </div>
                    <div class="content">
                        <p>________</p>
                    </div>
                </div>
                <div class="dashboard-profile-info-item profile-first-name">
                    <div class="heading">
                        نام
                    </div>
                    <div class="content">
                        <p>{{ model.name }}</p>
                    </div>
                </div>
                <div class="dashboard-profile-info-item profile-last-name">
                    <div class="heading">
                        نام خانوادگی
                    </div>
                    <div class="content">
                        <p>{{ model.family }}</p>
                    </div>
                </div>
                <div class="dashboard-profile-info-item profile-username">
                    <div class="heading">
                        نام کاربری
                    </div>
                    <div class="content">
                        <p>{{ model.username }}</p>
                    </div>
                </div>
                <div class="dashboard-profile-info-item profile-email">
                    <div class="heading">
                        ایمیل
                    </div>
                    <div class="content">
                        <p>{{ model.email }}</p>
                    </div>
                </div>
                <div class="dashboard-profile-info-item profile-phone-number">
                    <div class="heading">
                        شماره تلفن
                    </div>
                    <div class="content">
                        <p>{{ model.phoneNumber }}</p>
                    </div>
                </div>
                <div class="dashboard-profile-info-item profile-job-title">
                    <div class="heading">
                        عنوان شغل
                    </div>
                    <div class="content">
                        <p>{{ model.jobTitle }}</p>
                    </div>
                </div>
                <div class="dashboard-profile-info-item profile-bio">
                    <div class="heading">
                        بیوگرافی
                    </div>
                    <div class="content">
                        <p>{{ model.bio }}</p>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>


<script>
export default {
    name: "MyProfile",
    data() {
        return {
            model: {
                name: null,
                family: null,
                jobTitle: null,
                phoneNumber: null,
                bio: null,
                nationalityCode: null,
                sex: null,
            }
        }
    },
    async created() {
        const [err, data] = await this.to(this.http.get(`/profile/information`));
        if (!err) {
            this.model.name = data.personalInformation.name;
            this.model.family = data.personalInformation.family;
            this.model.jobTitle = data.personalInformation.jobTitle;
            this.model.phoneNumber = data.personalInformation.phoneNumber;
            this.model.nationalityCode = data.personalInformation.nationalityCode;
        }
    }
}
</script>

<style scoped>

</style>