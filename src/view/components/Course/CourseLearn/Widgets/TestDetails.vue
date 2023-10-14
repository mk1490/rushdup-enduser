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


                    <!-- if answer type is true or false selection -->
                    <template v-if="questionType == 1">
                        <div class="tutor-col-6 tutor-col-lg-6 tutor-mb-16 tutor-quiz-answer-single">
                            <label for="0" class="tutor-quiz-question-item">
                                <div class="tutor-card tutor-px-16 tutor-py-12">
                                    <div class="tutor-d-flex tutor-align-center">
                                        <input
                                                v-model="answerOrAnswers"
                                                name="correctOrInCorrect"
                                                class="tutor-form-check-input"
                                                id="0"
                                                :value="true"
                                                type="radio">
                                        <span class="tutor-fs-6 tutor-color-black tutor-ml-8">صحیح</span>
                                    </div>
                                </div>
                            </label>
                        </div>

                        <div class="tutor-col-6 tutor-col-lg-6 tutor-mb-16 tutor-quiz-answer-single">
                            <label for="1" class="tutor-quiz-question-item">
                                <div class="tutor-card tutor-px-16 tutor-py-12">
                                    <div class="tutor-d-flex tutor-align-center">
                                        <input
                                                v-model="answerOrAnswers"
                                                name="correctOrInCorrect"
                                                class="tutor-form-check-input"
                                                id="1"
                                                :value="false"
                                                type="radio">
                                        <span class="tutor-fs-6 tutor-color-black tutor-ml-8">غلط</span>
                                    </div>
                                </div>
                            </label>
                        </div>
                    </template>


                    <!-- if answer type single or multi selection -->
                    <div v-if="[2,3].includes(questionType)"
                         v-for="(answerItem, answerIndex) in answerItems"
                         class="tutor-col-6 tutor-col-lg-6 tutor-mb-16 tutor-quiz-answer-single">
                        <label :for="answerIndex" class="tutor-quiz-question-item">
                            <div class="tutor-card tutor-px-16 tutor-py-12">
                                <div class="tutor-d-flex tutor-align-center">
                                    <input
                                            v-model="answerOrAnswers"
                                            class="tutor-form-check-input"
                                            :id="answerIndex"
                                            name="singleOrMultipleInput"
                                            :type="questionType == 3?'checkbox': 'radio'" :value="answerItem.id">
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
            <button
                    @click="$emit('backClick')"
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
    emits: ['backClick', 'nextOrSubmitClick'],
    props: {
        questionIndex: Number,
        questionType: Number,
        questionTitle: String,
        answerItems: Array,
        answeredQuestions: Array,
    },
    data() {
        return {
            answerOrAnswers: null
        }
    },
    watch: {
        'answerOrAnswers': {
            handler() {
                console.log(this.answerOrAnswers)
            }
        },
        'questionIndex': {
            handler(val) {
                const answeredQuestionInCurrentIndex = this.answeredQuestions[val];
                if (answeredQuestionInCurrentIndex) {
                    this.answerOrAnswers = answeredQuestionInCurrentIndex.answerOrAnswers;
                }
            }
        }
    }
}
</script>

<style scoped>

</style>