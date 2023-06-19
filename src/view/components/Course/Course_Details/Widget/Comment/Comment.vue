<template>
    <div class="tutor-single-course-segment tutor-course-reviews-wrap">
        <div class="tutor-course-review-form-wrap">
            <h4 class="tutor-segment-title">یک نظر بنویسید</h4>

            <div class="tm-button-wrapper">
                <a
                    class="tm-button style-flat tm-button-nm btn-write-course-review open-popup-login"
                    @click="showCommentModal()">
                <div class="button-content-wrapper">


                    <span
                            @click="showCommentModal()"
                            class="button-text">یک نظر بنویسید</span>

                </div>
            </a></div>
        </div>
    </div>
</template>

<script>
import CommentModal from "@/view/components/Course/Course_Details/Widget/Comment/CommentModal.vue";

export default {
    name: "Comment",
    components: {CommentModal},
    emits: ['showModalClick'],
    methods: {
        showCommentModal() {
            this.$emit('showModalClick')
        },
    }
}
</script>

<style scoped>

</style>