<template>
    <div class="quiz-attempt-single-question quiz-attempt-single-question-2">

        <div class="quiz-question tutor-mt-44 tutor-mr-md-100">
            <div class="quiz-question-title tutor-fs-4 tutor-fw-medium tutor-color-black tutor-mb-20">
                {{ questionIndex + 1 }}. {{ questionTitle }}
            </div>
        </div>


        <!-- Quiz Answer -->
        <div class="quiz-question-ans-choice-area tutor-mt-40 question-type-multiple_choice quiz-answer-required">
            <div id="tutor-quiz-single-multiple-choice" class=" tutor-quiz-wrap">
                <div class="tutor-row">
                    <div
                            v-for="(answerItem, answerIndex) in answerItems"
                            class="tutor-col-6 tutor-col-lg-6 tutor-mb-16 tutor-quiz-answer-single">
                        <label :for="answerIndex" class="tutor-quiz-question-item">
                            <div class="tutor-card tutor-px-16 tutor-py-12">
                                <div class="tutor-d-flex tutor-align-center">
                                    <input class="tutor-form-check-input" :id="answerIndex"
                                           type="checkbox" :value="answerIndex">
                                    <span class="tutor-fs-6 tutor-color-black tutor-ml-8">{{ answerItem.title }}</span>
                                </div>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </div>

        <div class="answer-help-block"></div>
        <div class="tutor-quiz-btn-group tutor-mt-60 tutor-d-flex">
            <button type="button"
                    class="tutor-btn tutor-btn-outline-primary tutor-btn-md tutor-quiz-answer-previous-btn tutor-mr-20">
                <span class="tutor-icon-previous tutor-mr-8"></span>
                بازگشت
            </button>
            <button
                    @click="$emit('nextOrSubmitClick')"
                    class="tutor-btn tutor-btn-primary tutor-btn-md start-quiz-btn tutor-quiz-next-btn-all tutor-quiz-answer-next-btn">
                ارسال و رفتن به بعدی
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "TestDetails",
    emits: ['nextOrSubmitClick'],
    props: {
        questionIndex: Number,
        questionType: Number,
        questionTitle: String,
        answerItems: Array,
    }
}
</script>

<style scoped>

</style>