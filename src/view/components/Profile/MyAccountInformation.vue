<template>
    <v-container fluid>
        <v-card>
            <v-card-title>
                <div class="col">
                    اطلاعات فردی
                </div>
                <div class="col-auto">
                    <v-btn link>
                        تغییر کلمۀ عبور
                    </v-btn>
                </div>
            </v-card-title>
            <v-card-text>
                <div class="row">
                    <div class="col-12">
                        <div class="d-flex flex-wrap">
                            <v-text-field
                                    class="ma-2"
                                    v-model="model.personalInformation.name"
                                    hide-details
                                    dense
                                    outlined
                                    label="نام">
                            </v-text-field>
                            <v-text-field
                                    v-model="model.personalInformation.family"
                                    class="ma-2"
                                    hide-details
                                    dense
                                    outlined
                                    label="نام خانوادگی">

                            </v-text-field>
                            <v-text-field
                                    v-model="model.personalInformation.birthDate"
                                    class="ma-2"
                                    hide-details
                                    dense
                                    outlined
                                    label="تاریخ تولد">

                            </v-text-field>
                            <v-text-field
                                    v-model="model.personalInformation.email"
                                    class="ma-2"
                                    hide-details
                                    dense
                                    outlined
                                    label="ایمیل">

                            </v-text-field>
                            <v-select
                                    :items="items.sex"
                                    v-model="model.personalInformation.sex"
                                    class="ma-2"
                                    hide-details
                                    dense
                                    outlined
                                    label="جنسیت">

                            </v-select>
                            <v-text-field
                                    v-model="model.personalInformation.nationalityCode"
                                    class="ma-2"
                                    hide-details
                                    dense
                                    outlined
                                    label="کد ملّی">

                            </v-text-field>
                        </div>
                    </div>
                </div>
            </v-card-text>
            <v-card-title>
                محل سکونت
            </v-card-title>
            <v-card-text>
                <div class="row">
                    <div class="col-12">
                        <div class="d-flex flex-wrap">
                            <v-autocomplete
                                    class="ma-2"
                                    item-value="id"
                                    item-text="title"
                                    :items="items.provinces"
                                    v-model="model.addressInformation.province"
                                    hide-details
                                    dense
                                    outlined
                                    label="استان">
                            </v-autocomplete>
                            <v-autocomplete
                                    v-model="model.addressInformation.city"
                                    :items="items.cities"
                                    item-text="title"
                                    item-value="id"
                                    class="ma-2"
                                    hide-details
                                    dense
                                    outlined
                                    label="شهر">
                            </v-autocomplete>
                        </div>
                    </div>
                </div>
            </v-card-text>
            <v-card-actions>
                <v-spacer/>
                <v-btn
                        @click="saveData()"
                        color="primary">
                    ذخیره
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
export default {
    name: "MyAccountInformation",
    async created() {
        const [err, data] = await this.to(this.http.get(`/profile/information`));
        if (!err) {
            this.items.provinces = data.provinces;
            this.items.sex = data.sexItems;
            this.model.personalInformation = data.personalInformation;
            this.model.addressInformation = data.addressInformation;
        }
    },
    data() {
        return {
            model: {
                personalInformation: {
                    name: null,
                    family: null,
                    phoneNumber: null,
                    birthDate: null,
                    email: null,
                    sex: null,
                    nationalityCode: null,
                },
                addressInformation: {
                    province: null,
                    city: null,
                },
                education: [],
                instersts: [],
            },
            items: {
                provinces: [],
                cities: [],
                sex: [],
            }
        }
    },
    methods: {
        async onSelectProvince(selectedProvinceId) {
            const [err, data] = await this.to(this.http.get(`${this.serverAddress}/core/get-cities-by-province-id/${selectedProvinceId}`, {loader: false}));
            if (!err) {
                this.items.cities = data;
            }
        },
        async saveData() {
            const [err, data] = await this.to(this.http.put(`/profile/information`, this.model));
            if (!err) {
                this.updateItemSuccessToast();
            }
        }
    },
    watch: {
        'model.addressInformation.province': {
            async handler() {
                await this.onSelectProvince(this.model.addressInformation.province);
            }
        }
    }
}
</script>

<style scoped>

</style>