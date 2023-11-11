<template>
    <v-container>
        <input
                ref="filePicker"
                hidden="hidden"
                @change="onFileSelected"
                type="file"/>
        <v-card>
            <v-card-title>
                <div class="d-inline-flex">
                    <app-back-button back-route="./"/>
                    <div class="align-self-center mr-3">
                        ثبت تیکت جدید
                    </div>

                </div>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <div class="row">
                        <div class="col-md-6">
                            <v-text-field
                                    v-model="model.subject"
                                    label="عنوان تیکت"
                                    hide-detailse
                                    dense
                                    outlined
                                    variant="outlined"
                            >
                            </v-text-field>
                        </div>
                        <div class="col-md-6">
                            <v-select
                                    v-model="model.importance"
                                    label="اهمیت"
                                    :items="importanceItems"
                                    item-title="text"
                                    item-value="value"
                                    hide-detailse
                                    dense
                                    outlined
                                    variant="outlined"
                            >
                            </v-select>
                        </div>
                        <div class="col-md-6">
                            <v-select
                                    v-model="model.department"
                                    label="دپارتمان"
                                    item-title="text"
                                    item-value="value"
                                    :items="departmentItems"
                                    hide-detailse
                                    dense
                                    variant="outlined">
                            </v-select>
                        </div>
                        <div class="col-md-6">
                            <v-select
                                    v-if="model.department == 1"
                                    v-model="model.selectedCourse"
                                    label="دوره انتخابی"
                                    :items="courseItems"
                                    hide-detailse
                                    dense
                                    variant="outlined">
                            </v-select>
                        </div>
                        <div class="col-md-12">
                            <v-textarea
                                    v-model="model.content"
                                    label="متن تیکت"
                                    hide-detailse
                                    dense
                                    variant="outlined">
                            </v-textarea>
                        </div>
                        <div
                                v-if="!!selectedFile"
                                class="v-col-auto">
                            <v-card min-width="200">
                                <v-card-text>
                                    <div class="d-inline-flex align-center">
                    <span>
                      <strong>
                        نام فایل:
                        
                      </strong>
                      {{ selectedFileName }}
                    </span>
                                        <v-btn
                                                @click="deleteFile"
                                                icon>
                                            <v-icon color="red">
                                                mdi-close
                                            </v-icon>
                                        </v-btn>
                                    </div>
                                </v-card-text>
                            </v-card>
                        </div>
                    </div>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <div class="d-inline-flex">
                    <v-btn
                            @click="selectAttachment"
                            color="primary"
                            outlined>
                        افزودن پیوست
                    </v-btn>
                    <v-btn
                            class="mx-4"
                            @click="sendToServer"
                            color="primary"
                    >
                        ارسال تیکت
                    </v-btn>
                </div>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
import AppBackButton from "@/view/widget/AppBackButton.vue";

export default {
    name: "RegisterNewTicket",
    components: {AppBackButton},
    async created() {
        const [err, data] = await this.to(this.http.get(`/ticket/initialize`));
        if (!err) {
            this.courseItems = data;
        }
    },
    data() {
        return {
            departmentItems: [
                {text: 'پشتیبانی دوره ها', value: 1},
                {text: 'فروش', value: 2},
            ],
            importanceItems: [
                {text: 'پایین', value: 0},
                {text: 'متوسط', value: 1},
                {text: 'بالا', value: 2},
            ],
            courseItems: [],
            selectedFile: null,
            selectedFileName: null,
            model: {
                subject: null,
                selectedCourse: null,
                importance: 0,
                department: 1,
                content: null,
            }
        }
    },
    methods: {
        selectAttachment() {
            this.$refs.filePicker.click();
        },
        deleteFile() {
            this.selectedFile = null;
        },
        async onFileSelected(event) {
            const file = event.target.files[0];
            this.selectedFile = file;
            this.selectedFileName = file.name;
        },
        async sendToServer() {
            const fd = new FormData();
            fd.append('subject', this.model.subject);
            fd.append('content', this.model.content);
            fd.append('department', this.model.department);
            fd.append('courseId', this.model.selectedCourse);
            fd.append('importance', this.model.importance);
            if (!!this.selectedFile) {
                fd.append('attachment', this.selectedFile);
            }

            const [err, data] = await this.to(this.http.post(`/ticket/create-ticket`, fd));
            if (!err) {
                await this.$router.push('/tickets');
            }
        },
    }
}
</script>


<style scoped>
span {
    font-family: "IRAN Sans";
}
</style>