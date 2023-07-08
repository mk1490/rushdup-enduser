<template>
    <v-container fluid="true">
        <div class="d-inline-block">
            <p>
                {{ $t('teacherRequest.description') }}
            </p>
        </div>
        <div class="d-block">
            <v-card
                    flat="true"
                    outlined>
                <v-card-text>
                    <v-container>
                        <div class="row">
                            <div class="v-col-12">
                                <label>
                                    {{ $t('teacherRequest.form.expertise') }}
                                </label>
                                <v-combobox
                                        filled
                                        :items="expertiseItems"
                                        v-model="model.expertise">
                                </v-combobox>
                            </div>
                            <div class="v-col-12">
                                <label>
                                    {{ $t('teacherRequest.form.teachingCourseQuestion') }}
                                </label>
                                <v-textarea
                                        filled
                                        v-model="model.teachingCourseQuestion">
                                </v-textarea>
                            </div>
                            <div class="v-col-8">
                                <label>
                                    {{ $t('teacherRequest.form.description') }}
                                </label>
                                <v-textarea
                                        filled
                                        v-model="model.description">
                                </v-textarea>
                            </div>
                            <div class="v-col">
                                <label>{{ $t('teacherRequest.form.uploadSampleVideo') }}</label>
                                <div class="d-block">
                                    <file-uploader></file-uploader>
                                </div>
                                <div class="d-block">
                                    <v-checkbox
                                            :label="$t('teacherRequest.form.notSampleVideo')"
                                            v-model="model.notSampleVideo"></v-checkbox>
                                </div>
                            </div>
                        </div>

                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer/>
                    <v-btn
                            @click="submit"
                            color="primary">
                        {{ $t('ui.submitRequest') }}
                    </v-btn>
                </v-card-actions>
            </v-card>
        </div>
    </v-container>
</template>

<script>
import FileUploader from "@/view/widget/FileUploader.vue";

export default {
    name: "TeacherRequestForm",
    components: {FileUploader},
    data() {
        return {
            expertiseItems: [],
            model: {
                expertise: null,
                description: null,
                teachingCourseQuestion: null,
                notSampleVideo: false,
            }
        }
    },
    methods: {
        async submit() {
            const [err, data] = await this.to(this.http.post(`/`));
            if (!err) {

            }
        }
    }
}
</script>

<style scoped>
p {
    font-family: "IRAN Sans";
    margin-top: 10px;
}

label {
    margin-bottom: 8px !important;
}
</style>