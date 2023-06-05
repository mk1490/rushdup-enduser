<template>
    <v-dialog
            width="500"
            persistent
            v-model="visible">
        <v-card>
            <v-card-title>
                <div class="d-flex justify-center">
                    یک نظر بنویسید
                </div>
            </v-card-title>
            <v-card-text>
                <v-rating
                    v-model="model.rate"
                    small
                    :length="5">
                </v-rating>
                <div class="tutor-form-group">
                            <textarea
                                v-model="model.comment"
                                placeholder="یک نظر بنویسید">
                            </textarea>
                </div>
            </v-card-text>
            <v-card-actions>
                <div class="d-flex justify-center" style="width: 100%">
                    <div class="tutor-form-group">
                        <div class="button-group">
                            <div class="tm-button-wrapper">
                                <a
                                    class="tm-button style-flat tm-button-nm button-grey"
                                    @click="$emit('update:visible', false)">
                                    <div class="button-content-wrapper">
                                        <span class="button-text">لغو</span>
                                    </div>
                                </a>
                            </div>
                            <div class="tm-button-wrapper">
                                <button @click="submit()"
                                        class="custom_tutor_submit_review_btn tutor-button tutor-success">
                                    ارسال بررسی
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: "CommentModal",
    emits: ['onPostComment'],
    props: {
        visible: Boolean,
        courseId: String,
    },
    data() {
        return {
            model: {
                rate: 0,
                comment: null,
            }
        }
    },
    methods: {
        async submit() {
            const [err, data] = await this.to(this.http.post(`/comment/${this.courseId}`, this.model));
            if (!err) {
                this.$emit('onPostComment', data);
            }
        }
    }
}
</script>

<style scoped>

</style>