<template>
    <div class="tutor-quiz-single-wrap">
        <input type="hidden" name="tutor_quiz_id" id="tutor_quiz_id" value="227">

        <div class="tutor-quiz-header">
            <h2 class="entry-quiz-title">اولین مسابقه</h2>
            <ul class="tutor-quiz-meta">

                <li>
                    <span class="meta-label">سوالات</span>
                    <span class="meta-value">{{ questionsCount }}</span>
                </li>

                <li>
                    <span class="meta-label">زمان</span>
                    <span class="meta-value">{{ testTime }}</span>
                </li>

                <li>
                    <span class="meta-label">اجازه برای تلاش مجدد</span>
                    <span class="meta-value">
                        {{ maximumAttempts }}
                    </span>
                </li>

                <li>
                    <span class="meta-label">تلاش ها</span>
                    <span class="meta-value">{{ userAttempts }}</span>
                </li>

                <li>
                    <span class="meta-label">تلاش های باقیمانده</span>
                    <span class="meta-value">
                        {{ remainingAttempts }}
                    </span>
                </li>

                <li>
                    <span class="meta-label">نمره قبولی</span>
                    <span class="meta-value">{{ minimumPercentGrade }}</span>
                </li>
            </ul>
        </div>
        <div id="tutor-quiz-image-matching-choice" class="tutor-quiz-wrap tutor-quiz-wrap-227">

            <!--            <h4 class="tutor-quiz-attempt-history-title">تلاش های قبلی</h4>-->
            <!--            <div class="tutor-quiz-attempt-history-table-wrap single-quiz-page dashboard-table-wrapper dashboard-table-responsive">-->
            <!--                <div class="dashboard-table-container">-->
            <!--                    <table class="dashboard-table">-->
            <!--                        <thead>-->
            <!--                        <tr>-->
            <!--                            <th class="col-attempt-number">#</th>-->
            <!--                            <th>زمان</th>-->
            <!--                            <th>سوالات</th>-->
            <!--                            <th>مجموع نمرات</th>-->
            <!--                            <th>نمرات کسب شده</th>-->
            <!--                            <th>نمره قبولی</th>-->
            <!--                            <th>نمره</th>-->
            <!--                            <th>نتیجه</th>-->
            <!--                        </tr>-->
            <!--                        </thead>-->
            <!--                        <tbody>-->
            <!--                        <tr>-->
            <!--                            <td class="col-attempt-number">-->
            <!--                                <span class="attempt-number">۱</span>-->
            <!--                            </td>-->
            <!--                            <td title="زمان">-->
            <!--                                <div class="heading col-heading-mobile">زمان</div>-->
            <!--                                ۲۳ مرداد ۱۴۰۲ ۰۰:۳۱-->
            <!--                            </td>-->
            <!--                            <td title="سوالات">-->
            <!--                                <div class="heading col-heading-mobile">سوالات</div>-->
            <!--                                <span class="attempt-questions">۳</span>-->
            <!--                            </td>-->

            <!--                            <td title="مجموع نمرات">-->
            <!--                                <div class="heading col-heading-mobile">مجموع نمرات</div>-->
            <!--                                <span class="attempt-total-marks">۳.۰۰</span>-->
            <!--                            </td>-->

            <!--                            <td title="نمرات کسب شده">-->
            <!--                                <div class="heading col-heading-mobile">نمرات کسب شده</div>-->
            <!--                                <span class="attempt-earned-marks">۰.۰۰(۰%)</span>-->
            <!--                            </td>-->

            <!--                            <td title="نمره قبولی">-->
            <!--                                <div class="heading col-heading-mobile">نمره قبولی</div>-->
            <!--                                <span class="attempt-pass-mark">-->
            <!--					۲,۴۰(۸۰%)					</span>-->
            <!--                            </td>-->

            <!--                            <td>-->
            <!--                                <div class="heading col-heading-mobile">نمره</div>-->
            <!--                                <span class="attempt-grade">-->
            <!--													</span>-->
            <!--                            </td>-->

            <!--                            <td title="نتیجه">-->
            <!--                                <div class="heading col-heading-mobile">نتیجه</div>-->
            <!--                                <span class="attempt-result attempt-result-fail">مردود</span></td>-->

            <!--                        </tr>-->
            <!--                        </tbody>-->
            <!--                    </table>-->
            <!--                </div>-->
            <!--            </div>-->
            <div class="tutor-quiz-btn-grp tutor-mt-32">

                <button
                        @click="$emit('onStartTestClick')"
                        class="tutor-btn tutor-btn-primary tutor-btn-md start-quiz-btn">
                    شروع آزمون
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TestOverview",
    emits: ['onStartTestClick'],
    props: {
        questionsCount: 0,
        testTime: 0,
        remainingAttempts: 0,
        userAttempts: 0,
        maximumAttempts: 0,
    },
    data() {
        return {}
    }
}
</script>

<style scoped>

</style>