<template>
    <v-container>
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
                        <div class="v-col-md-12">
                            <attachment-for-upload
                                    v-if="selectedFile"
                                    :file="selectedFile"
                                    @onDeleteFile="deleteFile"
                            />
                        </div>
                    </div>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <div class="d-inline-flex">
                    <v-btn
                            @click="sendToServer"
                            color="primary"
                            variant="flat"
                    >
                        ارسال تیکت
                    </v-btn>
                    <v-btn
                        class="mr-3"
                            @click="selectAttachment"
                            color="primary">
                        افزودن پیوست
                    </v-btn>
                </div>
            </v-card-actions>
        </v-card>
        <hidden-file-picker
                ref="filePicker"
                @onFileSelected="onFileSelected"
        />
    </v-container>
</template>

<script>
import AppBackButton from "@/view/widget/AppBackButton.vue";
import AttachmentForUpload from "@/view/components/Profile/Tickets/Widgets/AttachmentForUpload.vue";
import HiddenFilePicker from "@/view/widget/HiddenFilePicker.vue";

export default {
    name: "RegisterNewTicket",
    components: {HiddenFilePicker, AttachmentForUpload, AppBackButton},
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
            this.$refs.filePicker.openFilePicker();
        },
        deleteFile() {
            this.selectedFile = null;
        },
        async onFileSelected(file) {
            this.selectedFile = file;
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