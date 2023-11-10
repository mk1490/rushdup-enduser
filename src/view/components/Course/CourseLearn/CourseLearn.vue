<template>
    <v-container fluid="true">
        <div class="row">
            <div class="col-md-4">
                <v-card width="100%">
                    <v-tabs
                            v-model="selectedTab"
                            fixed-tabs
                            bg-color="white"
                    >
                        <v-tab>
                            فهرست دوره
                        </v-tab>
                        <v-tab>
                            مرور پرسش و پاسخ
                        </v-tab>
                    </v-tabs>

                    <v-window v-model="selectedTab">
                        <v-window-item>
                            <v-card>
                                <v-card-text>
                                    <v-expansion-panels>
                                        <v-expansion-panel
                                                color="white"
                                                v-for="item in items"
                                                :title="item.title">
                                            <v-list>
                                                <v-list-item
                                                        @click="selectedCourseItemId = courseEpisodeItem.id;"
                                                        :to="getVideoOrTestDetails(courseEpisodeItem)"
                                                        v-for="courseEpisodeItem in item['courseEpisodeItems']">
                                                    <v-list-item-title>
                                                        {{ courseEpisodeItem.title }}
                                                    </v-list-item-title>
                                                </v-list-item>
                                            </v-list>
                                        </v-expansion-panel>

                                    </v-expansion-panels>
                                </v-card-text>
                            </v-card>
                        </v-window-item>
                    </v-window>

                </v-card>
            </div>
            <div class="col-md-8">
                <div class="tutor-course-topic-single-header tutor-single-page-top-bar">
                    <div>
                        <router-link :to="`/cd/${this.$route.params.courseSlug}`">
                            <a
                                    class="tutor-topbar-home-btn">
                                <i class="far fa-home"></i>
                                به خانه دوره بروید
                            </a>
                        </router-link>
                    </div>
                    <div>
				                <span class="lesson-type-icon">
                            <i class="far fa-file-alt"></i>
                         </span>
                        {{ courseItemTitle }}
                    </div>
                    <div
                            v-if="!courseItemIsCompleted"
                            class="tutor-topbar-mark-to-done">
                        <div class="tutor-topbar-complete-btn tutor-mr-20">
                            <button
                                    @click="courseEpisodeItemApproveCompleted(selectedCourseItemId)"
                                    class="tutor-topbar-mark-btn tutor-btn tutor-btn-primary tutor-ws-nowrap">
                                <span class="tutor-icon-circle-mark-line tutor-mr-8"></span>
                                <span>علامت گذاری به عنوان کامل شده</span>
                            </button>
                        </div>
                    </div>
                </div>
                <v-card>

                    <v-card-text>
                        <custom-video-player
                                v-if="video && contentShowingState == 1"
                                :src="video.url"
                        />
                        <test-overview
                                @onStartTestClick="startTestItem()"
                                v-if="contentShowingState == 2"
                                :user-attempts="model.test.userAttempts"
                                :maximum-attempts="model.test.maximumAttemps"
                                :questions-count="model.test.questionCount"
                                :remaining-attempts="model.test.remainingAttempts"
                                :test-time="model.test.testTime"

                        />
                        <test-details
                                ref="testDetails"
                                v-if="contentShowingState == 3 && questionIndex !=  -1"
                                :question-index="questionIndex"
                                :question-title="questionItems[questionIndex].title"
                                :question-type="questionItems[questionIndex].answerType"
                                :answer-items="questionItems[questionIndex].answerItems"
                                :answered-questions="answeredQuestions"
                                @backClick="backQuestion"
                                @nextOrSubmitClick="nextQuestion"
                        />
                    </v-card-text>
                    <v-card-actions>
                        <div
                                v-if="contentShowingState == 3 && questionIndex !=  -1"
                                class="tutor-next-previous-pagination-wrap">
                            <div class="tutor-previous-link-wrap">
                                <a class="tm-button style-flat tm-button-nm button-grey tutor-previous-link tutor-previous-link-3260 icon-left">
                                    <div class="button-content-wrapper">
                                        <span class="button-icon"><i class="far fa-angle-left"></i></span>

                                        <span class="button-text">قبل</span>

                                    </div>
                                </a>

                            </div>
                            <div class="tutor-next-link-wrap">
                                <a class="tm-button style-flat tm-button-nm button-grey tutor-next-link tutor-next-link-3268 icon-right">
                                    <div class="button-content-wrapper">
                                        <span class="button-text">بعد</span>
                                        <span class="button-icon"><i class="far fa-angle-right"></i></span>
                                    </div>
                                </a></div>
                        </div>

                    </v-card-actions>


                </v-card>

            </div>
        </div>
    </v-container>
</template>

<script>
import TestOverview from "@/view/components/Course/CourseLearn/Widgets/TestOverview.vue";
import TestDetails from "@/view/components/Course/CourseLearn/Widgets/TestDetails.vue";
import {ref, onMounted, getCurrentInstance} from 'vue'
import CustomVideoPlayer from "@/view/widget/CustomViews/CustomVideoPlayer.vue";
import {mapGetters} from "vuex";

export default {
    name: "CourseLearn",
    components: {CustomVideoPlayer, TestDetails, TestOverview},
    data() {
        return {
            contentShowingState: 0,
            selectedTab: 0,
            items: [],
            currentVideoConfig: null,
            courseItemTitle: null,
            episodeItemId: null,
            selectedCourseEpisodeItemId: null,
            courseItemIsCompleted: false,
            video: {
                url: null,
            },
            questionItems: [],
            questionIndex: -1,
            answeredQuestions: [],
            model: {
                test: {
                    userAttempts: 0,
                    maximumAttemps: 0,
                    questionCount: 0,
                    remainingAttempts: 0,
                    testTime: 0,
                }
            }
        }
    },
    async created() {
        const courseSlug = this.$route.params.courseSlug;
        const courseItemSlug = this.$route.params.courseItemSlug;
        await this.getCourseItem(courseSlug, courseItemSlug);
    },
    methods: {
        getVideoOrTestDetails(item) {
            return '/course-learn/' + this.$route.params.courseSlug + `/${item.title}/${item.type}`;
        },
        async getCourseItem(courseSlug, courseItemTitleOrId) {
            let requestUrl = `/course/course-learn/${courseSlug}/${courseItemTitleOrId}`;
            const type = parseInt(this.$route.params.itemType)
            const [err, data] = await this.to(this.http.get(requestUrl));
            if (!err) {
                this.courseItemTitle = data.courseItemTitle;
                this.selectedCourseEpisodeItemId = data.courseItemId;
                this.items = data.items;
                this.courseItemIsCompleted = data.courseItemIsCompleted;

                switch (type) {
                    case 1:
                        this.contentShowingState = 1;
                        this.video = data.courseVideo;
                        break;
                    case 2:
                        this.contentShowingState = 2;
                        break;
                }
            }
        },
        async courseEpisodeItemApproveCompleted(selectedCourseItemId) {
            const [err, data] = await this.to(this.http.post(`/course/course-approve-completed/${selectedCourseItemId}`));
            if (!err) {
                this.courseItemIsCompleted = true;
            }
        },
        async startTestItem() {
            if (!this.isLogin) {
                this.$swal.fire({
                    text: 'برای شرکت در آزمون، ورود و احراز هویت الزامی است!'
                })
            }


            const [err, data] = await this.to(this.http.get(`/course/getTestQuestions/${this.selectedCourseEpisodeItemId}`));
            if (!err) {
                this.contentShowingState = 3;
                this.questionItems = data.items;
                this.questionIndex = 0;
            }
        },
        backQuestion() {
            this.questionIndex--;
        },
        async nextQuestion() {
            let answerOrAnswers = this.$refs.testDetails.getAnswerData();
            if (answerOrAnswers == null) {
                this.$swal.fire({
                    title: 'خطا!',
                    text: 'سؤال نمی‌تواند بدون پاسخ باشد!'
                }).then()

                return;
            }


            const answerIndex = this.questionIndex;
            const payload = {
                questionId: this.questionItems[this.questionIndex].id,
                answerOrAnswers: answerOrAnswers,
            };
            if (answerIndex == -1) {
                this.answeredQuestions.push(payload)
            } else {
                this.answeredQuestions.splice(answerIndex, 1, payload);
            }
            if (this.questionIndex != this.questionItems.length - 1) {
                this.questionIndex++;
                this.$refs.testDetails.resetAnswer()
            } else {
                const [err, data] = await this.to(this.http.post(`/test/submit`, {
                    parentTestEpisodeId: this.selectedCourseEpisodeItemId,
                    userSubmitTestDtoItems: this.answeredQuestions,
                }));
                if (!err) {
                    this.$swal.fire({
                        text: 'ارسال آزمون با موفقیت انجام شد!',
                        allowOutsideClick: false,
                    }).then(result => {

                    })
                }
            }
        },

    },
    watch: {
        '$route': {
            async handler(val) {
                await this.getCourseItem(val.params.courseSlug, this.selectedCourseEpisodeItemId)
            }
        }
    },
    computed: {
        ...mapGetters(['isLogin'])
    }
}
</script>

<style scoped>
::v-deep.tutor-lesson-sidebar-wrap {
    position: relative;
    z-index: 3;
}

::v-deep .tutor-lesson-content .tutor-single-entry-content .tutor-single-entry-content-3261 {
    flex-grow: 999;
}

::v-deep.v-expansion-panel::before {
    box-shadow: none !important;
}

.tutor-next-previous-pagination-wrap {
    width: 100% !important;
}

.r1_iframe_embed {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: auto;
    padding-top: 56.25%;
}

.r1_iframe_embed iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
}
</style>