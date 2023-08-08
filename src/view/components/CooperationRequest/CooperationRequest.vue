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
                                    v-model="model.family"
                                    label="تلفن همراه"/>
                        </div>
                    </div>
                </v-card-text>
                <v-card-actions>
                    <v-spacer/>
                    <v-btn
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

export default {
    name: "CooperationRequest",
    components: {BaseTextField},
    data() {

        return {
            model: {
                name: null,
                family: null,
                description: null,
            }
        }
    },
    methods: {
        async sendToServer() {
            const [err, data] = await this.to(this.http.post(`/cooperationRequest`, this.model))
        }
    }
}
</script>

<style scoped>

</style>