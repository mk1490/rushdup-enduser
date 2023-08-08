<template>
    <v-container>
        <div class="d-flex justify-center">
            <v-card width="500">
                <v-card-title>
                    فرم درخواست همکاری
                </v-card-title>
                <v-card-text>
                    <div class="row">
                        <div class="v-col-12">
                            <base-text-field
                                    v-model="model.name"
                                    label="نام"/>
                        </div>
                        <div class="v-col-12">
                            <base-text-field
                                    v-model="model.family"
                                    label="نام خانوادگی"/>
                        </div>
                        <div class="v-col-12">
                            <base-text-field
                                    v-model="model.phoneNumber"
                                    label="تلفن همراه"/>
                        </div>
                        <div class="v-col-12">
                            <base-text-field
                                    v-model="model.jobTitle"
                                    label="عنوان شغلی"/>
                        </div>
                        <div class="v-col-12">
                            <base-select
                                    :items="educationItems"
                                    v-model="model.educationField"
                                    label="تحصیلات"/>
                        </div>
                    </div>
                </v-card-text>
                <v-card-actions>
                    <v-spacer/>
                    <v-btn
                            variant="elevated"
                            color="blue"
                            @click="sendToServer()"
                    >
                        ثبت و ارسال
                    </v-btn>
                </v-card-actions>
            </v-card>
        </div>
    </v-container>
</template>

<script>
import BaseTextField from "@/view/base/BaseTextField.vue";
import BaseSelect from "@/view/base/BaseSelect.vue";

export default {
    name: "CooperationRequest",
    components: {BaseSelect, BaseTextField},
    data() {

        return {
            educationItems: ['دیپلم', 'لیسانس', 'فوق لیسانس', 'دکتری'],
            model: {
                name: null,
                family: null,
                educationField: null,
                jobTitle: null,
                phoneNumber: null,
                description: null,
            }
        }
    },
    methods: {
        async sendToServer() {
            const [err, data] = await this.to(this.http.post(`/core/cooperation`, this.model))
        }
    }
}
</script>

<style scoped>

</style>